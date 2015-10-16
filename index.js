/**
 * Raw tag objects.
 * @type {object}
 */
exports.tag = require('./tags/htmltidy.js');

/**
 * Add an Extras tag to your swig instance.
 *
 * @example
 * var swig = require('swig'),
 *   extras = require('swig-extras'),
 *   mySwig = new swig.Swig();
 * extras.useTag(mySwig, 'markdown');
 *
 * @param  {object} swig   Swig instance.
 * @param  {string} tag    Extras tag name.
 * @return {undefined}
 * @throws {Error} If Extras does not have a tag with the given name.
 */
exports.useTag = function (swig, tag) {
	var t = exports.tag;
	if (!t) {
		throw new Error('Tag "' + tag + '" does not exist.');
	}
	swig.setTag(tag, t.parse, t.compile, t.ends, t.blockLevel);
	if (t.ext) {
		swig.setExtension(t.ext.name, t.ext.obj);
	}
};
