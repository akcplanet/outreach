package org.outreach.cts.dao;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.domain.VolunteerDetails;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository("reportdao")
public class ReportDAO extends BaseDAO {
	
	
	@SuppressWarnings("unchecked")
	public List<VolunteerDetails> getVolunteerDetail(Date dFrom,  Date dTo) {
		List<VolunteerDetails> listofevents= null;
		Query query = getEntityManager().createQuery("Select vd from VolunteerDetails vd where "
				+ " vd.eventDetails.eventDate >=  :eventDateFrom  and vd.eventDetails.eventDate <=  :eventDateTo")
		.setParameter("eventDateFrom", (dFrom !=null) ? dFrom : null) 
		.setParameter("eventDateTo", (dTo !=null) ? dTo : null) ;		
		listofevents = query.getResultList();
		return listofevents;
	}

	
	@SuppressWarnings("unchecked")
	public List<EventDetails> getEventDetail(Date dFrom,  Date dTo) {
		List<EventDetails> listofevents= null;
		Query query = getEntityManager().createQuery("Select ed from EventDetails ed where "
				+ " ed.eventDate >=  :eventDateFrom  and ed.eventDate <=  :eventDateTo")
				.setParameter("eventDateFrom", (dFrom !=null) ? dFrom : null) 
				.setParameter("eventDateTo", (dTo !=null) ? dTo : null) ;	
		listofevents = query.getResultList();
		return listofevents;
	}
	
	@Transactional("outreachTxManager")
	public void uploadVolunteerDetails(List<VolunteerDetails> voldetails){
		for(VolunteerDetails volDetials : voldetails){
			EventDetails  output= get(EventDetails.class, volDetials.getEventDetails().getPrimaryKey());
			volDetials.setEventDetails(output);
			volDetials.setCouncil(output.getCouncil());
			save(volDetials);
			BigDecimal b = new BigDecimal(output.getNoOfLivesImpct());
			b.add(volDetials.getVolHoursSpent());
			output.setTotalHrs(b.toString());
			update(output);
		}
		
	}


}
