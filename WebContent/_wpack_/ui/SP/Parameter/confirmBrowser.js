/*amd /ui/SP/Parameter/confirmBrowser.xml 3657 3294cf08b4edfad99aa6749ae6bc744eab5ce02209f16bb2f92a109731ce2fff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 초기 스크립트 수행 함수 정의
 * 
 * @event
 * @name onpageload
 * @description 초기화 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
  const type = $c.data.getParameter($p, "type");
  if (type === "alert") {
    btn_cancel.hide();
  } else {
    btn_cancel.show(""); // show의 옵션중에 default가 block처리임으로, ""을 사용해야 원상태로 보여진다.
  }
  scwin.param = $c.data.getParameter($p);
  if (scwin.param.mode == 'D') {
    $('html').addClass('dark');
  }
  ibx_confirmReceive.setValue(scwin.param.msg);
};

/**
 * 확인버튼 클릭시 함수 실행 후, 팝업창을 닫는다.
 * 
 * @event
 * @name btn_confirm_onclick
 * @description 확인버튼 클릭 시 함수 실행 후, 팝업창을 닫는다.
 */
scwin.btn_confirm_onclick = function () {
  $c.win.closePopup($p, ibx_confirmSend.getValue(), scwin.param.callbackFn);
};

/**
 * 취소버튼 클릭시 함수 실행하지 않고, 팝업창을 닫는다.
 * 
 * @event
 * @name btn_cancel_onclick
 * @description 취소버튼 클릭 시 함수 실행하지 않고, 팝업창을 닫는다.
 */
scwin.btn_cancel_onclick = function () {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'1024',tagname:'table',style:'',tabIndex:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수신 Parameter'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ibx_confirmReceive',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'전송 Parameter',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_confirmSend',placeholder:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})