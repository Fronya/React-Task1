'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Abstract class for one conversion
 * Child classes should override method 'calculate'
 */
var AbstractConverter = function () {
	function AbstractConverter() {
		var _this = this;

		_classCallCheck(this, AbstractConverter);

		this.convert = function () {
			for (var _len = arguments.length, numberUnits = Array(_len), _key = 0; _key < _len; _key++) {
				numberUnits[_key] = arguments[_key];
			}

			if (_this.checkString(numberUnits[0])) {
				_this.isString = true;
			}
			if (numberUnits.length > 1) {
				return _this.getArrayResults([].concat(numberUnits));
			}if (Array.isArray(numberUnits[0])) {
				if (_this.checkString(numberUnits[0][0])) {
					_this.isString = true;
				}
				return _this.getArrayResults(numberUnits[0]);
			} else {
				return _this.getResult(numberUnits);
			}
		};

		this.isString = false;
	}

	_createClass(AbstractConverter, [{
		key: 'calculate',
		value: function calculate(value) {
			return value;
		}
	}, {
		key: 'getResult',
		value: function getResult(value) {
			if (this.isString) {
				return this.calculate(parseInt(value)).toString();
			} else return this.calculate(value);
		}
	}, {
		key: 'getArrayResults',
		value: function getArrayResults(array) {
			var result = [];
			for (var i = 0; i < array.length; i++) {
				result.push(this.getResult(array[i]));
			}
			return result;
		}
	}, {
		key: 'checkString',
		value: function checkString(obj) {
			return typeof obj === 'string' || obj instanceof String;
		}
	}]);

	return AbstractConverter;
}();

var CmToMm = function (_AbstractConverter) {
	_inherits(CmToMm, _AbstractConverter);

	function CmToMm() {
		_classCallCheck(this, CmToMm);

		return _possibleConstructorReturn(this, (CmToMm.__proto__ || Object.getPrototypeOf(CmToMm)).apply(this, arguments));
	}

	_createClass(CmToMm, [{
		key: 'calculate',
		value: function calculate(value) {
			return value * 10;
		}
	}]);

	return CmToMm;
}(AbstractConverter);

var CmToM = function (_AbstractConverter2) {
	_inherits(CmToM, _AbstractConverter2);

	function CmToM() {
		_classCallCheck(this, CmToM);

		return _possibleConstructorReturn(this, (CmToM.__proto__ || Object.getPrototypeOf(CmToM)).apply(this, arguments));
	}

	_createClass(CmToM, [{
		key: 'calculate',
		value: function calculate(value) {
			return value / 100;
		}
	}]);

	return CmToM;
}(AbstractConverter);

var MmToCm = function (_AbstractConverter3) {
	_inherits(MmToCm, _AbstractConverter3);

	function MmToCm() {
		_classCallCheck(this, MmToCm);

		return _possibleConstructorReturn(this, (MmToCm.__proto__ || Object.getPrototypeOf(MmToCm)).apply(this, arguments));
	}

	_createClass(MmToCm, [{
		key: 'calculate',
		value: function calculate(value) {
			return value / 10;
		}
	}]);

	return MmToCm;
}(AbstractConverter);

var MmToM = function (_AbstractConverter4) {
	_inherits(MmToM, _AbstractConverter4);

	function MmToM() {
		_classCallCheck(this, MmToM);

		return _possibleConstructorReturn(this, (MmToM.__proto__ || Object.getPrototypeOf(MmToM)).apply(this, arguments));
	}

	_createClass(MmToM, [{
		key: 'calculate',
		value: function calculate(value) {
			return value / 1000;
		}
	}]);

	return MmToM;
}(AbstractConverter);

var MToCm = function (_AbstractConverter5) {
	_inherits(MToCm, _AbstractConverter5);

	function MToCm() {
		_classCallCheck(this, MToCm);

		return _possibleConstructorReturn(this, (MToCm.__proto__ || Object.getPrototypeOf(MToCm)).apply(this, arguments));
	}

	_createClass(MToCm, [{
		key: 'calculate',
		value: function calculate(value) {
			return value * 100;
		}
	}]);

	return MToCm;
}(AbstractConverter);

var MToMm = function (_AbstractConverter6) {
	_inherits(MToMm, _AbstractConverter6);

	function MToMm() {
		_classCallCheck(this, MToMm);

		return _possibleConstructorReturn(this, (MToMm.__proto__ || Object.getPrototypeOf(MToMm)).apply(this, arguments));
	}

	_createClass(MToMm, [{
		key: 'calculate',
		value: function calculate(value) {
			return value * 1000;
		}
	}]);

	return MToMm;
}(AbstractConverter);

exports.AbstractConverter = AbstractConverter;
exports.CmToMm = CmToMm;
exports.CmToM = CmToM;
exports.MmToCm = MmToCm;
exports.MmToM = MmToM;
exports.MToCm = MToCm;
exports.MToMm = MToMm;