//in try 2, use the add and remove class instead of checking for html.

$(document).ready(function() {

  $('.btn').click(function() {
    location.reload();
  });
  // var box1 = $('#box1').click(function() {
  //   console.log("box 1 clicked")
  // });
  // var box1 = $('#box1').click(function() {
  //   console.log("box 1 clicked");
  // });
  // var box2 = $('#box2').click(function() {
  //   console.log("box 2 clicked");
  // });
  // var box3 = $('#box3').click(function() {
  //   console.log("box 3 clicked");
  // });
  // var box4 = $('#box4').click(function() {
  //   console.log("box 4 clicked");
  // });
  // var box5 = $('#box5').click(function() {
  //   console.log("box 5 clicked");
  // });
  // var box6 = $('#box6').click(function() {
  //   console.log("box 6 clicked");
  // });
  // var box7 = $('#box7').click(function() {
  //   console.log("box 7 clicked");
  // });
  // var box8 = $('#box8').click(function() {
  //   console.log("box 8 clicked");
  // });
  // var box9 = $('#box9').click(function() {
  //   console.log("box 9 was clicked");
  // });

  //pair programming team: Kyle Russell & Kevin Tran
  var gameCounter = 0;

  //declare winning combinations
  var xWinRow1 = [$('#box1').text() === 'X' && $('#box2').text() === 'X' && $('#box3').text() === 'X'];
  var xWinRow2 = [$('#box4').text() === 'X' && $('#box5').text() === 'X' && $('#box6').text() === 'X'];
  var xWinRow3 = [$('#box7').text() === 'X' && $('#box8').text() === 'X' && $('#box9').text() === 'X'];
  var xWinCol1 = [$('#box1').text() === 'X' && $('#box4').text() === 'X' && $('#box7').text() === 'X'];
  var xWinCol2 = [$('#box2').text() === 'X' && $('#box5').text() === 'X' && $('#box8').text() === 'X'];
  var xWinCol3 = [$('#box3').text() === 'X' && $('#box6').text() === 'X' && $('#box9').text() === 'X'];
  var xWinDia1 = [$('#box1').text() === 'X' && $('#box5').text() === 'X' && $('#box9').text() === 'X'];
  var xWinDia2 = [$('#box3').text() === 'X' && $('#box5').text() === 'X' && $('#box7').text() === 'X'];

  var oWinRow1 = [$('#box1').text() === 'O' && $('#box2').text() === 'O' && $('#box3').text() === 'O'];
  var oWinRow2 = [$('#box4').text() === 'O' && $('#box5').text() === 'O' && $('#box6').text() === 'O'];
  var oWinRow3 = [$('#box7').text() === 'O' && $('#box8').text() === 'O' && $('#box9').text() === 'O'];
  var oWinCol1 = [$('#box1').text() === 'O' && $('#box4').text() === 'O' && $('#box7').text() === 'O'];
  var oWinCol2 = [$('#box2').text() === 'O' && $('#box5').text() === 'O' && $('#box8').text() === 'O'];
  var oWinCol3 = [$('#box3').text() === 'O' && $('#box6').text() === 'O' && $('#box9').text() === 'O'];
  var oWinDia1 = [$('#box1').text() === 'O' && $('#box5').text() === 'O' && $('#box9').text() === 'O'];
  var oWinDia2 = [$('#box3').text() === 'O' && $('#box5').text() === 'O' && $('#box7').text() === 'O'];

  //combine winning combinations into one variable
  var xWins = (xWinRow1 || xWinRow2 || xWinRow3 || xWinCol1 || xWinCol2 || xWinCol3 || xWinDia1 || xWinDia2);
  var oWins = (oWinRow1 || oWinRow2 || oWinRow3 || oWinCol1 || oWinCol2 || oWinCol3 || oWinDia1 || oWinDia2);

  //function for alternating between X and O
  $('.box').click(function() {
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
  })
  
  //function to declare winner
  if (xWins === true) {
    alert ('Player X wins!');
  } else if (oWins === true) {
    alert ('Player O wins!');
  } else {
  }
});
