let utilities =  require("../include/utilities");

let projectIdMapping = {
	// w6ex-izbf is a duplicate, but missing one field
	"petroleum-cost-per-person": "5x4d-ggyg",
	"total-energy-primary": "yt6g-n3gy"
};

module.exports = {
	get: (key, callback) => {
            if (key in projectIdMapping) {
                utilities.httpRequest("dashboard.hawaii.gov", "/resource/" + projectIdMapping[key] + ".json", {protocol: "https:"}, undefined, (data) => {
                callback(undefined, data)}, (error) => {callback(error)});
            }
            else {
                callback(new Error("INVAID ETHAN"));
            } 
	}
        //return contents of key or json files. 
};
