$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      alert('hi');
    $("ul#webpage").children("li").first().click(function() {
        alert('hi');                
    });  
  });
});

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });
});

$(document).ready(function() {

  $("div#click-one").click(function(event) {
    const whatToSay = "Hello!";
    alert(whatToSay);
  });

  $("div#click-two").click(function(event) {
    alert(whatToSay);
  });

  $("div#salad").click(function(event) {
    const salad = "salad";
    alert(salad);
  })
});

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const favFood = ("input#Favfood").val();
    const favAnimal = ('input#favAnimal').val();
    const favHobby = ('input#favHobby').val();
    const favNumber = ('input#favNumber').val();

    const favArray = ['favFood' , 'favAnimal' , 'favHobby' , 'favNumber' ]
    console.log(favArray);
  });
});  