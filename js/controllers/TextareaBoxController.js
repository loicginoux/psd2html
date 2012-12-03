Toptal.TextareaController = Spine.Controller.sub({
	events:{
		"hover": "hover",
		"click a.btn": "update",
		"keyup textarea": "keyup"

	},
	elements:{
		".add": "link",
		"a.btn": "updateBtn",
		"h4": "title",
		"textarea": "textarea",
		"p.quoted": "quote",
		"p.source": "source"
	},

	init:function(){
		Spine.bind('name:updated', this.proxy(this.nameChanged));
	},
	hover:function(e){
		if (this.updated) {
			this.updated = false;
			return;
		}
		var val = this.textarea.val();
		if (!val || val === this.placeholder) {
			this.link.toggleClass("hide");
		}else{
			this.quote.toggleClass("hide");
		}
		this.updateBtn.toggleClass("hide");
		this.textarea.toggleClass("hide");
		this.el.toggleClass("black");
		this.title.toggleClass("white");
		if (this.el.hasClass("black")) {
			this.textarea.focus();
		}
	},

	keyup:function(e){
		this.updateBtn.removeClass("btn-success").find("i").removeClass("icon-white");
		if (this.validate(e)) {
			this.updateBtn.addClass("btn-success").find("i").addClass("icon-white");
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
		this.textarea.removeClass("error");
		var val = this.textarea.val();
		if (val && val !== this.placeholder) {
			this.quote.html(val);
			// update view
			this.updateBtn.toggleClass("hide");
			this.textarea.toggleClass("hide");
			this.quote.toggleClass("hide");
			this.el.toggleClass("black");
			this.title.toggleClass("white");
			this.updated = true;
			this.updateName();
		}else{
			this.textarea.addClass("error");
		}

		e.preventDefault();
	},

	nameChanged:function(name){
		this.quotedName = name.split(" ")[0];
		this.updateName();
	},

	updateName:function(){
		if (this.quote.html() && this.quotedName) {
			this.source.html("&#8212;" + this.quotedName).removeClass("hide");

		}

	},

	setValue:function(value){
		this.quote.html(value).removeClass("hide");
		this.textarea.val(value);
		this.link.addClass("hide");
	},
	getValue:function(){
		return this.quote.html();
	}
});