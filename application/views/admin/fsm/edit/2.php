<script>
var n = <?=count($sessions)?>;
function addsession() {
	$j('#sessions').append('<div id="sess-' + n + '"><div class="row2"><select name="sessions[0][]"><?php foreach($dates as $d) { ?><option value="<?=$d['date']?>"><?=date('l d M',strtotime($d['date']))?></option><?php } ?></select></div><div class="row2"><input type="text" class="textfield rounded" maxlength="5" name="sessions[1][]" /> - <input type="text" class="textfield rounded" maxlength="5" name="sessions[2][]" /></div><div class="row2"><select name="sessions[3][]"><?php foreach($venues as $v) { ?><option value="<?=$v['name']?>"><?=$v['name']?></option><?php } ?></select></div><div class="row2"><a href="javascript:deletesession(' + n + ')">delete</a></div></div>');
	n++;
}
function deletesession(i) { $j('#sess-' + i).remove(); }
</script>
<h1>Film/Sound Management</h1>
<div class="bar">
    <div class="text">Update SoundKILDA</div>
    <div class="cr"></div>
</div>
<div class="box">
	<input type="button" class="button rounded" value="Back to Films/Sounds List" onclick="history.go(-1)" />
</div>
<hr />
<form method="post" action="<?=base_url()?>admin/fsm/updatesound" enctype="multipart/form-data">
<input type="hidden" name="film_id" value="<?=$film['id']?>" />
<div class="box bgw">
	<dl class="film">
    	<dt>Title</dt>
    	<dd><input type="text" class="textfield rounded" name="title" value="<?=$film['title']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Artist</dt>
        <dd><input type="text" class="textfield rounded" name="artist" value="<?=$film['artist']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Year</dt>
        <dd><input type="text" class="textfield rounded" name="year" value="<?=$film['year']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Producer</dt>
        <dd><input type="text" class="textfield rounded" name="producer" value="<?=$film['producer']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Director</dt>
        <dd><input type="text" class="textfield rounded" name="director" value="<?=$film['director']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Synopsis</dt>
        <dd><textarea class="rounded" name="synopsis"><?=$film['synopsis']?></textarea></dd>
    </dl>
    <dl class="film">
    	<dt>Publicity blurb</dt>
        <dd><textarea class="rounded" name="publicity_blurb"><?=$film['publicity_blurb']?></textarea></dd>
    </dl>
    <dl class="film">
    	<dt>Order</dt>
        <dd><input type="text" class="textfield rounded" name="order" value="<?=$film['order']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Sessions (<a href="javascript:addsession()">add more</a>)</dt>
        <dd id="sessions">
        <?php $n=0; foreach($sessions as $session) {
			$date = date('Y-m-d',strtotime($session['time']));
			$time = date('H:i',strtotime($session['time']));
			$finish_time = date('H:i',strtotime($session['finish_time']));
			$venue = $session['venue']; ?>
            <div id="sess-<?=$n?>">
                <div class="row2">
                    <select name="sessions[0][]">
                    <?php foreach($dates as $d) { ?>
                        <option value="<?=$d['date']?>"<?php if($date == $d['date']) print ' selected="selected"'; ?>><?=date('l d M',strtotime($d['date']))?></option>
                    <?php } ?>
                    </select>
                </div>
                <div class="row2">
                    <input type="text" class="textfield rounded" maxlength="5" name="sessions[1][]" value="<?=$time?>" /> :
                    <input type="text" class="textfield rounded" maxlength="5" name="sessions[2][]" value="<?=$finish_time?>" />
                </div>
                <div class="row2">
                    <select name="sessions[3][]">
                    <?php foreach($venues as $v) { ?>
                        <option value="<?=$v['name']?>"<?php if($venue == $v['name']) print ' selected="selected"'; ?>><?=$v['name']?></option>
                    <?php } ?>
                    </select>
                </div>
                <div class="row2">
                	<a href="javascript:deletesession(<?=$n?>)">delete</a>
                </div>
            </div>
        <?php $n++; } ?>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Small image</dt>
        <dd><input type="file" name="small_image" /> (221 px width x 150px height)
        <?php if($film['small_image'] != "") { ?><br /><br />
        <img src="<?=base_url()?>uploads/films/<?=$film['small_image']?>" width="100%" />
        <?php } ?>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Large image</dt>
        <dd><input type="file" name="large_image" /> (365px width x 249px height)
        <?php if($film['large_image'] != "") { ?><br /><br />
        <img width="100%" src="<?=base_url()?>uploads/films/<?=$film['large_image']?>" />
        <?php } ?>
        </dd>
    </dl>
     <dl class="film">
    	<dt>Facebook link</dt>
        <dd><input type="text" class="textfield rounded" name="facebook" value="<?=$film['facebook']?>" /></dd>
    </dl>
     <dl class="film">
    	<dt>Twitter link</dt>
        <dd><input type="text" class="textfield rounded" name="twitter" value="<?=$film['twitter']?>" /></dd>
    </dl>
    <dl class="film">
    	<dt>Blogger link</dt>
        <dd><input type="text" class="textfield rounded" name="blogger" value="<?=$film['blogger']?>" /></dd>
    </dl>
    <dl class="film">
        <dt>Youtube link</dt>
        <dd><input type="text" class="textfield rounded" name="blogger" value="<?=$film['youtube']?>" />
        <? if ($film['youtube']<>''){?>
        <br><br>
        <iframe width="400" height="270" src="<?=$film['youtube']?>" frameborder="0" allowfullscreen></iframe>
        <?}?>
        </dd>
    </dl>
    <dl class="film">
    	<dt>Featuring</dt>
        <dd><input type="checkbox"  name="featuring" <? if($film['featuring'] == 1) { echo 'checked="true"';}?> /></dd>
    </dl>
    <dl></dl>
</div>
<hr />
<div class="box">
	<dl class="film">
    	<dt>&nbsp;</dt>
        <dd><input type="submit" class="button rounded" value="Update SoundKILDA" /></dd>
    </dl><dl></dl>
</div>
</form>