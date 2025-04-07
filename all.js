//---------------------------------
//放官網的JS不需要一般的ready   2019.05.22整併
//---------------------------------

//eeezcure180 & multicure18 手風琴效果
	$('.target1').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target1 .target-icon").addClass("rotate");
		$(".accordion-iteme-icon").removeClass("minus");
		$("#accordion-header1 .accordion-iteme-icon").addClass("minus");
		$(".accordion-body").removeClass("js-show");
		$("#accordion-body1").addClass("js-show").slow(500);
	});
	$('.target2').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target2 .target-icon").addClass("rotate");
		$(".accordion-iteme-icon").removeClass("minus");
		$("#accordion-header2 .accordion-iteme-icon").addClass("minus");
		$(".accordion-body").removeClass("js-show");
		$("#accordion-body2").addClass("js-show").slow(500);
	});
	$('.target3').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target3 .target-icon").addClass("rotate");
		$(".accordion-iteme-icon").removeClass("minus");
		$("#accordion-header3 .accordion-iteme-icon").addClass("minus");
		$(".accordion-body").removeClass("js-show");
		$("#accordion-body3").addClass("js-show").slow(500);
	});
	$('.target4').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target4 .target-icon").addClass("rotate");
		$(".accordion-iteme-icon").removeClass("minus");
		$("#accordion-header4 .accordion-iteme-icon").addClass("minus");
		$(".accordion-body").removeClass("js-show");
		$("#accordion-body4").addClass("js-show").slow(500);
	});
	$('.target5').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target5 .target-icon").addClass("rotate");
		$(".accordion-iteme-icon").removeClass("minus");
		$("#accordion-header5 .accordion-iteme-icon").addClass("minus");
		$(".accordion-body").removeClass("js-show");
		$("#accordion-body5").addClass("js-show").slow(500);
	});
	$('#accordion-header1').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target1 .target-icon").addClass("rotate");
			$(".accordion-iteme-icon").removeClass("minus");
			$("#accordion-header1 .accordion-iteme-icon").addClass("minus");
			$(".accordion-body").removeClass("js-show");
			$("#accordion-body1").addClass("js-show").slow(500);
	});
	$('#accordion-header2').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target2 .target-icon").addClass("rotate");
			$(".accordion-iteme-icon").removeClass("minus");
			$("#accordion-header2 .accordion-iteme-icon").addClass("minus");
			$(".accordion-body").removeClass("js-show");
			$("#accordion-body2").addClass("js-show").slow(500);
	});
	$('#accordion-header3').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target3 .target-icon").addClass("rotate");
			$(".accordion-iteme-icon").removeClass("minus");
			$("#accordion-header3 .accordion-iteme-icon").addClass("minus");
			$(".accordion-body").removeClass("js-show");
			$("#accordion-body3").addClass("js-show");
	});
	$('#accordion-header4').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target4 .target-icon").addClass("rotate");
			$(".accordion-iteme-icon").removeClass("minus");
			$("#accordion-header4 .accordion-iteme-icon").addClass("minus");
			$(".accordion-body").removeClass("js-show");
			$("#accordion-body4").addClass("js-show");
	});
	$('#accordion-header5').click(function(){
		$(".target-icon").removeClass("rotate");
		$(".target5 .target-icon").addClass("rotate");
			$(".accordion-iteme-icon").removeClass("minus");
			$("#accordion-header5 .accordion-iteme-icon").addClass("minus");
			$(".accordion-body").removeClass("js-show");
			$("#accordion-body5").addClass("js-show");
	});

	

	
//---------------------------------
//需要檢查點偵測是否ready才執行
//---------------------------------

setInterval(SILoad,500);
var SILoadSW=1;
function SILoad(){
  if(($(".SILoad").size() > 0) && SILoadSW){
    SILoadSW=0;
    SIL_Ready();
    console.log("ok!");
  }
}	
function SIL_Ready(){
//檢查點偵測頁面已ready後執行

//DIV齊高 RESIZE HEIGHT
	if ($(window).width() > 576) {
		var h=0;

		$(".js-resize-height").each(function(){
			if($(this).height()>h){
				h=$(this).height();
			}
		});

		$(".js-resize-height").css("height",h+"px");

	}
	
//第三方耗材頁使用( Active the first thumb & panel )
	var Pary = SURL();
	$(".tabs-thumb:first-child").addClass("is-active").closest(".tabs").find(".tabs-panel:first-child").show();
	if(Pary['page']!=undefined){
		$(".tabs-thumb").removeClass("is-active");
		$(".tabs-panel").hide();
		$('.tabs-panel').eq(Pary['page']).show();
		$('.tabs-thumb').eq(Pary['page']).addClass("is-active");
	}
	
	$(".tabs-thumb").click(function() {
		// Cancel the siblings
		$(this).siblings(".tabs-thumb").removeClass("is-active").closest(".tabs").find(".tabs-panel").hide();
		// Active the thumb & panel
		$(this).addClass("is-active").closest(".tabs").find(".tabs-panel").eq($(this).index(".tabs-thumb")).show();
	});	

	$(".tabs-thumb").hover(function(){
		$(".tabs-thumb img").animate({transform:'scale(1)'},"slow");
		},function(){
		$(".tabs-thumb img").animate({transform:'scale(.8)'},"slow");
	});
	/*
	$('.resins-table').scroltable();
	*/

}
//[CN] color series slider
/*
$('.single-item').slick({
  dots: true,
  infinite: true,
  arrows: true
//  autoplay: true,
//  autoplaySpeed: 2000
});
*/
//Pary = SURL();
function SURL(){
	var Url = location.search;
	var Para, PVal;
	var Pary = [];
	if (Url.indexOf("?") != -1) {
		var Sch = Url.split("?");
		Para = Sch[1].split("&");
		for (i = 0; i < Para.length; i++) {
			PVal = Para[i].split("=");
			Pary.push(PVal[0]);
			Pary[PVal[0]] = PVal[1];
		}
	}
	return Pary;
}