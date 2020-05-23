package org.outreach.cts.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.ReportView;
import org.outreach.cts.service.ReportService;
import org.outreach.cts.utils.Utills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import io.swagger.annotations.Api;

@Controller("reportcontroller")
@Path("/report")
@Api(value = "/report")
public class ReportController extends BaseController {

	private static final Log log = LogFactory.getLog(ReportController.class);

	@Autowired
	private ReportService reportService;

	@POST
	@Path("/viewXLSReport")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	public Response createReport(ReportView reportView) {
		try {
			Date dFrom = Utills.stringToDateConv(reportView.getEventDateFrom());
			Date dTo = Utills.stringToDateConv(reportView.getEventDateTo());
			XSSFWorkbook workbook = new XSSFWorkbook();
			XSSFSheet detSheet = workbook.createSheet("Details");
			XSSFSheet volSheet = workbook.createSheet("Volunteer");
			
			XSSFCellStyle style = workbook.createCellStyle();
			style.setBorderBottom((short) 1);
			
			XSSFFont font = workbook.createFont();
			font.setFontHeightInPoints((short) 9);
			font.setBoldweight(XSSFFont.BOLDWEIGHT_BOLD);
			style.setFont(font);
			
			Row detSheetheader=detSheet.createRow(0);
			detSheetheader.createCell(0).setCellValue("Activity");
			detSheetheader.createCell(1).setCellValue("School");
			detSheetheader.createCell(2).setCellValue("POC");
			detSheetheader.createCell(3).setCellValue("Date of Activity");
			detSheetheader.createCell(4).setCellValue("Description");
			detSheetheader.createCell(5).setCellValue("Total Hrs");
			detSheetheader.createCell(6).setCellValue("No of lives impacted");
			detSheetheader.createCell(7).setCellValue("Type of Activity");
			
			for(int j = 0; j<=7; j++)
				detSheetheader.getCell(j).setCellStyle(style);
	
			Row detvolSheet=volSheet.createRow(0);
			detvolSheet.createCell(0).setCellValue("Volunteer ID");
			detvolSheet.createCell(1).setCellValue("Volunteer Name");
			detvolSheet.createCell(2).setCellValue("Council");
			detvolSheet.createCell(3).setCellValue("Description");
			detvolSheet.createCell(4).setCellValue("Vol Hrs");
			detvolSheet.createCell(5).setCellValue("Date of Activity");
			detvolSheet.createCell(6).setCellValue("Activity Deails");
			
			for(int j = 0; j<=6; j++)
				detvolSheet.getCell(j).setCellStyle(style);

			List<VolunteerDetails> volListData = reportService.getVolunteerDetail(dFrom, dTo);

			int rownum = 1;
			for (VolunteerDetails volDet : volListData) {
				Row row1 = volSheet.createRow(rownum++);
				int cellnum = 0;
				for (Object obj : getVolunteerDetails(volDet)) {
					Cell cell = row1.createCell(cellnum++);
					if (obj instanceof String) {
						cell.setCellValue((String) obj);
					}
					if (obj instanceof Integer) {
						cell.setCellValue((Integer) obj);
					}
					if (obj instanceof Date) {
						SimpleDateFormat dateformat = new SimpleDateFormat("MM/dd/yyyy");
						String cellvalue = dateformat.format(obj);
						cell.setCellValue((String) cellvalue);
					}
					if (obj instanceof BigDecimal) {
						double d = ((BigDecimal) obj).doubleValue();
						cell.setCellValue((Double) d);
					}
				}
			}			   
			   
			      List<EventDetails> eventListDat=reportService.getEventDetail(dFrom,dTo) ;
					int rownumv = 1;
					for (EventDetails evDet : eventListDat) {
						Row row1 = detSheet.createRow(rownumv++);
						int cellnum = 0;
						for (Object obj : getEventDetails(evDet)) {
							Cell cell = row1.createCell(cellnum++);
							if (obj instanceof String) {
								cell.setCellValue((String) obj);
							}
							if (obj instanceof Integer) {
								cell.setCellValue((Integer) obj);
							}
							if (obj instanceof Date) {
								SimpleDateFormat dateformat = new SimpleDateFormat("MM/dd/yyyy");
								String cellvalue = dateformat.format(obj);
								cell.setCellValue((String) cellvalue);
							}
							if (obj instanceof BigDecimal) {
								double d = ((BigDecimal) obj).doubleValue();
								cell.setCellValue((Double) d);
							}
						}
					}
			File file = new File("Outreach report File");
			FileOutputStream fos = new FileOutputStream(file);
			workbook.write(fos);
			fos.close();
			return Response.ok((Object) file).build();
		} catch (Exception e) {
			return Response.serverError().entity(e.getMessage()).build();
		}

	}
	private List<Object> getVolunteerDetails(VolunteerDetails vol){
		List<Object>  objArr= new ArrayList<Object>();
		objArr.add(vol.getVolunteerId());
		objArr.add(vol.getVolunteerName());
		objArr.add(vol.getCouncil().getName());
		objArr.add(vol.getVolunteerDesc());
		objArr.add(vol.getVolHoursSpent());
		objArr.add(vol.getEventDetails().getEventDate());
		objArr.add(vol.getEventDetails().getEventDesc());
		return objArr;
	}
	
private List<Object> getEventDetails(EventDetails event){
		
	List<Object>  objArr= new ArrayList<Object>();
	objArr.add(event.getActivity().getName());
	objArr.add(event.getSchoolDetails().getName());
	objArr.add(event.getPocDetailsByPoc1Id().getName());
	objArr.add(event.getEventDate());
	objArr.add(event.getEventDesc());
	objArr.add(event.getTotalHrs());
	objArr.add(event.getNoOfLivesImpct());
	objArr.add(event.getEventType().getTypeOfEvent());
	return objArr;
	}
	
	

	@GET
	@Path("/{fileName}/pdf")
	@Produces("application/pdf")
	public Response getFileInPDFFormat(@PathParam("fileName") String fileName) {

		File file = new File("c:/demoPDFFile.pdf");

		ResponseBuilder response = Response.ok((Object) file);
		response.header("Content-Disposition", fileName = "howtodoinjava.pdf");
		return response.build();
	}

	@POST
	@Path("/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadXLSReport(MultipartFormDataInput input) throws Exception {
	        String fileName = "";
	        Map<String, List<InputPart>> uploadForm = input.getFormDataMap();
	        List<InputPart> inputParts = uploadForm.get("uploadedFile");
	        List<VolunteerDetails> voldetails= new ArrayList<VolunteerDetails>();

	        for (InputPart inputPart : inputParts) {
	            MultivaluedMap<String, String> header = inputPart.getHeaders();
	            fileName = getFileName(header);
	            try {
	                XSSFWorkbook workbook;
	                InputStream inputStream = inputPart.getBody(InputStream.class, null);
	                    workbook = new XSSFWorkbook(inputStream);
	                    XSSFSheet sheet = workbook.getSheetAt(0);
	                    for(int i=1; i<=sheet.getLastRowNum(); i++){
	                    	 Row row = sheet.getRow(i);
	                    	 VolunteerDetails voldDetails=new  VolunteerDetails();
	                    	 if(row != null){
	                    		 voldDetails.setVolunteerId(new BigDecimal(row.getCell(0).getNumericCellValue()).toString());
	                    		 voldDetails.setVolunteerName(row.getCell(1).getStringCellValue());
	                    		 voldDetails.setVolunteerDesc(row.getCell(2).getStringCellValue());
	                    		 voldDetails.setVolHoursSpent(new BigDecimal(row.getCell(3).getNumericCellValue()));
	                    		 EventDetails eventDetails= new EventDetails();
	                    		 eventDetails.setPrimaryKey("4028b88158c50c1d0158c50c7dbd0000");
	                    		 /*eventDetails.setPrimaryKey(new BigDecimal(row.getCell(4).getNumericCellValue()).toString());*/
	                    		 voldDetails.setEventDetails(eventDetails);
	                    	 }
	                    	 voldetails.add(voldDetails);
	                    }
	                    reportService.uploadVolunteerDetails(voldetails);

	            } catch (IOException ex) {
	                throw new RuntimeException(ex);
	            }

	        }

	        return Response.status(200)
	                .entity("uploadFile is called, Uploaded file name : " + fileName).build();

	    }

	    /**
	     * header sample
	     * {
	     * Content-Type=[image/png],
	     * Content-Disposition=[form-data; name="file"; filename="filename.extension"]
	     * }
	     * */
	    //get uploaded filename, is there a easy way in RESTEasy?
	    private String getFileName(MultivaluedMap<String, String> header) {

	        String[] contentDisposition = header.getFirst("Content-Disposition").split(";");

	        for (String filename : contentDisposition) {
	            if ((filename.trim().startsWith("filename"))) {

	                String[] name = filename.split("=");

	                String finalFileName = name[1].trim().replaceAll("\"", "");
	                return finalFileName;
	            }
	        }
	        return "unknown";
	    }
	    
	    
	    
	    
	@POST
	@Path("/uploadpdf")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response uploadPDFReport(@QueryParam("id") String id, MultipartFormDataInput input) throws Exception {
		try {
			Map<String, List<InputPart>> map = input.getFormDataMap();
			List<InputPart> lstInputPart = map.get("uploadedFile");
			InputPart inputPart = lstInputPart.get(0);
			InputStream inputStream = inputPart.getBody(InputStream.class, null);
			XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
			XSSFSheet sheet = workbook.getSheetAt(0);
			reportService.uploadFile(sheet);
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {

		}
		return Response.status(200).entity("upload file").build();

	}

}
