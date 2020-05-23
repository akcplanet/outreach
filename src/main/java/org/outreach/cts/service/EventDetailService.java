package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.EventDetailDAO;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("eventdetailservice")
public class EventDetailService extends BaseService {

	private static final Log log = LogFactory.getLog(EventDetailService.class);
	@Autowired
	private EventDetailDAO eventDetailDAO;

	public List<EventDetails> getall() {
		return eventDetailDAO.getAll(EventDetails.class);
	}
	
	public List<EventDetails> eventSearch(EventSearchDTO event) {
		return eventDetailDAO.eventSearch(event);
	}
	
	
	public EventDetails getByIdEventDetails(String id) {
		return eventDetailDAO.get(EventDetails.class, id);
	}

	public void addEventDetails(EventDetails sd) {
		sd.setCreatedBy("Admin");
		eventDetailDAO.save(sd);
	}

	public void updateEventDetails(String id, EventDetails sd) {
		eventDetailDAO.updateEventDetail(id,sd);
	}

	public void deleteEventDetails(String id) {
		eventDetailDAO.deleteEventDetail(id);
	}
	
	
}
