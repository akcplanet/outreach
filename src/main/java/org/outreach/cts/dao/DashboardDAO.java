package org.outreach.cts.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import org.apache.commons.lang.time.DateUtils;
import org.outreach.cts.domain.VolunteerDetails;
import org.outreach.cts.dto.DashoboardDTO;
import org.springframework.stereotype.Repository;

@Repository("dashboarddao")
public class DashboardDAO extends BaseDAO {
	
	
	
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getVolunteerWeeklyStatus() {
		List<VolunteerDetails> listofevents= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-3)) 
		.setParameter("eventDateTo", DateUtils.addDays(new Date(),+4)) ;	
		listofevents = query.getResultList();
		return listofevents;
	}
	
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getVolunteerMonthlyStatus() {
		List<VolunteerDetails> listofevents= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-30)) 
		.setParameter("eventDateTo", new Date()) ;	
		listofevents = query.getResultList();
		return listofevents;
	}
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getCouncilStatus() {
		List<VolunteerDetails> listofcouncil= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo  group by vd.council.name")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-130)) 
		.setParameter("eventDateTo", DateUtils.addDays(new Date(),+130)) ;	
		listofcouncil = query.getResultList();
		return listofcouncil;
	}
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getActivityStatus() {
		List<VolunteerDetails> listofcouncil= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo  group by vd.eventDetails.activity.name")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-130)) 
		.setParameter("eventDateTo", DateUtils.addDays(new Date(),+130)) ;	
		listofcouncil = query.getResultList();
		return listofcouncil;
	}
	
	
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getSchoolStatus() {
		List<VolunteerDetails> listofcouncil= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo  group by vd.eventDetails.schoolDetails.name")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-130)) 
		.setParameter("eventDateTo", DateUtils.addDays(new Date(),+130)) ;	
		listofcouncil = query.getResultList();
		return listofcouncil;
	}
	
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getEventStatus() {
		List<VolunteerDetails> listofcouncil= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo  group by vd.eventDetails.eventType.typeOfEvent")
		.setParameter("eventDateFrom", DateUtils.addDays(new Date(),-130)) 
		.setParameter("eventDateTo", DateUtils.addDays(new Date(),+130)) ;	
		listofcouncil = query.getResultList();
		return listofcouncil;
	}

}
