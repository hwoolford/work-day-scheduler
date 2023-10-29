// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

// });

// Global variables
const today = dayjs();
let todayCl = today.clone()
let currentDay = $('#currentDay');
const am9 = $('#9am');
const am10 = $('#10am');
const am11 = $('#11am');
const pm12 = $('#12pm');
const pm13 = $('#1pm');
const pm14 = $('#2pm');
const pm15 = $('#3pm');
const pm16 = $('#4pm');
const pm17 = $('#5pm');
const userInput = $('.description')



$(document).ready(function() {

// Sets the current date and adds it to the header.
let date = today.format("dddd, MMMM D, YYYY");
currentDay.append(date)


// Sets class according to current time
function checkTime9() {
  let now = todayCl.set("hour", 9)
    if (now < todayCl) {
      am9.addClass('row time-block past')
    } else if (now > todayCl) {
      am9.addClass('row time-block future')
    } else {
      am9.addClass('row time-block present')
    }
}
checkTime9()

function checkTime10() {
  let now = todayCl.set("hour", 10)
    if (now < todayCl) {
      am10.addClass('row time-block past')
    } else if (now > todayCl) {
      am10.addClass('row time-block future')
    } else {
      am10.addClass('row time-block present')
    }
}
checkTime10()

function checkTime11() {
  let now = todayCl.set("hour", 11)
    if (now < todayCl) {
      am11.addClass('row time-block past')
    } else if (now > todayCl) {
      am11.addClass('row time-block future')
    } else {
      am11.addClass('row time-block present')
    }
}
checkTime11()

function checkTime12() {
  let now = todayCl.set("hour", 12)
    if (now < todayCl) {
      pm12.addClass('row time-block past')
    } else if (now > todayCl) {
      pm12.addClass('row time-block future')
    } else {
      pm12.addClass('row time-block present')
    }
}
checkTime12()

function checkTime13() {
  let now = todayCl.set("hour", 13)
    if (now < todayCl) {
      pm13.addClass('row time-block past')
    } else if (now > todayCl) {
      pm13.addClass('row time-block future')
    } else {
      pm13.addClass('row time-block present')
    }
}
checkTime13()

function checkTime14() {
  let now = todayCl.set("hour", 14)
    if (now < todayCl) {
      pm14.addClass('row time-block past')
    } else if (now > todayCl) {
      pm14.addClass('row time-block future')
    } else {
      pm14.addClass('row time-block present')
    }
}
checkTime14()

function checkTime15() {
  let now = todayCl.set("hour", 15)
    if (now < todayCl) {
      pm15.addClass('row time-block past')
    } else if (now > todayCl) {
      pm15.addClass('row time-block future')
    } else {
      pm15.addClass('row time-block present')
    }
}
checkTime15()

function checkTime16() {
  let now = todayCl.set("hour", 16)
    if (now < todayCl) {
      pm16.addClass('row time-block past')
    } else if (now > todayCl) {
      pm16.addClass('row time-block future')
    } else {
      pm16.addClass('row time-block present')
    }
}
checkTime16()

function checkTime17() {
  let now = todayCl.set("hour", 17)
    if (now < todayCl) {
      pm17.addClass('row time-block past')
    } else if (now > todayCl) {
      pm17.addClass('row time-block future')
    } else {
      pm17.addClass('row time-block present')
    }
}
checkTime17()

// Sets local storage for saving 9am description
$("#9am").find(".saveBtn").on("click", function() {
  let inputValue = $(".description").val();
  localStorage.setItem("9am", JSON.stringify(inputValue));
});

// Gets local storage for 9am description
function getDescription() {
  let storedValue = JSON.parse(localStorage.getItem("9am"));
}


})
