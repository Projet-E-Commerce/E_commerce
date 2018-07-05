$(document).ready(function(){
  $("#myBtn").click(function(){
      $("#myModal").modal();
  });
});
//debut js audrey
$('#linkAccueil').click(function(){
  $('.coqueSamsung').show();
  $('.coqueSony').show();
  $('.coqueIphone').show();
  $('.film').show();
  $('.chargeurCable').show();
});
$('#linkPromo').click(function(){
alert('Pas de promo actuellement')
});
$('#linkCoque').click(function(){
  $('.coqueSamsung').show();
  $('.coqueSony').show();
  $('.coqueIphone').show();
  $('.film').hide();
  $('.chargeurCable').hide();
});
$('#linkSamsung').click(function(){
  $('.coqueSamsung').show();
  $('.coqueSony').hide();
  $('.coqueIphone').hide();
  $('.film').hide();
  $('.chargeurCable').hide();
});
$('#linkIphone').click(function(){
  $('.coqueSamsung').hide();
  $('.coqueSony').hide();
  $('.coqueIphone').show();
  $('.film').hide();
  $('.chargeurCable').hide();
});
$('#linkSony').click(function(){
  $('.coqueSamsung').hide();
  $('.coqueSony').show();
  $('.coqueIphone').hide();
  $('.film').hide();
  $('.chargeurCable').hide();
});
$('#linkAccessoire').click(function(){
  $('.coqueSamsung').hide();
  $('.coqueSony').hide();
  $('.coqueIphone').hide();
  $('.film').show();
  $('.chargeurCable').show();
});
$('#linkFilm').click(function(){
  $('.coqueSamsung').hide();
  $('.coqueSony').hide();
  $('.coqueIphone').hide();
  $('.film').show();
  $('.chargeurCable').hide();
});
$('#linkChargeurCable').click(function(){
  $('.coqueSamsung').hide();
  $('.coqueSony').hide();
  $('.coqueIphone').hide();
  $('.film').hide();
  $('.chargeurCable').show();
});
//fin js audrey
//js panier
$('.add-to-cart').click(function(){
  var id = $(this).attr('data-id');
  var name = $(this).attr('data-name');
  var price = $(this).attr('data-price');
  var selectq = '<select id="qt"><option value="1">'+ 1 +'</option><option value="2">'+ 2 +'</option><option value="3">'+ 3 +'</option><option value="4">'+ 4 +'</option></select>'
  var qt= parseInt($('#qt').val());
  console.log(id)
  $('.afficherPanier').append('<tr><td>' + id +'</td><td>' + name +'</td><td>'+ price +'€</td><td>'+ selectq +'</td></tr>');
});
