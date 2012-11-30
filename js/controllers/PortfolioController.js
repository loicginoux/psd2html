Toptal.PortfolioController = Spine.Controller.sub({
	events:{
		"hover": "hover"
	},
	elements:{
		"a": "link",
		"h4": "title",
		"ul": "list",
		"li.skillsUsed": "skillInputs"
	},

	hover:function(e){
		this.link.toggleClass("hide");
		this.list.toggleClass("hide");
		this.el.toggleClass("black");
		this.title.toggleClass("white");
	}
});