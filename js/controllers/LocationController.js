Toptal.LocationController = Toptal.DetailController.sub({
	elements:{
		"a.display": "link",
		"input": "input",
		".validationMessage": "validationMessage",
		".btn": "updateBtn"
	},


	keyup: function(e){
		this.validate();
		this.validationMessage.html("validating city...");
		var val = this.input.val();
		if (val === "Portland") {
			this.updateBtn.removeClass("hide");
			this.validationMessage.addClass("hide");
			if (e.keyCode === 13) {
				this.update("Portland, Oregon, USA");
			}
		}else if (val){
			this.validationMessage.removeClass("hide");
			if (e.keyCode === 13) {
				this.validationMessage.html("city not found...");
			}
		}

	},

	update:function(val){
		if (val === "Portland, Oregon, USA") {
			this.link
				.html(val)
				.toggleClass("hide");
			this.input.toggleClass("hide");
			this.updateBtn.toggleClass("hide");
			this.validationMessage.addClass("hide");
			this.locationMap.find("img").removeClass("hide");
			this.locationMap.find("h4, .add").addClass("hide");
			if (this.globalEvent) {
				Spine.trigger(this.globalEvent+':updated', val);
			}
		}

	},

	unfocus:function(){
		this.constructor.__super__.unfocus.apply(this, arguments);
		this.validationMessage.addClass("hide");

	},

	validate:function(e){
		var val = this.input.val();
		if (val == "Portland") {
			this.updateBtn.removeClass("hide");
			this.validationMessage.addClass("hide");

		}else if (!val){
			this.updateBtn.addClass("hide");
			this.validationMessage.addClass("hide");

		}else{
			this.updateBtn.addClass("hide");
			this.validationMessage.removeClass("hide");

		}
	},

	setValue:function(value){
		this.constructor.__super__.setValue.apply(this, arguments);
		this.locationMap.find("img").removeClass("hide");
		this.locationMap.find("h4, .add").addClass("hide");
	}
});