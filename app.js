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
$('li'); // returns all the li's
$('li').text('Have@#'); // changes the text inside all the li's

// Using HTML()
$('li').html(); // returns all the html inside the li's
$('li').html('<b>BolDD!</b>'); // changes the html inside all the li's

// Using ATTR()
$('a').attr('href'); // returns the href of the first a tag
$('a').attr('href', 'http://www.chichennuggets.com'); // changes the href of all a tags

// Changing the img src to have one image
// const attImgs = { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/La_R%C3%A9union_department_relief_location_map.jpg/512px-La_R%C3%A9union_department_relief_location_map.jpg ', alt: 'Lava Flow' };

// $('img').attr(attImgs); // changes the src of all images

// const attrImgs1 = { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reunion_2004_1.jpg/440px-Reunion_2004_1.jpg ', alt: 'Lava Flow' };

// $('img').attr(attrImgs1); // changes the src of all images


// Using VAL()
$('input'); // returns all the inputs
$('input').val(); // returns the value of the first input
$('input').eq(0).val('BAMBOOZLED'); // changes the value of the first input
$('input').val(''); // changes the value of all inputs to empty string

// Using CLASS() and CSS()
const anotherStyle = { color: 'magenta', 'font-size': '20px', 'text-shadow': '1px 1px 1px red' };

$('a').css(anotherStyle); // Links change

// addClass
$('h1').addClass('highlight'); // Takes Effect

$('li').addClass('highlight');

// removeClass
$('li').removeClass('highlight');