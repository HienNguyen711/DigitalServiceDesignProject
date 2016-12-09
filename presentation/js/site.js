

function render(slide) {
	var div = document.createElement("div");
	div.className = "col-md-4 col-sm-6 col-xs-12";
	div.innerHTML += "<a class='cell' href='slides/" + slide.file + "#/'>" +
		"<div class='cell-thumbnail' style='background-image: url(\"" + slide.screenshot + "\");'></div>" +
		"<div class='cell-title'>" + slide.name + "</div>" + "</a>";
	div.setAttribute("data-name", slide.name);
	return div;
}

var container = document.getElementById("list");
var divs = [];
slides.forEach(function (slide) {
	var div = render(slide);
	container.appendChild(div);
	divs.push(div);
});

var timeout;
document.getElementById("txtSearch").addEventListener("keyup", function () {
	clearTimeout(timeout);
	var value = this.value.toLowerCase();
	timeout = setTimeout(function () {
		for (var i = 0, len = divs.length; i < len; i++) {
			var div = divs[i];
			var curVal = div.getAttribute("data-name").toLowerCase();
			if (curVal.indexOf(value) !== -1 || value === "") div.style.display = "block";
			else div.style.display = "none";
		}
	}, 10)
})