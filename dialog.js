/***************************
Dialog.js.1.0.0
@Author: Hari Mohan Thakur
@Date: 27-10-2017
****************************/
(function($){
	$.fn.dialog = function(option){
		var defaultSetting = {
			transitionDelay: 300
		};
		var dialog = $(this);
		var body = $("body");
		var close = dialog.find("[data-toggle='dialog']");

		// Show dialog box		
		function show(){
			body.addClass("dialog-open");
			dialog.addClass("open");
			setTimeout(function(){
				dialog.addClass("fade");
			}, 0);
			setTimeout(function(){
				dialog.addClass("fade");
				dialog.trigger('dialog.show');
			}, defaultSetting.transitionDelay);
		}

		// Hide dialog box
		function hide(){
			body.removeClass("dialog-open");
			dialog.removeClass("fade");
			setTimeout(function(){
				dialog.removeClass("open");
				dialog.trigger('dialog.hide');
			}, defaultSetting.transitionDelay);
		}

		// Hide dialog on close button click of dialog
		close.one("click", function(){
			hide();
		});

		if(option == "show"){
			show();
		}else if(option == "hide"){
			hide();
		}
		
	};
})(jQuery)