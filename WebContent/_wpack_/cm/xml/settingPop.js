/*amd /cm/xml/settingPop.xml 3925 6b6f543b9f51e0802fdaf142243460f0cfdaff75936ab2dfded404afeff606fa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_setting'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'MAIN_LAYOUT_PAGE_CODE',name:'메인 레이아웃',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectMainSetting',ref:'',target:'data:json,dma_setting',action:'/main/selectBmMainSetting',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_updateMainSetting',ref:'data:json,dma_setting',target:'',action:'/main/updateBmMainSetting',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.setUpdateMainSetCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.mainSetPop = "";
scwin.onpageload = function () {};

/**
 * @event
 * @name btn_cancel_onclick
 * @description 취소 버튼 클릭 시 발생하는 이벤트 정의
 */
scwin.btn_cancel_onclick = function () {
  $c.win.closePopup($p);
};

/**
 * @method
 * @name setUpdateMainSetCallback
 * @description Layout 설정 업데이트 callback 함수
 * @param {string} e MainSet 수정 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.setUpdateMainSetCallback = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    $c.win.closePopup($p, {
      clickValue: true
    });
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{adaptive:'',adaptiveThreshold:'',tagname:'table',style:'',tabIndex:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'메인화면'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',cols:'2',disabled:'',id:'rdo_main',ref:'data:dma_setting.MAIN_LAYOUT_PAGE_CODE',renderType:'radiogroup',rows:'',selectedIndex:'1',style:'',name:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tab View'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Multi View'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Single View'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})