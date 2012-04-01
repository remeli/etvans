$(document).ready(function() {
    
  $('.faces li img').hover(function() {
    var new_src = $(this).attr('data-new-src');
    $(this).attr('src', new_src);
  }, function() {
    var old_src = $(this).attr('data-new-src').split('/');
    var old = 'assets/images/'+old_src[2][0]+'_b.jpg';
    $(this).attr('src', old);
  });
  
  $('#a1').hover(function() {
    $('.arrow1').show();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server-add.png')
  }, function() {
    $('.arrow1').hide();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server.png')
  });
  
  $('#a2').hover(function() {
    $('.arrow2').show();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server-get.png')
  }, function() {
    $('.arrow2').hide();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server.png')
  });
  
  $('#a3').hover(function() {
    $('.arrow3').show();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server-rep.png')
  }, function() {
    $('.arrow3').hide();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server.png')
  });
  
  $('#a4').hover(function() {
    $('.arrow4').show();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server-s.png')    
  }, function() {
    $('.arrow4').hide();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server.png')
  });
  
  $('#a5').hover(function() {
    $('.arrow5').show();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server-t.png') 
  }, function() {
    $('.arrow5').hide();
    $('#etvans-server img').attr('src', 'assets/images/etvans-server.png')
  });
  
  
});
