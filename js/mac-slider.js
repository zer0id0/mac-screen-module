$(document).ready(function() {
	
	$(".mobile-screen").hide();
	$("#text-4").mouseenter(function() {
		$(".mobile-screen").fadeIn();
	});
	$("#text-4").mouseleave(function() {
		$(".mobile-screen").fadeOut();
	});
	
	
	$("#text-1").mouseenter(function() {
	$(".image-holder").attr("src" , "img/bulk.png");			   			   
	});
	
	$("#text-2").hover(function() {
	$(".image-holder").attr("src" , "img/birthday.png");			   			   
	} );
	
	$("#text-3").hover(function() {
	$(".image-holder").attr("src" , "img/blocking.png");			   			   
	});
	
	$("#text-4").hover(function() {
	$(".image-holder").attr("src" , "img/dashboard-mobile.png");
	});

	$("#text-5").hover(function() {
	$(".image-holder").attr("src" , "img/support.png");			   			   
	});

	$("#text-6").hover(function() {
	$(".image-holder").attr("src" , "img/filter.png");			   			   
	});
	
	$("#text-7").hover(function() {
	$(".image-holder").attr("src" , "img/quick-sms.png");			   			   
	});
});