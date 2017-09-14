let crypto = require("crypto");

module.exports = {
	/**
	 * Used to get all matches and captures when using a regular expression that contains captures
	 * and uses the global flag.
	 *
	 * Structure of the returned object:
	 *   String fullMatch   - The full string of characters matched
	 *   String[] captures  - The parenthesized substring matches, if any
	 *   Number index       - The 0-based index of the start of the match in the string
	 *
	 * @param RegExp regex  - The regular expression, as a RegExp object
	 * @param String string - The string to perform the regular expression on
	 *
	 * @return an array where 0..n are the of the above structure. The array also has a property,
	 * input, that contains the original string
	 */
	matchAll: function (regex, string) {
		let matches = [];
		
		while (true) {
			let match = regex.exec(string);
			
			if (match == null) {
				break;
			}
			
			let newMatch = {
				fullMatch: match[0],
				captures: [],
				index: match.index
			};
			
			// In the returned object from regexp.exec(), 0 is the full matched text, and 1..n are all n matches
			for (let i = 1; i < match.length; i++) {
				newMatch.matches.push(match[i]);
			}
			
			matches.push(newMatch);
		}
		
		matches.input = string;
		
		return matches;
	},
	
	randomString: function (size, callback) {
		crypto.randomBytes(size, (error, buffer) => {
			if (error) {
				callback(error, undefined);
				
				return;
			}
			
			callback(undefined, buffer.toString("base64").replace(/\//g, "_").replace(/\+/g, "-"));
		});
	}
}