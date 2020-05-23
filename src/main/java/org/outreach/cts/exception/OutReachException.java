package org.outreach.cts.exception;

public class OutReachException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private final ErrorCode errorCode;

	public OutReachException(ErrorCode errorCode) {
		super(errorCode.getError());
		this.errorCode = errorCode;
	}

	public OutReachException(ErrorCode errorCode, Throwable cause) {
		super(errorCode.getError(), cause);
		this.errorCode = errorCode;
	}

	public ErrorCode getErrorCode() {
		return this.errorCode;
	}
}
