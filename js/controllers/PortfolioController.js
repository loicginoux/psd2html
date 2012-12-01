Toptal.PortfolioController = Spine.Controller.sub({
	events:{
		"hover": "hover",
		"click a.btn": "update",
		"keyup input": "keyup"
	},
	elements:{
		".add": "link",
		"a.btn": "updateBtn",
		"h4": "title",
		"ul.inputs": "listInputs",
		"ul.show": "listShow",
		"input.skillUsed": "skillInputs",
		"input.project": "projects",
		"p.languages": "skills"
	},

	tmpl: "<li><strong><%=title%></strong>, <%=desc%></li>",


	hover:function(e){
		if (this.updated) {
			this.updated = false;
			return;
		}
		if (!this.listShow.find("li").length) {
			this.link.toggleClass("hide");
		}else if (typeof this.skills !== "undefined") {
			this.skills.toggleClass("hide");
		}
		this.updateBtn.toggleClass("hide");
		this.listInputs.toggleClass("hide");
		this.el.toggleClass("black");
		this.listShow.toggleClass("hide");
		this.title.toggleClass("white");
		if (this.el.hasClass("black")) {
			this.projects.eq(0).focus();
		}
	},

	keyup:function(e){
		if (e.keyCode === 13) {
			this.update();
		}
	},
	update:function(e){
		var allSkills = "",
			uniqSkills = [],
			skillsHTML = [],
			error = false;

		//clear all
		this.listShow.empty();
		this.listInputs.find("input").removeClass("error");

		// update bullet list of projects
		for (var i = 0; i < this.projects.length; i++) {
			var proj = $(this.projects[i]);
			projectVal = proj.val();
			skills = proj.next("input");
			skillsVal = skills.val();

			var emptyfield = (projectVal === this.placeholder1 && skillsVal === this.placeholder2);
			if (emptyfield) {
				continue;
			}
			allSkills += (skillsVal != this.placeholder2)? ", "+skillsVal: "";
			var errorOnProj = (projectVal === this.placeholder1 && skillsVal !== this.placeholder2);
			var errorOnSkill = (projectVal !== this.placeholder1 && skillsVal === this.placeholder2);

			if (!errorOnProj && !errorOnSkill) {
				var data = {
				title: projectVal,
				desc: skillsVal
				};
				skillsHTML.push(tmpl(this.tmpl, data));
			}else if (errorOnProj) {
				proj.addClass("error"); //project missing
				error = true;
				break;
			}else if (errorOnSkill) {
				skills.addClass("error"); //skills missing
				error = true;
				break;
			}

		}
		//update list
		var skillsList = skillsHTML.join("");
		if (!error && skillsList.length) {
			this.listShow.append(skillsList);

			//update comma separated list of skills
			// we take the 3 first unique skills in the order they appear
			if (typeof this.skills !== "undefined") {
				this.skills.html("");
				allSkills = allSkills.split(",");// skills are comma separated, we create an array
				for (var j = 1; j < allSkills.length; j++) {
					// only the 3 first one
					if (uniqSkills.length >=3) {break;}
					var skill = allSkills[j];
					// we clear the white spaces
					var match = skill.match(/(\S)+/);

					if (match && match[0] && !this.contains(uniqSkills, match[0])) { // we found a new skill
						skill = match[0];
						uniqSkills.push(skill);
						var skillsVal = this.skills.html();
						// update the list
						if (skillsVal && skill) {
							this.skills.html(skillsVal+", "+skill.match(/(\S)+/)[0]);
						} else{
							this.skills.html(skill);
						}
					}

				}
				this.skills.removeClass("hide");
			}

			// update view


			this.listShow.removeClass("hide");
			this.updateBtn.toggleClass("hide");
			this.listInputs.toggleClass("hide");
			this.el.toggleClass("black");
			this.title.toggleClass("white");
			this.updated = true;
		}
		if (e) {
			e.preventDefault();
		}
	},

	contains:function(arr, val){
		var contains = false;
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === val){
				contains = true;
			}
		}
		return contains;
	}
});