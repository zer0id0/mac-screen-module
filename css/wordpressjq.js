jQuery(document).ready(function() {
	
	jQuery(".mobile-screen,.line-1,.line-2,.line-3,.line-4,.line-5,.line-6,.line-7").hide();
	jQuery("#text-4").mouseenter(function() {
		jQuery(".line-4").fadeIn();
		jQuery(".mobile-screen").fadeIn();
		jQuery(".line-1,.line-2,.line-3,.line-5,.line-6,.line-7").fadeOut(300);
	});
	jQuery("#text-4").mouseleave(function() {
//		$(".line-4").fadeOut(300);	
	});
	
	
	jQuery("#text-1").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/bulk.png");
	jQuery(".line-1").fadeIn(300);
	jQuery(".line-2,.line-3,.line-4,.line-5,.line-6,.line-7,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-1").mouseleave(function() {
		   			   
	});
	
	
	jQuery("#text-2").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/birthday.png");
	jQuery(".line-2").fadeIn();
	jQuery(".line-1,.line-3,.line-4,.line-5,.line-6,.line-7,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-2").mouseleave(function() {
		   			   
	});
	

	jQuery("#text-3").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/blocking.png");
	jQuery(".line-3").fadeIn();
	jQuery(".line-1,.line-2,.line-4,.line-5,.line-6,.line-7,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-3").mouseleave(function() {
		   			   
	});
	

	jQuery("#text-5").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/support.png");
	jQuery(".line-5").fadeIn();
	jQuery(".line-1,.line-2,.line-3,.line-4,.line-6,.line-7,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-5").mouseleave(function() {
		   			   
	});

	jQuery("#text-6").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/filter.png");
	jQuery(".line-6").fadeIn();
	jQuery(".line-1,.line-2,.line-3,.line-4,.line-5,.line-7,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-6").mouseleave(function() {
		   			   
	});
	
	jQuery("#text-7").mouseenter(function() {
	jQuery(".image-holder").attr("src" , "img/quick-sms.png");
	jQuery(".line-7").fadeIn();
	jQuery(".line-1,.line-2,.line-3,.line-4,.line-5,.line-6,.mobile-screen").fadeOut(300);
	});
	jQuery("#text-7").mouseleave(function() {
		   			   
	});
});