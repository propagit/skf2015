var OxOd17b=["inp_class","inp_width","inp_height","sel_align","sel_textalign","sel_float","inp_forecolor","img_forecolor","inp_backcolor","img_backcolor","inp_tooltip","value","className","width","style","height","align","styleFloat","cssFloat","textAlign","title","backgroundColor","color","","class","onclick"];var inp_class=Window_GetElement(window,OxOd17b[0],true);var inp_width=Window_GetElement(window,OxOd17b[1],true);var inp_height=Window_GetElement(window,OxOd17b[2],true);var sel_align=Window_GetElement(window,OxOd17b[3],true);var sel_textalign=Window_GetElement(window,OxOd17b[4],true);var sel_float=Window_GetElement(window,OxOd17b[5],true);var inp_forecolor=Window_GetElement(window,OxOd17b[6],true);var img_forecolor=Window_GetElement(window,OxOd17b[7],true);var inp_backcolor=Window_GetElement(window,OxOd17b[8],true);var img_backcolor=Window_GetElement(window,OxOd17b[9],true);var inp_tooltip=Window_GetElement(window,OxOd17b[10],true);UpdateState=function UpdateState_Common(){} ;SyncToView=function SyncToView_Common(){inp_class[OxOd17b[11]]=element[OxOd17b[12]];inp_width[OxOd17b[11]]=element[OxOd17b[14]][OxOd17b[13]];inp_height[OxOd17b[11]]=element[OxOd17b[14]][OxOd17b[15]];sel_align[OxOd17b[11]]=element[OxOd17b[16]];if(Browser_IsWinIE()){sel_float[OxOd17b[11]]=element[OxOd17b[14]][OxOd17b[17]];} else {sel_float[OxOd17b[11]]=element[OxOd17b[14]][OxOd17b[18]];} ;sel_textalign[OxOd17b[11]]=element[OxOd17b[14]][OxOd17b[19]];inp_tooltip[OxOd17b[11]]=element[OxOd17b[20]];inp_forecolor[OxOd17b[11]]=revertColor(element[OxOd17b[14]].color);inp_forecolor[OxOd17b[14]][OxOd17b[21]]=inp_forecolor[OxOd17b[11]];img_forecolor[OxOd17b[14]][OxOd17b[21]]=inp_forecolor[OxOd17b[11]];inp_backcolor[OxOd17b[11]]=revertColor(element[OxOd17b[14]].backgroundColor);inp_backcolor[OxOd17b[14]][OxOd17b[21]]=inp_backcolor[OxOd17b[11]];img_backcolor[OxOd17b[14]][OxOd17b[21]]=inp_backcolor[OxOd17b[11]];} ;SyncTo=function SyncTo_Common(element){element[OxOd17b[12]]=inp_class[OxOd17b[11]];try{element[OxOd17b[14]][OxOd17b[13]]=inp_width[OxOd17b[11]];element[OxOd17b[14]][OxOd17b[15]]=inp_height[OxOd17b[11]];} catch(x){} ;element[OxOd17b[16]]=sel_align[OxOd17b[11]];if(Browser_IsWinIE()){element[OxOd17b[14]][OxOd17b[17]]=sel_float[OxOd17b[11]];} else {element[OxOd17b[14]][OxOd17b[18]]=sel_float[OxOd17b[11]];} ;element[OxOd17b[14]][OxOd17b[19]]=sel_textalign[OxOd17b[11]];element[OxOd17b[20]]=inp_tooltip[OxOd17b[11]];element[OxOd17b[14]][OxOd17b[22]]=inp_forecolor[OxOd17b[11]];element[OxOd17b[14]][OxOd17b[21]]=inp_backcolor[OxOd17b[11]];if(element[OxOd17b[12]]==OxOd17b[23]){element.removeAttribute(OxOd17b[12]);} ;if(element[OxOd17b[12]]==OxOd17b[23]){element.removeAttribute(OxOd17b[24]);} ;if(element[OxOd17b[20]]==OxOd17b[23]){element.removeAttribute(OxOd17b[20]);} ;if(element[OxOd17b[16]]==OxOd17b[23]){element.removeAttribute(OxOd17b[16]);} ;} ;img_forecolor[OxOd17b[25]]=inp_forecolor[OxOd17b[25]]=function inp_forecolor_onclick(){SelectColor(inp_forecolor,img_forecolor);} ;img_backcolor[OxOd17b[25]]=inp_backcolor[OxOd17b[25]]=function inp_backcolor_onclick(){SelectColor(inp_backcolor,img_backcolor);} ;