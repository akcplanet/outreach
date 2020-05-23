package org.outreach.cts.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.dao.AnalysisDAO;
import org.outreach.cts.domain.EventDetails;
import org.outreach.cts.dto.EventSearchDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("analysisservice")
public class AnalysisService extends BaseService{
	
	private static final Log log = LogFactory.getLog(AnalysisService.class);
	@Autowired
	private AnalysisDAO analysisDAO;
	
	
	public List<EventDetails> eventAnalysis(EventSearchDTO event) {
		return analysisDAO.eventAnalysis(event);
	}
}
