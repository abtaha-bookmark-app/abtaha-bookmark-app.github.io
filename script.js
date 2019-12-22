let bookmarks = document.getElementById("lists").innerHTML;
let modal = document.getElementsByClassName("inputModal")[0];
let span = document.getElementsByClassName("close")[0];

let linkInput = document.getElementById("linkInput");
let nameInput = document.getElementById("nameInput");

if (localStorage.getItem("bookmarkApp") === "") {
	bookmarks = "";
} else {
	document.getElementById("lists").innerHTML = localStorage.getItem("bookmarkApp");
}

function addToDocument() {
	if (
		linkInput.value.replace(/\s+/g, "") != "" &&
		nameInput.value.replace(/\s+/g, "") != ""
	) {
		document.getElementById(
			"lists"
		).innerHTML += `<a href=http://${linkInput.value}>${nameInput.value}</a>`;

		localStorage.setItem("bookmarkApp", document.getElementById("lists").innerHTML);
	} else {
		alert("Please fill the Inputs");
		modal.style.display = "block";
	}
}

function addBookmark() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
	addToDocument();
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		addToDocument();
	}
};
