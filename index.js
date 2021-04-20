


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

const addParagraph = function(content) {
    let new_para = document.createElement("p");
    new_para.innerText = content;

    let parent = document.querySelector("div");
    parent.appendChild(new_para);
}

addParagraph("This is an additional paragraph added as a part of the exercise !");

// /* EXERCISE 7
// Write a function for making the first UL disappear.
// */

// const firstUlDisappear = function () {
//   //
// };

const firstUlDisappear = function() {
    document.getElementsByTagName("ul")[0].style.display = "none";
    // console.log(document.getElementsByTagName("ul")[0]);
}

firstUlDisappear();

// /* EXERCISE 8
// Write a function for making the background of every UL green.
// */

// const paintItGreen = function () {
//   //
// };

const paintItGreen = function() {
    for (i = 0; i < (document.getElementsByTagName("ul").length); i++) {
        document.getElementsByTagName("ul")[i].style.backgroundColor = "green";
    }
}

paintItGreen();

// /* EXERCISE 9
// Make the heading of the page change color every time the user clicks on it.
// */

// const makeItClickable = function () {
//   //
// };
const makeItClickable = function() {
document.getElementsByTagName("h1")[0].addEventListener("click", function() {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    console.log(r, g, b);
    // console.log()
    // document.getElementsByTagName("h1")[0].style.color = `rgb(${r}','${g}','${b})`;
    document.getElementsByTagName("h1")[0].style.color = "rgb(" + r + "," + g + "," + b + ")"; 
    // var foo = 'bar';
    // console.log(`Let's meet at the ${foo}`);
})
};
makeItClickable();

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