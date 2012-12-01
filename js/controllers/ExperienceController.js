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
	tmpl: "<li><strong><%=title%></strong>, <%=desc%> years</li>"
});