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




  $('#box1').on('click', function () {
    $(this).text('X');
  });

  $('.btn').click(function() {
    location.reload();
  });
});
