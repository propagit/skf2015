<script>
var n = 1;
function addsession() {
	$j('#sessions').append('<div id="sess-' + n + '"><div class="row2"><select name="sessions[0][]"><?php foreach($dates as $d) { ?><option value="<?=$d['date']?>"><?=date('l d M',strtotime($d['date']))?></option><?php } ?></select></div><div class="row2"><input type="text" class="textfield rounded" maxlength="5" name="sessions[1][]" /> - <input type="text" class="textfield rounded" maxlength="5" name="sessions[2][]" /></div><div class="row2"><select name="sessions[3][]"><?php foreach($venues as $v) { ?><option value="<?=$v['name']?>"><?=$v['name']?></option><?php } ?></select></div><div class="row2"><a href="javascript:deletesession(' + n + ')">delete</a></div></div>');
	n++;
}
function deletesession(i) { $j('#sess-' + i).remove(); }
function gofilm() { window.location = '<?=base_url()?>admin/fsm/film'; }
function gosound() { window.location = '<?=base_url()?>admin/fsm/sound'; }
function gotop() { window.location = '<?=base_url()?>admin/fsm/top'; }
</script>
<h1>Film/Sound Management</h1>
<div class="bar">
    <div class="text">Create New Top 100</div>
    <div class="cr"></div>
</div>
<div class="box">
	<input type="button" class="button rounded" value="Create New Film" onclick="gofilm()" /> &nbsp;
    <input type="button" class="button rounded" value="Create New SoundKILDA" onclick="gosound()" /> &nbsp;
    <input type="button" class="button rounded" value="Create New Top 100" onclick="gotop()" />
</div>
<hr />
<form method="post" action="<?=base_url()?>admin/fsm/createtop" enctype="multipart/form-data">
<div class="box bgw">
	<dl class="film">
    	<dt>Title</dt>
    	<dd><input type="text" class="textfield rounded" name="title" /></dd>
    </dl>
    <dl class="film">
    	<dt>Year</dt>
        <dd><input type="text" class="textfield rounded" name="year" /></dd>
    </dl>
    <dl class="film">
    	<dt>Running time</dt>
        <dd><input type="text" class="textfield rounded" name="running_time" /></dd>
    </dl>
    <dl class="film">
    	<dt>Format</dt>
        <dd><input type="text" class="textfield rounded" name="format" /></dd>
    </dl>
    <dl class="film">
    	<dt>Genre</dt>
        <dd>
        	<?php foreach($genres as $g) { ?>
            <div class="row"><input type="checkbox" name="genres[]" value="<?=$g['id']?>" /> <?=$g['name']?></div>
            <?php } ?>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Producer</dt>
        <dd><input type="text" class="textfield rounded" name="producer" /></dd>
    </dl>
    <dl class="film">
    	<dt>Director</dt>
        <dd><input type="text" class="textfield rounded" name="director" /></dd>
    </dl>
    <dl class="film">
    	<dt>Screen writer</dt>
        <dd><input type="text" class="textfield rounded" name="screen_writer" /></dd>
    </dl>
    <dl class="film">
    	<dt>Photography director</dt>
        <dd><input type="text" class="textfield rounded" name="photography_director" /></dd>
    </dl>
    <dl class="film">
    	<dt>Animator</dt>
        <dd><input type="text" class="textfield rounded" name="animator" /></dd>
    </dl>
    <dl class="film">
    	<dt>Cast</dt>
        <dd><input type="text" class="textfield rounded" name="cast" /></dd>
    </dl>
    <dl class="film">
    	<dt>Synopsis</dt>
        <dd><textarea class="rounded" name="synopsis"></textarea></dd>
    </dl>
    <dl class="film">
    	<dt>Publicity blurb</dt>
        <dd><textarea class="rounded" name="publicity_blurb"></textarea></dd>
    </dl>
    <dl class="film">
    	<dt>Competition session</dt>
        <dd>
        	<div class="row3">
                <select name="competition_session">
                	<option value="0">Please select</option>
                    <?php for($i=1;$i<=16;$i++) { ?>
                    <option value="<?=$i?>"><?=$i?></option>
                    <?php } ?>
                </select>
    		</div>
            <div class="row3">
            	<input type="text" class="textfield rounded" maxlength="4" name="order" />
            </div>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Sessions (<a href="javascript:addsession()">add more</a>)</dt>
        <dd id="sessions">
        	<div class="row2">
                <select name="sessions[0][]">
                <?php foreach($dates as $d) { ?>
                    <option value="<?=$d['date']?>"><?=date('l d M',strtotime($d['date']))?></option>
                <?php } ?>
                </select>
			</div>
            <div class="row2">
            	<input type="text" class="textfield rounded" maxlength="5" name="sessions[1][]" /> -
                <input type="text" class="textfield rounded" maxlength="5" name="sessions[2][]" />
           	</div>
            <div class="row2">
            	<select name="sessions[3][]">
                <?php foreach($venues as $v) { ?>
                	<option value="<?=$v['name']?>"><?=$v['name']?></option>
                <?php } ?>
                </select>
            </div>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Small image</dt>
        <dd><input type="file" name="small_image" /> (221px width x 150px height)</dd>
    </dl>
    <dl class="film">
    	<dt>Large image</dt>
        <dd><input type="file" name="large_image" /> (400px width x 270px height)</dd>
    </dl>
    <dl class="film">
    	<dt>Facebook link</dt>
        <dd><input type="text" class="textfield rounded" name="facebook" /></dd>
    </dl>
     <dl class="film">
    	<dt>Twitter link</dt>
        <dd><input type="text" class="textfield rounded" name="twitter" /></dd>
    </dl>
     <dl class="film">
    	<dt>Blogger link</dt>
        <dd><input type="text" class="textfield rounded" name="blogger" /></dd>
    </dl>
     <dl class="film">
    	<dt>Featuring</dt>
        <dd><input type="checkbox"  name="featuring" /></dd>
    </dl>
    <dl></dl>
</div>
<hr />
<div class="box">
	<dl class="film">
    	<dt>&nbsp;</dt>
        <dd><input type="submit" class="button rounded" value="Create Top 100" /></dd>
    </dl><dl></dl>
</div>
</form>