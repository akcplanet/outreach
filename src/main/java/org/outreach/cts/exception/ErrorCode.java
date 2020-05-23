package org.outreach.cts.exception;

import org.springframework.http.HttpStatus;

public enum ErrorCode {
	SM100("SM100", "ApplcationError", HttpStatus.INTERNAL_SERVER_ERROR), 
	SM101("SM101", "ApplcationError",HttpStatus.INTERNAL_SERVER_ERROR), 
	SM102("SM102", "ApplcationError", HttpStatus.INTERNAL_SERVER_ERROR);

	private String error;
	private String strErrorCode;
	private HttpStatus errorCode;

	private ErrorCode(String error, String strErrorCode, HttpStatus errorCode) {
		this.error = error;
		this.strErrorCode = strErrorCode;
		this.errorCode = errorCode;
	}

	public String getError() {
		return this.error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getStrErrorCode() {
		return this.strErrorCode;
	}

	public void setStrErrorCode(String strErrorCode) {
		this.strErrorCode = strErrorCode;
	}

	public HttpStatus getErrorCode() {
		return this.errorCode;
	}

	public void setErrorCode(HttpStatus errorCode) {
		this.errorCode = errorCode;
	}

	public int getIntErrorCode() {
		return this.errorCode.value();
	}
}
