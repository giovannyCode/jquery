
$( "#moviesForm" ).on( "submit", function( event ) {

  event.preventDefault();
  const movieTittle =$( "#movieTitle" ).val();
  const movieRating = $( "#movieRating" ).val();

$('#movies').append('<div class="movie"><div>Title: '+ movieTittle + '</div><div>Rating: '+ movieRating+ '</div><br><button class="movieButton">Remove</button><div>');

});

$( "#movies" ).on( "click",".movieButton", function( event ) {
const elementToRemove  = $( this ).parent() ;
elementToRemove.remove();
});






