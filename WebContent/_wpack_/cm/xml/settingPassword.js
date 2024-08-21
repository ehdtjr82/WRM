/*amd /cm/xml/settingPassword.xml 5720 6a5e1d3d9092eecaec53c9ce84b29a855eadb58a8cd6038cb47308cb66f2e8c0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_password'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PASSWORD',name:'현재 비밀번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'NEW_PASSWORD',name:'신규 비밀번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RETRY_PASSWORD',name:'신규 비밀번호(재입)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_result'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FOCUS',name:'포커스를 줄 컴포넌트 아이디',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_updatePassword',ref:'data:json,dma_password',target:'data:json,dma_result',action:'/main/updatePassword',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updatePassword_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.param = $c.data.getParameter($p);
  dma_password.set("EMP_CD", scwin.param.empCd);

  // 로그인한 사용자가 관리자인 경우 현재 비밀번호를 입력 항목이 보이지 않도록 한다.
  if ($c.win.isAdmin($p)) {
    grp_currPassword.hide();
  }
};

/**
 * @event
 * @name btn_save_onclick
 * @description 변경된 비밀번호를 저장한다.
 */
scwin.btn_save_onclick = function () {
  const valInfo = [{
    id: "NEW_PASSWORD",
    mandatory: true,
    minLength: 4
  }, {
    id: "RETRY_PASSWORD",
    mandatory: true,
    minLength: 4
  }];
  if ($c.win.isAdmin($p) == false) {
    valInfo.push({
      id: "PASSWORD",
      mandatory: true,
      minLength: 4
    });
  }
  if ($c.data.validateGroup($p, tbl_password, valInfo)) {
    $c.win.confirm($p, "비밀번호를 변경하시겠습니까?", function (res) {
      if (res.clickValue === true) {
        $c.sbm.execute($p, sbm_updatePassword);
      }
    });
  }
};

/**
 * @method
 * @name sbm_updatePassword_submitdone
 * @description 패스워드 수정을 위한 submission 직후 동작하는 함수
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_updatePassword_submitdone = async function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    await $c.win.alert($p, $c.sbm.getStatusMessage($p, e), function (e) {
      $c.win.closePopup($p);
    });
  }
};

/**
 * @event
 * @name btn_cancel_onclick
 * @description 취소 버튼을 클릭 시 발생하는 이벤트 정의
 */
scwin.btn_cancel_onclick = function () {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{adaptive:'',adaptiveThreshold:'',tagname:'table',style:'',tabIndex:'',id:'tbl_password',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:162px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'grp_currPassword'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'현재 비밀번호'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:secret',A:{class:'req',id:'sct_password',placeholder:'',style:'',ref:'data:dma_password.PASSWORD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'신규 비밀번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:secret',A:{class:'req',id:'sct_newPassword',placeholder:'',style:'',ref:'data:dma_password.NEW_PASSWORD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신규 비밀번호(재입력)'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:secret',A:{style:'',id:'sct_retryPassword',placeholder:'',class:'req',ref:'data:dma_password.RETRY_PASSWORD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})