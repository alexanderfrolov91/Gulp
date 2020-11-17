const { series, parallel } = require('gulp');
 
function clean(cb) {
	// тело функции
	cb();
}
 
function css(cb) {
	// тело функции
	cb();
}
 
function javascript(cb) {
	// тело функции
	cb();
}
 
exports.build = series(clean, parallel(css, javascript));
