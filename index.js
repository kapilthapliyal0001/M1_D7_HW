


// <!-- /* EXERCISE 1
// Write a function for changing the title of the document in something else.
// */

// const changeTitle = function (newTitle) {
//   //
// };

const changeTitle = function(newTitle) {
    document.title = newTitle;
}
changeTitle("Kapil Worksheet!");


// /* EXERCISE 2
// Write a function for changing the class of the title of the page in "myHeading".
// */

// const addClassToTitle = function () {
//   //
// };

const addClassToTitle = function() {
    document.querySelector("h1").classList.add = "myHeading";
}

addClassToTitle();


// /* EXERCISE 3
// Write a function for changing the text of only the p which are children of a div.
// */

// const changePcontent = function () {
//   //
// };

const changePcontent = function(text) {
    document.querySelector("div p").innerText = text;
}

changePcontent("The Paragraph has been changed !")



// /* EXERCISE 4
// Write a function for changing the destination of every link to https://www.google.com
// */

// const changeUrls = function () {
//   //
// };

const changeURL = function() {
    document.getElementsByTagName("a").href = "https://www.google.com/";
    console.log(document.getElementsByTagName("a")[0]);
}
changeURL();

// /* EXERCISE 5
//  Write a function for adding a new item in the second list.
//  */

// const addToTheSecond = function (content) {
//   //
// };

const addToTheSecond = function(content) {
    let new_list_item = document.createElement("li");
    new_list_item.innerText = content;

    let parent_element = document.getElementsByTagName("ul")[1];
    parent_element.appendChild(new_list_item);
}

addToTheSecond("This is an extra  4th list item added !");

// /* EXERCISE 6
// Write a function for adding a second paragraph to the div.
// */

// const addParagraph = function (content) {
//   //
// };

// /* EXERCISE 7
// Write a function for making the first UL disappear.
// */

// const firstUlDisappear = function () {
//   //
// };

// /* EXERCISE 8
// Write a function for making the background of every UL green.
// */

// const paintItGreen = function () {
//   //
// };

// /* EXERCISE 9
// Make the heading of the page change color every time the user clicks on it.
// */

// const makeItClickable = function () {
//   //
// };

// /* EXERCISE 10
// Change the footer text with something else when the user clicks on it.
// */

// const changeFooterText = function () {
//   //
// };

// /* EXERCISE 11
// Attach an event listener to the input field in the page for console logging its value just after any keystroke.
// */

// const inputField = document.getElementById("input-field");
// // ...

// /* EXERCISE 12
// Create a new welcome alert message when the page successfully loads.
// */

// window.onload = function () {
//   //
// };

// /* EXERCISE 13
// Use HTML5 tags to divide the content of the page in a more semantic way. 