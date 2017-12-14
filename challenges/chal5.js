/*
  HARD MODE: Display all of the pets on the page.

  PRO MODE: Add an input field that allows users
  to add new pets from the index page.

  PRO MODE #2: Add a button that clears out the
  list of pets.
*/

var Pet = function(nameIn, typeIn, ageIn) {
  this.name = nameIn;
  this.age = ageIn;
  this.type = typeIn;
};

// Feel free to add more data here
var petOne = new Pet('Charlie', 'dog', 6);
var petTwo = new Pet('Thorin', 'rabbit', 4);
var petThree = new Pet('#petName');
var pets = [petOne, petTwo];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
  $('#createPet').on('click', createNewPet );
  appendPetArray();
  $('#resetButton').on('click', resetPets);
}

function appendDom(){
  // Create a header
  $header = $('<h1>List of Pets - Loop and Append</h1>');
  $('.container').append($header);
  $('.container').append('<input type="text" id="petName" placeholder="Pet Name" />');
  $('.container').append('<input type="text" id="petType" placeholder="Pet Type"/>');
  $('.container').append('<input type="text" id="petAge" placeholder="Pet Age"/>');
  $('.container').append('<button id="createPet">Create Pet!</button>');
  $('.container').append('<button id="resetButton">CLEAR PETS :(</button>');
  $table = $('<table></table>');
  $table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  $tbody = $('<tbody id="tableBody"></tbody>');
  $table.append($tbody);

  $('.container').append($table);

  // YOUR CODE HERE

  // Display each of the pets on the DOM.
}

function appendPetArray (pet) {
  for (var i = 0; i < pets.length; i++) {
  $('#tableBody').append('<td>' + pets[i].name + '</td>');
  $('#tableBody').append('<td>' + pets[i].type + '</td>');
  $('#tableBody').append('<td>' + pets[i].age + '</td>');
  $('#tableBody').append('<tr></tr>');

}
}

function createNewPet () {
  var petName = $('#petName').val();
  var petType = $('#petType').val();
  var petAge = $('#petAge').val();
  $('input').val('');
  $('#tableBody').append('<td>' + petName + '</td>');
  $('#tableBody').append('<td>' + petType + '</td>');
  $('#tableBody').append('<td>' + petAge + '</td>');
  $('#tableBody').append('<tr></tr>');
}

function resetPets(){
  $('#tableBody').empty();
}
