<div id="purple-container">

	<div class="container">

		

		<div class="row">

			<div class="col-sm-9 hidden-xs">

				<div style="height:20px;"></div>

				<div class="row">

					<div class="col-sm-6">

						<!-- <img src="<?=base_url()?>img/youtube-screen.png" alt="trailer box" style="width:100%"/> -->

						<iframe id="youtube-home" src="//www.youtube.com/embed/ZPlnSzB6W0U?list=UUYXj9gEWM21fiIxpyiJSfzg" frameborder="0" allowfullscreen></iframe>

					</div>

					<div class="col-sm-6">

						<a href="http://www.stkildafilmfestival.com.au/2014/page-228/films---stage-1---2014" alt="SoundKILDA">

							<img src="<?=base_url()?>img/SoundKilda-Banner.jpg" alt="trailer box" style="width:100%"/>

						</a>

					</div>

				</div>

				<div class="row" style="display: none;">

					<div class="col-sm-12">

         				<div style="text-align:center" ><h3 id="short-films-top-title">Australia's Top 100 Short Films</h3></div> 

         				

         				<!-- <div>

				             <div id="filterAll"></div>        

				             <div id="filter"></div>

				             <div style="clear:both;"></div>

				    

				         </div> -->

				    	<div id="filter-date">

				    		<div class="filter-date-item">Fri 23 May</div>

				    		<div class="filter-date-item">Sat 24 May</div>

				    		<div class="filter-date-item">Sun 25 May</div>

				    		<div class="filter-date-item">Mon 26 May</div>

				    		<div class="filter-date-item">Tues 27 May</div>

				    		<div class="filter-date-item filter-date-right-side">Wed 28 May</div>

				    		<div class="filter-date-item filter-date-right-side">Thu 29 May</div>

				    		<div class="filter-date-item filter-date-right-side">Fri 30 May</div>

				    		<div class="filter-date-item filter-date-right-side">Sat 31 May</div>

				    		<div class="filter-date-item filter-date-right-side">Sun 1 June</div>

				    		<div class="clearside"></div>

				    	</div>

				         

         				<div id="filter-type">

         					<div id="filtertypeitem1" class="filter-type-item">Drama</div>

         					<div id="filtertypeitem2" class="filter-type-item">Thriller</div>

         					<div id="filtertypeitem3" class="filter-type-item">Sciences Fiction</div>

         					<div id="filtertypeitem4" class="filter-type-item">Animation</div>

         					<div id="filtertypeitem5" class="filter-type-item">Documentary</div>

         					<div id="filtertypeitem6" class="filter-type-item">Horror</div>

         					<div id="filtertypeitem7" class="filter-type-item">Comedy</div>

         					<div id="filtertypeitem8" class="filter-type-item last-filter-type-item">Childrens</div>

         					<div class="clearside"></div>

         				</div>

         

         

					</div>

				</div>

				<div id="film-container" class="container home-band-show" style="display: none;">    

				            <ul id="stage">    

				                 <? foreach($top_films as $f)   

				                 {    

				                     $film_sessions = $this->film_model->get_sessions($f['id']);

				                     $film_genre = $this->film_model->get_film_genres($f['id']);

				                     $originalDate =$f['time'];

				                     $newFormat = date("D d M",strtotime($originalDate));

				                     $folder = $f['large_image'];    

				                 ?>     

				                <li onmouseover="jQuery('#name-on-top<?=$f['id']?>').show(); jQuery('#film-img<?=$f['id']?>').hide(); jQuery('#pink-bg<?=$f['id']?>').show();" 

				                	onmouseout="jQuery('#name-on-top<?=$f['id']?>').hide(); jQuery('#film-img<?=$f['id']?>').show(); jQuery('#pink-bg<?=$f['id']?>').hide();"

				                	class="photo-film" data-tags="<?php echo $film_genre[0]['name'] .','; echo date('l d M',strtotime($f['time']));?>">   

				                    <a href="<?=base_url()?>details/<?=$f['id']?>">  

				                    	<div id="name-on-top<?=$f['id']?>" style="display:none;"> 

					                        <div style="display: table;" class="name-on-top">

					                        	<div style="display: table-cell; vertical-align: middle">

					                        		<a href="<?=base_url()?>details/<?=$f['id']?>"> <?=ucwords(strtolower($f['title']))?> </a>

					                        	</div>

					                        </div>

				                        </div>    

				                        <a href="<?=base_url()?>details/<?=$f['id']?>">

				                        	<img id="film-img<?=$f['id']?>" style="width:100%; " alt="" src="<?=base_url()?>uploads/films/thumbnails/<?=$folder?>" />

				                        	<img id="pink-bg<?=$f['id']?>" style="width:100%; display: none;" alt="" src="<?=base_url()?>assets/img/pink-bg.jpg" />

				                        </a>

				                    </a>

				                </li>   

				                

				                <!-- <li onmouseover="jQuery('#name-on-top<?=$f['id']?>').show(); jQuery('#film-img<?=$f['id']?>').hide(); jQuery('#pink-bg<?=$f['id']?>').show();" 

				                	onmouseout="jQuery('#name-on-top<?=$f['id']?>').hide(); jQuery('#film-img<?=$f['id']?>').show(); jQuery('#pink-bg<?=$f['id']?>').hide();" 

				                	class="photo-film" data-tags="<?php echo $film_genre[0]['name'] .','; echo date('l d M',strtotime($f['time']));?>">   

				                    <a href="<?=base_url()?>details/<?=$f['id']?>">   

				                        <div style="display: none;" id="name-on-top<?=$f['id']?>" class="name-on-top">

				                        	<a href="<?=base_url()?>details/<?=$f['id']?>"> <?=ucwords(strtolower($f['title']))?> </a>

				                        </div>    

				                        <a href="<?=base_url()?>details/<?=$f['id']?>">

				                        	<img id="film-img<?=$f['id']?>" style="width:100%" alt="" src="<?=base_url()?>uploads/films/thumbnails/<?=$folder?>" />

				                        	<img id="pink-bg<?=$f['id']?>" style="width:100%; display: none;" alt="" src="<?=base_url()?>assets/img/pink-bg.jpg" />

				                        </a>

				                    </a>

				                </li> --> 

				                <? }?>    

				            </ul>

				    

				         </div>

				         <div style="clear:both;"></div>

			</div>

			<div class="col-sm-3">

				<?=$this->load->view('stk/common/right');?>

			</div>

		</div>

	</div>	

	<div style="height: 30px;"></div>

</div>