//specify one global variable
if (typeof Toptal === "undefined") {
	Toptal = {};
}


jQuery(document).ready(function($) {

	var nameController = new Toptal.DetailController({
		el: $(".details .name"),
		defaultVal: "Add name"
	});

	var locationController = new Toptal.LocationController({
		el: $(".details .location"),
		defaultVal: "Add location"
	});

	var languageController = new Toptal.DetailController({
		el: $(".details .languages"),
		defaultVal: "Add languages"
	});
});




Toptal.DetailController = Spine.Controller.sub({
	events: {
		"click a": "click",
		"keyup input": "keyup",
		"focus input": "validate",
		"focusout input": "unfocus"
	},

	elements:{
		"a": "link",
		"input": "input",
		".icon-ok": "icon"
	},

	click: function(e){
		this.link.toggleClass("hide");
		this.input.toggleClass("hide");
		this.input.focus();
	},

	keyup: function(e){
		this.validate();
		var val = this.input.val();
		if (e.keyCode === 13) {
			if (val) {
				this.accept(val);
			} else{
				this.accept(this.defaultVal);
			}
		}
	},

	accept: function(val){
		if (val) {
			this.link
			.html(val)
			.toggleClass("hide");
			this.input.toggleClass("hide");
			this.icon.addClass("hide");
		}
	},

	validate:function(e){
		if (!this.input.val()) {
			this.icon.addClass("hide");
		}else{
			this.icon.removeClass("hide");
		}
	},

	unfocus:function(){
		var val = this.input.val();
		if (val) {
			this.accept(val);
		}else{
			this.accept(this.defaultVal);
		}
	}
});


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
				this.accept(val);
			}
		}else{
			this.validationMessage.removeClass("hide");
			if (e.keyCode === 13) {
				this.accept(this.defaultVal);
			}
		}

	},

	accept:function(){
		this.constructor.__super__.accept.apply(this, arguments);
		this.validationMessage.addClass("hide");
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