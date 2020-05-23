package org.outreach.cts.exception;

public class BusinessException extends IACAException {
	private static final long serialVersionUID = 1L;

	public BusinessException(ErrorCode errorCode, Throwable cause) {
		super(errorCode, cause);
	}

	public BusinessException(ErrorCode errorCode) {
		super(errorCode);
	}
}
