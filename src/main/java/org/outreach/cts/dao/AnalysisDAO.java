package org.outreach.cts.dao;

import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.commons.lang.StringUtils;
import org.outreach.cts.domain.Activity;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.springframework.stereotype.Repository;

@Repository("analysisdao")
public class AnalysisDAO extends BaseDAO {
	

	@SuppressWarnings("unchecked")
	public List<EventDetails> eventAnalysis(EventSearchDTO event) {
		List<EventDetails> listofevents= null;
		/*Query query = getEntityManager().createQuery("Select ed from EventDetails ed where ed.activity.primaryKey = :activtyName and "
				+ " ed.council.primaryKey = :councilName and ed.eventType.primaryKey = :eventType and"
				+ " ed.pocDetailsByPoc1Id.primaryKey = :poc1 and ed.pocDetailsByPoc2Id.primaryKey = :poc2 and"
				+ " ed.pocDetailsByPoc3Id.primaryKey = :poc3 and ed.schoolDetails.primaryKey = :schoolName and"
				+ " ed.eventDate <=  :eventDateFrom  and ed.eventDate >=  :eventDateTo")*/
				
		Query query = getEntityManager().createNamedQuery("EventSearch.GetEvent", EventDetails.class)
		.setParameter("activtyName", StringUtils.isNotBlank(event.getActivity())  ? event.getActivity() : null)
		.setParameter("councilName", StringUtils.isNotBlank(event.getCouncilName()) ? event.getCouncilName() : null) 
		.setParameter("eventType", StringUtils.isNotBlank(event.getEventType()) ? event.getEventType() : null) 
		.setParameter("poc1", StringUtils.isNotBlank(event.getPoc1()) ? event.getPoc1() : null) 
		.setParameter("poc2", StringUtils.isNotBlank(event.getPoc2()) ? event.getPoc2() : null) 
		.setParameter("poc3", StringUtils.isNotBlank(event.getPoc3()) ? event.getPoc3() : null) 
		.setParameter("schoolName", StringUtils.isNotBlank(event.getSchoolName()) ? event.getSchoolName() : null) 
		.setParameter("eventDateFrom", (event.getEventDateTo() !=null) ? event.getEventDateTo() : null) 
		.setParameter("eventDateTo", (event.getEventDateFrom() !=null) ? event.getEventDateFrom() : null) ;		
		listofevents = query.getResultList();
		return listofevents;
	}


}
