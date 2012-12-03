Toptal.ExperienceController = Toptal.PortfolioController.sub({
	elements:{
		".add": "link",
		"a.btn": "updateBtn",
		"h4": "title",
		"ul.inputs": "listInputs",
		"ul.show": "listShow",
		"input.years": "skillInputs",
		"input.language": "projects"
	},
	tmpl: "<li><strong><%=title%></strong>, <%=desc%> years</li>",

	validate:function(e){
		var ret = this.constructor.__super__.validate.apply(this, arguments);
		var target = $(e.target);
		if (target.hasClass("years") && isNaN(target.val())) {
			ret = false;
		}

		return ret;
	},

	validateSecondInput:function(firstInput, secondInput){
		return (firstInput !== this.placeholder1 && (secondInput === this.placeholder2 || isNaN(secondInput)));
	},
	getValue:function(){
		var val = {
			experience:[]
		};

		var exp = this.listShow.find("li");
		for (var i = 0; i < exp.length; i++) {
			var ex = $(exp[i]);
			var project = ex.find("strong");
			var projVal = project.html();
			skillVal = ex.html().replace(/<strong>(.)*?<\/strong>, /, "").replace(" years", "");
			val.experience.push([projVal, skillVal]);
		}
		return val;
	}
});