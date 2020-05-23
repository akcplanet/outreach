package org.outreach.cts.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE, fieldVisibility = JsonAutoDetect.Visibility.ANY)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class ErrorDTO implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	
	
	@JsonProperty("ErrCod")
	private String errorcode;
	
	
	@JsonProperty("HttpErrCode")
	private int httpErroCode;
	
	@JsonProperty("ErrMssg")
	private String errorMessage;

	public ErrorDTO() {
	}

	public ErrorDTO(String errorcode, int httpErroCode, String errorMessage) {
		this.errorcode = errorcode;
		this.httpErroCode = httpErroCode;
		this.errorMessage = errorMessage;
	}

	public String getErrorcode() {
		return this.errorcode;
	}

	public void setErrorcode(String errorcode) {
		this.errorcode = errorcode;
	}

	public int getHttpErroCode() {
		return this.httpErroCode;
	}

	public void setHttpErroCode(int httpErroCode) {
		this.httpErroCode = httpErroCode;
	}

	public String getErrorMessage() {
		return this.errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
}
