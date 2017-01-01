import {AbstractConverter, CmToMm, CmToM, MmToCm, MmToM, MToCm, MToMm} from './classes.js';

/**
 *  Measurement Units Converter module
 * @param  {object} conversion plain object
 * @return {object}            object with method convert
 */
function createConverter(conversion) {
	var convertFun;

	switch(conversion.from){
		case 'cm':
			switch(conversion.to){
				case 'm':
					convertFun = (new CmToM()).convert;
					break;
				case 'mm':
					convertFun = (new CmToMm()).convert;
					break;
				default:
					convertFun = (new AbstractConverter()).convert;
					break;
			}
			break;
		case 'mm':
			switch(conversion.to){
				case 'm':
					convertFun = (new MmToM()).convert;
					break;
				case 'cm':
					convertFun = (new MmToCm()).convert;
					break;
				default:
					convertFun = (new AbstractConverter()).convert;
					break;
			}
			break;
		case 'm':
			switch(conversion.to){
				case 'mm':
					convertFun = (new MToMm()).convert;
					break;
				case 'cm':
					convertFun = (new MToCm()).convert;
					break;
				default:
					convertFun = (new AbstractConverter()).convert;
					break;
			}
			break;
		default:
			convertFun = (new AbstractConverter()).convert;
			break;
	}

	conversion['convert'] = convertFun;
	return conversion;
}

export {createConverter};