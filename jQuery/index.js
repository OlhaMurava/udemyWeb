
$('h1').addClass('big-title margin-50');

$('h1').text('Bye');

$('button').html("<em>Don't click me</em>");

$('a').attr('href', 'https://www.yahoo.com');

$('h1').click(function() {
    $('h1').css('color', 'purple');
});


$('button'). click(function () {
    $('h1').fadeToggle().animate({opacity: 0.5});
})

$('input').keypress(function(event) {
    console.log(event.key);
})

$(document).keypress(function(event) {
    $('h1').text(event.key);
})

$('h1').on('mouseover', function() {
    $('h1').css('font-size', '200px');
});