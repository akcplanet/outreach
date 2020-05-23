package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.SchoolDetails;
import org.springframework.stereotype.Repository;

@Repository("schooldetaildao")
public class SchoolDetailDAO extends BaseDAO {
	
	@Transactional
	public void updateSchool(String id, SchoolDetails sd) {
		SchoolDetails output=get(SchoolDetails.class ,id);
		output.setName(sd.getName());
		output.setLocation(sd.getLocation());
		update(output);
	}
	
	@Transactional
	public void deleteSchool(String id) {
		SchoolDetails output=get(SchoolDetails.class ,id);
		delete(output);
	}

}
