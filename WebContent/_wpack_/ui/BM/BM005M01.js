/*amd /ui/BM/BM005M01.xml 15053 3f86ddb126cdd8fddaf9dfba07c1421023bb53167dfb9fab78e5c8e9f3fabb42 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 메인 화면의 Release 게시물을 관리하는 화면이다.\n관리자에게만 권한이 있는 화면이다.\n</div>\n<div class="etc_tit">1. Release 게시물 조회</div>\n  - 메인화면의 Release 게시물을 조회할 수 있다.\n<div class="etc_tit">2. Release 게시물 변경</div>\n  - 메인화면의 Release 게시물을 입력, 수정, 삭제 할 수 있다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etc_tit">1. 과정</div>\n- 화면 로딩시 자동 조회 된다.\n- 입력, 수정, 삭제시에는 하단의 상세 부분에서 내용을 수정한다.  \n</div>\n<div class="etc_tit">2. 결과</div>\n- gridView의 게시물을 조회하면 하단에 상세 내용이 표신된다.\n  (Master&Detail 구조)\n- 입력, 수정, 삭제 후 Release내용이 재 조회된다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text',defaultValue:'Y'}},{T:1,N:'w2:key',A:{id:'START_NUM',name:'시작 순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'END_NUM',name:'끝 순번',dataType:'number',defaultValue:'5'}},{T:1,N:'w2:key',A:{id:'SORT_COLUMN',name:' 정렬 컬럼 아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SORT_METHOD',name:'정렬 방법(ASC, DESC)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_release',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'','ev:onbeforerowpositionchange':'scwin.dlt_release_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',valueType:''}},{T:1,N:'w2:column',A:{id:'SEQ',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CONTENT',name:'내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'작성일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectRelease',ref:'data:json,dma_search',target:'data:json,{"id":"dlt_release","key":"dlt_release"}',action:'/main/selectReleaseForMain',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectRelease_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRelease',ref:'data:json,[{"action":"modified","id":"dlt_release"},"dma_search"]',target:'data:json,["dma_Result","dlt_release"]',action:'/main/saveReleaseForMain',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중입니다.','ev:submit':'','ev:submitdone':'scwin.sbm_saveRelease_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화면 내 전역 변수 선언
 */
scwin.selectedReleaseRowIdx = 0;
scwin.pageItemCnt = 5;
scwin.onpageload = function () {
  $c.util.setGridViewDelCheckBox($p, grd_release);
  $c.data.setChangeCheckedDc($p, dlt_release);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
  scwin.searchMain(1, "Y");
};

/**
 * 첫번째 페이지를 조회한다.
 */
scwin.searchInit = function () {
  scwin.selectedReleaseRowIdx = 0;
  scwin.searchMain(1, "Y");
};

/**
 * 목록을 조회한다.
 */
scwin.searchMain = function (idx, strYn) {
  dma_search.set("TOTAL_YN", strYn);
  dma_search.set("START_NUM", ($c.num.parseInt($p, idx) - 1) * scwin.pageItemCnt);
  dma_search.set("END_NUM", scwin.pageItemCnt);
  dma_search.set("SORT_COLUMN", "SEQ");
  dma_search.set("SORT_METHOD", "DESC");
  $c.sbm.execute($p, sbm_selectRelease);
};

/**
 * 통신 정상 콜백 - release board list 결과 값 중 dlt_release로 게시판을 생성한다.
 */
scwin.sbm_selectRelease_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    const firstYn = dma_search.get("TOTAL_YN");
    grd_release.setFocusedCell(0, "TITLE", false);
    if (firstYn == "Y") {
      const totalCnt = $c.num.ceil($p, e.responseJSON.TOTAL_CNT.CNT / scwin.pageItemCnt);
      pgl_release.setCount(totalCnt);
    }
    grd_release.setFocusedCell(scwin.selectedReleaseRowIdx, "TITLE");
  }
};

/**
 * 리스트에서 취소 버튼클릭시 데이타를 이전 상태로 바꾸고 추가된 것들은 삭제한다.
 */
scwin.btn_cancel_onclick = async function () {
  if ($c.data.isModified($p, dlt_release)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00052"))) {
      $c.data.undoAll($p, dlt_release);
      grd_release.setFocusedCell(0, "TITLE", false);
      udc_fileMultiUpload.undoFileUpload();
      udc_fileMultiUpload.setFileSelectingButtonDisabled(false);
    }
    ;
  }
  ;
};

/**
 * 등록버튼 클릭시 하나의 row를 추가한다.
 */
scwin.btn_add_onclick = async function () {
  if (udc_fileMultiUpload.isModified()) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00050") + " " + $c.data.getMessage($p, "MSG_CM_00001"))) {
      udc_fileMultiUpload.startFileUpload();
    }
  } else {
    dlt_release.insertRow(0);
    grd_release.setFocusedCell(0, 0);
    udc_fileMultiUpload.setFileSelectingButtonDisabled(true);
    udc_fileMultiUpload.setDataSeq();
    ibx_title.setDisabled(false);
    ibx_title.focus();
  }
};

/**
 * 릴리즈 정보를 저장한다.
 */
scwin.btn_save_onclick = async function () {
  const fileModifiedCount = udc_fileMultiUpload.getUpdatedFile().length;
  if ($c.data.isModified($p, dlt_release) === false && fileModifiedCount == 0) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00032"));
  } else {
    const valMenuInfo = [{
      id: "TITLE",
      mandatory: true
    }, {
      id: "CREATED_DATE",
      mandatory: true
    }];
    if ($c.data.validateGridView($p, grd_release, valMenuInfo)) {
      if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00031"))) {
        // 선택한 파일의 업로드를 시작한다.
        udc_fileMultiUpload.startFileUpload();
      }
    }
  }
};
scwin.saveReleaseData = function () {
  if ($c.data.isModified($p, dlt_release) && $c.data.validateGroup($p, grp_content)) {
    $c.sbm.execute($p, sbm_saveRelease);
  }
};

/**
 * 저장 후 콜백 함수
 */
scwin.sbm_saveRelease_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    scwin.searchInit();
  }
};

/**
 * 파일 업로드 완료 후 호출되는 콜백 함수
 * @param {String} isSuccess 파일 전송 성공 여부 (1개라도 업로드에 실패한 파일이 있으면 false를 반환함)
 */
scwin.udc_fileMultiUpload_onFileUploadDone = function (isSuccess) {
  if (isSuccess) {
    scwin.saveReleaseData();
  }
};
scwin.dlt_release_onbeforerowpositionchange = async function (info) {
  scwin.selectedReleaseRowIdx = info.newRowIndex;
  if (udc_fileMultiUpload.isModified()) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00048") + " " + $c.data.getMessage($p, "MSG_CM_00001"))) {
      udc_fileMultiUpload.startFileUpload();
    }
    return false;
  } else {
    const dataSeq = dlt_release.getCellData(info.newRowIndex, "DATA_SEQ");
    if ($c.util.isEmpty($p, dataSeq) === false && dataSeq > 0) {
      udc_fileMultiUpload.setDataSeq(dataSeq);
      udc_fileMultiUpload.setFileSelectingButtonDisabled(false);
    } else {
      udc_fileMultiUpload.setFileSelectingButtonDisabled(true);
    }
  }
};

/**
 * 페이지 변경 시 이벤트
 */
scwin.pgl_release_onviewchange = async function (info) {
  if (udc_fileMultiUpload.isModified() || $c.data.isModified($p, dlt_release)) {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00049"))) {
      udc_fileMultiUpload.undoFileUpload();
      scwin.searchMain(info.newSelectedIndex, "N");
      pgl_release.setSelectedIndex(info.newSelectedIndex);
      return;
    }
    pgl_release.setSelectedIndex(info.oldSelectedIndex);
  } else {
    scwin.searchMain(info.newSelectedIndex, "N");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'릴리즈 내역',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.btn_add_onclick',toolTip:'data를 한 건 추가한다.'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick',toolTip:'data를 직전 상태로 되돌린다. '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'800',class:'gvw',dataList:'data:dlt_release',id:'grd_release',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:150px;',rowStatusVisible:'true',rowStatusHeaderValue:'상태',rowNumHeaderValue:'순서',rowNumVisible:'true',rowNumWidth:'50',keepDefaultColumnWidth:'true',tooltipDisplay:'false',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'45',inputType:'checkbox',style:'',id:'chk',value:'',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'제목',width:'238',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'내용',width:'365',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'작성일',width:'90'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'65',inputType:'checkbox',style:'',id:'chk',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'TITLE',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'178',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'CONTENT',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'315',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'CREATED_DATE',inputType:'calendar',removeBorderStyle:'false',style:'',value:'',width:'90',viewType:'',readOnly:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'pglbox'},E:[{T:1,N:'w2:pageList',A:{'ev:onclick':'scwin.pgl_release_onclick','ev:onviewchange':'scwin.pgl_release_onviewchange',displayButtonType:'display',displayFormat:'#',pageSize:'5',pagingType:'0',style:'',id:'pgl_release',class:'pgl'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'767',class:'w2tb tbl',id:'grp_content',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:' req',id:'',label:'제목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'req',id:'ibx_title',placeholder:'',style:'width:100%;',ref:'data:dlt_release.TITLE'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',text:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:' req',id:'',label:'작성일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'cal_createDate',renderDiv:'true',rightAlign:'false',style:'width: 120px;',alt:'',class:'req',ref:'data:dlt_release.CREATED_DATE'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:' req',id:'',label:'내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{id:'txt_content',style:'width:100%;height: 94px;',class:'req',ref:'data:dlt_release.CONTENT'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'width:100%;',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'5',id:'udc_fileMultiUpload','ev:onFileUploadDone':'scwin.udc_fileMultiUpload_onFileUploadDone',subDir:'BM005'}},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_save_onclick',id:'btn_save',style:'',type:'button',nextTabID:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})