var OxOa527=["inp_width","eenheid","alignment","hrcolor","hrcolorpreview","shade","sel_size","width","style","value","px","%","size","align","color","backgroundColor","noShade","noshade","","onclick"];var inp_width=Window_GetElement(window,OxOa527[0],true);var eenheid=Window_GetElement(window,OxOa527[1],true);var alignment=Window_GetElement(window,OxOa527[2],true);var hrcolor=Window_GetElement(window,OxOa527[3],true);var hrcolorpreview=Window_GetElement(window,OxOa527[4],true);var shade=Window_GetElement(window,OxOa527[5],true);var sel_size=Window_GetElement(window,OxOa527[6],true);UpdateState=function UpdateState_Hr(){} ;SyncToView=function SyncToView_Hr(){if(element[OxOa527[8]][OxOa527[7]]){if(element[OxOa527[8]][OxOa527[7]].search(/%/)<0){eenheid[OxOa527[9]]=OxOa527[10];inp_width[OxOa527[9]]=element[OxOa527[8]][OxOa527[7]].split(OxOa527[10])[0];} else {eenheid[OxOa527[9]]=OxOa527[11];inp_width[OxOa527[9]]=element[OxOa527[8]][OxOa527[7]].split(OxOa527[11])[0];} ;} ;sel_size[OxOa527[9]]=element[OxOa527[12]];alignment[OxOa527[9]]=element[OxOa527[13]];hrcolor[OxOa527[9]]=element[OxOa527[14]];if(element[OxOa527[14]]){hrcolor[OxOa527[8]][OxOa527[15]]=element[OxOa527[14]];} ;if(element[OxOa527[16]]){shade[OxOa527[9]]=OxOa527[17];} else {shade[OxOa527[9]]=OxOa527[18];} ;} ;SyncTo=function SyncTo_Hr(element){if(sel_size[OxOa527[9]]){element[OxOa527[12]]=sel_size[OxOa527[9]];} ;if(hrcolor[OxOa527[9]]){element[OxOa527[14]]=hrcolor[OxOa527[9]];} ;if(alignment[OxOa527[9]]){element[OxOa527[13]]=alignment[OxOa527[9]];} ;if(shade[OxOa527[9]]==OxOa527[17]){element[OxOa527[16]]=true;} else {element[OxOa527[16]]=false;} ;if(inp_width[OxOa527[9]]){element[OxOa527[8]][OxOa527[7]]=inp_width[OxOa527[9]]+eenheid[OxOa527[9]];} ;} ;hrcolor[OxOa527[19]]=hrcolorpreview[OxOa527[19]]=function hrcolor_onclick(){SelectColor(hrcolor,hrcolorpreview);} ;