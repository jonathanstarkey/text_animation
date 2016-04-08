$(function(){
		$(".age_hover").hover(
		  function () {
		     $('.age_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.age_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".best_hover").hover(
		  function () {
		     $('.best_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.best_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".new_hover").hover(
		  function () {
		     $('.new_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.new_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".category_hover").hover(
		  function () {
		     $('.category_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.category_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".brand_hover").hover(
		  function () {
		     $('.brand_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.brand_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".interest_hover").hover(
		  function () {
		     $('.interest_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.interest_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".american_hover").hover(
		  function () {
		     $('.american_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.american_links_div').stop(true,true).fadeOut('fast');
		  }
		);

		$(".name_hover").hover(
		  function () {
		     $('.name_links_div').stop(true,true).show();
		  },
		  function () {
		  	$('.name_links_div').stop(true,true).fadeOut('fast');
		  }
		);
		
		$('#remove_menus').mouseover(function(){
						$('.sub_nav').fadeOut('fast');
    					$('.sub_nav_simple').fadeOut('fast');
					})
					var delay = 300, setTimeoutConst, 
    				delay2 = 50, setTimeoutConst2;
					$(".ageh").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
							$('.age_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.age_hover').hide();
    						}
  						},delay2);
					});
					/*----------------Best Sellers----------------*/
					$(".besth").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.best_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.best_hover').hide();
    						}
  						},delay2);
					});
					/*-----------------New Releases---------------*/
					$(".newr").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.new_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.new_hover').hide();
    						}
  						},delay2);
					});
					/*-----------------Categories-----------------*/
					$(".categorie").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.category_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.category_hover').hide();
    						}
  						},delay2);
					});
					/*---------------Brands----------------*/
					$(".brandh").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.brand_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.brand_hover').hide();
    						}
  						},delay2);
					});
					/*--------------- Interests------------*/
					$(".interesth").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.interest_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.interest_hover').hide();
    						}
  						},delay2);
					});
					/*-------------------American---------------*/
					$(".americanh").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.american_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.american_hover').hide();
    						}
  						},delay2);
					});
					/*------------- Name Store-------------*/
					$(".names").mouseover(function(){
  						setTimeoutConst = setTimeout(function(){
							$('.sub_nav').hide();
    						$('.sub_nav_simple').hide();
    						$('.name_hover').show();
  						},delay);
					}).mouseout(function(){
  					clearTimeout(setTimeoutConst );
  					setTimeoutConst2 = setTimeout(function(){
   						var isHover = $('li:hover').length;
    						if(isHover === 0){
      							$('.name_hover').hide();
    						}
  						},delay2);
					});
		
	})