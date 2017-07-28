console.log("events.js");

var articleSections = document.getElementsByClassName("article-section");
console.log("articleSections", articleSections);
var pageButtons = document.getElementsByTagName("button");
console.log("pageButtons", pageButtons);

for (let i = 0; i < articleSections.length; i++) {
	var articleText = articleSections.item(i).innerHTML;
	articleSections.item(i).addEventListener("click", function() {
		document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section!`;
	});
	console.log(articleText);
}

document.querySelector("h1").addEventListener("mouseover", function() {
	document.getElementById("output-target").innerHTML = `You moved your mouse over the header!`;
});

document.querySelector("h1").addEventListener("mouseleave", function() {
	document.getElementById("output-target").innerHTML = `You left me!!`;
});

document.getElementById("keypress-input").addEventListener("keyup", function() {
	console.log("event.target.value", event.target.value);
	document.getElementById("output-target").innerHTML = `${event.target.value}`;
});

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



// var tester = document.getElementsByClassName("article-section").classList.item(0);
// 	console.log(tester);

console.log(articleSections.length);

for (let j = 0; j < articleSections.length; j++) {
	console.log("j:", j);
	console.log("articleSections.item(j)", articleSections.item(j));
	console.log("the HTML", articleSections.item(j).innerHTML);

	if (j === 0) {
		console.log("j === 0");
		articleSections.item(j).classList.add("boldText");
	}

	if (j === articleSections.length - 1) {
		articleSections.item(j).classList.add("boldAndItalText");
	}
} 

console.log("pageButtons.length", pageButtons.length);


// var paraAfter = document.createElement("p");

for  (let k = 0; k < pageButtons.length; k++) {
	console.log("k:", k);
	console.log("pageButtons.item(k)", pageButtons.item(k));
	// document.pageButtons.item(k);
	// pageButtons.innerHTML += `<p>${pageButtons.innerHTML}</p>`

	var createDiv = document.createElement("div");
	pageButtons.item(k).parentNode.insertBefore(createDiv, pageButtons.item(k));
	createDiv.appendChild(pageButtons.item(k));

}

// for (var j = 0; j < articleSections.length; j++) {
// 	if (j = 0) {
// 		// articleSections.item(i).classList.add("boldText");
// 		console.log("test");
// 	}
// 	// articleSections.item(i).innerHTML;
// 	// articleSections.item(i).addEventListener("click", function() {
// 	// 	document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section!`;
// 	// });
// 	// console.log(articleText);
// }


// function printSection (event) {
	// console.log(event);
	// whichSection = event.target.innerHTML;
	// console.log("whichSection", whichSection);
// 	document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section!`;
// }

// function printLetter (event) {
// 	console.log("ham");
// 	console.log("event.target.value", event.target.value);
// 	document.getElementById("output-target").innerHTML = `${event.target.value}`;
// }

// function printMouseOverHeader (event) {
// 	document.getElementById("output-target").innerHTML = `You moved your mouse over the header`;
// }

// Requirements

// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// ✏️ Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
