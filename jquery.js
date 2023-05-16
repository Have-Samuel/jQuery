/* eslint-disable no-undef */
$(() => {
  console.log('Let\'s get ready to party with jQuery!');

  // Add 'image-center' to the Image
  $('article img').addClass('image-center');

  // Remove last paragraph
  $('article p:last-child').remove();

  // Change font size of title
  $('#title').css('font-size', Math.random() * 100);

  // Add an item to the list
  $('ol').append('<li>My Name is Alokaloka</li>').css('color', 'green');

  // Empty the aside and add a new h2
  $('aside').empty().append('<h2>Sorry About The Previous Text!!</h2>');
});