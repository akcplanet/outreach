package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.PocDetails;
import org.springframework.stereotype.Repository;

@Repository("pocdetaildao")
public class POCDetailDAO extends BaseDAO {
	
	@Transactional
	public void updatePocDetails(String id, PocDetails sd) {
		PocDetails output=get(PocDetails.class ,id);
		output.setCtsId(sd.getCtsId());
		output.setName(sd.getName());
		output.setLocation(sd.getLocation());
		update(output);
	}
	
	@Transactional
	public void deletePocDetails(String id) {
		PocDetails output=get(PocDetails.class ,id);
		delete(output);
	}


}
