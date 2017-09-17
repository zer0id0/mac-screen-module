$(document).ready(function() {
	
//	$(".mobile-screen,.line-1,.line-2,.line-3,.line-4,.line-5,.line-6,.line-7").hide();
	$("#text-4").mouseenter(function() {
	$(".line-4").fadeIn();
//		$(".mobile-screen").fadeIn();
		$(".line-1,.line-2,.line-3,.line-5,.line-6,.line-7").fadeOut(300);
	});
	$("#text-4").mouseleave(function() {
//		$(".line-4").fadeOut(300);
		$(".line-1,.line-2,.line-3,.line-5,.line-6,.line-7").fadeIn(300);
	});
	
	
	$("#text-1").mouseenter(function() {
	$(".image-holder").attr("src" , "img/bulk.png");
//	$(".line-1").fadeIn(500);
	$(".line-2,.line-3,.line-4,.line-5,.line-6,.line-7").fadeOut(300);
	});
	$("#text-1").mouseleave(function() {
		$(".image-holder").attr("src" , "img/dashboard.png");
		$(".line-2,.line-3,.line-4,.line-5,.line-6,.line-7").fadeIn(300);
	});
	
	
	$("#text-2").mouseenter(function() {
	$(".image-holder").attr("src" , "img/birthday.png");
//	$(".line-2").fadeIn(500);
	$(".line-1,.line-3,.line-4,.line-5,.line-6,.line-7").fadeOut(300);
	});
	$("#text-2").mouseleave(function() {
		$(".image-holder").attr("src" , "img/dashboard.png");
	$(".line-1,.line-3,.line-4,.line-5,.line-6,.line-7").fadeIn(300);
	});
	

	$("#text-3").mouseenter(function() {
	$(".image-holder").attr("src" , "img/blocking.png");
//	$(".line-3").fadeIn(500);
	$(".line-1,.line-2,.line-4,.line-5,.line-6,.line-7").fadeOut(300);
	});
	$("#text-3").mouseleave(function() {
		$(".image-holder").attr("src" , "img/dashboard.png");
			$(".line-1,.line-2,.line-4,.line-5,.line-6,.line-7").fadeIn(300);
		
	});
	

	$("#text-5").mouseenter(function() {
	$(".image-holder").attr("src" , "img/support.png");
//	$(".line-5").fadeIn(500);
	$(".line-1,.line-2,.line-3,.line-4,.line-6,.line-7").fadeOut(300);
	});
	$("#text-5").mouseleave(function() {
			$(".image-holder").attr("src" , "img/dashboard.png");
			$(".line-1,.line-2,.line-3,.line-4,.line-6,.line-7").fadeIn(300);
	});

	$("#text-6").mouseenter(function() {
	$(".image-holder").attr("src" , "img/filter.png");
//	$(".line-6").fadeIn(500);
	$(".line-1,.line-2,.line-3,.line-4,.line-5,.line-7").fadeOut(300);
	});
	$("#text-6").mouseleave(function() {
		$(".image-holder").attr("src" , "img/dashboard.png");	
			$(".line-1,.line-2,.line-3,.line-4,.line-5,.line-7").fadeIn(300);
	});
	
	$("#text-7").mouseenter(function() {
	$(".image-holder").attr("src" , "img/quick-sms.png");
//	$(".line-7").fadeIn(500);
	$(".line-1,.line-2,.line-3,.line-4,.line-5,.line-6").fadeOut(300);
	});
	$("#text-7").mouseleave(function() {
		$(".image-holder").attr("src" , "img/dashboard.png");	
			$(".line-1,.line-2,.line-3,.line-4,.line-5,.line-6").fadeIn(300);
	});
});