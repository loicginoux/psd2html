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
		e.preventDefault();
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
			if (this.globalEvent) {
				Spine.trigger(this.globalEvent+':updated', val);
			}

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
		if (this.input.hasClass("hide")) {return;}
		var val = this.input.val();
		if (val) {
			this.accept(val);
		}else{
			this.accept(this.defaultVal);
		}
	}
});