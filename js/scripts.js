$(document).ready(function() {
  $("button#catbutton").click(function(){
    $("ul#catanswer").prepend("<li>SCRATCH</li>");
    $("ul#doganswer").prepend("<li>YELP!</li>");
    $("button#result").hide();
    $("button#dogwon").hide();
    $("button#catwon").show();
    $("h3#theresult").empty().append("The meow wins!");
    $('li').click(function() {
      $("ul#catanswer").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#doganswer").children("li").click(function() {
        $(this).remove();
      });
    });
  });

  $("button#dogbutton").click(function(){
    $("ul#catanswer").prepend("<li>HISSSS</li>");
    $("ul#doganswer").prepend("<li>WOOOOOF!</li>");
    $("button#result").hide();
    $("button#catwon").hide();
    $("button#dogwon").show();
    $("h3#theresult").empty().append("The bork wins!");
    $('li').click(function() {
      $("ul#catanswer").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#doganswer").children("li").click(function() {
        $(this).remove();
      });
    });
  });
});
