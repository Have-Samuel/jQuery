/* eslint-disable func-names */
/* eslint-disable no-undef */
// // $('img').click(function () {
// //   alert('HELLO!')
// // })

// $('img').on('mouseenter', function () {
//   $(this).css('border', '10px solid purple');
// });

// $('img').on('click', function () {
//   // $(this).fadeOut(3000, function () {
//   //   $(this).remove()
//   // })
//   $(this).animate({
//     opacity: 0,
//     width: '50px', // DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
//   }, 3000, function () {
//     $(this).remove();
//   });
// });

// $('#add-input').on('click', () => {
//   $('form').append('<input type="text"/>');
// });

// $('form').on('focus', 'input', function () {
//   $(this).val('BAMBOOZLED');
// });

// // Using TEXT()
// $('h1'); // returns the h1
// $('h1').text(); // returns the text inside the h1
// $('h1').text('New Text!!!'); // changes the text inside the h1
// $('ul').text(); // returns all the text inside the ul
// $('li'); // returns all the li's
// $('li').text('Have@#'); // changes the text inside all the li's

// // Using HTML()
// $('li').html(); // returns all the html inside the li's
// $('li').html('<b>BolDD!</b>'); // changes the html inside all the li's

// // Using ATTR()
// $('a').attr('href'); // returns the href of the first a tag
// $('a').attr('href', 'http://www.chichennuggets.com'); // changes the href of all a tags

// // Changing the img src to have one image
// // const attImgs = { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/La_R%C3%A9union_department_relief_location_map.jpg/512px-La_R%C3%A9union_department_relief_location_map.jpg ', alt: 'Lava Flow' };

// // $('img').attr(attImgs); // changes the src of all images

// // const attrImgs1 = { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reunion_2004_1.jpg/440px-Reunion_2004_1.jpg ', alt: 'Lava Flow' };

// // $('img').attr(attrImgs1); // changes the src of all images

// // Using VAL()
// $('input'); // returns all the inputs
// $('input').val(); // returns the value of the first input
// $('input').eq(0).val('BAMBOOZLED'); // changes the value of the first input
// $('input').val('Chicken Boyz For Life'); // changes the value of all inputs
// // $('input').val(''); // Resets the value of all inputs

// // Using CLASS() and CSS()
// const anotherStyle = {
//   color: 'magenta',
//   'font-size': '20px',
//   'text-shadow': '0 0 2px black',
//   'text-decoration': 'none',
//   border: '2px solid black',
//   padding: '2px',
//   margin: '10px',
//   'border-radius': '10px',
// };
// $('a').css(anotherStyle); // All links change
// // $('a').eq(3).css(anotherStyle); // Link change

// // Using ADDCLASS(), REMOVECLASS(), and TOGGLECLASS()
// $('h1').addClass('highlight'); // Takes Effect

// $('li').addClass('highlight');

// // removeClass
// // $('li').removeClass('highlight');
// // // Removes the class

// // toggleClass
// $('li').toggleClass('highlight');
// // Removes the class
// $('li').toggleClass('highlight');
// // Adds the class
// $('li').toggleClass('highlight');
// // Removes the class

// // Chaining Methods
// const $heading = $('h1');

// $heading.text('Chaining is funny in JQUERY')
// .addClass('highlight').css('background-color', 'teal');

// // Next, Previous, Parent
// const $specialLi = $('li').eq(3);

// $specialLi.next(); // Gives the next element

// $specialLi.prev(); // Gives the previous element

// // Parent Method
// $specialLi.parent(); // Returns the parent UL

// // $('ul');
// // li.toclevel-1.tocsection-1
// // li.toclevel-1.tocsection-2
// // li.toclevel-1.tocsection-3
// // li.toclevel-1.tocsection-4
// // li.toclevel-1.tocsection-5
// // li.toclevel-1.tocsection-6
// // li.toclevel-1.tocsection-7

// $('ul').children('li');
// $('ul').children('a'); // Returns nothing

// // We Use Find() Method to find the a tags inside the li's
// $('ul').find('a'); // Returns all the a tags inside the li's

// // Append, Prepend
// $('ul').append('<li class="highlight">I am the last li</li>');
// Adds the li to the end of the ul

// // select all li's and append a checkbox
// $('li').append('<input type="checkbox">'); // Adds the checkbox to the end of the li

// // select all li's and prepend a checkbox
// $('li').prepend('<input type="checkbox">'); // Adds the checkbox to the beginning of the li

// // Using appendTo() and prependTo();
// $('<h1>THIS IS A NEW H1</h1>').css('color', 'navy').appendTo('p');
// Adds the h1 to the end of the p

// // After
// $('li').after('<bold>Hello!</bold>'); // Adds the bold after each li
// // Before
// $('li').before('<bold>Crazy!</bold>'); // Adds the bold before each li

// // Remove
// $('h1').remove(); // Removes the h1

// $('img').remove(); // Removes all the imgs

// EVENTS
// IN-BUILT-CLICK METHOD
// $('img').click(function () {
//   alert('Hello!'); // Alerts Hello! when the img is clicked
// });

// $('img').on('mouseenter', function() {
//   console.log('Mouse Enter!');  // Logs Mouse Enter! when the mouse enters the img
// });

// Using THIS
// $('img').on('mouseleave', function () {
//   $(this).css('border', '4px solid purple');
// });

// // $('img').on('mouseleave', function () {
// //   $(this).remove();
// // });

// // Adding Events
// $('#add-input').on('click', function () {
//   $('form').append('<input type="text"/>');
// });

// // Changing the Input word on focus
// $('input').on('focus', function () {
//   $(this).val('ALOKALOKA');
// });

// // Event Delegation
// $('form').on('focus', 'input', function () {
//   $(this).val('ALOKALOKA');
// });

// // FADEOUT, FADEIN
// // $('img').on('click', function () {
// //   $(this).fadeOut(5000, function () {
// //     $(this).remove();
// //   });
// // });

// // ANIMATE
// $('img').on('click', function () {
//   $(this).animate({
//     opacity: 0.25,
//     // width: '50%',
//     // height: '50%',
//   }, 2000, function () {
//     $(this).remove();
//   });
// });