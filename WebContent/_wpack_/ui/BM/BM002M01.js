/*amd /ui/BM/BM002M01.xml 27527 24dad3d746db6609853ecc07f6302feaa7c30676d452e90e201f693c410bdc2d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_authority',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'','ev:onbeforerowpositionchange':'scwin.dlt_authority_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_CD',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_NM',name:'권한명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{id:'dlt_authorityMember',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_CD',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_NM',name:'조직',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TYPE',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CONTENT',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_authority'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'AUTHORITY_CD',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_authoritySearchItem',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'AUTHORITY_CD',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_NM',name:'권한명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_authority',ref:'data:json,dma_search',target:'data:json,dlt_authority',action:'/authority/selectAuthorityList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_authority_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_authorityMember',ref:'data:json,dma_authority',target:'data:json,dlt_authorityMember',action:'/authority/selectAuthorityMemberList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_authorityMember_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAuthorityMember',ref:'data:json,[{"id":"dlt_authorityMember","action":"modified"}]',target:'',action:'/authority/saveAuthorityMember',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAuthorityMember_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAuthAll',ref:'data:json,[{"id":"dlt_authority","action":"modified"},{"id":"dlt_authorityMember","action":"modified"}]',target:'',action:'/authority/saveAuthorityAll',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveAuthAll_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_authoritySearchItem',ref:'',target:'data:json,dlt_authoritySearchItem',action:'/authority/selectAuthoritySearchItem',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAuthority',ref:'data:json,{"action":"modified","id":"dlt_authority"}',target:'',action:'/authority/saveAuthority',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAuthority_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.insertMember,scwin.sbm_authority_submitdone,scwin.sbm_authorityMember_submitdone,scwin.saveAuthAll,scwin.saveAuth,scwin.saveAuthMember,scwin.sbm_saveAuthAll_submitdone,scwin.sbm_saveAuthority_submitdone,scwin.sbm_saveAuthorityMember_submitdone'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화면 내 전역 변수 선언
 */
scwin.selectedAuthorityRowIdx = 0;

/**
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_authoritySearchItem);
  $c.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
  $c.util.setGridViewDelCheckBox($p, [grd_authority, grd_authorityMember]);
  $c.data.setChangeCheckedDc($p, [dlt_authority, dlt_authorityMember]);
};

/**
 * @event
 * @name ondataload
 * @description 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
  scwin.btn_search_onclick();
};

/**
 * @event
 * @name sbx_ChoiceBox_onviewchange
 * @description 검색항목(selectBox)의 내용이 변경되었을 때 실행된다 
 */
scwin.sbx_ChoiceBox_onviewchange = function (info) {
  if (info.newValue == "AUTHORITY_CD") {
    acb_autoChoiceBox.setNodeSet("data:dlt_authoritySearchItem", "AUTHORITY_CD", "AUTHORITY_CD");
  } else if (info.newValue == "AUTHORITY_NM") {
    acb_autoChoiceBox.setNodeSet("data:dlt_authoritySearchItem", "AUTHORITY_NM", "AUTHORITY_NM");
  }
};

/**
 * @method
 * @name insertMember
 * @description 팝업창에 선택된 사용자 정보를 DataList( dlt_Member )에 추가시킨다.
 * @param {object} obj 추가될 Member 
 * @hidden N
 * @exception 
 */
scwin.insertMember = function (obj) {
  const dLength = obj.length;
  for (i = 0; i < dLength; i++) {
    const data = dlt_authorityMember.getMatchedIndex("EMP_CD", obj[i].EMP_CD, true);
    if (data.length == 0) {
      obj[i].AUTHORITY_CD = dma_authority.get("AUTHORITY_CD");
      obj[i].chk = "0";
      const idx = $c.data.insertRow($p, grd_authorityMember);
      dlt_authorityMember.setRowJSON(idx, obj[i], true);
    }
  }
};

/**
 * @event
 * @name btn_search_onclick
 * @description 권한조회 버튼 클릭시 발생하며, 조건에 따른 권한리스트를 조회한다.
 */
scwin.btn_search_onclick = async function () {
  dma_search.set("CONTENT", acb_autoChoiceBox.getValue());
  scwin.selectedAuthorityRowIdx = 0;
  if ($c.data.isModified($p, dlt_authorityMember)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00049"))) {
      $c.data.undoAll($p, dlt_authorityMember);
      $c.sbm.execute($p, sbm_authority);
    }
  } else {
    $c.sbm.execute($p, sbm_authority);
  }
};

/**
 * @method
 * @name sbm_authority_submitdone
 * @description sbm_authority submitdone 이벤트로 조회해온 건수를 셋팅한다.
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_authority_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    spn_authorityCnt.setValue(dlt_authority.getRowCount());
    dlt_authorityMember.removeAll();
    spn_authorityMemberCnt.setValue("0");
    grd_authority.setFocusedCell(scwin.selectedAuthorityRowIdx, "AUTHORITY_NM");
  }
};

/**
 * @event
 * @name dlt_authority_onbeforerowpositionchange
 * @description 권한 리스트의 row 인덱스 위치가 바뀔때 마다 실행되며 권한에 해당하는 멤버 목록을 가져온다.
 */
scwin.dlt_authority_onbeforerowpositionchange = async function (info) {
  scwin.selectedAuthorityRowIdx = info.newRowIndex;
  if ($c.data.isModified($p, dlt_authorityMember)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00048") + " " + $c.data.getMessage($p, "MSG_CM_00001"))) {
      scwin.saveAuthMember();
    }
    return false;
  } else {
    const status_row = dlt_authority.getRowStatus(info.newRowIndex);
    if (status_row == "C") {
      dlt_authorityMember.removeAll();
      dlt_authorityMember.reform();
      spn_authorityMemberCnt.setValue(grd_authorityMember.getTotalRow());
    } else {
      const authorityCd = dlt_authority.getCellData(info.newRowIndex, "AUTHORITY_CD");
      if (authorityCd) {
        dma_authority.set("AUTHORITY_CD", authorityCd);
        $c.sbm.execute($p, sbm_authorityMember);
      }
    }
  }
};

/**
 * @method
 * @name sbm_authorityMember_submitdone
 * @description 
 * 권한별 등록사원 조회의 콜백메소드
 * 건수 조회, ReadOnly 그리드뷰 컬럼색 변경. ReadOnly속성을 설정한다.  
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_authorityMember_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    spn_authorityMemberCnt.setValue(grd_authorityMember.getTotalRow());
  }
};

/**
 * @event
 * @name btn_addAuth_onclick
 * @description 권한 리스트의 row를 추가한다.
 */
scwin.btn_addAuth_onclick = async function () {
  if ($c.data.isModified($p, dlt_authorityMember)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00050") + " " + $c.data.getMessage($p, "MSG_CM_00001"))) {
      scwin.saveAuthMember();
    }
  } else {
    const idx = $c.data.insertRow($p, grd_authority);
    dlt_authority.setCellData(idx, "IS_USE", 'Y');
    grd_authority.setReadOnly("cell", idx, "AUTHORITY_CD", false);
    grd_authority.setFocusedCell(idx, "AUTHORITY_CD", true);
  }
};

/**
 * @event
 * @name btn_delAuth_onclick
 * @description 권한 리스트에서 선택된 항목을 삭제 상태로 변경한다. ( rowStauts : D )
 */
scwin.btn_delAuth_onclick = function () {
  if (grd_authorityMember.getAllVisibleData() == "") {
    dlt_authority.deleteRows(grd_authority.getCheckedIndex("chk"));
  } else {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00016"));
  }
};

/**
 * @event
 * @name btn_cancelAuth_onclick
 * @description 권한 리스트에서 취소 버튼클릭시 데이타를 이전 상태로 바꾸고 추가된 것들은 삭제한다.
 */
scwin.btn_cancelAuth_onclick = function () {
  $c.data.undoGridView($p, grd_authority);
};

/**
 * @event
 * @name btn_addAuthMemebr_onclick
 * @description 권한등록사원 리스트에서 등록 버튼클릭시 수행되며, 사원등록 페이지를 layer popup으로 표현해준다.
 */
scwin.btn_addAuthMemebr_onclick = async function () {
  const focusRowIdx = scwin.selectedAuthorityRowIdx;
  if (focusRowIdx == -1) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00017"));
  } else {
    const rowStatus = dlt_authority.getRowStatus(focusRowIdx);
    if (rowStatus == "C") {
      $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00018"));
    } else {
      const auth_cd = dma_authority.get("AUTHORITY_CD");
      if (auth_cd != "") {
        const data = {
          data: dma_authority.getJSON(),
          callbackFn: "scwin.insertMember"
        };
        const options = {
          id: "AuthorityMemberPop",
          popupName: "직원 조회",
          modal: true,
          width: 680,
          height: 450
        };
        await $c.win.openPopup($p, "/ui/BM/BM002P01.xml", options, data);
      }
    }
  }
};

/**
 * @event
 * @name btn_cancelAuthMember_onclick
 * @description 권한 등록 사원 리스트에서 취소 버튼클릭시 데이타를 이전 상태로 바꾸고 추가된 것들은 삭제한다.
 */
scwin.btn_cancelAuthMember_onclick = function () {
  $c.data.undoGridView($p, grd_authorityMember);
};

/**
 * @event
 * @name btn_saveAuth_onclick
 * @description 권한의 입력, 수정, 삭제한다.
 */
scwin.btn_saveAuth_onclick = async function () {
  if ($c.data.isModified($p, dlt_authority) && $c.data.isModified($p, dlt_authorityMember)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00019") + " " + $c.data.getMessage($p, "MSG_CM_00010"))) {
      scwin.saveAuthAll();
    }
  } else if ($c.data.isModified($p, dlt_authority)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00020") + " " + $c.data.getMessage($p, "MSG_CM_00010"))) {
      scwin.saveAuth();
    }
  } else if ($c.data.isModified($p, dlt_authorityMember)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00021") + " " + $c.data.getMessage($p, "MSG_CM_00010"))) {
      scwin.saveAuthMember();
    }
  } else {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00005"));
  }
};

/**
 * @method
 * @name saveAuthAll
 * @description 권한 리스트 및 권한별 등록사원리스트에서 rowStatus C,U,D,E 상태(Modify)인것만 저장한다.
 * @hidden N
 * @exception 
 */
scwin.saveAuthAll = function () {
  const valAuthInfo = [{
    id: "AUTHORITY_CD",
    mandatory: true
  }, {
    id: "AUTHORITY_NM",
    mandatory: true
  }];
  const valMemInfo = [{
    id: "EMP_CD",
    mandatory: true
  }, {
    id: "EMP_NM",
    mandatory: true
  }];
  if ($c.data.validateGridView($p, grd_authority, valAuthInfo) && $c.data.validateGridView($p, grd_authorityMember, valMemInfo)) {
    $c.sbm.execute($p, sbm_saveAuthAll);
  }
};

/**
 * @method
 * @name saveAuth
 * @description 권한 리스트에서 rowStatus C,U,D,E 상태(Modify)인것만 저장한다.
 * @hidden N
 * @exception 
 */
scwin.saveAuth = function () {
  const valAuthInfo = [{
    id: "AUTHORITY_CD",
    mandatory: true
  }, {
    id: "AUTHORITY_NM",
    mandatory: true
  }];
  if ($c.data.validateGridView($p, grd_authority, valAuthInfo)) {
    $c.sbm.execute($p, sbm_saveAuthority);
  }
};

/**
 * @method
 * @name saveAuthMember
 * @description 권한별 등록사원리스트에서 rowStatus C,U,D,E 상태(Modify)인것만 저장한다.
 * @hidden N
 * @exception 
 */
scwin.saveAuthMember = function () {
  const valMemInfo = [{
    id: "EMP_CD",
    mandatory: true
  }, {
    id: "EMP_NM",
    mandatory: true
  }];
  if ($c.data.validateGridView($p, grd_authorityMember, valMemInfo)) {
    $c.sbm.execute($p, sbm_saveAuthorityMember);
  }
};

/**
 * @event
 * @name btn_excelAuth_onclick
 * @description 권한 GridView의 데이터를 액셀 다운로드 한다.
 */
scwin.btn_excelAuth_onclick = function () {
  $c.data.downloadGridViewExcel($p, grd_authority);
};

/**
 * @event
 * @name btn_excelAuthMember_onclick
 * @description 권한별 등록사원 GridView의 데이터를 액셀 다운로드 한다.
 */
scwin.btn_excelAuthMember_onclick = function () {
  $c.data.downloadGridViewExcel($p, grd_authorityMember);
};

/**
 * @method
 * @name sbm_saveAuthAll_submitdone
 * @description 권한, 권한별 등록사원 모두 저장한 후 실행되는 함수
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_saveAuthAll_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    dlt_authorityMember.undoAll();
    scwin.btn_search_onclick();
  }
};

/**
 * @method
 * @name sbm_saveAuthority_submitdone
 * @description 권한 저장을 한 후 실행되는 함수
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_saveAuthority_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    scwin.btn_search_onclick();
  }
};

/**
 * @method
 * @name sbm_saveAuthorityMember_submitdone
 * @description 권한별 등록사원 저장 후 실행되는 함수
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_saveAuthorityMember_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    dma_authority.set("AUTHORITY_CD", dlt_authority.getCellData(grd_authority.getFocusedRowIndex(), "AUTHORITY_CD"));
    $c.sbm.execute($p, sbm_authorityMember);
  }
};
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'body{background:#fff}body{background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'767',class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'flex flex_no'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',refreshSelectedIndex:'',chooseOption:'',allOption:'',ref:'data:dma_search.TYPE',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.sbx_ChoiceBox_onviewchange',disabled:'false',style:'width:100px;',id:'sbx_ChoiceBox',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'권한명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AUTHORITY_NM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'권한코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AUTHORITY_CD'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOptionLabel:'',textAlign:'left',chooseOption:'',allOption:'true',ref:'',search:'start',appearance:'minimal',disabledClass:'w2selectbox_disabled',keyInputRef:'',noResult:'useData',disabled:'false',style:'width:150px;',id:'acb_autoChoiceBox',class:'',direction:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_authoritySearchItem'},E:[{T:1,N:'w2:label',A:{ref:'AUTHORITY_NM'}},{T:1,N:'w2:value',A:{ref:'AUTHORITY_NM'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',id:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_search.IS_USE',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:'',tabIndex:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'xf:group',A:{class:'lt',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권한',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'count',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:''}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_authorityCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addAuth',class:'btn_cm row_add','ev:onclick':'scwin.btn_addAuth_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_delAuth_onclick',id:'btn_delAuth',style:'display:none;',type:'button',title:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelAuth',style:'',type:'button','ev:onclick':'scwin.btn_cancelAuth_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelAuth',style:'',type:'button','ev:onclick':'scwin.btn_excelAuth_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{captionTitle:'',rowStatusWidth:'',checkReadOnlyOnCut:'',keepDefaultColumnWidth:'true',scrollByColumn:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',captionAuto:'',dataList:'data:dlt_authority',style:'height:243px;',autoFit:'allColumn',id:'grd_authority',class:'gvw',autoFitMinWidth:'900'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',style:'height:26px;',id:'chk',value:'',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',style:'',id:'column18',value:'권한코드',class:'req',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'column17',value:'권한명',class:'req',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column15',value:'사용여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'362',inputType:'text',style:'',id:'column14',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:26px;',id:'chk',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',style:'',readOnly:'true',id:'AUTHORITY_CD',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'AUTHORITY_NM',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{defaultValue:'',removeBorderStyle:'false',trueValue:'Y',validator:'',blockSelect:'false',displayMode:'label',falseValue:'N',valueType:'other',width:'70',inputType:'checkbox',style:'',id:'IS_USE',value:''}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'182',inputType:'text',style:'',id:'NOTE',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lt',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권한별 등록사원',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'count',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:''}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_authorityMemberCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}}]}]},{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_addAuthMemebr',style:'',type:'button','ev:onclick':'scwin.btn_addAuthMemebr_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelAuthMember',style:'',type:'button','ev:onclick':'scwin.btn_cancelAuthMember_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelAuthMember',style:'',type:'button','ev:onclick':'scwin.btn_excelAuthMember_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'gvw',dataList:'data:dlt_authorityMember',id:'grd_authorityMember',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumnAdaptive:'false',style:'height:243px;',keepDefaultColumnWidth:'true',disabledScrollHidden:'',autoFitMinWidth:'900',scrollByColumn:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:26px;',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'사원코드',width:'106'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'사원명',width:'152'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'조직',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'',value:'담당업무',width:'237'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:26px;',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMP_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'106',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMP_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'152',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ORG_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'90',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ASSIGNED_TASK',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'237',readOnly:'true',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  pt',id:'btn_saveAuth',style:'',type:'button','ev:onclick':'scwin.btn_saveAuth_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})