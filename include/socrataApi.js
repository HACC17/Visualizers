let utilities =  require("../include/utilities");

let projectIdMapping = {
	// w6ex-izbf is a duplicate, but missing one field
	"petroleum-cost-per-person": "5x4d-ggyg",
	"total-energy-primary": "yt6g-n3gy"
};

module.exports = {
	get: (key, callback) => {
            if (key in projectIdMapping) {
                return projectIdMapping[key];
            }
            else {
                return false;
            } 
	}
        //return contents of key or json files. 
};
