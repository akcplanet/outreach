package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.Activity;
import org.springframework.stereotype.Repository;

@Repository("activitydao")
public class ActivityDAO extends BaseDAO {
	
	@Transactional
	public void updateActivity(String id, Activity sd) {
		Activity output=get(Activity.class ,id);
		output.setName(sd.getName());
		output.setDescription(sd.getDescription());
		update(output);
	}
	
	@Transactional
	public void deleteActivity(String id) {
		Activity output=get(Activity.class ,id);
		delete(output);
	}

}
