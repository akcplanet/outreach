package org.outreach.cts.dao;

import javax.transaction.Transactional;

import org.outreach.cts.domain.Council;
import org.springframework.stereotype.Repository;

@Repository("councildao")
public class CouncilDAO extends BaseDAO {
	
	@Transactional
	public void updateCouncil(String id, Council sd) {
		Council output=get(Council.class ,id);
		output.setName(sd.getName());
		output.setDescription(sd.getDescription());
		update(output);
	}
	
	@Transactional
	public void deleteCouncil(String id) {
		Council output=get(Council.class ,id);
		delete(output);
	}

}
