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

	click:function(e){
		this.inputGroup.removeClass("hide");
		this.link.addClass("hide");
		this.input.focus();
		e.preventDefault();
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
		var firstMedium = this.skillList.find("li.medium:first");
		var firstStrong = this.skillList.find("li.strong:first");
		if (!lis.length || level === "expert") {
			this.skillList.prepend(li);

		}else if(level === "medium"){
			if (firstMedium.length) {
				firstMedium.before(li);
			} else{
				this.skillList.append(li);
			}

		}else if (level === "strong") {
			if (firstStrong.length) {
				firstStrong.before(li);
			}else if (firstMedium.length) {
				firstMedium.before(li);
			} else{
				this.skillList.append(li);
			}

		}
	},

	setValue:function(value){

	},
	getValue:function(){
		return ""
	}

});




