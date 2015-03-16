<script>
function validateEmailRight()
{
	var email = $('#subscribe-right').val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
    if(reg.test(email) == false) {
 
          alert('Invalid Email Address');
          return false;
        }
		else
		{
			$.ajax({
			   type: "POST",
			   url: "<?php echo base_url()?>stk/subscribe",
			   data: { email: email }
			}).done(function( msg ) {
				alert(msg );
				$('#subscribe-right').val('');
			});
		}
}
</script>





<div id="body_right">

    <div class="right-gray-line">&nbsp;</div>        	
    <h3 style="display: none;"><a href="<?=base_url()?>page-214/2013-calendar">May 2014</a></h3>	
    
    <!-- <div style="float:none;">
        <div class="today_box">Frid 23 May</div>            
        <div class="today_box today_box_left" style="">Sat 24 May</div>
    </div>
    <div style="clear:both;"></div>
    
    <div style="float:none;">
        <div class="today_box">Sun 25 May</div>            
        <div class="today_box today_box_left">Mon 26 May</div>
    </div>
    <div style="clear:both;"></div>
    
    <div style="float:none;">
        <div class="today_box">Tue 27 May</div>            
        <div class="today_box today_box_left">Wed 28 May</div>
    </div>
    <div style="clear:both;"></div>
    
    <div style="float:none;">
        <div class="today_box">Thu 29 May</div>            
        <div class="today_box today_box_left">Frid 30 May</div>
    </div>
    <div style="clear:both;"></div>
    
    <div style="float:none;">
        <div class="today_box">Sat 31 May</div>            
        <div class="today_box today_box_left">Sun 1 Jun</div>
    </div>
    <div style="clear:both;"></div> -->
    
    <div style="display: none;" class="week-wrapper" id="week-name">
    	<div class="week-box">MON</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">TUE</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">WED</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">THU</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">FRI</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">SAT</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="week-box">SUN</div>
    	<div class="clearside">&nbsp;</div>
    </div>
    	
	<div style="display: none;" class="week-wrapper" >
    	<div class="day-box day-false">19</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">20</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">21</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">22</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">23</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">24</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">25</div>
    	<div class="clearside">&nbsp;</div>
    </div>
    <div style="display: none;" class="week-wrapper" >
    	<div class="day-box day-true">26</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">27</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">28</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">29</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">30</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-true">31</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">01</div>
    	<div class="clearside">&nbsp;</div>
    </div>
    <div style="display: none;" class="week-wrapper" >
    	<div class="day-box day-false">02</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">03</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">04</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">05</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">06</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">07</div>
    	<div class="week-gap">&nbsp;</div>
    	<div class="day-box day-false">08</div>
    	<div class="clearside">&nbsp;</div>
    </div>

    
    
    
    
    
    

       
    
    <div style="display: none;" class="right-gray-line"> 	&nbsp; </div>
   
	<h4 style="display: none;"><a href="<?=base_url()?>flipbook.html">View/Download Program</a></h4>
    
    <div style="display: none;" class="right-gray-line" style="margin-top:0px;"> 	&nbsp;  </div>

    
	<div style="margin-top:10px;"><h4 class="bold-green">Subscribe</h4></div>
	<!-- <div style="float:left;"><i class="fa fa-check" style="margin-top:5px;font-size:25px;color:#6AC0C3;margin-left:10px; margin-right:10px; cursor:pointer;" onclick="validateEmailRight()"></i></div></div></div>
    <div style="float:left;"><input class="right-subscribe" type="text" name="subscribe-right" id="subscribe-right" placeholder="Enter your email here"> -->
	<input class="right-subscribe" type="text" name="subscribe-right" id="subscribe-right" placeholder="Enter your email here">
	<i class="fa fa-check" onclick="validateEmailRight()" id="subscribe-button"></i>
	<div style="clear:both;"></div>
    <div class="right-gray-line"> 	&nbsp;  </div>

    
        

    

    <div class="right-gray-line" style="display: none">

    	&nbsp;

    </div>
	
</div>
