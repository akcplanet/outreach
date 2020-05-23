package org.outreach.cts.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.outreach.cts.service.VolunteerService;
import org.outreach.cts.utils.Utills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import io.swagger.annotations.Api;

@Controller("volunteercontroller")
@Path("/volunteer")
@Api( value = "/volunteer")
public class VolunteerController extends BaseController {
	
	private static final Log log = LogFactory.getLog(VolunteerController.class);
	
	@Autowired
	private VolunteerService volunteerService;
	
	@GET
	@Path("/search")
	@Produces(MediaType.APPLICATION_JSON)
	public List<EventDetails> searchActivity(@QueryParam("councilName") String councilName,
			@QueryParam("eventType") String eventType, @QueryParam("schoolName") String schoolName,
			@QueryParam("activity") String activity, @QueryParam("poc1") String poc1, @QueryParam("poc2") String poc2,
			@QueryParam("poc3") String poc3, @QueryParam("eventDateFrom") String eventDateFrom,
			@QueryParam("eventDateTo") String eventDateTo) {
		EventSearchDTO eventSearchDTO = new EventSearchDTO();
		eventSearchDTO.setActivity(activity);
		eventSearchDTO.setCouncilName(councilName);
		eventSearchDTO.setEventDateFrom(Utills.stringToDateConv(eventDateFrom));
		eventSearchDTO.setEventDateTo(Utills.stringToDateConv(eventDateTo));
		eventSearchDTO.setEventType(eventType);
		eventSearchDTO.setPoc1(poc1);
		eventSearchDTO.setPoc2(poc2);
		eventSearchDTO.setPoc3(poc3);
		eventSearchDTO.setSchoolName(schoolName);
		return null;
	}
	

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<VolunteerDetails> getall() {
		return volunteerService.getall();
	}

	@GET
	@Path("/byid")
	@Produces(MediaType.APPLICATION_JSON)
	public VolunteerDetails getByIdVolunteer(@QueryParam("id") String id) {
		return volunteerService.getByIdVolunteer(id);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void addVolunteer(VolunteerDetails sd) {
		volunteerService.addVolunteer(sd);
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void updateVolunteer(@QueryParam("id") String id, VolunteerDetails sd) {
		volunteerService.updateVolunteer(id, sd);
	}

	@DELETE
	@Path("/delete")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteVolunteer(@QueryParam("id") String id) {
		volunteerService.deleteVolunteer(id);
	}

}
