package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.CouncilDAO;
import org.outreach.cts.domain.Council;
import org.outreach.cts.domain.SchoolDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("councilservice")
public class CouncilService extends BaseService{
	
	private static final Log log = LogFactory.getLog(CouncilService.class);
	@Autowired
	private CouncilDAO councilDAO;
	
	
	public List<Council> getall() {
		return councilDAO.getAll(Council.class);
	}
	
	public Council getByIdCouncil(String id) {
		return councilDAO.get(Council.class, id);
	}

	public void addCouncil(Council sd) {
		councilDAO.save(sd);
	}

	public void updateCouncil(String id, Council sd) {
		councilDAO.updateCouncil(id,sd);
	}

	public void deleteCouncil(String id) {
		councilDAO.deleteCouncil(id);
	}
}
