package org.outreach.cts.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.DashoboardDTO;
import org.outreach.cts.service.ActivityService;
import org.outreach.cts.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import io.swagger.annotations.Api;

@Controller("dashboardcontroller")
@Path("/dashboard")
@Api( value = "/dashboard")
public class DashboardController  extends BaseController {
	private static final Log log = LogFactory.getLog(DashboardController.class);
	
	@Autowired
	private DashboardService dashboardService;
	
	
	@GET
	@Path("/weeklyStatus")
	@Produces(MediaType.APPLICATION_JSON)
	public List<VolunteerDetails> getVolunteerWeeklyStatus() {
		return dashboardService.getVolunteerWeeklyStatus();
	}
	
	
	@GET
	@Path("/monthlyStatus")
	public List<VolunteerDetails> getVolunteerMonthlyStatus() {
		return dashboardService.getVolunteerMonthlyStatus();
	}
	
	@GET
	@Path("/councilstatus")
	public List<VolunteerDetails> getCouncilStatus() {
		return dashboardService.getCouncilStatus();
	}

	@GET
	@Path("/activitystatus")
	public List<VolunteerDetails> getActivityStatus() {
		return dashboardService.getActivityStatus();
	}
	
	@GET
	@Path("/schoolstatus")
	public List<VolunteerDetails> getSchoolStatus() {
		return dashboardService.getSchoolStatus();
	}
	
	@GET
	@Path("/eventstatus")
	public List<VolunteerDetails> getEventStatus() {
		return dashboardService.getEventStatus();
	}
}
