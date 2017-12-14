/*
  Appending to the DOM. Take input from an input field
  and display it on the DOM.
*/
$(document).ready(readyNow);

function readyNow(){
  appendDom();
  $('#submitBtn').on('click', addClickHandlers);

}

// You should not need to modify this function
function appendDom(){
  // Create a header
  $header = $('<h1>Student List - Text Input</h1>');
  $('.container').append($header);

  // Create a text input
  $inputBox = $('<input type="text" id="studentName" />');
  $('.container').append($inputBox);

  // Create a submit button
  $submitButton = $('<button id="submitBtn">Submit</button>');
  $('.container').append($submitButton);

  $studentList = $('<ul id="studentList"></ul>');
  $studentList.append('<li>Sample Student</li>');
  $('.container').append($studentList);
}


function addClickHandlers() {
  // YOUR CODE HERE
  var studentName = $('#studentName').val();
  $('#studentList').append('<li>' + studentName + '</li>');
  $('#studentName').val('');
  // When the submit button is clicked, the name from
  // the input box should appear in the student list.

}
