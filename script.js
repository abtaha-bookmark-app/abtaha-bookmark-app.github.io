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

const isValidUrl = string => {
  let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  
  if (res != null){
    return res;
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

	let url = isValidUrl(linkInput.value);
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
