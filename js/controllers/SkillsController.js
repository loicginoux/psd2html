Toptal.SkillController =  Spine.Controller.sub({
	events:{
		"click a.add": "click",
		"click li.skill": "removeSkill",
		"click .dropdown-menu a": "changeLevel",
		"keyup input": "keyup"
	},
	elements:{
		".icon-plus": "icon",
		"a.add": "link",
		".mySkills": "skillList",
		"input": "input",
		".skill-input": "inputGroup",
		".level": "level"
	},

	click:function(){
		this.inputGroup.removeClass("hide");
		this.link.addClass("hide");
		this.input.focus();
	},

	changeLevel:function(e){
		this.level.html(e.target.innerHTML);
		this.accept(this.input.val());
	},

	keyup: function(e){
		// this.validate();
		var val = this.input.val();
		if (e.keyCode === 13) {
			if (val) {
				this.accept(val);
			}
		}
	},

	accept: function(val){
		if (val) {
			this.link.toggleClass("hide");
			this.inputGroup.toggleClass("hide");
			this.addSkill(val, this.level.html().toLowerCase());
			this.level.html("Strong");
			this.input.val("");
		}
	},

	removeSkill:function(e){

		var targ = $(e.target);
		if (targ.is("li")) {
			targ.remove();
		} else{
			targ.parent().remove();
		}
	},

	addSkill:function(skill, level){
		var li = $("<li class='skill label "+level+"'>"+skill+"<i class='icon-remove-sign'></li>");
		var lis = this.skillList.find("li");
		var firstLi = this.skillList.find("li."+level);
		if (!lis.length || level == "expert") {
			this.skillList.prepend(li);
		}else{
			var listLi, i;
			for (i = 0; i < lis.length; i++) {
				listLi = $(lis[i]),
					listLiLevel = "";
				if (listLi.hasClass("strong")) {
					listLiLevel = 'strong';
				}
				else if (listLi.hasClass("expert")) {
					listLiLevel = 'expert';
				}
				else if (listLi.hasClass("medium")) {
					listLiLevel = 'medium';
				}

				if(listLiLevel === level){
					break;
				}
			}
			if (i === lis.length) {
				this.skillList.append(li);
			}else{
				listLi.before(li);
			}

		}
	}

});




