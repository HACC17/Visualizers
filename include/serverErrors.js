let ServerError = {
	404:
		{
			code: 404,
			name: "Not Found",
			message: "We couldn't find that!",
			information: "Sorry, that page or resource does not exist!",
			helpText: "Try the <a href=\"/\">home page</a>."
		},
	405:
		{
			code: 405,
			name: "Method Not Allowed",
			message: "That's not right!",
			information: (method, path) => {
				return "The method <span class=\"code\">" + method + "</span> cannot be used on <span class=\"code\">" + path + "</span>.";
			},
			helpText: (referenceID) => {
				return "Error Reference ID: <span class=\"code\">" + referenceID + "</span>";
			}
		},
	500:
		{
			code: 500,
			name: "Internal Server Error",
			message: "Something went wrong!",
			information: "We've encountered an error and cannot complete the request.",
			helpText: (referenceID) => {
				return "Error Reference ID: <span class=\"code\">" + referenceID + "</span>";
			}
		}
}

module.exports = ServerError;
