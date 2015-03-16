<script>
function addNews() {
	var title = $j('#title').val();
	if (title == '') {
		alert('Please enter a title for this news article');
	} else {
		document.addForm.submit();
	}
}
</script>
<h1>Content Management</h1>
<div class="bar">

    <div class="text">Add News</div>
    <div class="cr"></div>
</div>
<div class="box bgw">
    	<form name="addForm" method="post" enctype="multipart/form-data" action="<?=base_url()?>admin/news/adding">
    	<dl class="news"><dt>Title</dt><dd><input type="text" class="textfield rounded" name="title" id="title" /></dd></dl>
    	<dl class="news"><dt>Short Description</dt>
    		<dd><textarea name="short_text" class="rounded"></textarea></dd>
    	</dl>
    	<dl class="news"><dt>Publish</dt><dd><input type="checkbox" name="published" /></dd></dl></dl>
    	<dl class="news"><dt>Preview Image</dt><dd><input type="file" name="userfile" /> <i>(220px x 148px)</i></dd></dl>
    	<dl></dl>
    	<br /><?php	
			$this->cute_model->ID="long_text";
			$this->cute_model->Text = '';
			$this->cute_model->EditorBodyStyle="font:normal 12px arial;";
			$this->cute_model->UseHTMLEntities = true;
			$this->cute_model->EditorWysiwygModeCss=base_url()."css/text.css";
			
			//$this->cute_model->FilesPath=base_url()."js/cute";
			$this->cute_model->Draw();
			$this->cute_model = null;
		?>
		</form>
    	
</div>
<hr/>
<div class="box">
  <a href="javascript:addNews()"><input class="button rounded" type="button" value="Create News"></a>
</div>
