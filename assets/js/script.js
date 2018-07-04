$(document).ready(function(){
  $("#myBtn").click(function(){
      $("#myModal").modal();
  });
});
//clique bouton ajouter au panier
$('.ajouterAuPanier').click(function(){
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name');
  var price = $this.attr('data-price');
  var weight = $this.attr('data-weight');
  var url = $this.attr('data-url');
  var qt = parseInt($('#qt').val());
  inCartItemsNum += qt;
