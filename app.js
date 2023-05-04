/* eslint-disable func-names */
/* eslint-disable no-undef */
// $('img').click(function () {
//   alert('HELLO!')
// })

$('img').on('mouseenter', function () {
  $(this).css('border', '10px solid purple');
});

$('img').on('click', function () {
  // $(this).fadeOut(3000, function () {
  //   $(this).remove()
  // })
  $(this).animate({
    opacity: 0,
    width: '50px', // DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
  }, 3000, function () {
    $(this).remove();
  });
});

$('#add-input').on('click', () => {
  $('form').append('<input type="text"/>');
});

$('form').on('focus', 'input', function () {
  $(this).val('BAMBOOZLED');
});

// Using TEXT()
$('h1'); // returns the h1
$('h1').text(); // returns the text inside the h1
$('h1').text('New Text!!!'); // changes the text inside the h1
$('ul').text(); // returns all the text inside the ul

// Using HTML()
$('li'); // returns all the li's
$('li').text('Have@#'); // changes the text inside all the li's