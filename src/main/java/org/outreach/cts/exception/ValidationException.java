package org.outreach.cts.exception;

public class ValidationException extends IACAException {
	private static final long serialVersionUID = 1L;

	public ValidationException(ErrorCode errorCode, String message) {
		super(errorCode, message);
	}

	public ValidationException(ErrorCode errorCode, Throwable cause) {
		super(errorCode, cause);
	}

	public ValidationException(ErrorCode errorCode) {
		super(errorCode);
	}
}
