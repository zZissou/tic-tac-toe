// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

//store id when clicked,
  //create for function store click as i when i = 0 i++ if odd, its adds X text to id. If even, adds Y text to id.


  // for (var i = 0; i < 10; i++) {
  //   .onclick
  //   if #box has text {
  //     "DON'T LET IT WORK"
  //   } else if (i % 2 === 0) {
      // $('#box1').on('click', function () {
      //   $(this).text('X');
    // } else {
    //   $('#box1').on('click', function () {
    //     $(this).text('O');
    // }
    //
    // .hasClass();
  //
  //
  // $('#box1').on('click', function () {
  //   $(this).text('X');
  // });

  $('.btn').click(function() {
    location.reload();
  });

  var box1 = $('#box1').click(function() {
    console.log("box 1 clicked")
  });

  var box1 = $('#box1').click(function() {
    console.log("box 1 clicked");
  });
  var box2 = $('#box2').click(function() {
    console.log("box 2 clicked");
  });
  var box3 = $('#box3').click(function() {
    console.log("box 3 clicked");
  });
  var box4 = $('#box4').click(function() {
    console.log("box 4 clicked");
  });
  var box5 = $('#box5').click(function() {
    console.log("box 5 clicked");
  });
  var box6 = $('#box6').click(function() {
    console.log("box 6 clicked");
  });
  var box7 = $('#box7').click(function() {
    console.log("box 7 clicked");
  });
  var box8 = $('#box8').click(function() {
    console.log("box 8 clicked");
  });
  var box9 = $('#box9').click(function() {
    console.log("box 9 was clicked");
  });

//pair programming team: Kyle Russell & Kevin Tran
var gameCounter = 0;

//created function when user clicks
   $('.box').click(function(){
   if ($(this).html() === '') {
   for (var i = 0; i < 1; i++) {
     if (gameCounter % 2 === 0) {
       $(this).html('X');
       gameCounter++;
     } else {
       $(this).html('O');
       gameCounter++;
       }
     }
   }
 });
  //
  //
  // $('#box1').on('click', function () {
  //   $(this).text('X');
  // });
  //
  // $(box_).on('click', function () {
  //   $(this).text(XorO);
  //   if ()
  // });
});
