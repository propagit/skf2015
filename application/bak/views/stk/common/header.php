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

<!-- jQuery -->
<script src="<?=base_url()?>frontend-assets/js/jquery-1.11.2.min.js"></script>
<!-- BSJS-->
<script src="<?=base_url()?>frontend-assets/bootstrap-3.2.2/js/bootstrap.min.js"></script>

<?php }else{ ?>
    <!-- BS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- FA -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    
    
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- BSJS-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<?php } ?>


<!--timer-->
<script src="<?=base_url()?>frontend-assets/js/jquery.countdown-2.0.2/jquery.plugin.min.js"></script>
<script src="<?=base_url()?>frontend-assets/js/jquery.countdown-2.0.2/jquery.countdown.min.js"></script>
<link rel="stylesheet" href="<?=base_url()?>frontend-assets/js/jquery.countdown-2.0.2/jquery.countdown.css">

<!-- app css -->
<link rel="stylesheet" href="<?=base_url()?>frontend-assets/css/app.css">


</head>

<body>
<header>
	<div id="header">
    	<div class="container">
        	<div class="col-lg-7 col-md-7 col-sm-6 col-xs-12 logo x-gutters">
                <img src="<?=base_url();?>frontend-assets/img/core/logo.png" title="St Kilda Flim Festival" alt="logo.png">
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

<div class="container content">
	
	<div class="col-md-8 x-l-gutter">
		<?php $this->load->view('stk/banners');?>
	</div>
    
    <div class="col-md-4 x-r-gutter">
        <aside id="side-panel">
            <div class="timer-wrap">
                <h4>countdown</h4>
                <div id="countdown-timer" class="timer">
                   
                </div>
                <span class="label">Until the St Kilda Film Festival starts</span>
                
                <hr>
                
                <h4>follow us</h4>
                <ul>
                	<li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                </ul>
                
                <hr>
                
                <h4>subscribe</h4>
                <span class="label">News delivered straight to your inbox</span>
                <div class="subscribe-box">
                    <input type="text" id="email">
                    <button type="button" class="btn subscribe-btn">Enter</button>
                </div>
            </div>
            
        </aside>    
    </div>
    
    
    
    <div class="col-md-12 x-gutters tiles">
    	<div class="col-md-6 col-xs-12 x-l-gutter tile">
        	<img src="<?=base_url();?>frontend-assets/img/top-100-banner.jpg" alt="top-100-banner.jpg" title="Top 100" />
            <div class="tile-caption">
            	<h1>Top 100 Short Films</h1>
            </div>
        </div>
        
        <div class="col-md-6 col-xs-12 x-r-gutter tile">
        	<img src="<?=base_url();?>frontend-assets/img/sound-kilda-banner.jpg" alt="top-100-banner.jpg" title="Top 100" />
            <div class="tile-caption">
            	<h1>SoundKilda</h1>
            </div>
        </div>
    </div>
</div>

<footer id="footer">
	<div class="container">
    	<div class="col-md-12 x-gutters">
        
        	<div id="banners" class="carousel slide" data-ride="carousel" data-interval="false">
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">

                    <div class="item active">
                        <img src="<?=base_url();?>frontend-assets/img/dummy/sponsors.jpg">
                    </div>
                </div>
       		 </div>
        	
        	
        </div>
    </div>
    
    <div class="sponsors">
    	<div class="container">
        
        </div>
    </div>
    
    <div class="quick-links">
    	<div class="container">
        
        </div>
    </div>
    
    

</footer>





<?php
	$opening = $this->menu_model->get_opening_date();
	#print_r($opening);
?>  
    
<script>
$('#countdown-timer').countdown({
	until: new Date(2015,5-1,24),
	padZeroes: true,
	labels: ['YEARS', 'MONTHS', 'WEEKS', 'DAYS', 'HOURS', 'MINS', 'SECS'],
	
}); 
</script>


</body>
</html>