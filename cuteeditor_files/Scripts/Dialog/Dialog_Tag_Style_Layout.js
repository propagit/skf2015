var OxObec1=["","sel_position","sel_display","sel_float","sel_clear","tb_top","sel_top_unit","tb_height","sel_height_unit","tb_left","sel_left_unit","tb_width","sel_width_unit","tb_cliptop","sel_cliptop_unit","tb_clipbottom","sel_clipbottom_unit","tb_clipleft","sel_clipleft_unit","tb_clipright","sel_clipright_unit","sel_overflow","tb_zindex","sel_pagebreakbefore","sel_pagebreakafter","outer","div_demo","cssText","style","value","position","display","styleFloat","cssFloat","clear","left","top","width","height","length","tb_","sel_","_unit","selectedIndex","options","right","bottom","clip","tb_clip","sel_clip","currentStyle","overflow","zIndex","pageBreakBefore","pageBreakAfter"];function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxObec1[0];} ;return Ox84+OxObec1[0];} ;var sel_position=Window_GetElement(window,OxObec1[1],true);var sel_display=Window_GetElement(window,OxObec1[2],true);var sel_float=Window_GetElement(window,OxObec1[3],true);var sel_clear=Window_GetElement(window,OxObec1[4],true);var tb_top=Window_GetElement(window,OxObec1[5],true);var sel_top_unit=Window_GetElement(window,OxObec1[6],true);var tb_height=Window_GetElement(window,OxObec1[7],true);var sel_height_unit=Window_GetElement(window,OxObec1[8],true);var tb_left=Window_GetElement(window,OxObec1[9],true);var sel_left_unit=Window_GetElement(window,OxObec1[10],true);var tb_width=Window_GetElement(window,OxObec1[11],true);var sel_width_unit=Window_GetElement(window,OxObec1[12],true);var tb_cliptop=Window_GetElement(window,OxObec1[13],true);var sel_cliptop_unit=Window_GetElement(window,OxObec1[14],true);var tb_clipbottom=Window_GetElement(window,OxObec1[15],true);var sel_clipbottom_unit=Window_GetElement(window,OxObec1[16],true);var tb_clipleft=Window_GetElement(window,OxObec1[17],true);var sel_clipleft_unit=Window_GetElement(window,OxObec1[18],true);var tb_clipright=Window_GetElement(window,OxObec1[19],true);var sel_clipright_unit=Window_GetElement(window,OxObec1[20],true);var sel_overflow=Window_GetElement(window,OxObec1[21],true);var tb_zindex=Window_GetElement(window,OxObec1[22],true);var sel_pagebreakbefore=Window_GetElement(window,OxObec1[23],true);var sel_pagebreakafter=Window_GetElement(window,OxObec1[24],true);var outer=Window_GetElement(window,OxObec1[25],true);var div_demo=Window_GetElement(window,OxObec1[26],true);UpdateState=function UpdateState_Layout(){div_demo[OxObec1[28]][OxObec1[27]]=element[OxObec1[28]][OxObec1[27]];} ;SyncToView=function SyncToView_Layout(){sel_position[OxObec1[29]]=element[OxObec1[28]][OxObec1[30]];sel_display[OxObec1[29]]=element[OxObec1[28]][OxObec1[31]];if(Browser_IsWinIE()){sel_float[OxObec1[29]]=element[OxObec1[28]][OxObec1[32]];} else {sel_float[OxObec1[29]]=element[OxObec1[28]][OxObec1[33]];} ;sel_clear[OxObec1[29]]=element[OxObec1[28]][OxObec1[34]];var arr=[OxObec1[35],OxObec1[36],OxObec1[37],OxObec1[38]];for(var Oxe8=0;Oxe8<arr[OxObec1[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox3a=document.getElementById(OxObec1[40]+Ox8d);var Ox49=document.getElementById(OxObec1[41]+Ox8d+OxObec1[42]);Ox49[OxObec1[43]]=0;if(ParseFloatToString(element[OxObec1[28]][Ox8d])){Ox3a[OxObec1[29]]=ParseFloatToString(element[OxObec1[28]][Ox8d]);for(var i=0;i<Ox49[OxObec1[44]][OxObec1[39]];i++){var Ox2b=Ox49[OxObec1[44]][i][OxObec1[29]];if(Ox2b&&element[OxObec1[28]][Ox8d].indexOf(Ox2b)!=-1){Ox49[OxObec1[43]]=i;break ;} ;} ;} ;} ;var arr=[OxObec1[35],OxObec1[36],OxObec1[45],OxObec1[46]];for(var Oxe8=0;Oxe8<arr[OxObec1[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox4df=OxObec1[47]+Ox8d.charAt(0).toUpperCase()+Ox8d.substring(1);var Ox3a=document.getElementById(OxObec1[48]+Ox8d);var Ox49=document.getElementById(OxObec1[49]+Ox8d+OxObec1[42]);Ox49[OxObec1[43]]=0;var Ox4e0;if(Browser_IsWinIE()){Ox4e0=element[OxObec1[50]][Ox4df];} else {Ox4e0=element[OxObec1[28]][Ox4df];} ;if(ParseFloatToString(Ox4e0)){Ox3a[OxObec1[29]]=ParseFloatToString(Ox4e0);for(var i=0;i<Ox49[OxObec1[44]][OxObec1[39]];i++){var Ox2b=Ox49[OxObec1[44]][i][OxObec1[29]];if(Ox2b&&Ox4e0.indexOf(Ox2b)!=-1){Ox49[OxObec1[43]]=i;break ;} ;} ;} ;} ;sel_overflow[OxObec1[29]]=element[OxObec1[28]][OxObec1[51]];tb_zindex[OxObec1[29]]=element[OxObec1[28]][OxObec1[52]];sel_pagebreakbefore[OxObec1[29]]=element[OxObec1[28]][OxObec1[53]];sel_pagebreakafter[OxObec1[29]]=element[OxObec1[28]][OxObec1[54]];} ;SyncTo=function SyncTo_Layout(element){element[OxObec1[28]][OxObec1[30]]=sel_position[OxObec1[29]];element[OxObec1[28]][OxObec1[31]]=sel_display[OxObec1[29]];if(Browser_IsWinIE()){element[OxObec1[28]][OxObec1[32]]=sel_float[OxObec1[29]];} else {element[OxObec1[28]][OxObec1[33]]=sel_float[OxObec1[29]];} ;element[OxObec1[28]][OxObec1[34]]=sel_clear[OxObec1[29]];var arr=[OxObec1[35],OxObec1[36],OxObec1[37],OxObec1[38]];for(var Oxe8=0;Oxe8<arr[OxObec1[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox3a=document.getElementById(OxObec1[40]+Ox8d);if(ParseFloatToString(Ox3a.value)){element[OxObec1[28]][Ox8d]=ParseFloatToString(Ox3a.value)+document.all(OxObec1[41]+Ox8d+OxObec1[42])[OxObec1[29]];} else {element[OxObec1[28]][Ox8d]=OxObec1[0];} ;} ;var arr=[OxObec1[35],OxObec1[36],OxObec1[45],OxObec1[46]];for(var Oxe8=0;Oxe8<arr[OxObec1[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox4df=OxObec1[47]+Ox8d.charAt(0).toUpperCase()+Ox8d.substring(1);var Ox3a=document.getElementById(OxObec1[48]+Ox8d);if(ParseFloatToString(Ox3a.value)){element[OxObec1[28]][Ox4df]=ParseFloatToString(Ox3a.value)+document.all(OxObec1[49]+Ox8d+OxObec1[42])[OxObec1[29]];} else {element[OxObec1[28]][Ox4df]=OxObec1[0];} ;} ;element[OxObec1[28]][OxObec1[51]]=sel_overflow[OxObec1[29]];element[OxObec1[28]][OxObec1[52]]=ParseFloatToString(tb_zindex.value);element[OxObec1[28]][OxObec1[53]]=sel_pagebreakbefore[OxObec1[29]];element[OxObec1[28]][OxObec1[54]]=sel_pagebreakafter[OxObec1[29]];} ;