$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( "#date" ).blur(function() {
    window.location.replace('index.php?date=' + $('#date').val());
  })
});