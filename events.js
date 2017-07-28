// console.log("events.js");


// ********** CREATE VARIABLES FOR ELEMENTS TO BE ALTERED ********** //

var articleSections = document.getElementsByClassName("article-section");
var pageButtons = document.getElementsByTagName("button");

// ********** ADD EVENT LISTENERS FOR ARTICLE SECTION CLICK AND DISPLAY TEXT ********** //

for (let i = 0; i < articleSections.length; i++) {
	articleSections.item(i).addEventListener("click", function() {
		document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section!`;
	});
}

// ********** EVENT LIST. AND FUNCTIONS FOR MOUSE ACTION ON H1 ********** //

document.querySelector("h1").addEventListener("mouseover", function() {
	document.getElementById("output-target").innerHTML = `You moved your mouse over the header!`;
});

document.querySelector("h1").addEventListener("mouseleave", function() {
	document.getElementById("output-target").innerHTML = `You left me!!`;
});

// ********** EVENT LIST. AND FUNCTION FOR KEYPRESS ECHO ON DOM ********** //

document.getElementById("keypress-input").addEventListener("keyup", function() {
	document.getElementById("output-target").innerHTML = `${event.target.value}`;
});

// ********** FUNCTIONALITY FOR HTML PAGE BUTTONS ********** //

let theGuineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function() {
	theGuineaPig.classList.toggle("addColor");
});

document.getElementById("make-large").addEventListener("click", function() {
	theGuineaPig.classList.toggle("hulkify");
});

document.getElementById("add-border").addEventListener("click", function() {
	theGuineaPig.classList.toggle("capture");
});

document.getElementById("add-rounding").addEventListener("click", function() {
	theGuineaPig.classList.toggle("rounded");
});

// ********** LOOP THROUGH SECTIONS TO APPLY CLASSES TO FIRST AND LAST SEC. ********** //

for (let j = 0; j < articleSections.length; j++) {
	if (j === 0) {
		articleSections.item(j).classList.add("boldText");
	}
	if (j === articleSections.length - 1) {
		articleSections.item(j).classList.add("boldAndItalText");
	}
} 

// ********** APPEND DIV ELEMENTS TO BUTTON ELEMENTS ********** //

for  (let k = 0; k < pageButtons.length; k++) {
	var createDiv = document.createElement("div");
	pageButtons.item(k).parentNode.insertBefore(createDiv, pageButtons.item(k));
	createDiv.appendChild(pageButtons.item(k));

}
