$(function(){$(".maxheight").each(function(){$(this).contents().wrapAll("<div class='box_inner'></div>")});$(".maxheight1").each(function(){$(this).contents().wrapAll("<div class='box_inner'></div>")});$(".maxheight2").each(function(){$(this).contents().wrapAll("<div class='box_inner'></div>")})});$(window).bind("resize",height_handler).bind("load",height_handler);function height_handler(){if($(window).width()>767){$(".maxheight").equalHeights()}else{$(".maxheight").css({height:"auto"})}if($(window).width()>767){$(".maxheight1").equalHeights()}else{$(".maxheight1").css({height:"auto"})}if($(window).width()>767){$(".maxheight2").equalHeights()}else{$(".maxheight2").css({height:"auto"})}}(function(a){a.fn.equalHeights=function(c,b){tallest=(c)?c:0;this.each(function(){if(a(">.box_inner",this).outerHeight()>tallest){tallest=a(">.box_inner",this).outerHeight()}});if((b)&&tallest>b){tallest=b}return this.each(function(){a(this).height(tallest)})}})(jQuery);
