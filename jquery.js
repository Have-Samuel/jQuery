// Remove the Last Pararaph
$(() => {
  console.log('Let\'s get ready to party with jQuery!');

  // Adds the class orange to the last item in the list
  $('img').addClass('image-center'); // Adds the class image-center to the img
  // Removes the last paragraph
  $('article p.last-child').remove(); // Removes the last paragraph
  // $('p').last().remove(); // Last paragraph is removed

  // Resizing the title
  // const heading = {
  //   fontSize: '3em',
  //   color: 'magenta',
  //   backgroundColor: 'teal',
  //   padding: '2rem',
  //   borderRadius: '0.5rem',
  //   'text-shadow': '0.1rem 0.1rem 0.2rem black',
  // };

  $('#title').css('font-size', Math.random() * 100);

  // $('h1').css(heading);

  const aside = {
    text: 'Sorry About the exisiting content!',
  };

  $('aside').val(aside);
});