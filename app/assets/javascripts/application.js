// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$().ready( function(){
  $('.lang-container').hide();
  var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
  lang= lang.substring(0,2);
  if($('#'+lang).length==0){
    lang = 'cs';
  }
  $('#'+lang).css({"display" : ""});
  var to_append = '<div class=\"langs\">';
  $('.lang-container').each(function(){
  to_append+=('<div class=\"lang\" style=\"cursor: pointer; width:25px; float:right;\"><img src=\"/assets/'+$(this).attr('id')+'.\gif" alt=\"'+$(this).attr('id')+'" \/></div>');
  });
  to_append += '</div><br />';
  $('body').append(to_append)
  });
  $(".lang").live("click", function(){
    var locale = $("img", this).attr("alt");
    $('.lang-container:visible').fadeOut('fast', function() {
      $('#' + locale).fadeIn('fast');
    });
    
});
