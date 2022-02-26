$('.burger-menu-container').on('click', function(){
  $('.header').toggleClass('willGrow ');
  $('.burger-menu').toggleClass('willChangeColor');
});

var imgCar = [
  "http://gratisography.com/pictures/pictures/347_1.jpg",
  "http://gratisography.com/pictures/pictures/346_1.jpg",
  "url(http://gratisography.com/pictures/pictures/342_1.jpg)",
];

var img = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/971638_10152282995333605_234824652_n.jpg?oh=11f296012544250efeca906f923a0744&oe=588FA959";

$('#home').click(function(){
  $('.header').removeClass('willGrow');
  $('.burger-menu').removeClass('willChangeColor');
  $('section').css("background-image", "url(http://gratisography.com/pictures/355_1.jpg)");  
  
});

$('#about').click(function(){
  $('.header').removeClass('willGrow');
  $('.burger-menu').removeClass('willChangeColor');
  $('section').css("background-image", "url(http://gratisography.com/pictures/346_1.jpg)");  
  
});

$('#work').click(function(){
  $('.header').removeClass('willGrow');
  $('.burger-menu').removeClass('willChangeColor');
  $('section').css("background-image", "url(http://gratisography.com/pictures/347_1.jpg)");  
  
});

$('#careers').click(function(){
  $('.header').removeClass('willGrow');
  $('.burger-menu').removeClass('willChangeColor');
  $('section').css("background-image", "url("+ img +")");
  
});