/*amd /ui/SP/LoginSessionTimer/idleTimeBox.xml 2414 93fa8dce63290ee6c9f12ddb4e928a565a30b7d6a08801a44549b8a0d66e5c60 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.continue = false;

/**
 * 메시지 박스 화면 초기화 작업을 수행한다.
 * 
 * @event
 * @name onpageload
 * @description 초기화 함수
 */
scwin.onpageload = function () {
  try {
    const msgData = $c.data.getParameter($p, "msgData") || {};
    tbx_message.setValue(msgData.content);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @event
 * @name btn_confirm_onclick
 * @description 확인 버튼 클릭 시 login시간 연장.
 */
scwin.btn_confirm_onclick = function (e) {
  try {
    console.log("연장한다!!");
    scwin.continue = true;
    $c.win.closePopup($p);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @event
 * @name btn_cancel_onclick
 * @description 취소 버튼 클릭 시 로그인 시간 연장 안함.
 */
scwin.btn_cancel_onclick = function (e) {
  try {
    console.log("연장안한다!!");
    scwin.continue = false;
    $c.win.closePopup($p);
  } catch (ex) {
    console.error(ex);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'msgbox'},E:[{T:1,N:'xf:textarea',A:{style:'width:100%; height: 84px; padding-top: 20px; padding-bottom: 10px; border: 0px;',readOnly:'true',id:'tbx_message',displaymessage:'',class:''}},{T:1,N:'w2:textbox',A:{id:'tbx_time',label:'',style:'width: 150px;height: 30px;margin-top:4px;'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin:0px'},E:[{T:1,N:'xf:group',A:{class:'rt',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그인시간 연장하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그인시간 연장하지 않기'}]}]}]}]}]}]}]}]})