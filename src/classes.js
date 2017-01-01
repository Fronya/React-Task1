/**
 * Abstract class for one conversion
 * Child classes should override method 'calculate'
 */
class AbstractConverter{
	constructor(){
		this.isString = false;
	}
	
	calculate(value){
		return value;
	}

	getResult(value){
		if(this.isString){
			return this.calculate(parseInt(value)).toString();
		}else return this.calculate(value);
	}

	getArrayResults(array){
		let result = [];
		for (let i = 0; i < array.length; i++) {
			result.push(this.getResult(array[i])); 
		}
		return result;
	}

	checkString(obj){
		return typeof obj === 'string' || obj instanceof String;
	}

	convert = (...numberUnits) =>{
		if(this.checkString(numberUnits[0])){
			this.isString = true;
		}
		if(numberUnits.length > 1){
			return this.getArrayResults([...numberUnits]);
		} if(Array.isArray(numberUnits[0])){
			if(this.checkString(numberUnits[0][0])){
				this.isString = true;
			}
			return this.getArrayResults(numberUnits[0]);
		}else{
			return this.getResult(numberUnits);
		}
	}
}

class CmToMm extends AbstractConverter{
	calculate(value){
		return value * 10;
	}
}

class CmToM extends AbstractConverter{
	calculate(value){
		return value / 100;
	}
}

class MmToCm extends AbstractConverter{
	calculate(value){
		return value / 10;
	}
}

class MmToM extends AbstractConverter{
	calculate(value){
		return value / 1000;
	}
}

class MToCm extends AbstractConverter{
	calculate(value){
		return value * 100;
	}
}

class MToMm extends AbstractConverter{
	calculate(value){
		return value * 1000;
	}
}

export {AbstractConverter, CmToMm, CmToM, MmToCm, MmToM, MToCm, MToMm};