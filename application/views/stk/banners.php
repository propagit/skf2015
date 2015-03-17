<?php $all = $this->news_sticker_model->get_published(); ?>    
<div id="banners" class="carousel slide" data-ride="carousel" data-interval="false">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
        
            <?php
                $count = 0; 
                foreach($all as $alls){
                
            ?>
            <div class="item <?=!$count ? 'active' : '';?>">
                <img src="<?=base_url().'photos/news_sticker/'.$alls['image'];?>" />
                <div class="carousel-caption hidden-xs">
                    <h1><?=$alls['subheading'];?></h1>
                    <h4><?=$alls['description']?></h4>
                </div>
            </div>
            <?php $count++;} ?>
            
        </div>
        
        <!-- Controls -->
        <a class="left carousel-control" href="#banners" role="button" data-slide="prev">
            <span class="slide-btn"><i class="fa fa-angle-left"></i></span>
        </a>
        <a class="right carousel-control" href="#banners" role="button" data-slide="next">
            <span class="slide-btn"><i class="fa fa-angle-right"></i></span>
        </a>
</div>