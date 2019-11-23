console.log("here")
var msg = "Hover over an image below."

$("img").mouseenter(function(){
	$("#image").css("background-image", "url('"+$(this).attr('src')+"')");
	$("#image").html($(this).attr("alt"));

});

$("img").focus(function(){
	$("#image").css("background-image", "url('"+$(this).attr('src')+"')");
	$("#image").html($(this).attr("alt"));
});

$("img").mouseleave(function(){
	$("#image").css("background-image", "url('')");
	$("#image").html(msg);
});

$("img").blur(function(){
	$("#image").css("background-image", "url('')");
	$("#image").html(msg);
});
