package org.outreach.cts.exception;

import org.apache.commons.lang3.StringUtils;

public class IACAException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private ErrorCode errorCode;

	public IACAException(ErrorCode errorCode) {
		super(errorCode.getError());
		this.errorCode = errorCode;
	}

	public IACAException(ErrorCode errorCode, Throwable cause) {
		super(errorCode.getError(), cause);
		this.errorCode = errorCode;
	}

	public ErrorCode getErrorCode() {
		return this.errorCode;
	}

	public void setErrorCode(ErrorCode errorCode) {
		this.errorCode = errorCode;
	}

	public IACAException(ErrorCode errorCode, String message) {
		super(StringUtils.isNotEmpty(message) ? errorCode.getError() + " :" + message : errorCode.getError());
		this.errorCode = errorCode;
	}
}
