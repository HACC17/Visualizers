let utilities = require("../include/utilities");

let projectIdMapping = {
	//Clean Energy Transformation
	"hawaii-renewable-portfolio-standards": {
		socrataID: "ppuq-iaak",
		xKey: "",
		yKey: ""
	},
	"hawaii-renewable-portfolio-standards-by-utility-county": {
		socrataID: "kwy2-quqh",
		xKey: "",
		yKey: ""
	},
	"hawaii-renewable-energy-generation-by-utility-county": {
		socrataID: "amu8-36ja",
		xKey: "",
		yKey: ""
	},
	"hawaii-renewable-energy-generation-by-resource-source": {
		socrataID: "uuii-28hg",
		xKey: "",
		yKey: ""
	},
	"electricity-prices-U-S-vs-hawaii-source-EIA": {
		socrataID: "9hb4-gidv",
		xKey: "",
		yKey: ""
	},
	// w6ex-izbf is a duplicate, but missing one field
	"total-petroleum-use-per-person": {
		socrataID: "5x4d-ggyg",
		xKey: "",
		yKey: ""
	},
	"total-energy-primary": {
		socrataID: "yt6g-n3gy",
		xKey: "year",
		yKey: "total_petroleum_products_consumed"
	},
	"all-counties-kWh-month": {
		socrataID: "763e-rasd",
		xKey: "",
		yKey: ""
	},
	"maui-kWh-month-bar": {
		socrataID: "br9k-chha",
		xKey: "",
		yKey: ""
	},
	"honolulu-kWh-month-bar": {
		socrataID: "7z2x-cn4r",
		xKey: "",
		yKey: ""
	},
	"hawaii-kWh-month-bar": {
		socrataID: "5rct-szfk",
		xKey: "",
		yKey: ""
 	},
	"1990-power-sector-comparison": {
		socrataID: "ivi3-qrsn",
		xKey: "",
		yKey: ""
 	},
	"total-petroleum-use-per-person": {
		socrataID: "dw3p-7qau",
		xKey: "",
		yKey: ""
 	},
	"2014-GHG-emissions-by-sector": {
		socrataID: "feij-bm5s",
		xKey: "",
		yKey: ""
 	},
	"total-energy-use-sector-bar-plot": {
		socrataID: "2wxa-tana",
		xKey: "",
		yKey: ""
 	},
	"transportation-bar-chart-2": {
		socrataID: "m7df-5775",
		xKey: "",
		yKey: ""
 	},
	//Solid Waste Reduction
	"statewide-solid-waste-reduction-percent": {
		socrataID: "8jfe-6nj7",
		xKey: "",
		yKey: ""
	},
	"statewide-solid-waste-generation": {
		socrataID: "8jfe-6nj7",
		xKey: "",
		yKey: ""
	},
	"solid-waste-reduction-with-h-power": {
		socrataID: "vbsv-8wfr",
		xKey: "",
		yKey: ""
	},
	"solid-waste-reduction-by-county": {
		socrataID: "c8ud-ycie",
		xKey: "",
		yKey: ""
	},
	"solid-waste-generation-by-county": {
		socrataID: "85fr-mbwi",
		xKey: "",
		yKey: ""
	},
	"statewide-waste-to-landfill": {
		socrataID: "3sf9-jvhu",
		xKey: "",
		yKey: ""
	},
	"total-municipal-solid-waste-processed-through-h-power": {
		socrataID: "kjed-rum2",
		xKey: "calendar_year",
		yKey: "tons_received"
	},
	//Natural Resource Management
	"water-use-bar-plot": {
		socrataID: "gm59-jic2",
		xKey: "",
		yKey: ""
 	},
	"wastewater-percentage-reused": {
		socrataID: "ru6r-2mez",
		xKey: "",
		yKey: ""
 	},
	"state-watershed-initiative-funding": {
		socrataID: "gpyn-uz24",
		xKey: "",
		yKey: ""
 	},
	"brown-water-advisory-days": {
		socrataID: "938u-kwuz",
		xKey: "",
		yKey: ""
 	},
	"acres-surveyed": {
		socrataID: "dtj4-gi9i",
		xKey: "",
		yKey: ""
 	},
	"invasive-species-funding": {
		socrataID: "rty7-dhai",
		xKey: "",
		yKey: ""
 	},
	"active-managed-acres": {
		socrataID: "eaud-nq8g",
		xKey: "",
		yKey: ""
 	},
	"federally-listed-t-e-species-management": {
		socrataID: "ayca-zpdg",
		xKey: "",
		yKey: ""
 	},
	//Local Food Prodcution and Consumption
	"milk-line-plot": {
		socrataID: "j9sd-ve3f",
		xKey: "",
		yKey: ""
 	},
	"hogs-line-graph": {
		socrataID: "q2a7-9r56",
		xKey: "",
		yKey: ""
 	},
	"red-meat-line-plot": {
		socrataID: "kaws-dnjk",
		xKey: "",
		yKey: ""
 	},
	"aquaculture-line-graph": {
		socrataID: "7y4i-nurw",
		xKey: "",
		yKey: ""
 	},
	"eggplant-line-graph": {
		socrataID: "ph8u-uuix",
		xKey: "",
		yKey: ""
 	},
	"cabbage-line-graph": {
		socrataID: "2kfr-8fd6",
		xKey: "",
		yKey: ""
 	},
	"lettuce-line-graph": {
		socrataID: "f8b7-8ni3",
		xKey: "",
		yKey: ""
 	},
	"bananas-line-graph": {
		socrataID: "djc3-cfkg",
		xKey: "",
		yKey: ""
 	},
};

module.exports = {
	get: (key, callback) => {
			if (key in projectIdMapping) {
				utilities.httpRequest("dashboard.hawaii.gov", "/resource/" + projectIdMapping[key].socrataID + ".json", {protocol: "https:"}, undefined, (json) => {
					try {
						let object = JSON.parse(json);
						
						for (let i = 0; i < object.length; i++) {
							object[i].x = Number(object[i][projectIdMapping[key].xKey]);
							object[i].y = Number(object[i][projectIdMapping[key].yKey]);
						}
						
						callback(undefined, JSON.stringify(object));
					} catch (error) {
						callback(error);
					}
				}, (error) => {
					callback(error);
				});
			} else {
				callback(new Error("Invalid dataset ID"));
			} 
	}
		//return contents of key or json files. 
};
