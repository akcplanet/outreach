package org.outreach.cts.service;

import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import org.apache.commons.lang.time.DateUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.DashboardDAO;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.DashoboardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("dashboardservice")
public class DashboardService extends BaseService {
	private static final Log log = LogFactory.getLog(DashboardService.class);
	@Autowired
	private DashboardDAO dashboardDAO;

	public List<VolunteerDetails> getVolunteerWeeklyStatus() {
		return dashboardDAO.getVolunteerWeeklyStatus();
	}
	
	public List<VolunteerDetails> getVolunteerMonthlyStatus() {
		return dashboardDAO.getVolunteerMonthlyStatus();
	}
	
	public List<VolunteerDetails> getCouncilStatus() {

		return dashboardDAO.getCouncilStatus();
	}
	

	public List<VolunteerDetails> getActivityStatus() {
		return dashboardDAO.getActivityStatus();
	}
	

	public List<VolunteerDetails> getSchoolStatus() {
		return dashboardDAO.getSchoolStatus();
	}
	
	public List<VolunteerDetails> getEventStatus() {
		return dashboardDAO.getEventStatus();
	}
}
