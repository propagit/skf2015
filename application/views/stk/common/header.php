<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="description" content="Stkilda Film Festival Melboure - Showcase of the best Australian & International Short Films">
<title>St Kilda Film Festival &middot; <? if(isset($page['title'])) { echo $page['title']; } ?><? if(isset($title)) { echo $title; } ?></title>


<?php if(ENVIRONMENT == 'development'){ ?>

<link rel="stylesheet" href="<?=base_url()?>frontend-assets/bootstrap-3.2.2/css/bootstrap.min.css">
<!-- FA -->
<link rel="stylesheet" href="<?=base_url()?>frontend-assets/font-awesome-4.3.0/css/font-awesome.min.css">
<?php }else{ ?>
    <!-- BS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- FA -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<?php } ?>


<!--timer-->
<link rel="stylesheet" href="<?=base_url()?>frontend-assets/js/jquery.countdown-2.0.2/jquery.countdown.css">

<!-- app css -->
<link rel="stylesheet" href="<?=base_url()?>frontend-assets/css/app.css">


</head>

<body>

<div id="side-ladder" class="ladder-wrap hidden-md hidden-sm hidden-xs">
    <div class="ladder1"></div>
    <div class="ladder2"></div>
    <div class="ladder3"></div>
    <div class="ladder4"></div>
</div>
<header>
	<div id="header">
    	<div class="container">
        	<div class="col-lg-7 col-md-7 col-sm-6 col-xs-12 logo x-gutters">
                <a href="<?=base_url();?>"><img src="<?=base_url();?>frontend-assets/img/core/logo.png" title="St Kilda Flim Festival" alt="logo.png"></a>
            </div>
            
            <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 event x-gutters">
                <span class="date">
                    21 - 30<br>
                    May<br>
                    2015
                </span>
                <span class="featured">
                    Australia's<br>
                    Top 100<br>
                    Short Films
                </span>
            </div>
        </div>
    </div>
</header> 
  
<nav id="top-nav">
    <div class="container">
        <?php $this->load->view('stk/common/nav');?>
    </div>
</nav>



