var config = {
		
		//URL of the CSV
		url : "https://data.humdata.org/dataset/raspnew",
		
		//Latitude field
		lat : "coordinates_latitude",
		
		//longitude field
		lon : "coordinates_longitude",
		
		//Name field
		name : "Camp_Name",
		
		//Unique identifier field
		uid : "site_ssid",
		
		//Last update
		last_update : "date",
		
		//Type (for icon)
		type : "site_typology",

		level : "red_flag_level",

		
		// Categories of attributes
		categories : [
		
			{
				name : "general",
				alias : "General",
				icon : "camp_idp_refugee_camp_60px_bluebox"
			},
			{
				name : "population",
				alias : "Population",
				icon : "people_affected_population_60px_bluebox"
			},
			{
				name : "shelter",
				alias : "Shelter",
				icon : "cluster_shelter_60px_bluebox"
			},
			{
				name : "nfi",
				alias : "Non-food items",
				icon : "food_NFI_nonfood_item_60px_bluebox"
			},
			{
				name : "demographics",
				alias : "Demographics",
				icon : "activity_leadership_60px_bluebox"
			},
				{
				name : "wash",
				alias : "Water",
				icon : "wash_water_source_60px_bluebox"
			},
			{
				name : "food_security",
				alias : "Food security",
				icon : "food_NFI_food_60px_bluebox"
			},
			
			{
				name : "vulnerable",
				alias : "Vulnerable population",
				icon : "people_elderly_60px_bluebox"
			},
			
			{
				name : "sanitation",
				alias : "Sanitation and hygiene",
				icon : "wash_sanitation_60px_bluebox"
			},
			{
				name : "physicalcondition",
				alias : "Physical Condition",
				icon : "damage_house_not_affected_60px_bluebox"
			},
			
			{
				name : "need",
				alias : "Needs",
				icon : "activity_needs_assessment_60px_bluebox"
			},
			{
				name : "health",
				alias : "Health",
				icon : "cluster_health_60px_bluebox"
			},
			{
				name : "physicalenvironment",
				alias : "Physical Environment",
				icon : "infrastructure_community_building_60px_bluebox"
			},
			{
				name : "protection",
				alias : "Protection",
				icon : "cluster_protection_60px_bluebox"
			},
			
			

			
			
			{
				name : "education",
				alias : "Education",
				icon : "activity_learning_60px_bluebox"
			},
			
			
				{
				name : "physicalcondition",
				alias : "Physical Condition",
				icon : "damage_house_not_affected_60px_bluebox"
			},
		],
		
		
		//Charts
		charts : [
			// Vulnerable type
			{
				name: "vulnerable_type",
				height: "200",
				category: "vulnerable",
				config: {
					type: "pie",
					data:{
						datasets:[
							{
								data:[],
								backgroundColor: []
							}
						],
						labels:[]
					},
					options: {
						title:{
							display:true,
							text:"Vulnerable population"
						},
						responsive: true,
						legend:{
							position:'bottom',
							labels: {
								padding:9,
								boxWidth:10
							}
						}
					}
				}	
			},

			// Age pyramid
			
			{
				name: "age_pyramid",
				height: "200",
				category: "demographics",
				config: {
					type: "horizontalBar",
					data:{
						datasets: [{
							label:"Female",
							backgroundColor: '#f37788',
							data:[]
						}, 
						{
							label:"Male",
							backgroundColor: '#4095cd',
							data:[]
						}],
						labels: ["60+", "18-59", "5-17", "0-4"],

					},
					options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    
                    responsive: true,
                    legend: {
                        position: 'top',
						reverse: true
                    },
                    title: {
                        display: true,
                        text: 'Age Pyramid'
                    },
					scales: {
						xAxes: [
							{
							ticks: {
								callback: function(label, index, labels) {
									if (label < 0){
										return 0-label;
									}
									else {return label}
									}
								}
							}
						],
						yAxes: [{
                            stacked: true,
							barThickness:15,
                        }]
					}
                }
				}	
			},
		]

}

// list of colors for graphs
var color_list = ['#0072bc','#4095cd','#7fb8dd','#bfdcee','#bfbfbf']



// traffic lights rules
	function getTrafficLight(tl,v){
	//yesgreen
		if (tl == "yesgreen"){
			if (v == "yes") {
				return "success"
			}
			else if (v == "no") {
				return "danger"
			}
			else {
				return "none"
			}
		}
	//nogreen
		else if (tl == "nogreen"){
			if (v == "yes") {
				return "danger"
			}
			else if (v == "no") {
				return "success"
			}
			else {
				return "none"
			}
		}
	//nonered
		else if (tl == "nonered"){
			if (v == "none" || v == "unknown") {
				return "danger"
			}
			else {
				return "success"
			}
		}
	//percentagegreen
		else if (tl == "percentagegreen"){
			if (v == "More than 75%" || v == "more 75%") {
				return "success"
			}
			else if (v == "Between 50% 75%" || v == "btw 50% & 75%" ) {
				return "warning"
			}
			else {
				return "danger"
			}
		
		}
	
	// For sheter Traffic Light

		else if (tl == "sheltercount"){
			if (v > 0 ) {
				return "success"
			}
			
			else {
				return "danger"
			}
		}
	// For Social Cohesion Traffic Light

	if (tl == "social"){
			if (v == "yes" || v == "TRUE") {
				return "success"
			}
			else if (v == "no" || v == "none" || v == "FALSE") {
				return "danger"
			}
			else {
				return "warning"
			}
		}

			// For non-functional shower

	if (tl == "none"){
			if (v == 0) {
				return "success"
			}
			else if (v >0) {
				return "danger"
			}
			else {
				return "warning"
			}
		}

	// For Protection Traffic Light

	if (tl == "protect"){
			if (v == "yes" || v == "Yes" || v == "TRUE" || v == "More than 75%" || v == "more 75%" || v== "more_75%" ) {
				return "success"
			}
			else if (v == "btw 50% & 75%" || v == "Between 50% and 75%" || v =="btw_50%_75%")
			{
				return "yellow"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == "less 25%" || v == "Less than 25%" || v == "less_25%") {
				return "danger"
			}
			else {
				return "warning"
			}
		}
	if (tl == "protect2"){
			if (v == "yes" || v == "Yes" || v == "TRUE" || v == "More than 75%" || v == "more 75%" || v== "more_75%") {
				return "danger"
			}
			else if (v == "btw 50% & 75%" || v == "Between 50% and 75%" || v =="btw_50%_75%")
			{
				return "yellow"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == "less 25%" || v == "Less than 25%"|| v == "less_25%") {
				return "success"
			}
			else {
				return "none"
			}
		}
	// For Food Security Traffic Light

	if (tl == "foodsecu"){
			if (v == "yes" || v == "Yes" || v == "TRUE" || v == 1 || v >1) {
				return "success"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == 0) {
				return "danger"
			}
			else {
				return "none"
			}
		}


		// For WASH Traffic Light

	if (tl == "wash"){
			if (v > 0 || v == "yes" || v == "Yes" || v == "TRUE" || v == "More than 75%" || v == "more 75%" || v== "more_75%" || v == "Every day"|| v == "Every week") {
				return "success"
			}
			else if (v == "btw 50% & 75%" || v == "Between 50% and 75%" || v =="btw_50%_75%" || v == "Every month")
			{
				return "yellow"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == "less 25%" || v == "Less than 25%" || v == "never" || v ==0 || v == "less_25%" || v == "Never") {
				return "danger"
			}
			else {
				return "warning"
			}
		}

			// For Physical Condition Traffic Light

	if (tl == "physicalcondition"){
			if (v == "yes" || v == "Yes" || v == "TRUE" || v == "More than 75%" || v == "more 75%" || v== "more_75%"|| v == "Severe") {
				return "danger"
			}
			else if (v == "btw 50% & 75%" || v == "Between 50% and 75%" || v =="btw_50%_75%"|| v == "Medium")
			{
				return "warning"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == "less 25%" || v == "never" || v ==0 || v == "less_25%") {
				return "success"
			}
			else {
				return "yellow"
			}
		}

				// When no means green light.

	if (tl == "green"){
			if (v == "yes" || v == "Yes" || v == "TRUE" || v == "More than 75%" || v == "more 75%" || v== "more_75%") {
				return "danger"
			}
			else if (v == "btw 50% & 75%" || v == "Between 50% and 75%" || v =="btw_50%_75%")
			{
				return "warning"
			}
			else if (v == "no" || v == "No" || v == "none" || v == "FALSE" || v == "less 25%" || v == "Less than 25%" || v == "never" || v ==0 || v == "less_25%") {
				return "success"
			}
			else {
				return "yellow"
			}
		}
			// When there is lists light.

	if (tl == "lists"){
			if (v == "None" || v == "No") {
				return "danger"
			}
			else {
				return "None"
			}
		}
		// For Risk Traphic light

	if (tl == "risk")
	{
			if (v == "Very High Risk" || v=="very high risk"|| v == "Very High Risk " || v=="very high risk ") 
			{
				return "danger"
			}
			else if (v=="High Risk" || v=="high risk" || v=="High Risk " || v=="high risk ")
			{
				return "yellow"
			}
			else if (v == "Medium Risk" || v == "medium risk" || v == "Medium Risk " || v == "medium risk ") 
			{
				return "warning"
			}
			else {
				return "success"
			}
		}
		
		// Risks score traphic light

		if (tl == "riskscore")
		{
			if (v >= 80) {
				return "danger"
			}
			else if ( v >= 61 && v <=79) {
				return "yellow"
			}
			else if (v >= 41 && v <= 60) {
				return "warning"
			}
			else {
				return "success"
			}
		}
		// Informative light

		if (tl == "info")
		{
			 
			return "information"
			
		}
		// Red flag traphic light

		if (tl == "redflag")
		{
			if (v == "Level 4" || v =="Level 4 ") 
			{
				return "danger"
			}
			else if ( v== "Level 3")
			{
				return "yellow"
			}
			else if (v == "Level 2" || v =="Level 2 ") 
			{
				return "warning"
			}
			else {
				return "success"
			}
		}

		// Red flag score traphic light

		if (tl == "redflagscore")
		{
			if (v >=15) 
			{
				return "danger"
			}
			else if (v >= 10 && v <= 14) 
			{
				return "yellow"
			}
			else if (v >= 5 && v <= 9) 
			{
				return "warning"
			}
			else {
				return "success"
			}
		}
	//no rule
		else {
			return "none"
		}
	}
