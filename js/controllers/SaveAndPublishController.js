Toptal.SaveAndPublishController = Spine.Controller.sub({
	events: {
		"click .save": "save",
		"click .publish": "publish"
	},

	elements:{
		".save": "saveBtn",
		".publish": "publishBtn"
	},

	cookieName: "toptal",

	init:function(){
		var cookie = this.readCookie(this.cookieName);
		console.log("readCookie:",cookie);
		if (cookie) {
			cookie = JSON.parse(cookie);
			for (var id in cookie) {
				var value = cookie[id];
				var controller = this.controllers[id];
				if (value) {
					controller.setValue(value);
				}
			}
		}
	},

	save: function(e){
		var cookie = {};
		for (var id in this.controllers) {
			var controller = this.controllers[id];
			var value = controller.getValue();
			cookie[id] = value;
		}
		console.log("save cookie:",cookie);
		this.setCookie(this.cookieName, JSON.stringify(cookie), 7); // stored for a week
		this.saveBtn.html("profile saved");
		var that = this;
		setTimeout(function() {
			that.saveBtn.html("Save profile");
		}, 2000);
		e.preventDefault();
	},


	publish: function(e){
		this.deleteCookie(this.cookieName);
		e.preventDefault();
	},

	deleteCookie: function(cookieName){
		this.setCookie(cookieName, "", -1);
	},

	setCookie: function(cookieName,cookieValue,nDays) {
		var today = new Date();
		var expire = new Date();
		if (nDays===null || nDays===0) nDays=1;
		expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString();
	},

	readCookie: function(cookieName) {
		var theCookie=" "+document.cookie;
		var ind=theCookie.indexOf(" "+cookieName+"=");
		if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
		if (ind===-1 || cookieName==="") return "";
		var ind1=theCookie.indexOf(";",ind+1);
		if (ind1==-1) ind1=theCookie.length;
		return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
	}
});