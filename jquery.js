$(function () {
  console.log('Let\'s get ready to party with jQuery!'); // Logs Let's get ready to party with jQuery!

  $('img').addClass('image-center '); // Adds the class image-center to the img

  $('article p:last-child').remove(); // Removes the last p tag

  $('#title').css('font-size', Math.random() * 100);

  $('ol').append('<li>It\s Coll Working With JQuery!</li>');

  $('ol').css('background-color', '#ccc');

  $('aside').html('<p>paragraph in it apologizing for the list\'s existence</p>').css('font-size', '3rem', 'color', 'red');

  $('.form-control').on('focus', function () {
    const red = $('.form-control').eq(0).val();
    const blue = $('.form-control').eq(1).val();
    const green = $('.form-control').eq(2).val();
    $('body').css('background-color', `rgb(${red}, ${blue}, ${green})`);
  });

  $('img').on('click', function () {
    $(this).animate({
      opacity: 0.25,
      height: 'toggle'
    }, 2000, function () {
      $(this).remove();
    });
    });
});
