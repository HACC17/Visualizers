let utilities = require("../include/utilities");

let projectIdMapping = {
	//Clean Energy Transformation
	"hawaii-renewable-portfolio-standards": {
		socrataID: "ppuq-iaak",
	},
	"hawaii-renewable-portfolio-standards-by-utility-county": {
		socrataID: "kwy2-quqh",
	},
	"hawaii-renewable-energy-generation-by-utility-county": {
		socrataID: "amu8-36ja",
	},
	"hawaii-renewable-energy-generation-by-resource-source": {
		socrataID: "uuii-28hg",
	},
	"electricity-prices-U-S-vs-hawaii-source-EIA": {
		socrataID: "9hb4-gidv",
	},
	"total-petroleum-use-per-person": {
		socrataID: "5x4d-ggyg",
	},
	"all-counties-kWh-month": {
		socrataID: "763e-rasd",
	},
	"maui-kWh-month-bar": {
		socrataID: "br9k-chha",
	},
	"honolulu-kWh-month-bar": {
		socrataID: "7z2x-cn4r",
	},
	"hawaii-kWh-month-bar": {
		socrataID: "5rct-szfk,
 	},
	"1990-power-sector-comparison": {
		socrataID: "ivi3-qrsn",
 	},
	"total-petroleum-use-per-person": {
		socrataID: "dw3p-7qau",
 	},
	"2014-GHG-emissions-by-sector": {
		socrataID: "feij-bm5s",
 	},
	"total-energy-use-sector-bar-plot": {
		socrataID: "2wxa-tana",
 	},
	"transportation-bar-chart-2": {
		socrataID: "m7df-5775",
 	},
	//Solid Waste Reduction
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
	//Natural Resource Management
	"water-use-bar-plot":
		socrataID: "gm59-jic2",
 	},
	"wastewater-percentage-reused": {
		socrataID: "ru6r-2mez",
 	},
	"state-watershed-initiative-funding": {
		socrataID: "gpyn-uz24",
 	},
	"brown-water-advisory-days": {
		socrataID: "938u-kwuz",
 	},
	"acres-surveyed": {
		socrataID: "dtj4-gi9i",
 	},
	"invasive-species-funding": {
		socrataID: "rty7-dhai",
 	},
	"active-managed-acres": {
		socrataID: "eaud-nq8g",
 	},
	"federally-listed-t-e-species-management": {
		socrataID: "ayca-zpdg",
 	},
	//Local Food Prodcution and Consumption
	"milk-line-plot": {
		socrataID: "j9sd-ve3f",
 	},
	"hogs-line-graph": {
		socrataID: "q2a7-9r56",
 	},
	"red-meat-line-plot": {
		socrataID: "kaws-dnjk",
 	},
	"aquaculture-line-graph": {
		socrataID: "7y4i-nurw",
 	},
	"eggplant-line-graph": {
		socrataID: "ph8u-uuix",
 	},
	"cabbage-line-graph": {
		socrataID: "2kfr-8fd6",
 	},
	"lettuce-line-graph": {
		socrataID: "f8b7-8ni3",
 	},
	"bananas-line-graph": {
		socrataID: "djc3-cfkg",
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
