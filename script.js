let bookmarks = document.getElementById("lists").innerHTML;
let modal = document.getElementsByClassName("inputModal")[0];
let span = document.getElementsByClassName("close")[0];

let linkInput = document.getElementById("linkInput");
let nameInput = document.getElementById("nameInput");

if (localStorage.getItem("bookmarkApp") === "") {
	bookmarks = "";
} else {
	document.getElementById("lists").innerHTML = localStorage.getItem(
		"bookmarkApp"
	);
}

const isValidUrl = str => {
	regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	if (regexp.test(str)) {
		return str;
	} else {
		alert("Invalid URL");
		modal.style.display = "block";
		return false;
	}
};

function deleteBookmark(el) {
	el.parentElement.remove()
	localStorage.setItem(
		"bookmarkApp",
		document.getElementById("lists").innerHTML
	);
}

function addBookmark() {
	modal.style.display = "none";

	let url = isValidUrl("https://" + linkInput.value);
	let name = nameInput.value === "" ? url : nameInput.value;

	if (url) {
		document.getElementById(
			"lists"
		).innerHTML += `<div><a href=${url} target="_blank">${name}</a><span onclick="deleteBookmark(this)" class="close">&times;</span></div>`;

		localStorage.setItem(
			"bookmarkApp",
			document.getElementById("lists").innerHTML
		);
	}
}

const openModal = () => {
	modal.style.display = "block";
};

span.onclick = () => {
	modal.style.display = "none";
};

window.onclick = event => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
