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



// Function to wrap all code in so it doesn't run until the browser has loaded
$(document).ready(function() {

// Sets the current date and adds it to the header.
let date = today.format("dddd, MMMM D, YYYY");
currentDay.append(date)



// Sets class for #9am according to current time
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

// Sets class for #10am according to current time
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

// Sets class for #11am according to current time
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

// Sets class for #12pm according to current time
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

// Sets class for #1pm according to current time
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

// Sets class for #2pm according to current time
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

// Sets class for #3pm according to current time
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

// Sets class for #4pm according to current time
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

// Sets class for #5pm according to current time
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
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("9am", JSON.stringify(userInput));
});

// Gets local storage for 9am description
function getAm9Description() {
  let storedValue = JSON.parse(localStorage.getItem("9am"));
  let displayEl = $("#9am").find(".description");
  $(displayEl).val(storedValue);
}
getAm9Description();

// Sets local storage for saving 10am description
$("#10am").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("10am", JSON.stringify(userInput));
});

// Gets local storage for 10am description
function getAm10Description() {
  let storedValue = JSON.parse(localStorage.getItem("10am"));
  let displayEl = $("#10am").find(".description");
  $(displayEl).val(storedValue);
}
getAm10Description();

// Sets local storage for saving 11am description
$("#11am").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("11am", JSON.stringify(userInput));
});

// Gets local storage for 11am description
function getAm11Description() {
  let storedValue = JSON.parse(localStorage.getItem("11am"));
  let displayEl = $("#11am").find(".description");
  $(displayEl).val(storedValue);
}
getAm11Description();

// Sets local storage for saving 12pm description
$("#12pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("12pm", JSON.stringify(userInput));
});

// Gets local storage for 12pm description
function getPm12Description() {
  let storedValue = JSON.parse(localStorage.getItem("12pm"));
  let displayEl = $("#12pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm12Description();

// Sets local storage for saving 1pm description
$("#1pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("1pm", JSON.stringify(userInput));
});

// Gets local storage for 1pm description
function getPm1Description() {
  let storedValue = JSON.parse(localStorage.getItem("1pm"));
  let displayEl = $("#1pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm1Description();

// Sets local storage for saving 2pm description
$("#2pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("2pm", JSON.stringify(userInput));
});

// Gets local storage for 2pm description
function getPm2Description() {
  let storedValue = JSON.parse(localStorage.getItem("2pm"));
  let displayEl = $("#2pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm2Description();

// Sets local storage for saving 3pm description
$("#3pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("3pm", JSON.stringify(userInput));
});

// Gets local storage for 3pm description
function getPm3Description() {
  let storedValue = JSON.parse(localStorage.getItem("3pm"));
  let displayEl = $("#3pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm3Description();

// Sets local storage for saving 4pm description
$("#4pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("4pm", JSON.stringify(userInput));
});

// Gets local storage for 4pm description
function getPm4Description() {
  let storedValue = JSON.parse(localStorage.getItem("4pm"));
  let displayEl = $("#4pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm4Description();

// Sets local storage for saving 5pm description
$("#5pm").find(".saveBtn").on("click", function() {
  let userInput = $(this).siblings(".description").val();
  localStorage.setItem("5pm", JSON.stringify(userInput));
});

// Gets local storage for 5pm description
function getPm5Description() {
  let storedValue = JSON.parse(localStorage.getItem("5pm"));
  let displayEl = $("#5pm").find(".description");
  $(displayEl).val(storedValue);
}
getPm5Description();

})
