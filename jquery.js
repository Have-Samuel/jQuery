$(() => {
  console.log('Let\'s get ready to party with jQuery!'); // Logs Let's get ready to party with jQuery!

  $('img').addClass('image-center '); // Adds the class image-center to the img

  $('article p:last-child').remove(); // Removes the last p tag

  $('#title').css('font-size', Math.random() * 100);

  $('ol').append('<li>It\'s Coll Working With JQuery!</li>');

  $('ol').css('background-color', '#ccc');

  $('aside').empty().append('<p>paragraph in it apologizing for the list\'s existence</p>')
    .css('color', 'red');

  $('img').on('click', function () {
    $(this).animate({
      opacity: 0.25,
      height: 'toggle',
    }, 2000, function () {
      $(this).remove();
    });
  });

  // When you change the numbers in the three inputs on the bottom,
  // the background color of the body should change to match whatever
  // the three values in the inputs are.
  $('#form-js').on('focus', 'input', function () {
    const red = $('.form-control').eq(0).val();
    const green = $('.form-control').eq(1).val();
    const blue = $('.form-control').eq(2).val();
    $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
  });
});
