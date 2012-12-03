Toptal.DetailController = Spine.Controller.sub({
	events: {
		"click a.display": "click",
		"click a.btn": "update",
		"keyup input": "keyup",
		"focus input": "keyup",
		"focusout input": "unfocus"
	},

	elements:{
		"a.display": "link",
		"input": "input",
		".btn": "updateBtn"
	},

	click: function(e){
		this.link.toggleClass("hide");
		this.input.toggleClass("hide");
		this.input.focus();
		e.preventDefault();
	},

	keyup: function(e){
		this.updateBtn
			.removeClass("hide")
			.removeClass("btn-success")
			.find("i")
				.removeClass("icon-white");
		if (this.validate(e)) {
			this.updateBtn.addClass("btn-success").find("i").addClass("icon-white");
		}
		if (e.keyCode === 13) {
			this.update(e);
		}
	},

	update: function(e){
		var inputVal = this.input.val();
		var val = (!inputVal) ? this.defaultVal : inputVal;
		this.link
			.html(val)
			.toggleClass("hide");
		this.input.toggleClass("hide");
		this.updateBtn.toggleClass("hide");
		if (this.globalEvent) {
			Spine.trigger(this.globalEvent+':updated', val);
		}
	},

	validate:function(e){
		var ret = false;
		if (this.input.val()) {
			ret = true;
		}
		return ret;
	},

	unfocus:function(){
		if (this.input.hasClass("hide")) {return;}
		this.link.removeClass("hide");
		this.input.addClass("hide");
		this.updateBtn.addClass("hide");
	},

	setValue:function(value){
		this.link.html(value);
		this.input.val(value);

	},

	getValue:function(){
		return this.link.html();
	}
});