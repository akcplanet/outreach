package org.outreach.cts.controller;

import javax.ws.rs.Path;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.outreach.cts.service.ActivityService;
import org.outreach.cts.service.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import io.swagger.annotations.Api;

@Controller("errorcontroller")
@Path("/error")
@Api( value = "/error")
public class ErrorController  extends BaseController {
	private static final Log log = LogFactory.getLog(ErrorController.class);
	@Autowired
	private ErrorService errorService;

}
