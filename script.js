// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// time/date auto update
$(document).ready(function() {
  function timeMachine(){
    var time = dayjs().format('ddd, MMM D, YYYY h:mm A');
    $('#currentDay').text(time);
  }
  timeMachine();
  setInterval(timeMachine, 1000);
});

// save task with savebtn and targeting to save description
$(document).ready(function(){
  // grabs all .saveBtn
  const saveButtons = document.querySelectorAll('.saveBtn')
  // loops through each to find an event listner
  saveButtons.forEach(function (saveButtons){
    saveButtons.addEventListener('click', function(){
      // grabs associated data
      const task = $(this).siblings('.description').val();
      const block = $(this).parent().attr('id');
      // sets data to storage
      localStorage.setItem(block, task);
      // logs the goods
      console.log(block, task);
    
    });
  });
});

// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour

//Applies apply the past, present, or future class css
$(document).ready(function () {
  // Const 24hr day value
  const now = dayjs().hour();
  const blocker = $('.time-block')
  blocker.each(function() {
    // compares time block to now, adds/removes classes depending on time
    const timeBlock = parseInt($(this).attr('id').split('-')[1]);
    if (timeBlock < now){
      $(this).addClass('past').removeClass('present future');
    } else if ( timeBlock === now) {
      $(this).addClass('present').removeClass('past future');
    } else if (timeBlock > now){
      $(this).addClass('future').removeClass('past present');
    }
  });
});
 

// get any user input that was saved in localStorage and set by hour block
const hour9 = localStorage.getItem('');
$('#hour-9 .description').val(hour9);

const hour10 =localStorage.getItem('');
$('#hour-10 .description').val(hour10);

const hour11 =localStorage.getItem('');
$('#hour-11 .description').val(hour11);

const hour12 =localStorage.getItem('');
$('#hour-12 .description').val(hour12);

const hour13 =localStorage.getItem('');
$('#hour-13 .description').val(hour13);

const hour14 =localStorage.getItem('');
$('#hour-14 .description').val(hour14);

const hour15 =localStorage.getItem('');
$('#hour-15 .description').val(hour15);

const hour16 =localStorage.getItem('');
$('#hour-16 .description').val(hour16);

const hour17 =localStorage.getItem('');
$('#hour-17 .description').val(hour17);

  // COMPLETED: Add code to display the current date in the header of the page.

  // COMPLETED: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // COMPLETED: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // COMPLETED: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


