Toptal.InputController = Spine.Controller.sub({
	events:{
		"hover": "hover",
		"click a.btn": "update",
		"keyup input": "keyup"
	},

	elements:{
		".add": "link",
		"a.btn": "updateBtn",
		"h4": "title",
		"input[type='text']": "input",
		"p": "p"
	},

	placeholder: "Add you preferred environment",

	hover:function(e){
		if (this.updated) {
			this.updated = false;
			return;
		}
		var val = this.input.val();
		if (!val || val === this.placeholder) {
			this.link.toggleClass("hide");
		}else{
			this.p.toggleClass("hide");
		}
		this.updateBtn.toggleClass("hide");
		this.input.toggleClass("hide");
		this.el.toggleClass("black");
		this.title.toggleClass("white");
		if (this.el.hasClass("black")) {
			this.input.focus();
		}
	},

	keyup:function(e){
		this.updateBtn.removeClass("btn-success").find("i").removeClass("icon-white");
		if (this.validate(e)) {
			this.updateBtn.addClass("btn-success").find("i").addClass("icon-white");
		}
		if (e.keyCode === 13) {
			this.update(e);
		}
	},


	validate:function(e){
		var val = e.target.value,
			ret = false;
		if (val !== "" && val !== this.placeholder) {
			ret = true;
		}
		return ret;
	},

	update:function(e){
		this.input.removeClass("error");
		var val = this.input.val();
		if (val && val != this.placeholder) {
			this.p.html(val);
			// update view
			this.updateBtn.toggleClass("hide");
			this.input.toggleClass("hide");
			this.p.toggleClass("hide");
			this.el.toggleClass("black");
			this.title.toggleClass("white");
			this.updated = true;
		}else{
			this.input.addClass("error");
		}

		if (e) {
			e.preventDefault();
		}
	},

	setValue:function(value){
		this.p.html(value);
		this.input.val(value);
		this.p.removeClass("hide");
		this.link.addClass("hide");
	},
	getValue:function(){
		return this.p.html();
	}
});