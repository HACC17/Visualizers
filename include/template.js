/**
 * A simple template parser that allows the use of variables in HTML.
 */

const FILE_EXTENSION = ".template.html";

let fs = require("fs");
let utilities = require("../include/utilities");

module.exports = {
	/**
	 * Parses the template HTML file and substitutes variables in the template for the supplied
	 * values within the variables object. When a variable is to be substituted in the template
	 * file, it is searched for as a property on the object. Extra properties on the object are
	 * ignored. If an object property was not provided for a variable, every instance of that
	 * variable in the template is left as-is. If any properties on the variables object are
	 * functions, the return value of that function will be used.
	 *
	 * Caveats:
	 * If a variable is replaced by text that contains a templated variable, that text can
	 * potentially be replaced.
	 *
	 * @param String data       - The template file contents to parse
	 * @param Object variables  - An object whose properties correspond to variable names within
	 *                            the template file
	 * @param Function callback - A function that is called upon completion. The arguments are
	 *                            (error, file) where error is an error, if one occured (or
	 *                            undefined otherwise), and file is a string containing the
	 *                            parsed template
	 *
	 * @return the templated file as a string
	 */
	parse: function (data, variables, callback) {
		callback(undefined, data.replace(/{(?!\\)(\w+)}/g, (fullMatch, capture, offset, string) => {
			if (capture in variables) {
				return typeof variables[capture] == "function" ? variables[capture]() : variables[capture];
			}
			
			return fullMatch;
		}));
	},
	
	parseFile: function parseFile (file, variables, callback) {
		fs.readFile(file + FILE_EXTENSION, "utf-8", (error, data) => {
			if (error) {
				callback(error, undefined);
				
				return;
			}
			
			this.parse(data, variables, callback);
		});
	}
};