let utilities = require("../include/utilities");

let projectIdMapping = {
	//Clean Energy Transformation
	"hawaii-renewable-portfolio-standards": {
		socrataID: "ppuq-iaak",
		xKey: "year",
		yKey: "hawaii-renewable-portfolio-standards"
	},
	"hawaii-renewable-portfolio-standards-by-utility-county": {
		socrataID: "kwy2-quqh",
		xKey: "year",
		yKey: "hawaii-renewable-portfolio-standards-by-utility-county"
	},
	"hawaii-renewable-energy-generation-by-utility-county": {
		socrataID: "amu8-36ja",
		xKey: "year",
		yKey: "hawaii-renewable-energy-generation-by-utility-county"
	},
	"hawaii-renewable-energy-generation-by-resource-source": {
		socrataID: "uuii-28hg",
		xKey: "year",
		yKey: "hawaii-renewable-energy-generation-by-resource-source"
	},
	"electricity-prices-U-S-vs-hawaii-source-EIA": {
		socrataID: "9hb4-gidv"
		xKey: "year",
		yKey: "electricity-prices-U-S-vs-hawaii-source-EIA"
	},
	// w6ex-izbf is a duplicate, but missing one field
	"total-petroleum-use-per-person": {
		socrataID: "5x4d-ggyg"
		xKey: "year",
		yKey: "total-petroleum-use-per-person"
	},
	"total-energy-primary": {
		socrataID: "yt6g-n3gy",
		xKey: "year",
		yKey: "total-energy-primary"
	},
	"all-counties-kWh-month": {
		socrataID: "763e-rasd",
		xKey: "year",
		yKey: "all-counties-kWh-month"
	},
	"maui-kWh-month-bar": {
		socrataID: "br9k-chha",
		xKey: "year",
		yKey: "maui-kWh-month-bar"
	},
	"honolulu-kWh-month-bar": {
		socrataID: "7z2x-cn4r",
		xKey: "year",
		yKey: "honolulu-kWh-month-bar"
	},
	"hawaii-kWh-month-bar": {
		socrataID: "5rct-szfk",
		xKey: "year",
		yKey: "hawaii-kWh-month-bar"
 	},
	"1990-power-sector-comparison": {
		socrataID: "ivi3-qrsn",
		xKey: "year",
		yKey: "1990-power-sector-comparison"
 	},
	"total-petroleum-use-per-person": {
		socrataID: "dw3p-7qau",
		xKey: "year",
		yKey: "total-petroleum-use-per-person"
 	},
	"2014-GHG-emissions-by-sector": {
		socrataID: "feij-bm5s",
		xKey: "year",
		yKey: "2014-GHG-emission-by-sector"
 	},
	"total-energy-use-sector-bar-plot": {
		socrataID: "2wxa-tana",
		xKey: "year",
		yKey: "total-energy-use-sector-bar-plot"
 	},
	"transportation-bar-chart-2": {
		socrataID: "m7df-5775",
		xKey: "year",
		yKey: "transportation-bar-chart-2"
 	},
	//Solid Waste Reduction
	"statewide-solid-waste-reduction-percent": {
		socrataID: "8jfe-6nj7"
		xKey: "year",
		yKey: "statewide-solid-waste-reduction-percent"
	},
	"statewide-solid-waste-generation": {
		socrataID: "8jfe-6nj7"
		xKey: "year",
		yKey: "statewide-solid-waste-generation"
	},
	"solid-waste-reduction-with-h-power": {
		socrataID: "vbsv-8wfr"
		xKey: "year",
		yKey: "solid-waste-reduction-with-h-power"
	},
	"solid-waste-reduction-by-county": {
		socrataID: "c8ud-ycie"
		xKey: "year",
		yKey: "solid-waste-reduction-by-county"
	},
	"solid-waste-generation-by-county": {
		socrataID: "85fr-mbwi",
		xKey: "year",
		yKey: "solid-waste-generation-by-county"
	},
	"statewide-waste-to-landfill": {
		socrataID: "3sf9-jvhu",
		xKey: "year",
		yKey: "statewide-waste-to-landfill"
	},
	//Natural Resource Management
	"water-use-bar-plot": {
		socrataID: "gm59-jic2",
		xKey: "year",
		yKey: "water-use-bar-plot"
 	},
	"wastewater-percentage-reused": {
		socrataID: "ru6r-2mez",
		xKey: "year",
		yKey: "wastewater-percentage-reused"
 	},
	"state-watershed-initiative-funding": {
		socrataID: "gpyn-uz24",
		xKey: "year",
		yKey: "state-watershed-initiative-funding"
 	},
	"brown-water-advisory-days": {
		socrataID: "938u-kwuz",
		xKey: "year",
		yKey: "brown-water-advisory-days"
 	},
	"acres-surveyed": {
		socrataID: "dtj4-gi9i",
		xKey: "year",
		yKey: "acres-surveyed"
 	},
	"invasive-species-funding": {
		socrataID: "rty7-dhai",
		xKey: "year",
		yKey: "invasive-species-funding"
 	},
	"active-managed-acres": {
		socrataID: "eaud-nq8g",
		xKey: "year",
		yKey: "active-managed-acres"
 	},
	"federally-listed-t-e-species-management": {
		socrataID: "ayca-zpdg",
		xKey: "year",
		yKey: "federally-listed-t-e-species-management"
 	},
	//Local Food Prodcution and Consumption
	"milk-line-plot": {
		socrataID: "j9sd-ve3f",
		xKey: "year",
		yKey: "milk-line-plot"
 	},
	"hogs-line-graph": {
		socrataID: "q2a7-9r56",
		xKey: "year",
		yKey: "hogs-line-graph"
 	},
	"red-meat-line-plot": {
		socrataID: "kaws-dnjk",
		xKey: "year",
		yKey: "red-meat-line-plot"
 	},
	"aquaculture-line-graph": {
		socrataID: "7y4i-nurw",
		xKey: "year",
		yKey: "aquaculture-line-graph"
 	},
	"eggplant-line-graph": {
		socrataID: "ph8u-uuix",
		xKey: "year",
		yKey: "eggplant-line-graph"
 	},
	"cabbage-line-graph": {
		socrataID: "2kfr-8fd6",
		xKey: "year",
		yKey: "cabbage-line-graph"
 	},
	"lettuce-line-graph": {
		socrataID: "f8b7-8ni3",
		xKey: "year",
		yKey: "lettuce-line-graph"
 	},
	"bananas-line-graph": {
		socrataID: "djc3-cfkg",
		xKey: "year",
		yKey: "bananas-line-graph"
 	},
};

module.exports = {
	get: (key, callback) => {
			if (key in projectIdMapping) {
				utilities.httpRequest("dashboard.hawaii.gov", "/resource/" + projectIdMapping[key].socrataID + ".json", {protocol: "https:"}, undefined, (json) => {
					try {
						let object = JSON.parse(json);
						
						for (let i = 0; i < object.length; i++) {
							object[i].x = object[i][projectIdMapping[key].xKey];
							object[i].y = object[i][projectIdMapping[key].yKey];
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
