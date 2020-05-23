package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.ActivityDAO;
import org.outreach.cts.domain.Activity;
import org.outreach.cts.domain.SchoolDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("activityservice")
public class ActivityService extends BaseService {
	
	private static final Log log = LogFactory.getLog(ActivityService.class);
	@Autowired
	private ActivityDAO activityDAO;
	
	public List<Activity> getall() {
		return activityDAO.getAll(Activity.class);
	}
	
	public Activity getByIdActivity(String id) {
		return activityDAO.get(Activity.class, id);
	}

	public void addActivity(Activity sd) {
		activityDAO.save(sd);
	}

	public void updateActivity(String id, Activity sd) {
		activityDAO.updateActivity(id,sd);
	}

	public void deleteActivity(String id) {
		activityDAO.deleteActivity(id);
	}
}
