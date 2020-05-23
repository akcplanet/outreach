package org.outreach.cts.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.outreach.cts.domain.Council;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE, fieldVisibility = JsonAutoDetect.Visibility.ANY)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class DashoboardDTO implements Serializable  {
	
	private static final long serialVersionUID = 1L;
	@Id
	private Council council;
	private Long count;
	
	

	@ManyToOne(optional = false)
	@JoinColumn(name = "council_id")
	@JsonManagedReference
	public Council getCouncil() {
		return this.council;
	}

	public void setCouncil(Council council) {
		this.council = council;
	}
	
	@Column(name = "count")
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}
	
	
	

}
