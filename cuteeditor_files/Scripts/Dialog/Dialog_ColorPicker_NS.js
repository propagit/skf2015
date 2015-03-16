var OxO6f0b=["onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","pnlGradient_Top","onmousemove","onmousedown","onmouseup","pnlVertical_Top","pnlWebSafeColor","pnlWebSafeColorBorder","pnlOldColor","lblHSB_Hue","lblHSB_Saturation","lblHSB_Brightness","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","lblSelectColorMessage","lblRecent","lblRGB_Red","lblRGB_Green","lblRGB_Blue","lblHex","lblUnitHSB_Hue","lblUnitHSB_Saturation","lblUnitHSB_Brightness","pnlHSB_Hue","pnlHSB_Saturation","pnlHSB_Brightness","pnlRGB_Red","pnlRGB_Green","pnlRGB_Blue","frmColorPicker","Color","","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","pnlRecent","border","style","0px","http://www.lewismoten.com","_blank","backgroundColor","target","rgb","(",")",",","display","none","title","innerHTML","backgroundPosition","px ","px","pnlGradientHsbHue_Hue","pnlGradientHsbHue_Black","pnlGradientHsbHue_White","pnlVerticalHsbHue_Background","pnlVerticalHsbSaturation_Hue","pnlVerticalHsbSaturation_White","pnlVerticalHsbBrightness_Hue","pnlVerticalHsbBrightness_Black","pnlVerticalRgb_Start","pnlVerticalRgb_End","pnlGradientRgb_Base","pnlGradientRgb_Invert","pnlGradientRgb_Overlay1","pnlGradientRgb_Overlay2","src","imgGradient","../Images/cpns_ColorSpace1.png","../Images/cpns_ColorSpace2.png","../Images/cpns_Vertical1.png","#000000","../Images/cpns_Vertical2.png","#ffffff","01234567879","which","abcdef","01234567879ABCDEF","opener","pnlGradientPosition","pnlNewColor","0123456789ABCDEFabcdef","000000","0","id","top","pnlVerticalPosition","backgroundImage","url(../Images/cpns_GradientPositionDark.gif)","url(../Images/cpns_GradientPositionLight.gif)","cancelBubble","pageX","pageY","className","GradientNormal","GradientFullScreen","_isverdown","=","; path=/;"," expires=",";","cookie","search","location","\x26","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=22;var POSITIONADJUSTY=52;var POSITIONADJUSTZ=48;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();var msg= new Object();var _xmlDocs= new Array();var _xmlIndex=-1;var _xml=null;LoadLanguage();window[OxO6f0b[0]]=window_load;function initialize(){frm[OxO6f0b[2]][OxO6f0b[1]]=btnCancel_Click;frm[OxO6f0b[3]][OxO6f0b[1]]=btnOK_Click;frm[OxO6f0b[5]][OxO6f0b[4]]=Hsb_Changed;frm[OxO6f0b[5]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[7]][OxO6f0b[4]]=Hsb_Changed;frm[OxO6f0b[7]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[8]][OxO6f0b[4]]=Hsb_Changed;frm[OxO6f0b[8]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[9]][OxO6f0b[4]]=Rgb_Changed;frm[OxO6f0b[9]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[10]][OxO6f0b[4]]=Rgb_Changed;frm[OxO6f0b[10]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[11]][OxO6f0b[4]]=Rgb_Changed;frm[OxO6f0b[11]][OxO6f0b[6]]=validateNumber;frm[OxO6f0b[12]][OxO6f0b[4]]=Hex_Changed;frm[OxO6f0b[12]][OxO6f0b[6]]=validateHex;frm[OxO6f0b[13]][OxO6f0b[1]]=btnWebSafeColor_Click;frm[OxO6f0b[14]][OxO6f0b[1]]=rdoHsb_Hue_Click;frm[OxO6f0b[15]][OxO6f0b[1]]=rdoHsb_Saturation_Click;frm[OxO6f0b[16]][OxO6f0b[1]]=rdoHsb_Brightness_Click;document.getElementById(OxO6f0b[17])[OxO6f0b[1]]=pnlGradient_Top_Click;document.getElementById(OxO6f0b[17])[OxO6f0b[18]]=pnlGradient_Top_MouseMove;document.getElementById(OxO6f0b[17])[OxO6f0b[19]]=pnlGradient_Top_MouseDown;document.getElementById(OxO6f0b[17])[OxO6f0b[20]]=pnlGradient_Top_MouseUp;document.getElementById(OxO6f0b[21])[OxO6f0b[1]]=pnlVertical_Top_Click;document.getElementById(OxO6f0b[21])[OxO6f0b[18]]=pnlVertical_Top_MouseMove;document.getElementById(OxO6f0b[21])[OxO6f0b[19]]=pnlVertical_Top_MouseDown;document.getElementById(OxO6f0b[21])[OxO6f0b[20]]=pnlVertical_Top_MouseUp;document.getElementById(OxO6f0b[22])[OxO6f0b[1]]=btnWebSafeColor_Click;document.getElementById(OxO6f0b[23])[OxO6f0b[1]]=btnWebSafeColor_Click;document.getElementById(OxO6f0b[24])[OxO6f0b[1]]=pnlOldClick_Click;document.getElementById(OxO6f0b[25])[OxO6f0b[1]]=rdoHsb_Hue_Click;document.getElementById(OxO6f0b[26])[OxO6f0b[1]]=rdoHsb_Saturation_Click;document.getElementById(OxO6f0b[27])[OxO6f0b[1]]=rdoHsb_Brightness_Click;frm[OxO6f0b[5]].focus();window.focus();} ;function formatString(Ox1ab){Ox1ab= new String(Ox1ab);for(var i=1;i<arguments[OxO6f0b[28]];i++){Ox1ab=Ox1ab.replace( new RegExp(OxO6f0b[29]+(i-1)+OxO6f0b[30]),arguments[i]);} ;return Ox1ab;} ;function AddValue(Ox1ad,Ox7){Ox7= new String(Ox7).toLowerCase();for(var i=0;i<Ox1ad[OxO6f0b[28]];i++){if(Ox1ad[i]==Ox7){return ;} ;} ;Ox1ad[Ox1ad[OxO6f0b[28]]]=Ox7;} ;function SniffLanguage(Ox3d){} ;function LoadNextLanguage(){} ;function LoadLanguage(){msg[OxO6f0b[31]]=OxO6f0b[32];msg[OxO6f0b[33]]=OxO6f0b[34];msg[OxO6f0b[35]]=OxO6f0b[36];msg[OxO6f0b[37]]=OxO6f0b[38];msg[OxO6f0b[39]]=OxO6f0b[40];msg[OxO6f0b[41]]=OxO6f0b[42];msg[OxO6f0b[43]]=OxO6f0b[43];msg[OxO6f0b[44]]=OxO6f0b[45];msg[OxO6f0b[46]]=OxO6f0b[47];msg[OxO6f0b[48]]=OxO6f0b[49];msg[OxO6f0b[50]]=OxO6f0b[51];msg[OxO6f0b[52]]=OxO6f0b[53];msg[OxO6f0b[54]]=OxO6f0b[55];msg[OxO6f0b[56]]=OxO6f0b[57];msg[OxO6f0b[58]]=OxO6f0b[53];msg[OxO6f0b[59]]=OxO6f0b[60];msg[OxO6f0b[61]]=OxO6f0b[62];msg[OxO6f0b[63]]=OxO6f0b[53];msg[OxO6f0b[64]]=OxO6f0b[65];msg[OxO6f0b[66]]=OxO6f0b[67];msg[OxO6f0b[68]]=OxO6f0b[69];msg[OxO6f0b[70]]=OxO6f0b[71];msg[OxO6f0b[72]]=OxO6f0b[60];msg[OxO6f0b[73]]=OxO6f0b[74];msg[OxO6f0b[75]]=OxO6f0b[76];msg[OxO6f0b[77]]=OxO6f0b[78];msg[OxO6f0b[42]]=OxO6f0b[79];} ;function AssignLanguage(){} ;function localize(){SetHTML(document.getElementById(OxO6f0b[80]),msg.SelectAColor,document.getElementById(OxO6f0b[81]),msg.Recent,document.getElementById(OxO6f0b[25]),msg.HsbHue,document.getElementById(OxO6f0b[26]),msg.HsbSaturation,document.getElementById(OxO6f0b[27]),msg.HsbBrightness,document.getElementById(OxO6f0b[82]),msg.RgbRed,document.getElementById(OxO6f0b[83]),msg.RgbGreen,document.getElementById(OxO6f0b[84]),msg.RgbBlue,document.getElementById(OxO6f0b[85]),msg.Hex,document.getElementById(OxO6f0b[86]),msg.HsbHueUnit,document.getElementById(OxO6f0b[87]),msg.HsbSaturationUnit,document.getElementById(OxO6f0b[88]),msg.HsbBrightnessUnit);SetValue(frm.btnCancel,msg.CancelButton,frm.btnOK,msg.OKButton,frm.btnAbout,msg.AboutButton);SetTitle(frm.btnWebSafeColor,msg.WebSafeWarning,document.getElementById(OxO6f0b[22]),msg.WebSafeClick,document.getElementById(OxO6f0b[89]),msg.HsbHueTooltip,document.getElementById(OxO6f0b[90]),msg.HsbSaturationTooltip,document.getElementById(OxO6f0b[91]),msg.HsbBrightnessTooltip,document.getElementById(OxO6f0b[92]),msg.RgbRedTooltip,document.getElementById(OxO6f0b[93]),msg.RgbGreenTooltip,document.getElementById(OxO6f0b[94]),msg.RgbBlueTooltip);} ;function window_load(Ox3a){frm=document.getElementById(OxO6f0b[95]);localize();initialize();var Ox1c=GetQuery(OxO6f0b[96]).toUpperCase();if(Ox1c==OxO6f0b[97]){Ox1c=OxO6f0b[98];} ;if(Ox1c[OxO6f0b[28]]==7){Ox1c=Ox1c.substr(1,6);} ;frm[OxO6f0b[12]][OxO6f0b[99]]=Ox1c;Hex_Changed(Ox3a);Ox1c=Form_Get_Hex();SetBg(document.getElementById(OxO6f0b[24]),Ox1c);frm[OxO6f0b[102]][ new Number(GetCookie(OxO6f0b[101])||0)][OxO6f0b[100]]=true;ColorMode_Changed(Ox3a);var Ox1a0=GetCookie(OxO6f0b[103])||OxO6f0b[97];var Ox1b2=msg[OxO6f0b[77]];for(var i=1;i<33;i++){if(Ox1a0[OxO6f0b[28]]/6>=i){Ox1c=Ox1a0.substr((i-1)*6,6);var Ox1b3=HexToRgb(Ox1c);var title=formatString(msg.RecentTooltip,Ox1c,Ox1b3[0],Ox1b3[1],Ox1b3[2]);SetBg(document.getElementById(OxO6f0b[104]+i),Ox1c);SetTitle(document.getElementById(OxO6f0b[104]+i),title);document.getElementById(OxO6f0b[104]+i)[OxO6f0b[1]]=pnlRecent_Click;} else {document.getElementById(OxO6f0b[104]+i)[OxO6f0b[106]][OxO6f0b[105]]=OxO6f0b[107];} ;} ;} ;function btnAbout_Click(){if(confirm(msg.About)){window.open(OxO6f0b[108],OxO6f0b[109]);} ;} ;function pnlRecent_Click(Ox3a){var Ox16=Ox3a[OxO6f0b[111]][OxO6f0b[106]][OxO6f0b[110]];if(Ox16.indexOf(OxO6f0b[112])!=-1){var Ox1b3= new Array();Ox16=Ox16.substr(Ox16.indexOf(OxO6f0b[113])+1);Ox16=Ox16.substr(0,Ox16.indexOf(OxO6f0b[114]));Ox1b3[0]= new Number(Ox16.substr(0,Ox16.indexOf(OxO6f0b[115])));Ox16=Ox16.substr(Ox16.indexOf(OxO6f0b[115])+1);Ox1b3[1]= new Number(Ox16.substr(0,Ox16.indexOf(OxO6f0b[115])));Ox1b3[2]= new Number(Ox16.substr(Ox16.indexOf(OxO6f0b[115])+1));Ox16=RgbToHex(Ox1b3);} else {Ox16=Ox16.substr(1,6).toUpperCase();} ;frm[OxO6f0b[12]][OxO6f0b[99]]=Ox16;Hex_Changed(Ox3a);} ;function pnlOldClick_Click(Ox3a){frm[OxO6f0b[12]][OxO6f0b[99]]=document.getElementById(OxO6f0b[24])[OxO6f0b[106]][OxO6f0b[110]].substr(1,6).toUpperCase();Hex_Changed(Ox3a);} ;function rdoHsb_Hue_Click(Ox3a){frm[OxO6f0b[14]][OxO6f0b[100]]=true;ColorMode_Changed(Ox3a);} ;function rdoHsb_Saturation_Click(Ox3a){frm[OxO6f0b[15]][OxO6f0b[100]]=true;ColorMode_Changed(Ox3a);} ;function rdoHsb_Brightness_Click(Ox3a){frm[OxO6f0b[16]][OxO6f0b[100]]=true;ColorMode_Changed(Ox3a);} ;function Hide(){for(var i=0;i<arguments[OxO6f0b[28]];i++){if(arguments[i]){arguments[i][OxO6f0b[106]][OxO6f0b[116]]=OxO6f0b[117];} ;} ;} ;function Show(){for(var i=0;i<arguments[OxO6f0b[28]];i++){if(arguments[i]){arguments[i][OxO6f0b[106]][OxO6f0b[116]]=OxO6f0b[97];} ;} ;} ;function SetValue(){for(var i=0;i<arguments[OxO6f0b[28]];i+=2){arguments[i][OxO6f0b[99]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxO6f0b[28]];i+=2){arguments[i][OxO6f0b[118]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxO6f0b[28]];i+=2){arguments[i][OxO6f0b[119]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxO6f0b[28]];i+=2){if(arguments[i]){arguments[i][OxO6f0b[106]][OxO6f0b[110]]=OxO6f0b[76]+arguments[i+1];} ;} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxO6f0b[28]];i+=3){arguments[i][OxO6f0b[106]][OxO6f0b[120]]=arguments[i+1]+OxO6f0b[121]+arguments[i+2]+OxO6f0b[122];} ;} ;function ColorMode_Changed(Ox3a){for(var i=0;i<3;i++){if(frm[OxO6f0b[102]][i][OxO6f0b[100]]){ColorMode=i;} ;} ;SetCookie(OxO6f0b[101],ColorMode,60*60*24*365);Hide(document.getElementById(OxO6f0b[123]),document.getElementById(OxO6f0b[124]),document.getElementById(OxO6f0b[125]),document.getElementById(OxO6f0b[126]),document.getElementById(OxO6f0b[127]),document.getElementById(OxO6f0b[128]),document.getElementById(OxO6f0b[129]),document.getElementById(OxO6f0b[130]),document.getElementById(OxO6f0b[131]),document.getElementById(OxO6f0b[132]),document.getElementById(OxO6f0b[133]),document.getElementById(OxO6f0b[134]),document.getElementById(OxO6f0b[135]),document.getElementById(OxO6f0b[136]));switch(ColorMode){case 0:document.getElementById(OxO6f0b[138])[OxO6f0b[137]]=OxO6f0b[139];Show(document.getElementById(OxO6f0b[123]),document.getElementById(OxO6f0b[124]),document.getElementById(OxO6f0b[125]),document.getElementById(OxO6f0b[126]));Hsb_Changed(Ox3a);break ;;case 1:document.getElementById(OxO6f0b[138])[OxO6f0b[137]]=OxO6f0b[140];document.getElementById(OxO6f0b[127])[OxO6f0b[137]]=OxO6f0b[141];Show(document.getElementById(OxO6f0b[123]),document.getElementById(OxO6f0b[127]));document.getElementById(OxO6f0b[123])[OxO6f0b[106]][OxO6f0b[110]]=OxO6f0b[142];Hsb_Changed(Ox3a);break ;;case 2:document.getElementById(OxO6f0b[138])[OxO6f0b[137]]=OxO6f0b[140];document.getElementById(OxO6f0b[127])[OxO6f0b[137]]=OxO6f0b[143];Show(document.getElementById(OxO6f0b[123]),document.getElementById(OxO6f0b[127]));document.getElementById(OxO6f0b[123])[OxO6f0b[106]][OxO6f0b[110]]=OxO6f0b[144];Hsb_Changed(Ox3a);break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(Ox3a){var Ox1b3=HexToRgb(frm[OxO6f0b[12]].value);Ox1b3=RgbToWebSafeRgb(Ox1b3);frm[OxO6f0b[12]][OxO6f0b[99]]=RgbToHex(Ox1b3);Hex_Changed(Ox3a);} ;function checkWebSafe(){var Ox1b3=Form_Get_Rgb();if(RgbIsWebSafe(Ox1b3)){Hide(frm.btnWebSafeColor,document.getElementById(OxO6f0b[22]),document.getElementById(OxO6f0b[23]));} else {Ox1b3=RgbToWebSafeRgb(Ox1b3);SetBg(document.getElementById(OxO6f0b[22]),RgbToHex(Ox1b3));Show(frm.btnWebSafeColor,document.getElementById(OxO6f0b[22]),document.getElementById(OxO6f0b[23]));} ;} ;function validateNumber(Ox3a){var Ox1c8=String.fromCharCode(Ox3a.which);if(IgnoreKey(Ox3a)){return ;} ;if(OxO6f0b[145].indexOf(Ox1c8)!=-1){return ;} ;Ox3a[OxO6f0b[146]]=0;} ;function validateHex(Ox3a){if(IgnoreKey(Ox3a)){return ;} ;var Ox1c8=String.fromCharCode(Ox3a.which);if(OxO6f0b[147].indexOf(Ox1c8)!=-1){return ;} ;if(OxO6f0b[148].indexOf(Ox1c8)!=-1){return ;} ;} ;function IgnoreKey(Ox3a){var Ox1c8=String.fromCharCode(Ox3a.which);var Ox1cb= new Array(0,8,9,13,27);if(Ox1c8==null){return true;} ;for(var i=0;i<5;i++){if(Ox3a[OxO6f0b[146]]==Ox1cb[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){if(window[OxO6f0b[149]]){window[OxO6f0b[149]].focus();} ;top.close();} ;function btnOK_Click(){var Ox1c= new String(frm[OxO6f0b[12]].value);if(window[OxO6f0b[149]]){try{window[OxO6f0b[149]].ColorPicker_Picked(Ox1c);} catch(e){} ;window[OxO6f0b[149]].focus();} ;recent=GetCookie(OxO6f0b[103])||OxO6f0b[97];for(var i=0;i<recent[OxO6f0b[28]];i+=6){if(recent.substr(i,6)==Ox1c){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxO6f0b[28]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxO6f0b[12]][OxO6f0b[99]]+recent;SetCookie(OxO6f0b[103],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Ox3a,Oxf1,Oxbf){Oxf1=Oxf1-POSITIONADJUSTX+5;Oxbf=Oxbf-POSITIONADJUSTY+5;Oxf1-=7;Oxbf-=27;Oxf1=Oxf1<0?0:Oxf1>255?255:Oxf1;Oxbf=Oxbf<0?0:Oxbf>255?255:Oxbf;SetBgPosition(document.getElementById(OxO6f0b[150]),Oxf1-5,Oxbf-5);switch(ColorMode){case 0:var Ox1cf= new Array(0,0,0);Ox1cf[1]=Oxf1/255;Ox1cf[2]=1-(Oxbf/255);frm[OxO6f0b[7]][OxO6f0b[99]]=Math.round(Ox1cf[1]*100);frm[OxO6f0b[8]][OxO6f0b[99]]=Math.round(Ox1cf[2]*100);Hsb_Changed(Ox3a);break ;;case 1:var Ox1cf= new Array(0,0,0);Ox1cf[0]=Oxf1/255;Ox1cf[2]=1-(Oxbf/255);frm[OxO6f0b[5]][OxO6f0b[99]]=Ox1cf[0]==1?0:Math.round(Ox1cf[0]*360);frm[OxO6f0b[8]][OxO6f0b[99]]=Math.round(Ox1cf[2]*100);Hsb_Changed(Ox3a);break ;;case 2:var Ox1cf= new Array(0,0,0);Ox1cf[0]=Oxf1/255;Ox1cf[1]=1-(Oxbf/255);frm[OxO6f0b[5]][OxO6f0b[99]]=Ox1cf[0]==1?0:Math.round(Ox1cf[0]*360);frm[OxO6f0b[7]][OxO6f0b[99]]=Math.round(Ox1cf[1]*100);Hsb_Changed(Ox3a);break ;;} ;} ;function Hex_Changed(Ox3a){var Ox1c=Form_Get_Hex();var Ox1b3=HexToRgb(Ox1c);var Ox1cf=RgbToHsb(Ox1b3);Form_Set_Rgb(Ox1b3);Form_Set_Hsb(Ox1cf);SetBg(document.getElementById(OxO6f0b[151]),Ox1c);SetupCursors(Ox3a);SetupGradients();checkWebSafe();} ;function Rgb_Changed(Ox3a){var Ox1b3=Form_Get_Rgb();var Ox1cf=RgbToHsb(Ox1b3);var Ox1c=RgbToHex(Ox1b3);Form_Set_Hsb(Ox1cf);Form_Set_Hex(Ox1c);SetBg(document.getElementById(OxO6f0b[151]),Ox1c);SetupCursors(Ox3a);SetupGradients();checkWebSafe();} ;function Hsb_Changed(Ox3a){var Ox1cf=Form_Get_Hsb();var Ox1b3=HsbToRgb(Ox1cf);var Ox1c=RgbToHex(Ox1b3);Form_Set_Rgb(Ox1b3);Form_Set_Hex(Ox1c);SetBg(document.getElementById(OxO6f0b[151]),Ox1c);SetupCursors(Ox3a);SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox1c){frm[OxO6f0b[12]][OxO6f0b[99]]=Ox1c;} ;function Form_Get_Hex(){var Ox1c= new String(frm[OxO6f0b[12]].value);for(var i=0;i<Ox1c[OxO6f0b[28]];i++){if(OxO6f0b[152].indexOf(Ox1c.substr(i,1))==-1){Ox1c=OxO6f0b[153];frm[OxO6f0b[12]][OxO6f0b[99]]=Ox1c;alert(formatString(msg.BadNumber,OxO6f0b[153],OxO6f0b[98]));break ;} ;} ;while(Ox1c[OxO6f0b[28]]<6){Ox1c=OxO6f0b[154]+Ox1c;} ;return Ox1c;} ;function Form_Get_Hsb(){var Ox1cf= new Array(0,0,0);Ox1cf[0]= new Number(frm[OxO6f0b[5]].value)/360;Ox1cf[1]= new Number(frm[OxO6f0b[7]].value)/100;Ox1cf[2]= new Number(frm[OxO6f0b[8]].value)/100;if(Ox1cf[0]>1||isNaN(Ox1cf[0])){Ox1cf[0]=1;frm[OxO6f0b[5]][OxO6f0b[99]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox1cf[1]>1||isNaN(Ox1cf[1])){Ox1cf[1]=1;frm[OxO6f0b[7]][OxO6f0b[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox1cf[2]>1||isNaN(Ox1cf[2])){Ox1cf[2]=1;frm[OxO6f0b[8]][OxO6f0b[99]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox1cf;} ;function Form_Set_Hsb(Ox1cf){SetValue(frm.txtHSB_Hue,Math.round(Ox1cf[0]*360),frm.txtHSB_Saturation,Math.round(Ox1cf[1]*100),frm.txtHSB_Brightness,Math.round(Ox1cf[2]*100));} ;function Form_Get_Rgb(){var Ox1b3= new Array(0,0,0);Ox1b3[0]= new Number(frm[OxO6f0b[9]].value);Ox1b3[1]= new Number(frm[OxO6f0b[10]].value);Ox1b3[2]= new Number(frm[OxO6f0b[11]].value);if(Ox1b3[0]>255||isNaN(Ox1b3[0])||Ox1b3[0]!=Math.round(Ox1b3[0])){Ox1b3[0]=255;frm[OxO6f0b[9]][OxO6f0b[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b3[1]>255||isNaN(Ox1b3[1])||Ox1b3[1]!=Math.round(Ox1b3[1])){Ox1b3[1]=255;frm[OxO6f0b[10]][OxO6f0b[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox1b3[2]>255||isNaN(Ox1b3[2])||Ox1b3[2]!=Math.round(Ox1b3[2])){Ox1b3[2]=255;frm[OxO6f0b[11]][OxO6f0b[99]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox1b3;} ;function Form_Set_Rgb(Ox1b3){frm[OxO6f0b[9]][OxO6f0b[99]]=Ox1b3[0];frm[OxO6f0b[10]][OxO6f0b[99]]=Ox1b3[1];frm[OxO6f0b[11]][OxO6f0b[99]]=Ox1b3[2];} ;function SetupCursors(Ox3a){var Ox1cf=Form_Get_Hsb();var Ox1b3=Form_Get_Rgb();if(RgbToYuv(Ox1b3)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(Ox3a[OxO6f0b[111]]!=null){if(Ox3a[OxO6f0b[111]][OxO6f0b[155]]==OxO6f0b[17]){return ;} ;if(Ox3a[OxO6f0b[111]][OxO6f0b[155]]==OxO6f0b[21]){return ;} ;} ;var Oxf1;var Oxbf;var Ox1da;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox1cf[i]*=255;} ;} ;switch(ColorMode){case 0:Oxf1=Ox1cf[1];Oxbf=Ox1cf[2];Ox1da=Ox1cf[0]==0?1:Ox1cf[0];break ;;case 1:Oxf1=Ox1cf[0]==0?1:Ox1cf[0];Oxbf=Ox1cf[2];Ox1da=Ox1cf[1];break ;;case 2:Oxf1=Ox1cf[0]==0?1:Ox1cf[0];Oxbf=Ox1cf[1];Ox1da=Ox1cf[2];break ;;} ;Oxbf=255-Oxbf;Ox1da=255-Ox1da;SetBgPosition(document.getElementById(OxO6f0b[150]),Oxf1-5,Oxbf-5);document.getElementById(OxO6f0b[157])[OxO6f0b[106]][OxO6f0b[156]]=(Ox1da+27)+OxO6f0b[122];} ;function SetupGradients(){var Ox1cf=Form_Get_Hsb();var Ox1b3=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(document.getElementById(OxO6f0b[123]),RgbToHex(HueToRgb(Ox1cf[0])));break ;;case 1:SetBg(document.getElementById(OxO6f0b[127]),RgbToHex(HsbToRgb( new Array(Ox1cf[0],1,Ox1cf[2]))));break ;;case 2:SetBg(document.getElementById(OxO6f0b[127]),RgbToHex(HsbToRgb( new Array(Ox1cf[0],Ox1cf[1],1))));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;document.getElementById(OxO6f0b[150])[OxO6f0b[106]][OxO6f0b[158]]=OxO6f0b[159];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;document.getElementById(OxO6f0b[150])[OxO6f0b[106]][OxO6f0b[158]]=OxO6f0b[160];} ;function pnlGradient_Top_Click(Ox3a){Ox3a[OxO6f0b[161]]=true;SetGradientPosition(Ox3a,Ox3a[OxO6f0b[162]]-5,Ox3a[OxO6f0b[163]]-5);document.getElementById(OxO6f0b[17])[OxO6f0b[164]]=OxO6f0b[165];_down=false;} ;var _down=false;function pnlGradient_Top_MouseMove(Ox3a){Ox3a[OxO6f0b[161]]=true;if(!_down){return ;} ;SetGradientPosition(Ox3a,Ox3a[OxO6f0b[162]]-5,Ox3a[OxO6f0b[163]]-5);} ;function pnlGradient_Top_MouseDown(Ox3a){Ox3a[OxO6f0b[161]]=true;_down=true;SetGradientPosition(Ox3a,Ox3a[OxO6f0b[162]]-5,Ox3a[OxO6f0b[163]]-5);document.getElementById(OxO6f0b[17])[OxO6f0b[164]]=OxO6f0b[166];} ;function pnlGradient_Top_MouseUp(Ox3a){_down=false;Ox3a[OxO6f0b[161]]=true;SetGradientPosition(Ox3a,Ox3a[OxO6f0b[162]]-5,Ox3a[OxO6f0b[163]]-5);document.getElementById(OxO6f0b[17])[OxO6f0b[164]]=OxO6f0b[165];} ;function Document_MouseUp(){e[OxO6f0b[161]]=true;document.getElementById(OxO6f0b[17])[OxO6f0b[164]]=OxO6f0b[165];} ;function SetVerticalPosition(Ox3a,Ox1da){var Ox1da=Ox1da-POSITIONADJUSTZ;if(Ox1da<27){Ox1da=27;} ;if(Ox1da>282){Ox1da=282;} ;document.getElementById(OxO6f0b[157])[OxO6f0b[106]][OxO6f0b[156]]=Ox1da+OxO6f0b[122];Ox1da=1-((Ox1da-27)/255);switch(ColorMode){case 0:if(Ox1da==1){Ox1da=0;} ;frm[OxO6f0b[5]][OxO6f0b[99]]=Math.round(Ox1da*360);Hsb_Changed(Ox3a);break ;;case 1:frm[OxO6f0b[7]][OxO6f0b[99]]=Math.round(Ox1da*100);Hsb_Changed(Ox3a);break ;;case 2:frm[OxO6f0b[8]][OxO6f0b[99]]=Math.round(Ox1da*100);Hsb_Changed(Ox3a);break ;;} ;} ;function pnlVertical_Top_Click(Ox3a){SetVerticalPosition(Ox3a,Ox3a[OxO6f0b[163]]-5);Ox3a[OxO6f0b[161]]=true;} ;function pnlVertical_Top_MouseMove(Ox3a){if(!window[OxO6f0b[167]]){return ;} ;if(Ox3a[OxO6f0b[146]]!=1){return ;} ;SetVerticalPosition(Ox3a,Ox3a[OxO6f0b[163]]-5);Ox3a[OxO6f0b[161]]=true;} ;function pnlVertical_Top_MouseDown(Ox3a){window[OxO6f0b[167]]=true;SetVerticalPosition(Ox3a,Ox3a[OxO6f0b[163]]-5);Ox3a[OxO6f0b[161]]=true;} ;function pnlVertical_Top_MouseUp(Ox3a){window[OxO6f0b[167]]=false;SetVerticalPosition(Ox3a,Ox3a[OxO6f0b[163]]-5);Ox3a[OxO6f0b[161]]=true;} ;function SetCookie(name,Ox7,Ox8){var Ox9=name+OxO6f0b[168]+escape(Ox7)+OxO6f0b[169];if(Ox8){var Oxa= new Date();Oxa.setSeconds(Oxa.getSeconds()+Ox8);Ox9+=OxO6f0b[170]+Oxa.toUTCString()+OxO6f0b[171];} ;document[OxO6f0b[172]]=Ox9;} ;function GetCookie(name){var Oxc=document[OxO6f0b[172]].split(OxO6f0b[171]);for(var i=0;i<Oxc[OxO6f0b[28]];i++){var Oxe=Oxc[i].split(OxO6f0b[168]);if(name==Oxe[0].replace(/\s/g,OxO6f0b[97])){return unescape(Oxe[1]);} ;} ;} ;function GetCookieDictionary(){var Ox10={};var Oxc=document[OxO6f0b[172]].split(OxO6f0b[171]);for(var i=0;i<Oxc[OxO6f0b[28]];i++){var Oxe=Oxc[i].split(OxO6f0b[168]);Ox10[Oxe[0].replace(/\s/g,OxO6f0b[97])]=unescape(Oxe[1]);} ;return Ox10;} ;function GetQuery(name){var i=0;while(window[OxO6f0b[174]][OxO6f0b[173]].indexOf(name+OxO6f0b[168],i)!=-1){var Ox7=window[OxO6f0b[174]][OxO6f0b[173]].substr(window[OxO6f0b[174]][OxO6f0b[173]].indexOf(name+OxO6f0b[168],i));Ox7=Ox7.substr(name[OxO6f0b[28]]+1);if(Ox7.indexOf(OxO6f0b[175])!=-1){if(Ox7.indexOf(OxO6f0b[175])==0){Ox7=OxO6f0b[97];} else {Ox7=Ox7.substr(0,Ox7.indexOf(OxO6f0b[175]));} ;} ;return unescape(Ox7);} ;return OxO6f0b[97];} ;function RgbIsWebSafe(Ox1b3){var Ox1c=RgbToHex(Ox1b3);for(var i=0;i<3;i++){if(OxO6f0b[176].indexOf(Ox1c.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox1b3){var Ox1ea= new Array(Ox1b3[0],Ox1b3[1],Ox1b3[2]);if(RgbIsWebSafe(Ox1b3)){return Ox1ea;} ;var Ox1eb= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox5a=1;Ox5a<6;Ox5a++){if(Ox1ea[i]>Ox1eb[Ox5a-1]&&Ox1ea[i]<Ox1eb[Ox5a]){if(Ox1ea[i]-Ox1eb[Ox5a-1]>Ox1eb[Ox5a]-Ox1ea[i]){Ox1ea[i]=Ox1eb[Ox5a];} else {Ox1ea[i]=Ox1eb[Ox5a-1];} ;break ;} ;} ;} ;return Ox1ea;} ;function RgbToYuv(Ox1b3){var Ox1ed= new Array();Ox1ed[0]=(Ox1b3[0]*0.299+Ox1b3[1]*0.587+Ox1b3[2]*0.114)/255;Ox1ed[1]=(Ox1b3[0]*-0.169+Ox1b3[1]*-0.332+Ox1b3[2]*0.500+128)/255;Ox1ed[2]=(Ox1b3[0]*0.500+Ox1b3[1]*-0.419+Ox1b3[2]*-0.0813+128)/255;return Ox1ed;} ;function RgbToHsb(Ox1b3){var Ox1ef= new Array(Ox1b3[0],Ox1b3[1],Ox1b3[2]);var Ox1f0= new Number(1);var Ox1f1= new Number(0);var Ox1f2= new Number(1);var Ox1cf= new Array(0,0,0);var Ox1f3= new Array();for(var i=0;i<3;i++){Ox1ef[i]=Ox1b3[i]/255;if(Ox1ef[i]<Ox1f0){Ox1f0=Ox1ef[i];} ;if(Ox1ef[i]>Ox1f1){Ox1f1=Ox1ef[i];} ;} ;Ox1f2=Ox1f1-Ox1f0;Ox1cf[2]=Ox1f1;if(Ox1f2==0){return Ox1cf;} ;Ox1cf[1]=Ox1f2/Ox1f1;for(var i=0;i<3;i++){Ox1f3[i]=(((Ox1f1-Ox1ef[i])/6)+(Ox1f2/2))/Ox1f2;} ;if(Ox1ef[0]==Ox1f1){Ox1cf[0]=Ox1f3[2]-Ox1f3[1];} else {if(Ox1ef[1]==Ox1f1){Ox1cf[0]=(1/3)+Ox1f3[0]-Ox1f3[2];} else {if(Ox1ef[2]==Ox1f1){Ox1cf[0]=(2/3)+Ox1f3[1]-Ox1f3[0];} ;} ;} ;if(Ox1cf[0]<0){Ox1cf[0]+=1;} else {if(Ox1cf[0]>1){Ox1cf[0]-=1;} ;} ;return Ox1cf;} ;function HsbToRgb(Ox1cf){var Ox1b3=HueToRgb(Ox1cf[0]);var Ox49=Ox1cf[2]*255;for(var i=0;i<3;i++){Ox1b3[i]=Ox1b3[i]*Ox1cf[2];Ox1b3[i]=((Ox1b3[i]-Ox49)*Ox1cf[1])+Ox49;Ox1b3[i]=Math.round(Ox1b3[i]);} ;return Ox1b3;} ;function RgbToHex(Ox1b3){var Ox1c= new String();for(var i=0;i<3;i++){Ox1b3[2-i]=Math.round(Ox1b3[2-i]);Ox1c=Ox1b3[2-i].toString(16)+Ox1c;if(Ox1c[OxO6f0b[28]]%2==1){Ox1c=OxO6f0b[154]+Ox1c;} ;} ;return Ox1c.toUpperCase();} ;function HexToRgb(Ox1c){var Ox1b3= new Array();for(var i=0;i<3;i++){Ox1b3[i]= new Number(OxO6f0b[177]+Ox1c.substr(i*2,2));} ;return Ox1b3;} ;function HueToRgb(Ox1f8){var Ox1f9=Ox1f8*360;var Ox1b3= new Array(0,0,0);var Ox1fa=(Ox1f9%60)/60;if(Ox1f9<60){Ox1b3[0]=255;Ox1b3[1]=Ox1fa*255;} else {if(Ox1f9<120){Ox1b3[1]=255;Ox1b3[0]=(1-Ox1fa)*255;} else {if(Ox1f9<180){Ox1b3[1]=255;Ox1b3[2]=Ox1fa*255;} else {if(Ox1f9<240){Ox1b3[2]=255;Ox1b3[1]=(1-Ox1fa)*255;} else {if(Ox1f9<300){Ox1b3[2]=255;Ox1b3[0]=Ox1fa*255;} else {if(Ox1f9<360){Ox1b3[0]=255;Ox1b3[2]=(1-Ox1fa)*255;} ;} ;} ;} ;} ;} ;return Ox1b3;} ;function CheckHexSelect(){if(window[OxO6f0b[178]]&&window[OxO6f0b[179]]&&frm[OxO6f0b[12]]){var Ox16=OxO6f0b[76]+frm[OxO6f0b[12]][OxO6f0b[99]];if(Ox16[OxO6f0b[28]]==7){if(window[OxO6f0b[180]]!=Ox16){window[OxO6f0b[180]]=Ox16;window.do_select(Ox16);} ;} ;} ;} ;setInterval(CheckHexSelect,10);