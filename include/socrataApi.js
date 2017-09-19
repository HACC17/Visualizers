let utilities = require("../include/utilities");

let projectIdMapping = {
	"statewide-solid-waste-reduction-percent": {
		socrataID: "8jfe-6nj7",
		transform: (object) => {
			
		}
	},
	"statewide-solid-waste-generation": {
		socrataID: "8jfe-6nj7",
		transform: (object) => {
			
		}
	},
	"solid-waste-reduction-with-h-power": {
		socrataID: "vbsv-8wfr"
	},
	"solid-waste-reduction-by-county": {
		socrataID: "c8ud-ycie"
	},
	"solid-waste-generation-by-county": {
		socrataID: "85fr-mbwi",
	},
	"statewide-waste-to-landfill": {
		socrataID: "3sf9-jvhu",
	},
	"": {
		
	},
	// w6ex-izbf is a duplicate, but missing one field
	"petroleum-cost-per-person": {
		socrataID: "5x4d-ggyg",
		transform: (object) => {
			object.x = object.year;
			object.y = object["total_petroleum_products_consumed"];
			
			object.year = undefined;
			object["total_petroleum_products_consumed"] = undefined;
			
			return object;
		}
	},
	"total-energy-primary": {
		socrataID: "yt6g-n3gy",
		transform: (object) => {
			object.x = object.year;
			object.y = object["total_petroleum_products_consumed"];
			
			object.year = undefined;
			object["total_petroleum_products_consumed"] = undefined;
			
			return object;
		}
	}
};

module.exports = {
	get: (key, callback) => {
			if (key in projectIdMapping) {
				utilities.httpRequest("dashboard.hawaii.gov", "/resource/" + projectIdMapping[key].socrataID + ".json", {protocol: "https:"}, undefined, (data) => {
					callback(undefined, data);
				}, (error) => {
					callback(error);
				});
			} else {
				callback(new Error("Invalid dataset ID"));
			} 
	}
		//return contents of key or json files. 
};
