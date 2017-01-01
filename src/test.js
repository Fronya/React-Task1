import {createConverter} from './module.js';

/**
 * Test module
 */
let cmToMm = {
	from: 'cm',
	to: 'mm'
};

console.log("Numbers:");
cmToMm = createConverter(cmToMm);
console.log(cmToMm.convert(2));
console.log("List of params :");
console.log(cmToMm.convert(2, 3, 4));
console.log("Array :");
console.log(cmToMm.convert([2, 3, 4]));

let MToMm = {
	from: 'm',
	to: 'mm'
};

console.log("\nStrings:");
MToMm = createConverter(MToMm);
console.log(MToMm.convert('10'));
console.log("List of params :");
console.log(MToMm.convert('20', '30', '60'));
console.log("Array :");
console.log(MToMm.convert(['20', '30', '60']));

