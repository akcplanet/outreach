package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.EventTypeDAO;
import org.outreach.cts.domain.EventsType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("eventtypeservice")
public class EventTypeService  extends BaseService {
	
	private static final Log log = LogFactory.getLog(EventTypeService.class);
	@Autowired
	private EventTypeDAO eventTypeDAO;
	
	
	public List<EventsType> getall() {
		return eventTypeDAO.getAll(EventsType.class);
	}
	
	public EventsType getByIdEventType(String id) {
		return eventTypeDAO.get(EventsType.class, id);
	}

	public void addEventType(EventsType sd) {
		eventTypeDAO.save(sd);
	}

	public void updateEventType(String id, EventsType sd) {
		eventTypeDAO.updateEventType(id,sd);
	}

	public void deleteEventType(String id) {
		eventTypeDAO.deleteEventType(id);
	}
}
