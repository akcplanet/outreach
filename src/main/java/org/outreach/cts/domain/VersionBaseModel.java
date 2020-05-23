package org.outreach.cts.domain;

import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class VersionBaseModel<T> extends BaseModel<T> {
	
	@Version
	protected Integer version = Integer.valueOf(0);

	@JsonIgnore
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}
}
