package org.outreach.cts.exception;

public class ControllerException extends IACAException {
	private static final long serialVersionUID = 1L;

	public ControllerException(ErrorCode errorCode, Throwable cause) {
		super(errorCode, cause);
	}

	public ControllerException(ErrorCode errorCode) {
		super(errorCode);
	}
}
