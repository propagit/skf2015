<div class="visible-xs" >
	<div class="container">
		<div class="row">
			<?php
				$links = $this->menu_model->get_links(1,0);
				$total_menus = count($links);
				$i = 1;
				$cc = 0; 
	          	foreach($links as $link) 
	          	{
	          		$link_pos = '';
					$link_pos_menu = '';
                      // $link_pos = ($i == 1 ? 'first_link' : ($i >= $total_menus ? 'last_link' : ''));
					  // $link_pos_menu = '';
					  // $link_pos_menu = ($i == 1 ? 'first_link_menu' : ($i >= $total_menus ? 'last_link_menu' : ''));
                      
					  $url3 = '#';
                      if($link['url'] != ''){
                       if(is_numeric($link['url'])){
                           $url3 = base_url().'page/pages/'.$menu['url'];
                       }else{
                           $url3 = base_url().$link['url'];
                       }
                      }	
                      echo '<div class="col-sm-2 header-menu '.$link_pos_menu.'">
                                <div class="header-menu-title '.$link_pos.'"><a href="'.$url3.'">'.$link['name'].'</a></div></div>';
				}
			?>
		</div>
	</div>
</div>

<div class="hidden-xs" id="menu-wrapper">
    <div class="container">
        <div class="row">
                <?	                   
					$links = $this->menu_model->get_links(1,0);
					$total_menus = count($links);
					$i = 1;
					$cc = 0; 
		          	foreach($links as $link) {
						
					  $link_pos = '';
                      $link_pos = ($i == 1 ? 'first_link' : ($i >= $total_menus ? 'last_link' : ''));
					  $link_pos_menu = '';
					  $link_pos_menu = ($i == 1 ? 'first_link_menu' : ($i >= $total_menus ? 'last_link_menu' : ''));
                      
					  $url3 = '#';
                      if($link['url'] != ''){
                       if(is_numeric($link['url'])){
                           $url3 = base_url().'page/pages/'.$menu['url'];
                       }else{
                           $url3 = base_url().$link['url'];
                       }
                      }	
                      echo '<div id="headermenu'.$i.'" class="col-sm-2 header-menu '.$link_pos_menu.'">
                                <div class="header-menu-title '.$link_pos.'"><a href="'.$url3.'">'.ucwords(strtolower($link['name'])).'</a></div>';
						
					
					
					
					  /* check for submenu */
					  $child = $this->menu_model->get_child_links($link['id']); 
                      //$links = $this->menu_model->get_links($menu['id'],0);
                      if($child != NULL){
                        $submenu_pos = '';
                        $submenu_pos = ($i == 1 ? 'first_submenu' : ($i >= $total_menus ? 'last_submenu' : ''));
                        echo '<div class="header-submenu '.$submenu_pos.'" id="submenu-header-'.$i.'">
                                <div class="header-submenu-content-list">';
                                    foreach($child as $link){
                                       $url = '#';
                                       if($link['url'] != ''){
                                           if(is_numeric($link['url'])){
                                               $url = base_url().'page/pages/'.$link['url'];
                                           }else{
                                               $url = base_url().$link['url'];
                                           }
                                       }
                                       $pos = strpos($link['name'],'30-');
                                        
                                       if( $pos > 0){
                                            echo '<div class="header-submenu-list"><a target="_blank" href="'.$url.'">'.$link['name'].'</a>';
                                       }else{
                                           echo '<div class="header-submenu-list"><a href="'.$url.'">'.$link['name'].'</a>';
                                       }
                                       
                                       
                                       
                                       
                                       
                                       
                                       echo '</div>';//<!--header-submenu-list-->
                                    }//foreach $links as $link		
                        echo '   </div>
                              </div>';//<!--header-submenu-->
                      }//if $links
                      echo '</div>'; //<!--span2 header-menu-->
                      $i++;
						
					}
                ?>
        </div>
    </div><!--container-->
</div><!--hidden-phone-->
<!-- <div id="menugap" style="height:20px;">
	<div class="container white-container">
		&nbsp;
	</div>
</div> -->
<?php
	/*  * 
		Nav for mobile device
	 */

?>
