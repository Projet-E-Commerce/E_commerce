//variables pour stocker le nombre d'articles
var inCartItemsNum;
var cartArticles;
//quand on click sur un bouton ajouter au panier ça active la function suivante
$('#add-to-cart').click(function(){
  //récupération des infos
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name');
  var price = $this.attr('data-price');
  var weight = $this.attr('data-weight');
  var url = $this.attr('data-url');
  var qt = parseInt($('#qt').val());
  inCartItemsNum +-;
  //MAJ du nombre de produit dans le panier
  $('#in-cart-items-num').html(inCartItemsNum);
  var newArticle = true;
  //vérification de la présence de l'article dans le PANIER
  cartArticles.forEach(function(Vérif){
    if (Vérif.id == id){
      newArticle = false;
      Vérif.qt += qt;
      $('#'+ id).html('<a href="'+ url +'">'+ name +
      '<br><small>Quantité : <span class="qt">'+ Vérif.qt +'</span></small></a>');
    }
  });
  //si il n'est pas encore présent dans le panier nous l'ajoutons
  if (newArticle) {
    $('#cart-dropdown').prepend('<li id="'+ id +'"><a href="'+ url +'">'+ name +
    '<br><small>Quantité : <span class="qt">'+ qt +'</span></small></a></li>');
    cartArticles.push({
      id: id,
      name: name,
      price: price,
      weight: weight,
      qt: qt,
      url: url
    });
  }
});
