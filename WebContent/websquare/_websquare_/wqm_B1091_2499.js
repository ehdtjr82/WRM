"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[2499],{2499:(t,e,s)=>{s.r(e),s.d(e,{trigger:()=>h});var i=s(1570),o=s(866),n=s(2847),r=s(6323),a=s(3885),h=function(t,e,s){a.q.call(this,t,e,s)};i.q.extend(h.prototype,a.q.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.trigger",pluginName:"trigger",userEvents:["ontooltipshow","ontooltiphide"],systemEvents:["onclick","ondblclick","onfocus","onblur","onmouseup","onmousedown","onmouseover","onmouseout","onmousemove","onkeydown","onkeypress","onkeyup"],useConfig:!0,type:"button",leftOnImageClass:"w2trigger_left",centerOnImageClass:"w2trigger_center",rightOnImageClass:"w2trigger_right",leftOffImageClass:"w2trigger_left",centerOffImageClass:"w2trigger_center",rightOffImageClass:"w2trigger_right",singleClassMode:!1,localeRef:"",useLocale:!1,title:"",anchorWithGroupClass:!0,initStyle:!1,target:"",name:"",tooltipPositionX:"",tooltipPositionY:""},h.prototype.initialize=function(t){try{if(this.evented=!1,t){var e=WebSquare.WebSquareparser.parseLabel(t);e&&(this.options.value=e.value)}if(this.options.useLocale&&this.options.localeRef){var s=this.getLocaleValue(this.options.localeRef);s&&(this.options.value=s)}"w2trigger_left"!=this.options.leftOnImageClass&&"w2trigger_center"==this.options.centerOnImageClass&&"w2trigger_right"==this.options.rightOnImageClass&&(this.options.singleClassMode=!0);var i=this.options.initStyle;this.options=WebSquare.cssManager.styleToClass(this.id,this.options),this.options.initStyle=i||"",this.options.tooltipPositionX=this.options.tooltipShowPositionX||this.options.tooltipPositionX,this.options.tooltipPositionY=this.options.tooltipShowPositionY||this.options.tooltipPositionY}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.toHTML=function(){try{var t=[],e=""==this.options.value.wq_replaceAll("'","&#39;")?"":"value ='"+this.options.value.wq_replaceAll("'","&#39;")+"'",s=""==this.options.title?"":"title='"+this.options.title.wq_replaceAll("'","&#39;")+"'",i=""==this.options.style?"":"style='"+this.options.style+"'",n=""==this.options.tabIndex?"tabIndex='0'":"tabIndex='"+this.options.tabIndex+"'";if("button"==this.options.type.toLowerCase())t.push("<input type='button' "+n+" id='"+this.id+"' "+i+" class='w2trigger "+this.options.className+"' "+e+" "+s+"/>");else if("image"==this.options.type.toLowerCase())t.push("<table "+n+" role='button' id='"+this.id+"' "+i+" class='w2trigger w2trigger_table "+this.options.className+"' "+s+" onkeydown='if( event.keyCode == 32 || event.keyCode == 13 ) click();'>"),t.push("<tbody>"),t.push("<tr id='"+this.id+"_row'>"),1==this.options.singleClassMode?(t.push("<td id='"+this.id+"_left' class='w2trigger_col_left "+this.options.leftOffImageClass+"'></td>"),t.push("<td id='"+this.id+"_center' class='w2trigger_col_center w2trigger_label '>"+this.options.value+"</td>"),t.push("<td id='"+this.id+"_right' class='w2trigger_col_right '></td>")):(t.push("<td id='"+this.id+"_left' class='w2trigger_col_left "+this.options.leftOffImageClass+"'></td>"),t.push("<td id='"+this.id+"_center' class='w2trigger_col_center "+this.options.centerOffImageClass+" w2trigger_label '>"+this.options.value+"</td>"),t.push("<td id='"+this.id+"_right' class='w2trigger_col_right "+this.options.rightOffImageClass+"'></td>")),t.push("</tr>"),t.push("</tbody>"),t.push("</table>");else if("anchor"==this.options.type.toLowerCase()){var r=1==this.options.anchorWithGroupClass?"w2group":"",a=this.options.href?this.options.href:"javascript:void(null);",h=this.options.target?" target='"+this.options.target+"'":"",l=this.options.name?" name='"+this.options.name+"'":"";t.push("<a id='"+this.id+"' style='"+this.options.style+"' class='"+r+" w2trigger_anchor "+this.options.className+"' href='"+a+"' "+n+h+l+s+" >"),t.push("<span id='"+this.id+"_span' class='w2textbox '>"+this.options.value+"</span>"),t.push("</a>")}return t.join("")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setAction=function(){try{
if(this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.options.initStyle){var t=document.getElementById(this.id).style.cssText,e=document.getElementById(this.id).getAttribute("class");WebSquare.initStyle[this.id]={style:t,className:e}}if("image"==this.options.type.toLowerCase())this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent));else if("anchor"==this.options.type.toLowerCase()){this.dom.input=document.getElementById(this.id),document.getElementById(this.id+"_span").style.setProperty("line-height",this.dom.input.clientHeight+"px"),r.Z.isIEAllVersion("6 7 8 9 10")&&this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,(function(t){this.options.href&&""!==this.options.href.wq_trim()||n.f.stopEvent(t)})))}else this.dom.input=document.getElementById(this.id);this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onkeyup",this.event.bindAsEventListener(this,this.handleKeyupEvent))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setLabel=function(t){try{if(!this.options.disabled)if(this.options.value=t,"button"==this.options.type.toLowerCase())this.dom.input.value=t;else if("anchor"==this.options.type.toLowerCase())this.dom.input.childNodes[0].innerHTML=t;else{this.getElementById(this.id+"_center").innerHTML=t}}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setValue=function(t){try{this.setLabel(t)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getLabel=function(){try{return this.options.value}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getValue=function(){try{return this.options.value}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setBackgroundImage=function(t){try{"button"==this.options.type&&((t=t.wq_trim()).startsWith("url")?this.render.style.backgroundImage=this.getURL(t):this.render.style.backgroundImage="url("+this.getURL(t)+")")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getBackgroundImage=function(){try{return"button"==this.options.type?this.getStyle("background-image"):""}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getType=function(){try{return this.options.type}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.onPropertyChange=function(t,e){try{var s="image"==this.options.type?this.getElementById(this.id+"_row"):this.render;switch(t){case"disabled":if(1==e||"disabled"==e)WebSquare.getBody().hideToolTip();"image"==this.options.type?1==e?(this.removeClass(s,"w2trigger_over"),this.addClass(s,"w2trigger_disabled")):this.removeClass(s,"w2trigger_disabled"):"anchor"==this.options.type.toLowerCase()?(s=this.getElementById(this.id+"_span"),1==e?(s.style.setProperty("color","#848684"),this.addClass(s,"w2trigger_disabled")):this.removeClass(s,"w2trigger_disabled")):1==e?this.addClass(s,"w2trigger_disabled"):this.removeClass(s,"w2trigger_disabled");break;case"readOnly":1==e?this.addClass(s,"w2trigger_readOnly"):this.removeClass(s,"w2trigger_readOnly")}}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseoverEvent=function(){try{if(1==this.options.disabled)return;var t=this.getElementById(this.id+"_row");this.addClass(t,"w2trigger_over"),"image"==this.options.type&&(0==this.evented&&(this.evented=!0,this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent)),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onmouseup",this.event.bindAsEventListener(this,this.handleMouseupEvent))),this.changeClass(this.getElementById(this.id+"_left"),this.options.leftOffImageClass,this.options.leftOnImageClass),0==this.options.singleClassMode&&(this.changeClass(this.getElementById(this.id+"_center"),this.options.centerOffImageClass,this.options.centerOnImageClass),
this.changeClass(this.getElementById(this.id+"_right"),this.options.rightOffImageClass,this.options.rightOnImageClass)))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseoutEvent=function(){try{if(1==this.options.disabled)return;var t=this.getElementById(this.id+"_row");this.removeClass(t,"w2trigger_over"),this.removeClass(t,"w2trigger_press"),"image"==this.options.type&&(this.changeClass(this.getElementById(this.id+"_left"),this.options.leftOnImageClass,this.options.leftOffImageClass),0==this.options.singleClassMode&&(this.changeClass(this.getElementById(this.id+"_center"),this.options.centerOnImageClass,this.options.centerOffImageClass),this.changeClass(this.getElementById(this.id+"_right"),this.options.rightOnImageClass,this.options.rightOffImageClass)))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMousedownEvent=function(){try{var t=this.getElementById(this.id+"_row");this.addClass(t,"w2trigger_press")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseupEvent=function(){try{var t=this.getElementById(this.id+"_row");this.removeClass(t,"w2trigger_press")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleKeydownEvent=function(t){try{9==(t.charCode?t.charCode:t.keyCode)&&(this.tabOrderMoveStart=!1,t.shiftKey?null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID&&(this.tabOrderMoveStart=!0,n.f.preventDefault(t)):null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID&&(this.tabOrderMoveStart=!0,n.f.preventDefault(t)))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleKeyupEvent=function(t){try{var e;if(9==(t.charCode?t.charCode:t.keyCode))if(null!=WebSquare.tabOrder[this.id])if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id].preTabID)(e=r.Z.getPreTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}else if(null!=WebSquare.tabOrder[this.id].nextTabID)(e=r.Z.getNextTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}catch(t){o.Y.printStackTrace(t,null,this)}}}}]);