let utilities = require("../include/utilities");

let projectIdMapping = {
	//Clean Energy Transformation
	"hawaii-renewable-portfolio-standards": {
		socrataID: "ppuq-iaak",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"hawaii-renewable-portfolio-standards-by-utility-county": {
		socrataID: "kwy2-quqh",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"hawaii-renewable-energy-generation-by-utility-county": {
		socrataID: "amu8-36ja",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"hawaii-renewable-energy-generation-by-resource-source": {
		socrataID: "uuii-28hg",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"electricity-prices-U-S-vs-hawaii-source-EIA": {
		socrataID: "9hb4-gidv",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	// w6ex-izbf is a duplicate, but missing one field
	"total-petroleum-use-per-person": {
		socrataID: "5x4d-ggyg",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"total-energy-primary": {
		socrataID: "yt6g-n3gy",
		xKey: "year",
		xLabel: "",
		yKey: "total_petroleum_products_consumed",
		yLabel: ""
	},
	"all-counties-kWh-month": {
		socrataID: "763e-rasd",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"maui-kWh-month-bar": {
		socrataID: "br9k-chha",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"honolulu-kWh-month-bar": {
		socrataID: "7z2x-cn4r",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"hawaii-kWh-month-bar": {
		socrataID: "5rct-szfk",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"1990-power-sector-comparison": {
		socrataID: "ivi3-qrsn",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"total-petroleum-use-per-person": {
		socrataID: "dw3p-7qau",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"2014-GHG-emissions-by-sector": {
		socrataID: "feij-bm5s",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"total-energy-use-sector-bar-plot": {
		socrataID: "2wxa-tana",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"transportation-bar-chart-2": {
		socrataID: "m7df-5775",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	//Solid Waste Reduction
	"statewide-solid-waste-reduction-percent": {
		socrataID: "8jfe-6nj7",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"statewide-solid-waste-generation": {
		socrataID: "8jfe-6nj7",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"solid-waste-reduction-with-h-power": {
		socrataID: "vbsv-8wfr",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"solid-waste-reduction-by-county": {
		socrataID: "c8ud-ycie",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"solid-waste-generation-by-county": {
		socrataID: "85fr-mbwi",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"statewide-waste-to-landfill": {
		socrataID: "3sf9-jvhu",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
	},
	"total-municipal-solid-waste-processed-through-h-power": {
		socrataID: "kjed-rum2",
		xKey: "calendar_year",
		xLabel: "Year",
		yKey: "tons_received",
		yLabel: "Tons"
	},
	//Natural Resource Management
	"water-use-bar-plot": {
		socrataID: "gm59-jic2",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"wastewater-percentage-reused": {
		socrataID: "ru6r-2mez",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"state-watershed-initiative-funding": {
		socrataID: "gpyn-uz24",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"brown-water-advisory-days": {
		socrataID: "938u-kwuz",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"acres-surveyed": {
		socrataID: "dtj4-gi9i",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"invasive-species-funding": {
		socrataID: "rty7-dhai",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"active-managed-acres": {
		socrataID: "eaud-nq8g",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"federally-listed-t-e-species-management": {
		socrataID: "ayca-zpdg",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	//Local Food Prodcution and Consumption
	"milk-line-plot": {
		socrataID: "j9sd-ve3f",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"hogs-line-graph": {
		socrataID: "q2a7-9r56",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"red-meat-line-plot": {
		socrataID: "kaws-dnjk",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"aquaculture-line-graph": {
		socrataID: "7y4i-nurw",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"eggplant-line-graph": {
		socrataID: "ph8u-uuix",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"cabbage-line-graph": {
		socrataID: "2kfr-8fd6",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"lettuce-line-graph": {
		socrataID: "f8b7-8ni3",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
	"bananas-line-graph": {
		socrataID: "djc3-cfkg",
		xKey: "",
		xLabel: "",
		yKey: "",
		yLabel: ""
 	},
};

module.exports = {
	get: (key, callback) => {
			if (key in projectIdMapping) {
				console.log(key);
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
