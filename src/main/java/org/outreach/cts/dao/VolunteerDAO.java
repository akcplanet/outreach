package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.VolunteerDetails;
import org.springframework.stereotype.Repository;

@Repository("volunteerdao")
public class VolunteerDAO extends BaseDAO {
	
	@Transactional
	public void updateVolunteer(String id, VolunteerDetails sd) {
		VolunteerDetails output=get(VolunteerDetails.class ,id);
		output.setCouncil(sd.getCouncil());
		output.setEventDetails(sd.getEventDetails());
		update(output);
	}
	
	@Transactional
	public void deleteVolunteer(String id) {
		VolunteerDetails output=get(VolunteerDetails.class ,id);
		delete(output);
	}

}
