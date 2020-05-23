package org.outreach.cts.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.outreach.cts.service.AnalysisService;
import org.outreach.cts.utils.Utills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import io.swagger.annotations.Api;

@Controller("analysiscontroller")
@Path("/analysis")
@Api( value = "/analysis")
public class AnalysisController extends BaseController {
	
	private static final Log log = LogFactory.getLog(AnalysisController.class);
	@Autowired
	private AnalysisService analysisService;
	
	
	@GET
	@Path("/search")
	@Produces(MediaType.APPLICATION_JSON)
	public List<EventDetails> eventAnalysis(EventSearchDTO eventDateTo) {
		EventSearchDTO eventSearchDTO = new EventSearchDTO();
		return analysisService.eventAnalysis(eventSearchDTO);
	}
}
