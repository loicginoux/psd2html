jQuery(document).ready(function($) {

	var profileController = new Toptal.ProfilePictureController({
		el: $(".profile-image")
	});

	var nameController = new Toptal.DetailController({
		el: $(".details .name"),
		defaultVal: "Add name"
	});

	var locationController = new Toptal.LocationController({
		el: $(".details .location"),
		defaultVal: "Add location",
		locationMap: $(".location-map")
	});

	var languageController = new Toptal.DetailController({
		el: $(".details .languages"),
		defaultVal: "Add languages"
	});

	var skillController = new Toptal.SkillController({
		el: $(".details .skills")
		// ,skills:["PHP", "Ruby", "ActionScript", "Javascript"]
	});

	var portfolioController = new Toptal.PortfolioController({
		el: $(".portfolio")
	});
});










