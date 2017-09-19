let utilities = require("../include/utilities");

let projectIdMapping = {
	//Clean Energy Transformation
	"hawaii-renewable-portfolio-standards": {
		socrataID: "ppuq-iaak",
		x_key: "year",
		x_label: "Year",
		y_key: "state_total",
		y_label: "State Total (Percentage)",
		title: "Hawaii Renewable Portfolio Standards"
	},
	"hawaii-renewable-energy-generation-by-utility-county": {
		socrataID: "amu8-36ja",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"hawaii-renewable-energy-generation-by-resource-source": {
		socrataID: "uuii-28hg",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"electricity-prices-U-S-vs-hawaii-source-EIA": {
		socrataID: "9hb4-gidv",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	// w6ex-izbf is a duplicate, but missing one field
	"total-petroleum-use-per-person": {
		socrataID: "w6ex-izbf",
		x_key: "year",
		x_labe: "Year",
		y_key: "petroleum_spent_person",
		y_label: "Petroleum $ Spent/Person (USD)",
		title: "Total Petroleum Use Per Person"
	},
	"total-energy-primary": {
		socrataID: "yt6g-n3gy",
		x_key: "year",
		x_label: "Year",
		y_key: "total_petroleum_products_consumed",
		y_label: "Total Petroleum Products Consumed (Barrels)",
		title: "Total Energy Primary"
	},
	"all-counties-kWh-month": {
		socrataID: "763e-rasd",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"maui-kWh-month-bar": {
		socrataID: "br9k-chha",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"honolulu-kWh-month-bar": {
		socrataID: "7z2x-cn4r",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"hawaii-kWh-month-bar": {
		socrataID: "5rct-szfk",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"1990-power-sector-comparison": {
		socrataID: "ivi3-qrsn",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"total-petroleum-use-per-person": {
		socrataID: "dw3p-7qau",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"2014-GHG-emissions-by-sector": {
		socrataID: "feij-bm5s",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"total-energy-use-sector-bar-plot": {
		socrataID: "2wxa-tana",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"transportation-bar-chart-2": {
		socrataID: "m7df-5775",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	//Solid Waste Reduction
	"statewide-solid-waste-reduction-percent": {
		socrataID: "8jfe-6nj7",
		x_key: "year",
		x_label: "Year",
		y_key: "percentage",
		y_label: "Percent",
		title: "Solid Waste Reduction Prior to Disposal"
	},
	"total-solid-waste-generation": {
		socrataID: "8jfe-6nj7",
		x_key: "year",
		x_label: "Year",
		y_key: "total_solid_waste_generated",
		y_label: "Tons",
		title: "Total Solid Waste Generation"
	},
	"solid-waste-reduction-with-h-power": {
		socrataID: "vbsv-8wfr",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"solid-waste-reduction-by-county": {
		socrataID: "c8ud-ycie",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"solid-waste-generation-by-county": {
		socrataID: "85fr-mbwi",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	"statewide-waste-to-landfill": {
		socrataID: "3sf9-jvhu",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
	},
	
	// Missing waste graphs
	
	"tons-of-materials-recycled-statewide": {
		socrataID: "8jfe-6nj7",
		x_key: "year",
		x_label: "Year",
		y_key: "generation",
		y_label: "Tons",
		title: "Tons of Materials Recycled Statewide"
	},
	
	// Missing waste graphs
	
	"h-power-net-sales": {
		socrataID: "p8mh-zyfj",
		x_key: "calendar_year",
		x_label: "Year",
		y_key: "h_power_net_sales_mwh",
		y_label: "Megawatt-Hours",
		title: "H-Power Net Sales"
	},
	"total-municipal-solid-waste-processed-through-h-power": {
		socrataID: "kjed-rum2",
		x_key: "calendar_year",
		x_label: "Year",
		y_key: "tons_received",
		y_label: "Tons",
		title: "Total Municipal Solid Waste Processed Through H-Power"
	},
	
	"h-power-percent-of-oahu-grid": {
		socrataID: "ady8-h976",
		x_key: "calendar_year",
		x_label: "Year",
		y_key: "of_oahu_grid",
		y_label: "H-Power Percentage",
		title: "Percent of Oahu's Grid Powered by H-Power"
	},
	
	//Natural Resource Management
	"water-use-bar-plot": {
		socrataID: "gm59-jic2",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"wastewater-percentage-reused": {
		socrataID: "ru6r-2mez",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"acres-protected-since-2012-cumulative": {
		socrataID: "rf87-4m6m",
		x_key: "year_date",
		x_label: "Year",
		y_key: "watershed_acres_fenced",
		y_label: "Acres",
		title: "Acres Protected Since 2012 Cumulative"
	},
	"state-watershed-initiative-funding": {
		socrataID: "gpyn-uz24",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"brown-water-advisory-days": {
		socrataID: "938u-kwuz",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"acres-surveyed": {
		socrataID: "dtj4-gi9i",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"invasive-species-funding": {
		socrataID: "rty7-dhai",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"active-managed-acres": {
		socrataID: "eaud-nq8g",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"federally-listed-t-e-species-management": {
		socrataID: "ayca-zpdg",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	//Local Food Prodcution and Consumption
	"milk-line-plot": {
		socrataID: "j9sd-ve3f",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"hogs-line-graph": {
		socrataID: "q2a7-9r56",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"red-meat-line-plot": {
		socrataID: "kaws-dnjk",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"aquaculture-line-graph": {
		socrataID: "7y4i-nurw",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"eggplant-line-graph": {
		socrataID: "ph8u-uuix",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"cabbage-line-graph": {
		socrataID: "2kfr-8fd6",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"lettuce-line-graph": {
		socrataID: "f8b7-8ni3",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
	"bananas-line-graph": {
		socrataID: "djc3-cfkg",
		x_key: "",
		x_label: "",
		y_key: "",
		y_label: "",
		title: ""
 	},
};

module.exports = {
	get: (key, callback) => {
		if (key in projectIdMapping) {
			utilities.httpRequest("dashboard.hawaii.gov", "/resource/" + projectIdMapping[key].socrataID + ".json", {protocol: "https:"}, undefined, (json) => {
				try {
					let object = JSON.parse(json);
					
					for (let i = 0; i < object.length; i++) {
						object[i].x = Number(object[i][projectIdMapping[key].x_key]);
						object[i].y = Number(object[i][projectIdMapping[key].y_key]);
					}
					
					callback(undefined, JSON.stringify({data: object, title: projectIdMapping[key].title, x_label: projectIdMapping[key].x_label, y_label: projectIdMapping[key].y_label}));
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
};
