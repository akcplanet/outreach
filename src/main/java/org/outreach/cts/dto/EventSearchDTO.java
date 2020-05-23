/**
 * 
 */
package org.outreach.cts.dto;

import java.util.Date;

/**
 * @author AMIT
 *
 */
public class EventSearchDTO {

	public String councilName;
	public String schoolName;
	public String activity;
	public String eventType;
	public String poc1;
	public String poc2;
	public String poc3;
	public Date eventDateFrom;
	public Date eventDateTo;
	
	
	public String getCouncilName() {
		return councilName;
	}
	public void setCouncilName(String councilName) {
		this.councilName = councilName;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public String getEventType() {
		return eventType;
	}
	public void setEventType(String eventType) {
		this.eventType = eventType;
	}
	public String getPoc1() {
		return poc1;
	}
	public void setPoc1(String poc1) {
		this.poc1 = poc1;
	}
	public String getPoc2() {
		return poc2;
	}
	public void setPoc2(String poc2) {
		this.poc2 = poc2;
	}
	public String getPoc3() {
		return poc3;
	}
	public void setPoc3(String poc3) {
		this.poc3 = poc3;
	}
	public Date getEventDateFrom() {
		return eventDateFrom;
	}
	public void setEventDateFrom(Date eventDateFrom) {
		this.eventDateFrom = eventDateFrom;
	}
	public Date getEventDateTo() {
		return eventDateTo;
	}
	public void setEventDateTo(Date eventDateTo) {
		this.eventDateTo = eventDateTo;
	}

	
	
	
	

}
