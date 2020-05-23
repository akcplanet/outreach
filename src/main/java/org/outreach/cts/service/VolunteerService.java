package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.VolunteerDAO;
import org.outreach.cts.domain.VolunteerDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("volunteerservice")
public class VolunteerService  extends BaseService {
	
	private static final Log log = LogFactory.getLog(VolunteerService.class);
	@Autowired
	private VolunteerDAO volunteerDAO;
	

	public List<VolunteerDetails> getall() {
		return volunteerDAO.getAll(VolunteerDetails.class);
	}
	
	public VolunteerDetails getByIdVolunteer(String id) {
		return volunteerDAO.get(VolunteerDetails.class, id);
	}

	public void addVolunteer(VolunteerDetails sd) {
		volunteerDAO.save(sd);
	}

	public void updateVolunteer(String id, VolunteerDetails sd) {
		volunteerDAO.updateVolunteer(id,sd);
	}

	public void deleteVolunteer(String id) {
		volunteerDAO.deleteVolunteer(id);
	}
}
