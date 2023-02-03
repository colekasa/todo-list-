$(document).ready (function() {
  // This code allows you to see the current day, year, and time 
var today = dayjs()
$('#currentDay').text(today.format('MMM D, YYYY, h:mm'));


var savBtn = document.querySelector('.saveBtn')
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //HOW DO I SELECT THE HOUR ID?
  // var hourAttr = time-block (class) getAttribute(timeOfDay)
  // Use the class time-block because that is what we are attributing the style too of background-color
 function saveClick(){
  var btnInput = $(this).parents('div').first().attr('id')
  var textInput = $(this).siblings('.description').val()
  localStorage.setItem(btnInput, textInput)
  
 }
  
  $(".time-block").each(function(){

    var timeNumber = parseInt(($(this).attr("id")))
   
    var currentTime = dayjs().format('HH')
    console.log(currentTime)


  if (timeNumber == currentTime) {
      $(this).addClass("present");
  }else if (timeNumber < currentTime) {
      $(this).addClass("past");
  }else if (timeNumber > currentTime) {
      $(this).addClass("future");
  }
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

});

