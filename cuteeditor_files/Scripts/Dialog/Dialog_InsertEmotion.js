var OxO5c6a=[""," ","=\x22","\x22","src","^[a-z]*:[/][/][^/]*","Edit","\x3CIMG border=\x220\x22 align=\x22absmiddle\x22 src=\x22","\x22 src_cetemp=\x22","\x22\x3E","ImageTable","IMG","length","className","dialogButton","onmouseover","CuteEditor_ColorPicker_ButtonOver(this)","onclick","insert(this)"];var editor=Window_GetDialogArguments(window);function attr(name,Ox7){if(!Ox7||Ox7==OxO5c6a[0]){return OxO5c6a[0];} ;return OxO5c6a[1]+name+OxO5c6a[2]+Ox7+OxO5c6a[3];} ;function insert(img){if(img){var src=img[OxO5c6a[4]];src=src.replace( new RegExp(OxO5c6a[5],OxO5c6a[0]),OxO5c6a[0]);var Ox236=OxO5c6a[0];if(editor.GetActiveTab()==OxO5c6a[6]){Ox236=OxO5c6a[7]+src+OxO5c6a[8]+src+OxO5c6a[9];} else {Ox236=OxO5c6a[7]+src+OxO5c6a[9];} ;editor.PasteHTML(Ox236);Window_CloseDialog(window);} ;} ;function do_Close(){Window_CloseDialog(window);} ;var ImageTable=Window_GetElement(window,OxO5c6a[10],true);var images=ImageTable.getElementsByTagName(OxO5c6a[11]);var len=images[OxO5c6a[12]];for(var i=0;i<len;i++){var img=images[i];img[OxO5c6a[13]]=OxO5c6a[14];img[OxO5c6a[15]]= new Function(OxO5c6a[16]);img[OxO5c6a[17]]= new Function(OxO5c6a[18]);} ;