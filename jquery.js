/* eslint-disable no-undef */
$(() => {
  console.log('Let\'s get ready to party with jQuery!');

  // Add 'image-center' to the Image
  $('article img').addClass('image-center');

  // Remove last paragraph
  $('article p:last-child').remove();
});