'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createConverter = undefined;

var _classes = require('./classes.js');

/**
 *  Measurement Units Converter module
 * @param  {object} conversion plain object
 * @return {object}            object with method convert
 */
function createConverter(conversion) {
	var convertFun;

	switch (conversion.from) {
		case 'cm':
			switch (conversion.to) {
				case 'm':
					convertFun = new _classes.CmToM().convert;
					break;
				case 'mm':
					convertFun = new _classes.CmToMm().convert;
					break;
				default:
					convertFun = new _classes.AbstractConverter().convert;
					break;
			}
			break;
		case 'mm':
			switch (conversion.to) {
				case 'm':
					convertFun = new _classes.MmToM().convert;
					break;
				case 'cm':
					convertFun = new _classes.MmToCm().convert;
					break;
				default:
					convertFun = new _classes.AbstractConverter().convert;
					break;
			}
			break;
		case 'm':
			switch (conversion.to) {
				case 'mm':
					convertFun = new _classes.MToMm().convert;
					break;
				case 'cm':
					convertFun = new _classes.MToCm().convert;
					break;
				default:
					convertFun = new _classes.AbstractConverter().convert;
					break;
			}
			break;
		default:
			convertFun = new _classes.AbstractConverter().convert;
			break;
	}

	conversion['convert'] = convertFun;
	return conversion;
}

exports.createConverter = createConverter;