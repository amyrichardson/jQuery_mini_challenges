/*
  Add a DIV to the Container Class (a new DIV inside of the DIV that already exists).
  Inside the DIV, add a P tag that has your name
  Then add another P tag with the City you live in.
*/

$(document).ready(readyNow);

function readyNow(){
  // Call the append to dom function here

  // YOUR CODE HERE
  appendDom();
}

function appendDom(){
  //Write Append Dom Code Here
  $header = $('<h1>Patrick</h1>');
  $('.container').append($header);

  // YOUR CODE HERE
  $('.container').append('<p>Name: Amy</>');
  $('.container').append('<p>City: Blaine</>');
}
