<div id="purple-container">
	<div class="container">
		
		<div class="row">
			<div class="col-sm-9">
				<div style="height:20px;"></div>
				<div class="row">
					<div class="col-sm-12">
				    	<div class="content-title"><h1><?=$heading?></h1></div>   	
				    	<div class="leftside">
				    		<? if($address !='' && isset($address)){?>
					        <div class="film-date"><span class="subheading3">
					        	<?php if($heading == 'TOP 100 SESSION 1'){?>
					        		FRIDAY 24 MAY, 6PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 2'){?>
					        		FRIDAY 24 MAY, 7:45PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 3'){?>
					        		FRIDAY 24 MAY, 9:30PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 4'){?>
					        		SATURDAY 25 MAY, 6:45PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 5'){?>
					        		SUNDAY 26 MAY, 3:15PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 6'){?>
					        		SUNDAY 26 MAY, 5:00PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 7'){?>
					        		TUESDAY 28 MAY, 6:30PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 8'){?>
					        		TUESDAY 28 MAY, 8:15PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 9'){?>
					        		WEDNESDAY 29 MAY, 7:45PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 10'){?>
					        		THURSDAY 30 MAY, 6:30PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 11'){?>
					        		FRIDAY 31 MAY, 8:15PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 12'){?>
					        		FRIDAY 31 MAY, 10PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 13'){?>
					        		SATURDAY 1 JUNE,  1:15PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 14'){?>
					        		SATURDAY 1 JUNE,  3PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php if($heading == 'TOP 100 SESSION 15'){?>
					        		SATURDAY 1 JUNE,  6:30PM<br/>
					        		THE ASTOR THEATRE
					        	<?php }?>
					        	<?php //$address?>
					        </span></div>
					        <!-- <div class="date"><span class="subheading3"><?=$heading2?></span></div>     -->   
					        <? }?>
				    	</div>
				    	<div class="rightside">
				    		<div class="button-buy-ticket">
				    			Buy Ticket
				    		</div>
				    	</div>
				    	<div class="clearside" style="height: 20px;"></div>
				    </div>
				</div>
				<?
				$counter = 1;
				foreach($films as $film) 
				{ 
					$genres = $this->film_model->get_film_genres($film['id']); 
					$genre = '';
					if ($genres) {
						$genre = $genres[0]['name'];
						for($i=1;$i<count($genres);$i++) { 
							$genre .= ', '.$genres[$i]['name'];
						} 
					}
					
					?>
					
					<?
					if($counter % 3 == 1)
					{
						//opening
						?>
						<div class="row">
							<div class="col-sm-4">
								<div class="right-gray-line">&nbsp;</div> 
								<div class="gap-movie"></div>
								<!-- image -->
								<a href="<?=base_url()?>details/<?=$film['id']?>">
								<?php if($film['large_image'] != "") { ?>
					            <img src="<?=base_url()?>uploads/films/<?=$film['large_image']?>" width="100%" />
					            <?php } else { ?>
					            <img src="<?=base_url()?>img/noimage.png"  width="100%"/>
					            <?php } ?>
					            </a>
					            <!-- image -->
					            <div class="gap-movie"></div>
					            <div class="session-wrap">
					            	<div class="session-film-title"><?=$film['title']?></div>
						            <div class="session-description">
										<?php 
											$text = $film['synopsis'];
											if (strlen($text) > 160) {
												$text = substr($text,0,155).'...';
											}
											print $text;
										?>
					                </div>
					                <div class="session-description">
										<?=$film['year']?>
					                    <?php if($film['format'] != "") { ?>
					                    / <?=$film['format']?>
					                    <?php } ?>
					                    
					                    <?php if ($film['running_time'] != "") { ?>
					                    / <?=$film['running_time']?>
					                    <?php } ?>
					                    
					                    <br/>
					                    <?php if ($film['artist'] != "") { ?>
						                <span>Artist</span> 
						                	<?php
											$artist = $film['artist'];
												if (strlen($artist) > 18) { $artist = substr($artist,0,18).'...'; }
												print $artist;  
											?>
											<br/>
											<?                      
						                } ?>
						                
						                <?php if ($genre != "") { ?>
						                <span>Genre</span> <?=$genre?>
						                <?php } ?>
						                <br/>
						                <?php if ($film['director'] != "") { ?>
						                <span>Director</span> 
											<?php
						                    	$director = $film['director'];
												if (strlen($director) > 16) { $director = substr($director,0,16).'...'; }
												print $director;
											?>
											<br/>
						                
						                <?php } ?>
						                
										<?php if ($film['producer'] != "") { ?>
						                <span>Producer</span> 
											<?php 
												$producer = $film['producer']; 
												if (strlen($producer) > 15) { $producer = substr($producer,0,15).'...'; }
												print $producer;
											?>
						                	<br/>
						                <?php } ?>
					                </div>
					            </div>
					            
				                <div class="session-description">
				                	<span class="readmore"><a href="<?=base_url()?>details/<?=$film['id']?>">More Info</a></span>
				                </div>
							</div>
						<?
					}
					elseif($counter % 3 == 0)
					{
						//closing
						?>
							<div class="col-sm-4">
								<div class="right-gray-line">&nbsp;</div>
								<div class="gap-movie"></div>  
								<!-- image -->
								<a href="<?=base_url()?>details/<?=$film['id']?>">
								<?php if($film['large_image'] != "") { ?>
					            <img src="<?=base_url()?>uploads/films/<?=$film['large_image']?>" width="100%" />
					            <?php } else { ?>
					            <img src="<?=base_url()?>img/noimage.png"  width="100%"/>
					            <?php } ?>
					            </a>
					            <!-- image -->
					            <div class="gap-movie"></div>
					            <div class="session-wrap">
					            	<div class="session-film-title"><?=$film['title']?></div>
						            <div class="session-description">
										<?php 
											$text = $film['synopsis'];
											if (strlen($text) > 160) {
												$text = substr($text,0,155).'...';
											}
											print $text;
										?>
					                </div>
					                <div class="session-description">
										<?=$film['year']?>
					                    <?php if($film['format'] != "") { ?>
					                    / <?=$film['format']?>
					                    <?php } ?>
					                    
					                    <?php if ($film['running_time'] != "") { ?>
					                    / <?=$film['running_time']?>
					                    <?php } ?>
					                    
					                    <br/>
					                    <?php if ($film['artist'] != "") { ?>
						                <span">Artist</span> 
						                	<?php
											$artist = $film['artist'];
												if (strlen($artist) > 18) { $artist = substr($artist,0,18).'...'; }
												print $artist;  
											?>
											<br/>
											<?                      
						                } ?>
						                
						                <?php if ($genre != "") { ?>
						                <span>Genre</span> <?=$genre?>
						                <?php } ?>
						                <br/>
						                <?php if ($film['director'] != "") { ?>
						                <span>Director</span> 
											<?php
						                    	$director = $film['director'];
												if (strlen($director) > 16) { $director = substr($director,0,16).'...'; }
												print $director;
											?>
											<br/>
						                
						                <?php } ?>
						                
										<?php if ($film['producer'] != "") { ?>
						                <span>Producer</span> 
											<?php 
												$producer = $film['producer']; 
												if (strlen($producer) > 15) { $producer = substr($producer,0,15).'...'; }
												print $producer;
											?>
						                	<br/>
						                <?php } ?>
					                </div>
					            </div>
				                <div class="session-description">
				                	<span class="readmore"><a href="<?=base_url()?>details/<?=$film['id']?>">More Info</a></span>
				                </div>
							</div>
						</div>
						<?
					}
					else 
					{
						//middle
						?>
							<div class="col-sm-4">
								<div class="right-gray-line">&nbsp;</div>
								<div class="gap-movie"></div>  
								<!-- image -->
								<a href="<?=base_url()?>details/<?=$film['id']?>">
								<?php if($film['large_image'] != "") { ?>
					            <img src="<?=base_url()?>uploads/films/<?=$film['large_image']?>" width="100%" />
					            <?php } else { ?>
					            <img src="<?=base_url()?>img/noimage.png"  width="100%"/>
					            <?php } ?>
					            </a>
					            <!-- image -->
					            <div class="gap-movie"></div>
					            <div class="session-wrap">
					            	<div class="session-film-title"><?=$film['title']?></div>
						            <div class="session-description">
										<?php 
											$text = $film['synopsis'];
											if (strlen($text) > 160) {
												$text = substr($text,0,155).'...';
											}
											print $text;
										?>
					                </div>
					                <div class="session-description">
										<?=$film['year']?>
					                    <?php if($film['format'] != "") { ?>
					                    / <?=$film['format']?>
					                    <?php } ?>
					                    
					                    <?php if ($film['running_time'] != "") { ?>
					                    / <?=$film['running_time']?>
					                    <?php } ?>
					                    
					                    <br/>
					                    <?php if ($film['artist'] != "") { ?>
						                <span>Artist</span> 
						                	<?php
											$artist = $film['artist'];
												if (strlen($artist) > 18) { $artist = substr($artist,0,18).'...'; }
												print $artist;  
											?>
											<br/>
											<?                      
						                } ?>
						                
						                <?php if ($genre != "") { ?>
						                <span>Genre</span> <?=$genre?>
						                <?php } ?>
						                <br/>
						                <?php if ($film['director'] != "") { ?>
						                <span>Director</span> 
											<?php
						                    	$director = $film['director'];
												if (strlen($director) > 16) { $director = substr($director,0,16).'...'; }
												print $director;
											?>
											<br/>
						                
						                <?php } ?>
						                
										<?php if ($film['producer'] != "") { ?>
						                <span>Producer</span> 
											<?php 
												$producer = $film['producer']; 
												if (strlen($producer) > 15) { $producer = substr($producer,0,15).'...'; }
												print $producer;
											?>
						                	<br/>
						                <?php } ?>
					                </div>
					            </div>
				                <div class="session-description">
				                	<span class="readmore"><a href="<?=base_url()?>details/<?=$film['id']?>">More Info</a></span>
				                </div>
				                
							</div>
						
						<?
					}
					?>
			       
			        
			    <?php  
				   $counter++; 
				} 
				
				if(($counter - 1) % 3 == 0)
				{
					
				}
				else
				{
				?>
					</div>
				<?
				}
				?>
				
			</div>
			<div class="col-sm-3">
				<?=$this->load->view('stk/common/right');?>
			</div>
		</div>
	</div>	
	<div style="height: 30px;"></div>
</div>