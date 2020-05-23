package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.SchoolDetailDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.outreach.cts.domain.SchoolDetails;

@Component("schooldetailservice")
public class SchoolDetailService extends BaseService {

	private static final Log log = LogFactory.getLog(SchoolDetailService.class);
	@Autowired
	private SchoolDetailDAO schoolDetailDAO;

	public List<SchoolDetails> getall() {
		return schoolDetailDAO.getAll(SchoolDetails.class);
	}
	
	public SchoolDetails getByIdSchool(String id) {
		return schoolDetailDAO.get(SchoolDetails.class, id);
	}

	public void addSchool(SchoolDetails sd) {
		schoolDetailDAO.save(sd);
	}

	public void updateSchool(String id, SchoolDetails sd) {
		schoolDetailDAO.updateSchool(id,sd);
	}

	public void deleteSchool(String id) {
		schoolDetailDAO.deleteSchool(id);
	}
}
