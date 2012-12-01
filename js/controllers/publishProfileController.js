Toptal.PublishProfileController = Spine.Controller.sub({
	events: {
		"click .btn": "publish"
	},

	elements:{
		".btn": "btn"
	},

	publish: function(e){
		e.preventDefault();
	}
});