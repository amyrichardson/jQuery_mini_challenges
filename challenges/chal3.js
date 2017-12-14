/*
    Our peom is broken!
    Update these lines:
    Line 5: 'They celebrate week-ends all the week.'
    Line 10: 'They go to the bathroom on roller skates.'
*/

$(document).ready(readyNow);

function readyNow() {
  //In the appendDom function, we will return the main DIV we create and
  //store it in a variable that we later pass into another function.
  //This is so we have access to that DIV in another Scope to make corrections
  //to it.
  var $el = appendDom();
  fixDom($el);
}

// Do not modify this function!
function appendDom(){
  $header = $('<h1>Correct the Poem - DOM Traversal</h1>');
  $('.container').append($header);

  $('.container').append('<div></div>');
  var $el = $('.container').children().last();
  $el.append('<p>The people upstairs all practise ballet</p>');
  $el.append('<p>Their living room is a bowling alley</p>');
  $el.append('<p>Their bedroom is full of conducted tours.</p>');
  $el.append('<p>Their radio is louder than yours,</p>');
  $el.append('<p>They ....</p>');
  $el.append('<p>When they take a shower, your ceilings leak.</p>');
  $el.append('<p>They try to get their parties to mix</p>');
  $el.append('<p>By supplying their guests with Pogo sticks,</p>');
  $el.append('<p>And when their fun at last abates,</p>');
  $el.append('<p>They ....</p>');
  $el.append('<p>I might love the people upstairs more</p>');
  $el.append('<p>If only they lived on another floor.</p>');
  //Here we Return the DIV container that holds all the P tags.
  return $el;
}

function fixDom($el){
  // YOUR CODE HERE
  $(($el).children().get(4)).text('They celebrate week-ends all the week.');
  $(($el).children().get(9)).text('They go to the bathroom on roller skates.');
  // What is $el?
}
