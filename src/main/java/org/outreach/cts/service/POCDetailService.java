package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.POCDetailDAO;
import org.outreach.cts.domain.PocDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("pocdetailservice")
public class POCDetailService  extends BaseService {
	
	private static final Log log = LogFactory.getLog(POCDetailService.class);
	@Autowired
	private POCDetailDAO pocDetailDAO;
	
	
	public List<PocDetails> getall() {
		return pocDetailDAO.getAll(PocDetails.class);
	}
	
	public PocDetails getByIdPocDetails(String id) {
		return pocDetailDAO.get(PocDetails.class, id);
	}

	public void addPocDetails(PocDetails sd) {
		pocDetailDAO.save(sd);
	}

	public void updatePocDetails(String id, PocDetails sd) {
		pocDetailDAO.updatePocDetails(id,sd);
	}

	public void deletePocDetails(String id) {
		pocDetailDAO.deletePocDetails(id);
	}
}
