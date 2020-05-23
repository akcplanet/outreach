package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.EventsType;
import org.springframework.stereotype.Repository;

@Repository("eventtypedao")
public class EventTypeDAO extends BaseDAO {
	
	@Transactional
	public void updateEventType(String id, EventsType sd) {
		EventsType output=get(EventsType.class ,id);
		output.setTypeOfEvent(sd.getTypeOfEvent());
		output.setDescription(sd.getDescription());
		update(output);
	}
	
	@Transactional
	public void deleteEventType(String id) {
		EventsType output=get(EventsType.class ,id);
		delete(output);
	}

}
