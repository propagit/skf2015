var OxOcec8=["head","script","language","javascript","type","text/javascript","src","id","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","document","length","element \x27","\x27 not found","returnValue","preventDefault","cancelBubble","stopPropagation","onchange","oninitialized","command","commandui","commandvalue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/images/t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/images/t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","//TODO: event not found? throw error ?","all","UNSELECTABLE","on","tabIndex","-1","contentWindow","contentDocument","parentWindow","frames","frameElement","//TODO:frame contentWindow not found?","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Themes/","/Images/all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Scripts/IE_Implementation/CuteEditorImplementation.js?i=1","CuteEditorImplementation","function","GET","\x26getModified=1","loadScript","status","Failed to load impl time!","cursor","body","InitializeCode","block","contentEditable","no-drop","/Scripts/resource.php","?type=license\x26_ver=","Failed to load editor license data.","responseText","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","0000000000000840",";","/",":","//",".","www","?type=serverip\x26_ver=","Failed to load editor license info!","You are using an incorrect license file.","Invalid lcparts count:","Invalid product version.","Invalid license type.","(0) license expired!","(0) only localhost!","(1) host not match!","(2) ip not match!","(3) host not match!","(4) license expired!","License Error : "];function include(Ox17e,Ox17f){var Ox180=document.getElementsByTagName(OxOcec8[0]).item(0);var Ox181=document.getElementById(Ox17e);if(Ox181){Ox180.removeChild(Ox181);} ;var Ox182=document.createElement(OxOcec8[1]);Ox182.setAttribute(OxOcec8[2],OxOcec8[3]);Ox182.setAttribute(OxOcec8[4],OxOcec8[5]);Ox182.setAttribute(OxOcec8[6],Ox17f);Ox182.setAttribute(OxOcec8[7],Ox17e);Ox180.appendChild(Ox182);} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOcec8[8]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOcec8[8]){return  new ActiveXObject(OxOcec8[9]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Ox94d,Ox17f,Ox125,Ox94e){var Ox7ac=CreateXMLHttpRequest();function Ox94f(){if(Ox7ac[OxOcec8[10]]!=4){return ;} ;Ox7ac[OxOcec8[11]]= new Function();var Ox187=Ox7ac;Ox7ac=null;Ox125(Ox187);} ;Ox7ac[OxOcec8[11]]=Ox94f;Ox7ac.open(Ox94d,Ox17f,true);Ox7ac.send(Ox94e||OxOcec8[12]);} ;function Window_GetElement(Ox90,Oxaa,Ox130){var Ox131=Ox90[OxOcec8[13]].getElementById(Oxaa);if(Ox131){return Ox131;} ;var Ox1f=Ox90[OxOcec8[13]].getElementsByName(Oxaa);if(Ox1f[OxOcec8[14]]>0){return Ox1f.item(0);} ;if(Ox130){throw ( new Error(OxOcec8[15]+Oxaa+OxOcec8[16]));} ;return null;} ;function Event_PreventDefault(Ox137){Ox137=Event_GetEvent(Ox137);Ox137[OxOcec8[17]]=false;if(Ox137[OxOcec8[18]]){Ox137.preventDefault();} ;} ;function Event_CancelBubble(Ox137){Ox137=Event_GetEvent(Ox137);Ox137[OxOcec8[19]]=true;if(Ox137[OxOcec8[20]]){Ox137.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox137){Ox137=Event_GetEvent(Ox137);Event_PreventDefault(Ox137);return Event_CancelBubble(Ox137);} ;function CuteEditor_AddMainMenuItems(Ox54a){} ;function CuteEditor_AddDropMenuItems(Ox54a,Ox551){} ;function CuteEditor_AddTagMenuItems(Ox54a,Ox553){} ;function CuteEditor_AddVerbMenuItems(Ox54a,Ox553){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox557,Ox558,Ox7){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox15d){return Ox15d;} ;function CuteEditor_FilterHTML(editor,Ox176){return Ox176;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxOcec8[21],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxOcec8[22],null);} ;function CuteEditor_FireCommand(editor,Ox557,Ox558,Ox7){var Ox27=window.CuteEditor_OnCommand(editor,Ox557,Ox558,Ox7);if(Ox27==true){return true;} ;var Ox55f={};Ox55f[OxOcec8[23]]=Ox557;Ox55f[OxOcec8[24]]=Ox558;Ox55f[OxOcec8[25]]=Ox7;Ox55f[OxOcec8[17]]=true;CuteEditor_FireEvent(editor,OxOcec8[26],Ox55f);if(Ox55f[OxOcec8[17]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox561,Ox562){if(Ox562==null){Ox562={};} ;var Ox563=editor.getAttribute(Ox561);if(Ox563){if( typeof (Ox563)==OxOcec8[27]){editor[OxOcec8[28]]= new Function(OxOcec8[29],Ox563);} else {editor[OxOcec8[28]]=Ox563;} ;editor._fireEventFunction(Ox562);} ;} ;function CuteEditor_GetEditor(element){for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxOcec8[30]]){if(Ox3a.getAttribute(OxOcec8[31])==OxOcec8[32]){return Ox3a;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Ox951){var editor=CuteEditor_GetEditor(element);if(editor[OxOcec8[33]]){return ;} ;if(element.getAttribute(OxOcec8[34])==OxOcec8[32]){var Ox2b=element.GetValue();if(Ox2b==OxOcec8[35]){Ox2b=OxOcec8[12];} ;var Oxed=element.GetText();if(Oxed==OxOcec8[35]){Oxed=OxOcec8[12];} ;element.SetSelectedIndex(0);editor.ExecCommand(Ox951,false,Ox2b,Oxed);} else {if(!editor[OxOcec8[33]]&&element[OxOcec8[36]]){var Ox2b=element[OxOcec8[36]];if(Ox2b==OxOcec8[35]){Ox2b=OxOcec8[12];} ;element[OxOcec8[37]]=0;editor.ExecCommand(Ox951,false,Ox2b,Oxed);} else {element[OxOcec8[37]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox637){var Oxcf=null;while(src!=null){if(src[OxOcec8[38]]==OxOcec8[39]){Oxcf=src;break ;} ;src=src[OxOcec8[30]];} ;var Oxd0=Oxcf[OxOcec8[40]].item(0);Oxcf[OxOcec8[43]][OxOcec8[42]][OxOcec8[41]]=OxOcec8[12];Oxd0[OxOcec8[44]]=OxOcec8[45]+Ox637+OxOcec8[46];Oxcf[OxOcec8[47]]= new Function(OxOcec8[48]+Ox637+OxOcec8[49]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox637){var Oxcf=null;while(src!=null){if(src[OxOcec8[38]]==OxOcec8[39]){Oxcf=src;break ;} ;src=src[OxOcec8[30]];} ;var Oxd0=Oxcf[OxOcec8[40]].item(0);Oxcf[OxOcec8[43]][OxOcec8[42]][OxOcec8[41]]=OxOcec8[50];Oxd0[OxOcec8[44]]=OxOcec8[45]+Ox637+OxOcec8[51];Oxcf[OxOcec8[47]]= new Function(OxOcec8[52]+Ox637+OxOcec8[49]);} ;function Event_GetEvent(Ox137){Ox137=Event_FindEvent(Ox137);if(Ox137==null){Debug_Todo(OxOcec8[53]);} ;return Ox137;} ;function Element_GetAllElements(p){var arr=[];for(var i=0;i<p[OxOcec8[54]][OxOcec8[14]];i++){arr.push(p[OxOcec8[54]].item(i));} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxOcec8[55],OxOcec8[56]);element.setAttribute(OxOcec8[57],OxOcec8[58]);var arr=Element_GetAllElements(element);var len=arr[OxOcec8[14]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxOcec8[55],OxOcec8[56]);arr[i].setAttribute(OxOcec8[57],OxOcec8[58]);} ;} ;function Frame_GetContentWindow(Ox245){if(Ox245[OxOcec8[59]]){return Ox245[OxOcec8[59]];} ;if(Ox245[OxOcec8[60]]){if(Ox245[OxOcec8[60]][OxOcec8[61]]){return Ox245[OxOcec8[60]][OxOcec8[61]];} ;} ;var Ox90;if(Ox245[OxOcec8[7]]){Ox90=window[OxOcec8[62]][Ox245[OxOcec8[7]]];if(Ox90){return Ox90;} ;} ;var len=window[OxOcec8[62]][OxOcec8[14]];for(var i=0;i<len;i++){Ox90=window[OxOcec8[62]][i];if(Ox90[OxOcec8[63]]==Ox245){return Ox90;} ;if(Ox90[OxOcec8[13]]==Ox245[OxOcec8[60]]){return Ox90;} ;} ;Debug_Todo(OxOcec8[64]);} ;function Array_IndexOf(arr,Ox139){for(var i=0;i<arr[OxOcec8[14]];i++){if(arr[i]==Ox139){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox139){return Array_IndexOf(arr,Ox139)!=-1;} ;function clearArray(Ox13c){for(var i=0;i<Ox13c[OxOcec8[14]];i++){Ox13c[i]=null;} ;} ;function Event_FindEvent(Ox137){if(Ox137&&Ox137[OxOcec8[18]]){return Ox137;} ;if(window[OxOcec8[29]]){return window[OxOcec8[29]];} ;return Event_FindEvent_FindEventFromWindows();} ;function Event_FindEvent_FindEventFromCallers(){var Ox75=Event_GetEvent[OxOcec8[65]];for(var i=0;i<100;i++){if(!Ox75){break ;} ;var Ox137=Ox75[OxOcec8[66]][0];if(Ox137&&Ox137[OxOcec8[18]]){return Ox137;} ;Ox75=Ox75[OxOcec8[65]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox140(window);function Ox140(Ox90){if(Ox90==null){return null;} ;if(Ox90[OxOcec8[29]]){return Ox90[OxOcec8[29]];} ;if(Array_Contains(arr,Ox90)){return null;} ;arr.push(Ox90);var Ox141=[];if(Ox90[OxOcec8[67]]!=Ox90){Ox141.push(Ox90.parent);} ;if(Ox90[OxOcec8[68]]!=Ox90[OxOcec8[67]]){Ox141.push(Ox90.top);} ;if(Ox90[OxOcec8[69]]){Ox141.push(Ox90.opener);} ;for(var i=0;i<Ox90[OxOcec8[62]][OxOcec8[14]];i++){Ox141.push(Ox90[OxOcec8[62]][i]);} ;for(var i=0;i<Ox141[OxOcec8[14]];i++){try{var Ox137=Ox140(Ox141[i]);if(Ox137){return Ox137;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox137){Ox137=Event_GetEvent(Ox137);if(Ox137[OxOcec8[70]]){return Ox137[OxOcec8[70]];} ;if(Ox137[OxOcec8[71]]){return Ox137[OxOcec8[71]];} ;Debug_Todo(OxOcec8[72]);return null;} ;function Event_GetFromElement(Ox137){Ox137=Event_GetEvent(Ox137);if(Ox137[OxOcec8[73]]){return Ox137[OxOcec8[73]];} ;if(Ox137[OxOcec8[74]]){return Ox137[OxOcec8[74]];} ;return null;} ;function Event_GetToElement(Ox137){Ox137=Event_GetEvent(Ox137);if(Ox137[OxOcec8[75]]){return Ox137[OxOcec8[75]];} ;if(Ox137[OxOcec8[74]]){return Ox137[OxOcec8[74]];} ;return null;} ;function Event_GetKeyCode(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[76]];} ;function Event_GetClientX(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[77]];} ;function Event_GetClientY(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[78]];} ;function Event_GetOffsetX(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[79]];} ;function Event_GetOffsetY(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[80]];} ;function Event_IsLeftButton(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[81]]==1;} ;function Event_IsCtrlKey(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[82]];} ;function Event_IsAltKey(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[83]];} ;function Event_IsShiftKey(Ox137){Ox137=Event_GetEvent(Ox137);return Ox137[OxOcec8[84]];} ;function CuteEditor_BasicInitialize(editor){var Ox600= new Function(OxOcec8[85]);var Oxa43= new Function(OxOcec8[86]);var Ox955= new Function(OxOcec8[87]);var Ox956=editor.GetScriptProperty(OxOcec8[88]);var Ox957=editor.GetScriptProperty(OxOcec8[89]);var Ox958=Ox956+OxOcec8[90]+Ox957+OxOcec8[91];var Ox959=Ox956+OxOcec8[92];var images=editor.getElementsByTagName(OxOcec8[93]);var len=images[OxOcec8[14]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxOcec8[94])&&!img.getAttribute(OxOcec8[95])){img.setAttribute(OxOcec8[95],img.getAttribute(OxOcec8[94]));} ;var Ox1e=img.getAttribute(OxOcec8[96]);var Ox551=img.getAttribute(OxOcec8[97]);if(!(Ox1e||Ox551)){continue ;} ;var Ox95a=img.getAttribute(OxOcec8[98]);if(parseInt(Ox95a)>=0){img[OxOcec8[42]][OxOcec8[99]]=OxOcec8[100];img[OxOcec8[42]][OxOcec8[101]]=OxOcec8[100];img[OxOcec8[6]]=Ox959;img[OxOcec8[42]][OxOcec8[102]]=OxOcec8[103]+Ox958+OxOcec8[104];img[OxOcec8[42]][OxOcec8[105]]=OxOcec8[106]+(Ox95a*20)+OxOcec8[107];img[OxOcec8[42]][OxOcec8[41]]=OxOcec8[12];} ;if(img[OxOcec8[108]]!=OxOcec8[109]){img[OxOcec8[108]]=OxOcec8[110];img[OxOcec8[111]]= new Function(OxOcec8[112]);img[OxOcec8[113]]= new Function(OxOcec8[114]);img[OxOcec8[115]]= new Function(OxOcec8[116]);img[OxOcec8[117]]= new Function(OxOcec8[118]);} ;if(!img[OxOcec8[119]]){img[OxOcec8[119]]=Event_CancelEvent;} ;if(!img[OxOcec8[120]]){img[OxOcec8[120]]=Event_CancelEvent;} ;if(Ox1e){var Ox75=img.getAttribute(OxOcec8[121])==OxOcec8[32]?Oxa43:Ox600;if(img[OxOcec8[47]]==null){img[OxOcec8[47]]=Ox75;} ;if(img[OxOcec8[122]]==null){img[OxOcec8[122]]=Ox75;} ;} else {if(Ox551){if(img[OxOcec8[47]]==null){img[OxOcec8[47]]=Ox955;} ;} ;} ;} ;var Ox66c=Window_GetElement(window,editor.GetScriptProperty(OxOcec8[123]),true);var Ox66d=Window_GetElement(window,editor.GetScriptProperty(OxOcec8[124]),true);var Ox669=Window_GetElement(window,editor.GetScriptProperty(OxOcec8[125]),true);Ox669[OxOcec8[108]]+=OxOcec8[126];Ox66c[OxOcec8[108]]+=OxOcec8[127];Ox66d[OxOcec8[108]]+=OxOcec8[127];Element_SetUnselectable(Ox66c);Element_SetUnselectable(Ox66d);} ;function CuteEditor_ButtonOver(element){if(!element[OxOcec8[128]]){element[OxOcec8[119]]=Event_CancelEvent;element[OxOcec8[113]]=CuteEditor_ButtonOut;element[OxOcec8[115]]=CuteEditor_ButtonDown;element[OxOcec8[117]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxOcec8[128]]=true;} ;element[OxOcec8[129]]=true;element[OxOcec8[108]]=OxOcec8[130];} ;function CuteEditor_ButtonOut(){var element=this;element[OxOcec8[108]]=OxOcec8[110];element[OxOcec8[129]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxOcec8[108]]=OxOcec8[131];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOcec8[129]]){element[OxOcec8[108]]=OxOcec8[130];} else {element[OxOcec8[108]]=OxOcec8[132];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOcec8[128]]){element[OxOcec8[119]]=Event_CancelEvent;element[OxOcec8[113]]=CuteEditor_ColorPicker_ButtonOut;element[OxOcec8[115]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxOcec8[128]]=true;} ;element[OxOcec8[129]]=true;element[OxOcec8[42]][OxOcec8[133]]=OxOcec8[134];element[OxOcec8[42]][OxOcec8[135]]=OxOcec8[136];element[OxOcec8[42]][OxOcec8[137]]=OxOcec8[138];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxOcec8[129]]=false;element[OxOcec8[42]][OxOcec8[133]]=OxOcec8[139];element[OxOcec8[42]][OxOcec8[135]]=OxOcec8[12];element[OxOcec8[42]][OxOcec8[137]]=OxOcec8[138];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxOcec8[42]][OxOcec8[133]]=OxOcec8[140];element[OxOcec8[42]][OxOcec8[135]]=OxOcec8[12];element[OxOcec8[42]][OxOcec8[137]]=OxOcec8[138];} ;function CuteEditor_ButtonCommandOver(element){element[OxOcec8[129]]=true;if(element[OxOcec8[141]]){element[OxOcec8[108]]=OxOcec8[142];} else {element[OxOcec8[108]]=OxOcec8[130];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxOcec8[129]]=false;if(element[OxOcec8[143]]){element[OxOcec8[108]]=OxOcec8[144];} else {if(element[OxOcec8[141]]){element[OxOcec8[108]]=OxOcec8[142];} else {element[OxOcec8[108]]=OxOcec8[110];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxOcec8[108]]=OxOcec8[131];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOcec8[141]]){element[OxOcec8[108]]=OxOcec8[142];return ;} ;if(element[OxOcec8[129]]){element[OxOcec8[108]]=OxOcec8[130];} else {if(element[OxOcec8[143]]){element[OxOcec8[108]]=OxOcec8[144];} else {element[OxOcec8[108]]=OxOcec8[110];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxOcec8[14]];i++){var Ox75=CuteEditorGlobalFunctions[i];var name=Ox75+OxOcec8[12];name=name.substr(8,name.indexOf(OxOcec8[145])-8).replace(/\s/g,OxOcec8[12]);if(!window[name]){window[name]=Ox75;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxOcec8[147]][OxOcec8[146]];var danapos=danaurl.indexOf(OxOcec8[148]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxOcec8[149],danapos+10);var pluspos2=danaurl.indexOf(OxOcec8[150],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxOcec8[150];} ;function CuteEditor_GetScriptProperty(name){var Ox2b=this[OxOcec8[151]][name];if(Ox2b&&__danainfo){if(name==OxOcec8[88]){return Ox2b+__danainfo;} ;var Ox73b=this[OxOcec8[151]][OxOcec8[88]];if(Ox2b.substr(0,Ox73b.length)==Ox73b){return Ox73b+__danainfo+Ox2b.substring(Ox73b.length);} ;} ;return Ox2b;} ;function CuteEditor_SetScriptProperty(name,Ox2b){if(Ox2b==null){this[OxOcec8[151]][name]=null;} else {this[OxOcec8[151]][name]=String(Ox2b);} ;} ;function CuteEditorInitialize(Ox967,Ox968){var editor=Window_GetElement(window,Ox967,true);editor[OxOcec8[151]]=Ox968;editor[OxOcec8[152]]=CuteEditor_GetScriptProperty;var Ox669=Window_GetElement(window,editor.GetScriptProperty(OxOcec8[125]),true);var editwin=Frame_GetContentWindow(Ox669);var editdoc=editwin[OxOcec8[13]];var Ox969=false;var Ox96a;var Ox96b=false;var Ox96c=editor.GetScriptProperty(OxOcec8[88])+OxOcec8[153];function Ox96d(){if( typeof (window[OxOcec8[154]])==OxOcec8[155]){return ;} ;try{LoadXMLAsync(OxOcec8[156],Ox96c+OxOcec8[157],Ox96e);} catch(x){include(OxOcec8[158],Ox96c);var Oxa44=setInterval(function (){if(window[OxOcec8[154]]){clearInterval(Oxa44);if(Ox969){Ox970();} ;} ;} ,100);} ;} ;function Ox96e(Ox187){if(Ox187[OxOcec8[159]]!=200){alert(OxOcec8[160]);return ;} ;CuteEditorInstallScriptCode(Ox187.responseText,OxOcec8[154]);if(Ox969){Ox970();} ;} ;function Ox970(){if(Ox96b){return ;} ;Ox96b=true;window.CuteEditorImplementation(editor);try{editor[OxOcec8[42]][OxOcec8[161]]=OxOcec8[12];} catch(x){} ;try{editdoc[OxOcec8[162]][OxOcec8[42]][OxOcec8[161]]=OxOcec8[12];} catch(x){} ;var Ox971=editor.GetScriptProperty(OxOcec8[163]);if(Ox971){editor.Eval(Ox971);} ;} ;function Ox972(){if(!window[OxOcec8[13]][OxOcec8[162]].contains(editor)){return ;} ;try{Ox669=Window_GetElement(window,editor.GetScriptProperty(OxOcec8[125]),true);editwin=Frame_GetContentWindow(Ox669);editdoc=editwin[OxOcec8[13]];x=editdoc[OxOcec8[162]];} catch(x){setTimeout(Ox972,100);return ;} ;if(!editdoc[OxOcec8[162]]){setTimeout(Ox972,100);return ;} ;if(!Ox969){Ox669[OxOcec8[42]][OxOcec8[41]]=OxOcec8[164];editdoc[OxOcec8[162]][OxOcec8[165]]=true;Ox969=true;setTimeout(Ox972,100);return ;} ;if( typeof (window[OxOcec8[154]])==OxOcec8[155]){Ox970();} else {try{editdoc[OxOcec8[162]][OxOcec8[42]][OxOcec8[161]]=OxOcec8[166];} catch(x){} ;} ;} ;function Ox975(Ox976){function Ox977(Ox1c8,Ox978,Ox979,Ox103,Ox97a,Ox97b){var Ox97c= new Array(0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);var Ox97d= new Array(-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000);var Ox97e= new Array(0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);var Ox97f= new Array(0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);var Ox980= new Array(0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);var Ox981= new Array(0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);var Ox982= new Array(0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);var Ox983= new Array(0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);var Ox1cb=Ox992(Ox1c8);var m=0,i,Ox5a,Oxf6,Ox984,Ox985,Ox986,Ox5b6,Ox987,Ox988;var Ox989,Ox98a,Ox98b,Ox98c;var Ox98d,Ox98e;var len=Ox978[OxOcec8[14]];var Ox98f=0;var Ox990=Ox1cb[OxOcec8[14]]==32?3:9;if(Ox990==3){Ox988=Ox979? new Array(0,32,2): new Array(30,-2,-2);} else {Ox988=Ox979? new Array(0,32,2,62,30,-2,64,96,2): new Array(94,62,-2,32,64,2,30,-2,-2);} ;var Oxf7=OxOcec8[12];var Ox991=OxOcec8[12];if(Ox103==1){Ox989=(Ox97a.charCodeAt(m++)<<24)|(Ox97a.charCodeAt(m++)<<16)|(Ox97a.charCodeAt(m++)<<8)|Ox97a.charCodeAt(m++);Ox98b=(Ox97a.charCodeAt(m++)<<24)|(Ox97a.charCodeAt(m++)<<16)|(Ox97a.charCodeAt(m++)<<8)|Ox97a.charCodeAt(m++);m=0;} ;while(m<len){Ox5b6=(Ox978.charCodeAt(m++)<<24)|(Ox978.charCodeAt(m++)<<16)|(Ox978.charCodeAt(m++)<<8)|Ox978.charCodeAt(m++);Ox987=(Ox978.charCodeAt(m++)<<24)|(Ox978.charCodeAt(m++)<<16)|(Ox978.charCodeAt(m++)<<8)|Ox978.charCodeAt(m++);if(Ox103==1){if(Ox979){Ox5b6^=Ox989;Ox987^=Ox98b;} else {Ox98a=Ox989;Ox98c=Ox98b;Ox989=Ox5b6;Ox98b=Ox987;} ;} ;Oxf6=((Ox5b6>>>4)^Ox987)&0x0f0f0f0f;Ox987^=Oxf6;Ox5b6^=(Oxf6<<4);Oxf6=((Ox5b6>>>16)^Ox987)&0x0000ffff;Ox987^=Oxf6;Ox5b6^=(Oxf6<<16);Oxf6=((Ox987>>>2)^Ox5b6)&0x33333333;Ox5b6^=Oxf6;Ox987^=(Oxf6<<2);Oxf6=((Ox987>>>8)^Ox5b6)&0x00ff00ff;Ox5b6^=Oxf6;Ox987^=(Oxf6<<8);Oxf6=((Ox5b6>>>1)^Ox987)&0x55555555;Ox987^=Oxf6;Ox5b6^=(Oxf6<<1);Ox5b6=((Ox5b6<<1)|(Ox5b6>>>31));Ox987=((Ox987<<1)|(Ox987>>>31));for(Ox5a=0;Ox5a<Ox990;Ox5a+=3){Ox98d=Ox988[Ox5a+1];Ox98e=Ox988[Ox5a+2];for(i=Ox988[Ox5a];i!=Ox98d;i+=Ox98e){Ox985=Ox987^Ox1cb[i];Ox986=((Ox987>>>4)|(Ox987<<28))^Ox1cb[i+1];Oxf6=Ox5b6;Ox5b6=Ox987;Ox987=Oxf6^(Ox97d[(Ox985>>>24)&0x3f]|Ox97f[(Ox985>>>16)&0x3f]|Ox981[(Ox985>>>8)&0x3f]|Ox983[Ox985&0x3f]|Ox97c[(Ox986>>>24)&0x3f]|Ox97e[(Ox986>>>16)&0x3f]|Ox980[(Ox986>>>8)&0x3f]|Ox982[Ox986&0x3f]);} ;Oxf6=Ox5b6;Ox5b6=Ox987;Ox987=Oxf6;} ;Ox5b6=((Ox5b6>>>1)|(Ox5b6<<31));Ox987=((Ox987>>>1)|(Ox987<<31));Oxf6=((Ox5b6>>>1)^Ox987)&0x55555555;Ox987^=Oxf6;Ox5b6^=(Oxf6<<1);Oxf6=((Ox987>>>8)^Ox5b6)&0x00ff00ff;Ox5b6^=Oxf6;Ox987^=(Oxf6<<8);Oxf6=((Ox987>>>2)^Ox5b6)&0x33333333;Ox5b6^=Oxf6;Ox987^=(Oxf6<<2);Oxf6=((Ox5b6>>>16)^Ox987)&0x0000ffff;Ox987^=Oxf6;Ox5b6^=(Oxf6<<16);Oxf6=((Ox5b6>>>4)^Ox987)&0x0f0f0f0f;Ox987^=Oxf6;Ox5b6^=(Oxf6<<4);if(Ox103==1){if(Ox979){Ox989=Ox5b6;Ox98b=Ox987;} else {Ox5b6^=Ox98a;Ox987^=Ox98c;} ;} ;Ox991+=String.fromCharCode((Ox5b6>>>24),((Ox5b6>>>16)&0xff),((Ox5b6>>>8)&0xff),(Ox5b6&0xff),(Ox987>>>24),((Ox987>>>16)&0xff),((Ox987>>>8)&0xff),(Ox987&0xff));Ox98f+=8;if(Ox98f==512){Oxf7+=Ox991;Ox991=OxOcec8[12];Ox98f=0;} ;} ;return Oxf7+Ox991;} ;function Ox992(Ox1c8){var Ox993= new Array(0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);var Ox994= new Array(0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);var Ox995= new Array(0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);var Ox996= new Array(0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);var Ox997= new Array(0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);var Ox998= new Array(0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);var Ox999= new Array(0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);var Ox99a= new Array(0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);var Ox99b= new Array(0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);var Ox99c= new Array(0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);var Ox99d= new Array(0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);var Ox99e= new Array(0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);var Ox99f= new Array(0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);var Ox9a0= new Array(0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);var Ox990=Ox1c8[OxOcec8[14]]>8?3:1;var Ox1cb= new Array(32*Ox990);var Ox9a1= new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0);var Ox9a2,Ox9a3,m=0,Ox8d=0,Oxf6;var Ox5b6,Ox987;for(var Ox5a=0;Ox5a<Ox990;Ox5a++){Ox5b6=(Ox1c8.charCodeAt(m++)<<24)|(Ox1c8.charCodeAt(m++)<<16)|(Ox1c8.charCodeAt(m++)<<8)|Ox1c8.charCodeAt(m++);Ox987=(Ox1c8.charCodeAt(m++)<<24)|(Ox1c8.charCodeAt(m++)<<16)|(Ox1c8.charCodeAt(m++)<<8)|Ox1c8.charCodeAt(m++);Oxf6=((Ox5b6>>>4)^Ox987)&0x0f0f0f0f;Ox987^=Oxf6;Ox5b6^=(Oxf6<<4);Oxf6=((Ox987>>>-16)^Ox5b6)&0x0000ffff;Ox5b6^=Oxf6;Ox987^=(Oxf6<<-16);Oxf6=((Ox5b6>>>2)^Ox987)&0x33333333;Ox987^=Oxf6;Ox5b6^=(Oxf6<<2);Oxf6=((Ox987>>>-16)^Ox5b6)&0x0000ffff;Ox5b6^=Oxf6;Ox987^=(Oxf6<<-16);Oxf6=((Ox5b6>>>1)^Ox987)&0x55555555;Ox987^=Oxf6;Ox5b6^=(Oxf6<<1);Oxf6=((Ox987>>>8)^Ox5b6)&0x00ff00ff;Ox5b6^=Oxf6;Ox987^=(Oxf6<<8);Oxf6=((Ox5b6>>>1)^Ox987)&0x55555555;Ox987^=Oxf6;Ox5b6^=(Oxf6<<1);Oxf6=(Ox5b6<<8)|((Ox987>>>20)&0x000000f0);Ox5b6=(Ox987<<24)|((Ox987<<8)&0xff0000)|((Ox987>>>8)&0xff00)|((Ox987>>>24)&0xf0);Ox987=Oxf6;for(i=0;i<Ox9a1[OxOcec8[14]];i++){if(Ox9a1[i]){Ox5b6=(Ox5b6<<2)|(Ox5b6>>>26);Ox987=(Ox987<<2)|(Ox987>>>26);} else {Ox5b6=(Ox5b6<<1)|(Ox5b6>>>27);Ox987=(Ox987<<1)|(Ox987>>>27);} ;Ox5b6&=-0xf;Ox987&=-0xf;Ox9a2=Ox993[Ox5b6>>>28]|Ox994[(Ox5b6>>>24)&0xf]|Ox995[(Ox5b6>>>20)&0xf]|Ox996[(Ox5b6>>>16)&0xf]|Ox997[(Ox5b6>>>12)&0xf]|Ox998[(Ox5b6>>>8)&0xf]|Ox999[(Ox5b6>>>4)&0xf];Ox9a3=Ox99a[Ox987>>>28]|Ox99b[(Ox987>>>24)&0xf]|Ox99c[(Ox987>>>20)&0xf]|Ox99d[(Ox987>>>16)&0xf]|Ox99e[(Ox987>>>12)&0xf]|Ox99f[(Ox987>>>8)&0xf]|Ox9a0[(Ox987>>>4)&0xf];Oxf6=((Ox9a3>>>16)^Ox9a2)&0x0000ffff;Ox1cb[Ox8d++]=Ox9a2^Oxf6;Ox1cb[Ox8d++]=Ox9a3^(Oxf6<<16);} ;} ;return Ox1cb;} ;var Ox978=[];for(var i=0;i<Ox976[OxOcec8[14]];i++){Ox978.push(String.fromCharCode(Ox976[i]));} ;Ox978=Ox978.join(OxOcec8[12]);var Ox9a4=[0x46,0x35,0x32,0x42,0x31,0x38,0x36,0x46];var Ox1c8=[];for(var i=0;i<Ox9a4[OxOcec8[14]];i++){Ox1c8.push(String.fromCharCode(Ox9a4[i]));} ;Ox1c8=Ox1c8.join(OxOcec8[12]);var Ox97a=Ox1c8;return Ox977(Ox1c8,Ox978,0,1,Ox97a);} ;var Ox9a5;var Ox9a6;var Ox9a7;var Ox9a8;function Ox9a9(Ox9aa){var Ox187=CreateXMLHttpRequest();var Ox9ab=Ox9ba;if(!Ox9a5){Ox187.open(OxOcec8[156],editor.GetScriptProperty(OxOcec8[88])+OxOcec8[167]+OxOcec8[168]+ new Date().getTime(),false);Ox187.send(OxOcec8[12]);if(Ox187[OxOcec8[159]]!=200){return Ox9ab(1000,OxOcec8[169]);} ;Ox9a5=Ox187[OxOcec8[170]].toUpperCase();} ;if(!Ox9a6){Ox9a6={};var Ox9ac=[OxOcec8[171],OxOcec8[172],OxOcec8[173],OxOcec8[174],OxOcec8[175],OxOcec8[176],OxOcec8[177],OxOcec8[178],OxOcec8[179],OxOcec8[180],OxOcec8[181],OxOcec8[182],OxOcec8[183],OxOcec8[184],OxOcec8[185],OxOcec8[186]];for(var i=0;i<Ox9ac[OxOcec8[14]];i++){Ox9a6[Ox9ac[i]]=i;} ;} ;try{if(!Ox9a7){if(Ox9a5.substring(0,16)!=OxOcec8[187]){return Ox9ab(1001);} ;var Ox9ad=[];for(var i=0;i<Ox9a5[OxOcec8[14]];i+=2){Ox9ad.push(Ox9a6[Ox9a5.charAt(i)]*16+Ox9a6[Ox9a5.charAt(i+1)]);} ;Ox9ad.splice(0,8);Ox9ad.splice(0,123);var Ox9ae=Ox9ad[0]+Ox9ad[1]*256;Ox9ad.splice(0,4);var Ox9af=Ox9ad.slice(0,Ox9ae);var Ox9b0=Ox975(Ox9af);Ox9b0=Ox9b0.replace(/^\xEF\xBB\xBF/,OxOcec8[12]).replace(/[\x00-\x08]*$/,OxOcec8[12]);Ox9a7=Ox9b0.split(OxOcec8[188]);} ;if(Ox9a7[OxOcec8[14]]!=10){return Ox9ab(1002,Ox9a7.length);} ;var Ox9b1=Ox9a7[9].split(OxOcec8[189]);var Ox9b2= new Date(parseFloat(Ox9b1[2]),parseFloat(Ox9b1[1])-1,parseFloat(Ox9b1[0]));var Ox9b3=Ox9b2.getTime();if((Ox9a7[5]<<2)!=1200685124){return Ox9ab(1003,Ox9a7[5]);} ;var Ox9b4=window[OxOcec8[147]][OxOcec8[146]].split(OxOcec8[191])[1].split(OxOcec8[189])[0].split(OxOcec8[190])[0].toLowerCase();var Ox9b5=false;if(Ox9b4==String.fromCharCode(108,111,99,97,108,104,111,115,116)){Ox9b5=true;} ;if(Ox9b4==String.fromCharCode(49,50,55,46,48,46,48,46,49)){Ox9b5=true;} ;function Ox9b6(Ox9b7){var Oxe=Ox9b7.split(OxOcec8[192]);if(Oxe[0]==OxOcec8[193]){Oxe.splice(0,1);} ;return Oxe.join(OxOcec8[192]);} ;Ox9b4=Ox9b6(Ox9b4);var Ox9b8=Ox9a7[7].toLowerCase();var Ox9b9=Ox9a7[8];switch(parseInt(Ox9a7[6])){case 0:if(Ox9b3< new Date().getTime()){return Ox9ab(20000,Ox9b2);} ;if(Ox9b5){break ;} ;return Ox9ab(20001,Ox9b4);;case 1:if(Ox9b5){break ;} ;if(Ox9b8!=Ox9b4&&Ox9b8.indexOf(Ox9b4)==-1){return Ox9ab(20010,Ox9b4);} ;break ;;case 2:if(Ox9b5){break ;} ;if(!Ox9a8){Ox187.open(OxOcec8[156],editor.GetScriptProperty(OxOcec8[88])+OxOcec8[167]+OxOcec8[194]+ new Date().getTime(),false);Ox187.send(OxOcec8[12]);if(Ox187[OxOcec8[159]]!=200){return Ox9ab(1000,OxOcec8[195]);} ;Ox9a8=Ox187[OxOcec8[170]];} ;if(Ox9b9!=Ox9a8&&Ox9b9.indexOf(Ox9a8)==-1){return Ox9ab(20020,Ox9a8);} ;break ;;case 3:if(Ox9b5){break ;} ;if(Ox9b8.indexOf(Ox9b4)==-1){return Ox9ab(20030,Ox9b4);} ;break ;;case 4:if(Ox9b3< new Date().getTime()){return Ox9ab(20040,Ox9b2);} ;break ;;case 5:break ;;default:return Ox9ab(1004,parseInt(Ox9a7[6]));;} ;} catch(x){return Ox9ab(1000,x.message);} ;return Ox9aa();} ;function Ox9ba(Ox9bb,Ox615){var msg=OxOcec8[12];switch(Ox9bb){case 1000:msg=Ox615;break ;;case 1001:msg=OxOcec8[196];break ;;case 1002:msg=OxOcec8[197]+Ox615;break ;;case 1003:msg=OxOcec8[198];break ;;case 1004:msg=OxOcec8[199];break ;;case 20000:msg=OxOcec8[200];break ;;case 20001:msg=OxOcec8[201]+Ox615;break ;;case 20010:msg=OxOcec8[202]+Ox615;break ;;case 20020:msg=OxOcec8[203]+Ox615;break ;;case 20030:msg=OxOcec8[204]+Ox615;break ;;case 20040:msg=OxOcec8[205];break ;;} ;try{return alert(OxOcec8[206]+msg);} catch(x){} ;} ;CuteEditor_BasicInitialize(editor);Ox96d();Ox9a9(Ox972);} ;function CuteEditorInstallScriptCode(Ox8b7,Ox8b8){eval(Ox8b7);window[Ox8b8]=eval(Ox8b8);} ;