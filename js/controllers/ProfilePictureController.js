Toptal.ProfilePictureController = Spine.Controller.sub({
	events:{
		"hover": "hover",
		"click .btn": "changePhoto",
		"change input": "onChangePhoto"
	},
	elements:{
		"a": "link",
		"input": "fileInput",
		".btn": "uploadBtn",
		"img": "img"
	},

	hover:function(e){
		if (this.img.src) {
			this.img.toggleClass("hide");
		}else{
			this.link.toggleClass("hide");
		}
		this.uploadBtn.toggleClass("hide");
		this.el.toggleClass("black");
	},

	changePhoto: function(e){
		this.fileInput.click();
		e.stopPropagation();
		e.preventDefault();
		return false;
	},

	onChangePhoto: function(e){
		input = e.target;
		if (input.files && input.files[0]){
			reader = new FileReader();
			reader.onload = function(e){
				$(input).parent()
						.find("img")
							.attr('src', e.target.result)
							.removeClass("hide")
						.end()
						.find("a").remove();

			};
			reader.readAsDataURL(input.files[0]);
		}
	}

});

