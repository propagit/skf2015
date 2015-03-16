<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="description" content="Stkilda Film Festival Melboure - Showcase of the best Australian & International Short Films">
<title>St Kilda Film Festival &middot; <? if(isset($page['title'])) { echo $page['title']; } ?><? if(isset($title)) { echo $title; } ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
<link href="<?=base_url()?>assets/frontend-assets/bootstrap3/css/bootstrap.css" rel="stylesheet" media="screen">
<link href="<?=base_url()?>assets/frontend-assets/bootstrap3/css/bootstrap-theme.css" rel="stylesheet" media="screen">


<link rel="stylesheet" href="<?=base_url()?>assets/frontend-assets/fontawesome4/css/font-awesome.css">
<link rel="stylesheet" href="<?=base_url()?>assets/frontend-assets/css/frontend.css">
<!-- <link rel="stylesheet" href="<?=base_url()?>css/stkilda_2014.css">
<link rel="stylesheet" href="<?=base_url()?>css/template.css">
<link rel="stylesheet" href="<?=base_url()?>css/page.css"> -->

<script src="<?=base_url()?>js/jquery-1.9.1.min.js"></script>
<script src="<?php echo base_url(); ?>js/jquery-1.7.2.min.js"></script>
<script src="<?=base_url()?>assets/frontend-assets/bootstrap3/js/bootstrap.js"></script>
<script src="<?php echo base_url(); ?>js/AC_RunActiveContent.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>js/jquery.cycle.js"></script>
<script src="<?=base_url()?>js/jquery.tools.min.js" type="text/javascript"></script>
<script src="<?=base_url()?>js/script.js" type="text/javascript"></script>
<script src="<?=base_url()?>js/jquery.quicksand.js" type="text/javascript"></script>
<script>//$j = jQuery.noConflict();</script>


</head>
<script>
  jQuery('.carousel').carousel();
</script> 
<body>
	<!-- <a id="allwraps" href="<?=base_url();?>"></a> -->
	<div class="navbar navbar-static-top bs-docs-nav" id="top-nav">
		<div class="container">
			<div class="navbar-header leftside">
				<div class="top-button top-home-button">
					<a href="<?=base_url();?>"><img style="width: 24px;" src="<?=base_url()?>assets/img/HomeFestival-white.png" alt=""/></a>
				</div>
			</div>
			<div class="navbar-header rightside">
				<!--<div class="top-button rightside top-right hidden-xs" id="last-top-right">
					<input type="text" id="search-top" /><i class="fa fa-search"></i>
				</div>-->
				<div class="top-button rightside top-right">
					<a target="_blank" href="http://www.youtube.com/user/stkildafilmfest"><i class="fa fa-youtube"></i></a>
				</div>
				<div class="top-button rightside top-right">
					<a target="_blank" href="mailto:filmfest@portphillip.vic.gov.au"><i class="fa fa-envelope"></i></a>
				</div>
				<!-- <div style="display: none;" class="top-button rightside top-right hidden-xs">
					<a target="_blank" href="<?=base_url();?>"><i class="fa fa-android"></i></a>
				</div>
				<div style="display: none;" class="top-button rightside top-right hidden-xs">
					<a target="_blank" href="<?=base_url();?>"><i class="fa fa-apple"></i></a>
				</div> -->
				<div class="top-button rightside top-right">
					<a target="_blank" href="https://twitter.com/stkildafilmfest"><i class="fa fa-twitter"></i></a>
				</div>
				<div class="top-button rightside top-right">
					<a target="_blank" href="https://www.facebook.com/StKildaFilmFestival"><i class="fa fa-facebook"></i></a>
				</div>
				<div class="clearside"></div>
			</div>
			<div class="clearside">
			</div>
            <!-- <div class="home_icon hidden-phone">/div>
            <div class="social_icons">
                <ul class="nav" id="top-navigation">
                    <li class="visible-phone"><a href="<?=base_url();?>"><i class="icon-home"></i></a></li>
                    <li><a href="#" target="_blank"><i class="icon-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i class="icon-twitter"></i></a></li>
                    
                    <li><a href="#"><i class="icon-android"></i></a></li>
                    <li><a href="#" target="_blank"><i class="icon-envelope"></i></a></li>
                    <li><a href="#" target="_blank"><i class="icon-youtube"></i></a></li>
                    
                    <li class="hidden-phone">
                    	<form style="margin:0px;" action="<?=base_url()?>" method="post">
                        <input type="text" name="key" id="search-input" placeholder="Search Film"/>
                        <button id="button-search" type="submit"> 
                            <i class="icon-search" id="search-icon"></i>
                        </button>
                        </form>
                    </li>                                                
                </ul>
            </div>
            <div class="search_box visible-phone">
                <input type="text" id="search-input" placeholder="Search Film"/>
                <button id="button-search"> 
                    <i class="icon-search" id="search-icon"></i>
                </button>
            </div> -->
		</div>
	</div>
	<div id="wrapper-main-logo">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<img id="ff-logo" src="<?=base_url();?>assets/img/hero-new.jpg" alt="logo" title="Stkilda Film Festival logo" style="width: 100%"/> 
                    <?php $this->load->view('stk/common/menu');?>
				</div>
			</div>
		</div>
	</div>
	<!-- <div onclick="window.location='<?=base_url()?>'" class="jumbotron" id="logo-wrap">
    	
    		<img id="ff-logo" src="<?=base_url();?>img/logo.png" alt="logo" title="Stkilda Film Festival logo" /> 
    </div> -->
    
    
    
    <!-- <div class="navbar navbar-inverse navbar-fixed-top visible-phone">
		<div class="navbar-inner">
			<div class="container">
                <div class="home_icon"><a class="icon-header-phone" href="<?=base_url();?>"><i class="icon-home"></i></a></div>
                <div class="social_icons">
                    <ul class="nav" id="top-navigation">
                        
                        <li><a class="icon-header-phone" href="#" target="_blank"><i class="icon-facebook"></i></a></li>
                        <li><a class="icon-header-phone" href="#" target="_blank"><i class="icon-twitter"></i></a></li>
                        <li><a class="icon-header-phone" href="#" target="_blank"><i class="icon-envelope"></i></a></li>
                        <li><a class="icon-header-phone" href="#" target="_blank"><i class="icon-youtube"></i></a></li>
                        <li class="hidden-phone">
                            <input type="text" id="search-input" placeholder="Search Film"/>
                            <button id="button-search"> 
                                <i class="icon-search" id="search-icon"></i>
                            </button>
                        </li>
                    </ul>
                </div>
			</div>
		</div>
		
		
	</div> -->
	
    
    
	
