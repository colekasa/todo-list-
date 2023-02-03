$(document).ready (function() {
  // This allows you to see the current day, year, and time 
var today = dayjs()
$('#currentDay').text(today.format('MMM D, YYYY, h:mm'));

var savBtn = document.querySelector('.saveBtn')
   
  $(".time-block").each(function(){

    var timeNumber = parseInt(($(this).attr("id")))
   
    var currentTime = dayjs().format('HH')

  if (timeNumber == currentTime) {
      $(this).addClass("present");
  }else if (timeNumber < currentTime) {
      $(this).addClass("past");
  }else if (timeNumber > currentTime) {
      $(this).addClass("future");
  }
  })

  $("button").on("click", function(){

    // Grab the Hour ID 
    var hourClick =  $(this).parent().attr("id")
    // Dom Traversal to the textarea input 
    var textInput = $(this).parent().find("textarea").val() 
    localStorage.setItem(hourClick, textInput)
    
  })

});

