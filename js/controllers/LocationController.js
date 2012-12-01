Toptal.LocationController = Toptal.DetailController.sub({
	elements:{
		"a": "link",
		"input": "input",
		".icon-ok": "icon",
		".validationMessage": "validationMessage"
	},


	keyup: function(e){
		this.validate();
		var val = this.input.val();
		if (val == "Portland") {
			this.icon.removeClass("hide");
			this.validationMessage.addClass("hide");
			if (e.keyCode === 13) {
				this.accept("Portland, Oregon, USA");
			}
		}else{
			this.validationMessage.removeClass("hide");
			if (e.keyCode === 13) {
				this.accept(this.defaultVal);
			}
		}

	},

	accept:function(val){
		this.constructor.__super__.accept.apply(this, arguments);
		if (val === "Portland") {
			this.validationMessage.addClass("hide");
			this.locationMap.find("img").removeClass("hide");
			this.locationMap.find("h4, .add").addClass("hide");
		}

	},

	validate:function(e){
		var val = this.input.val();
		if (val == "Portland") {
			this.icon.removeClass("hide");
			this.validationMessage.addClass("hide");

		}else if (!val){
			this.icon.addClass("hide");
			this.validationMessage.addClass("hide");

		}else{
			this.icon.addClass("hide");
			this.validationMessage.removeClass("hide");

		}
	}
});