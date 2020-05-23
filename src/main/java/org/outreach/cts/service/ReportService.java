package org.outreach.cts.service;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.outreach.cts.dao.ReportDAO;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.ReportDTO;
import org.outreach.cts.dto.ReportView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("reportservice")
public class ReportService  extends BaseService {
	
	private static final Log log = LogFactory.getLog(ReportService.class);
	@Autowired
	private ReportDAO reportDAO;
	
	
	public List<VolunteerDetails> getVolunteerDetail(Date dFrom, Date dTo) {
		return reportDAO.getVolunteerDetail(dFrom,dTo);
	}
	
	public List<EventDetails> getEventDetail(Date dFrom,  Date dTo) {
		return reportDAO.getEventDetail(dFrom,dTo);
	}
	
	public void uploadVolunteerDetails(List<VolunteerDetails> voldetails){
		reportDAO.uploadVolunteerDetails(voldetails);
	}
	
	
	public File createReport(){
		File file = new File("Excel.xlsx"); 		
		HSSFWorkbook hwb = new HSSFWorkbook();	
		try{	     
	        HSSFSheet sheet =  hwb.createSheet("new sheet");
	        HSSFRow rowhead=   sheet.createRow((short)0);
	        rowhead.createCell((int) 0).setCellValue("ID");
	        rowhead.createCell((int) 1).setCellValue("Name");
	        rowhead.createCell((int) 2).setCellValue("Age");

	        for(ReportDTO alert : getReportData()){
	            HSSFRow row=   sheet.createRow((short)1);
	            row.createCell((int) 0).setCellValue(alert.getActivity());
	            row.createCell((int) 1).setCellValue(alert.getCouncil());
	            row.createCell((int) 2).setCellValue(alert.getImpacted());
	        }
	        FileOutputStream fos = new FileOutputStream(file);
	        hwb.write(fos);
	    }catch(Exception e){

	    }

		return file;
	}
	
	
	private List<ReportDTO> getReportData(){
		List<ReportDTO> output= new ArrayList<ReportDTO>();
		List<EventDetails>	 out=reportDAO.getAll(EventDetails.class);
		for(EventDetails  event : out){
			ReportDTO report= new ReportDTO();
			report.setActivity(event.getActivity().getName());
			report.setCouncil(event.getCouncil().getName());
			report.setHours(event.getTotalHrs());
			report.setImpacted(event.getNoOfLivesImpct());
			output.add(report);
			reportDAO.get(EventDetails.class, event.getPrimaryKey());
		}
		
		return output;
	}
	
	
	public void uploadFile(XSSFSheet sheet){
		
	}
	
}
