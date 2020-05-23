package org.outreach.cts.dao;

import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.commons.lang.StringUtils;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.springframework.stereotype.Repository;

@Repository("eventdetaildao")
public class EventDetailDAO extends BaseDAO {
	
	
	@Transactional
	public void updateEventDetail(String id, EventDetails sd) {
		EventDetails output=get(EventDetails.class ,id);
		output.setActivity(sd.getActivity());
		output.setCouncil(sd.getCouncil());;
		update(output);
	}
	
	@Transactional
	public void deleteEventDetail(String id) {
		EventDetails output=get(EventDetails.class ,id);
		delete(output);
	}
	
	
	@SuppressWarnings("unchecked")
	public List<EventDetails> eventSearch(EventSearchDTO event) {
		List<EventDetails> listofevents= null;	
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
