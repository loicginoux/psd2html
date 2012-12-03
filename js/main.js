jQuery(document).ready(function($) {

	var profileController = new Toptal.ProfilePictureController({
		el: $(".profile-image")
	});

	var nameController = new Toptal.DetailController({
		el: $(".details .name"),
		defaultVal: "Add name",
		globalEvent: "name"
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
		el: $(".portfolio"),
		placeholder1: "Project name",
		placeholder2: "Skills used"
	});

	var experienceController = new Toptal.ExperienceController({
		el: $(".experience"),
		placeholder1: "Language",
		placeholder2: "years"
	});

	var environmentController = new Toptal.InputController({
		el: $(".environment")
	});

	var mostAmazingController = new Toptal.TextareaController({
		el: $(".most-amazing"),
		placeholder: "tell us about the best software you have worked on"
	});

	var inClientsController = new Toptal.TextareaController({
		el: $(".best-client"),
		placeholder: "tell us about what your best client is"
	});

	var savePublishController = new Toptal.SaveAndPublishController({
		el: $(".action"),
		controllers:{
			profile: profileController,
			name: nameController,
			location: locationController,
			language: languageController,
			skills: skillController,
			portfolio: portfolioController,
			experience: experienceController,
			environment: environmentController,
			amazing: mostAmazingController,
			clients: inClientsController
		}
	});
});










