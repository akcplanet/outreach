var outreachconstant = angular.module('outreachconstant', []);

outreachconstant.constant('outrConstant', {
	'VALUE_YES' : 'YES',
	'VALUE_NO' : 'NO'
});

var OutreachDTO = function() {
	this.id = null, this.shoolName = null
}

outreachconstant.value("OutreachDTO", OutreachDTO)