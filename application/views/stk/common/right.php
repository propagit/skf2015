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
            <input type="text" id="newsletter-email">
            <button type="button" class="btn subscribe-btn" id="newsletter-btn">Enter</button>
        </div>
    </div>
    
</aside>


<div id="newsletter-modal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
    	<div class="modal-header" style="border-bottom:none;">
        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      	</div>
      	<div class="modal-body" style="text-align:center;">
       		 <p id="newsletter-msg"></p>
      	</div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<script>
$(function(){
	$('#newsletter-btn').click(function(){
		$('#newsletter-btn').html('<i class="fa fa-spinner fa-spin"></i>');
		$.ajax({
		   		type: "POST",
		   		url: "<?php echo base_url()?>stk/subscribe",
		  	 	data: { email: $('#newsletter-email').val() }
		   }).done(function( msg ) {
			    $('#newsletter-btn').html('Enter');
				$('#newsletter-msg').html(msg);
				$('#newsletter-modal').modal('show');
		 });
	});
});
</script>