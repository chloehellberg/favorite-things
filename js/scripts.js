$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let favFood = $('input#favFood').val();
    let favAnimal = $('input#favAnimal').val();
    let favHobby = $('input#favHobby').val();
    let favNumber = $('input#favNumber').val();


    let favArray = [];
    favArray.push(favFood, favAnimal, favHobby, favNumber);
     console.log(favArray);


    $("#output").text(favArray);
    $("#answer").show(favArray);

  });
});  
