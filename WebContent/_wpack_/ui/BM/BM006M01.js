/*amd /ui/BM/BM006M01.xml 16305 c9dddd8742c658386844d42d363b743bb459df16d5d84162f23c7a335ae91bb0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_fileGroup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ_PARENT',name:'파일그룹부모순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_NM',name:'파일그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_DEPTH',name:'메뉴레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_file',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE_SEQ',name:'파일순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_UPLOAD_DATE',name:'파일업로드일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_DELETE',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_DELETE',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'START_NUM',name:'시작번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'END_NUM',name:'마지막번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ_PARENT',name:'파일그룹부모순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_NM',name:'파일그룹명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mapStatus',name:'상태',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectFileGrp',ref:'data:json,dma_search',target:'data:json,dlt_fileGroup',action:'/file/selectFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectFileGrp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selectFile',ref:'data:json,dma_search',target:'data:json,dlt_file',action:'/file/selectFileByFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectFile_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveFileGrp',ref:'data:json,dma_fileGrp',target:'',action:'/file/saveFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveFileGrp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pageItemCnt = 18;

/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
  $c.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
  $c.data.setChangeCheckedDc($p, [dlt_file, dlt_fileGroup]);
  dma_search.set("IS_DELETE", "N");
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
  scwin.btn_search_onclick();
};

/**
 * 파일 그룹을 조회한다.
 */
scwin.btn_search_onclick = function () {
  $c.sbm.execute($p, sbm_selectFileGrp);
};

/**
 * 파일 그룹 조회 후 콜백 함수
 */
scwin.sbm_selectFileGrp_submitdone = function (e) {
  if (dlt_fileGroup.getRowCount() > 0) {
    trv_fileGroup.findNodeByIndex(1, true);
    scwin.searchFile(1, "Y");
  }
};

/**
 * 파일 정보를 조회한다.
 */
scwin.searchFile = function (idx, totalYn) {
  dma_search.set("TOTAL_YN", totalYn);
  dma_search.set("START_NUM", ($c.num.parseInt($p, idx) - 1) * scwin.pageItemCnt);
  dma_search.set("END_NUM", scwin.pageItemCnt);
  dma_search.set("FILE_GRP_SEQ", trv_fileGroup.getSelectedValue());
  $c.sbm.execute($p, sbm_selectFile);
};

/**
 * 파일 그룹을 생성한다.
 */
scwin.btn_add_onclick = async function () {
  let fileGrpSeq = 0;
  let fileGrpSeqParent = 0;
  if (dlt_fileGroup.getRowCount() > 0) {
    const selectRowIdx = dlt_fileGroup.getRowPosition();
    if (selectRowIdx === null) {
      $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00033"));
    } else {
      fileGrpSeq = dlt_fileGroup.getCellData(selectRowIdx, "FILE_GRP_SEQ");
      fileGrpSeqParent = dlt_fileGroup.getCellData(selectRowIdx, "FILE_GRP_SEQ_PARENT");
    }
  }
  const data = {
    fileGrpSeq: fileGrpSeq,
    fileGrpSeqParent: fileGrpSeqParent,
    mode: "create",
    callbackFn: "scwin.addCallback"
  };
  const options = {
    id: "FilegroupPop",
    popupName: "파일 그룹 생성",
    modal: true,
    width: 600,
    height: 224
  };
  await $c.win.openPopup($p, "/ui/BM/BM006P01.xml", options, data);
};

/**
 * 파일 그룹 등록 완료 후 콜백 함수
 */
scwin.addCallback = function () {
  scwin.btn_search_onclick();
};

/**
 * 파일 그룹을 수정한다.
 */
scwin.btn_modify_onclick = async function () {
  const selectedData = dlt_fileGroup.getRowJSON(dlt_fileGroup.getRowPosition());
  const data = {
    data: selectedData,
    mode: "update",
    callbackFn: "scwin.modCallback"
  };
  const options = {
    id: "FilegroupPop",
    popupName: "파일 그룹 설정",
    modal: true,
    width: 600,
    height: 224
  };
  await $c.win.openPopup($p, "/ui/BM/BM006P01.xml", options, data);
};

/**
 * 파일 그룹 수정 후 콜백 함수.
 */
scwin.modCallback = function (data) {
  trv_fileGroup.setLabelByValue(data.FILE_GRP_SEQ, data.FILE_GRP_NM);
  scwin.searchFile(1, "Y");
};

/**
 * 파일 그룹을 삭제한다.
 */
scwin.btn_delete_onclick = async function () {
  if (trv_fileGroup.isLeaf() == false) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00034"));
  } else if (dlt_file.getRowCount() > 0) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00035"));
  } else {
    if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00036"))) {
      dma_fileGrp.setJSON(dlt_fileGroup.getRowJSON(dlt_fileGroup.getRowPosition()));
      dma_fileGrp.set("mapStatus", "D");
      $c.sbm.execute($p, sbm_saveFileGrp);
    }
  }
};
scwin.trv_fileGroup_onlabelclick = function (value, nodeElement, index) {
  scwin.searchFile(1, "Y");
};
scwin.sbm_selectFile_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    const firstYn = dma_search.get("TOTAL_YN");
    if (firstYn == "Y") {
      const fileTotalCnt = e.responseJSON.TOTAL_CNT.CNT;
      const totalCnt = $c.num.ceil($p, fileTotalCnt / scwin.pageItemCnt);
      tbx_fileCount.setValue(fileTotalCnt);
      pgl_file.setCount(totalCnt);
    }
  }
};
scwin.pgl_file_onclick = function (idx) {
  scwin.searchFile(idx, "N");
};
scwin.sbm_saveFileGrp_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    scwin.btn_search_onclick();
  }
};

/**
 * 파일 사이즈를 적절한 포맷으로 변환해서 반환한다.
 */
scwin.displayFileSize = function (value) {
  return $c.num.formatByte($p, value);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'파일명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:100%;',ref:'data:dma_search.ORIGIN_FILE_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'',selectedIndex:'1',appearance:'full',style:'',cols:'',rows:'',ref:'data:dma_search.IS_DELETE',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',adaptive:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:' col_3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',label:'파일그룹',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_add',type:'button','ev:onclick':'scwin.btn_add_onclick',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_modify',type:'button','ev:onclick':'scwin.btn_modify_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_delete',style:'','ev:onclick':'scwin.btn_delete_onclick',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tvwbox scrollbar',style:'height: 313px;'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'',id:'trv_fileGroup',class:'wq_tvw','ev:onlabelclick':'scwin.trv_fileGroup_onlabelclick',renderType:'table'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_fileGroup'},E:[{T:1,N:'w2:label',A:{ref:'FILE_GRP_NM'}},{T:1,N:'w2:value',A:{ref:'FILE_GRP_SEQ'}},{T:1,N:'w2:depth',A:{ref:'MENU_DEPTH'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:' col_7'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb tbl',adaptive:'layout',adaptiveThreshold:'1024px',text:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'',id:'',label:'파일 그룹 순번 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'',id:'',label:'',style:'',ref:'data:dlt_fileGroup.FILE_GRP_SEQ'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'',id:'',label:'파일 그룹명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'',id:'',label:'',style:'',ref:'data:dlt_fileGroup.FILE_GRP_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'',id:'',label:'파일 수 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'',id:'tbx_fileCount',label:'01',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:ontextimageclick':'scwin.grd_menu_ontextimageclick',rowStatusWidth:'',adaptive:'',id:'grd_menu',class:'gvw','ev:onrowindexchange':'',useShiftKey:'true','ev:oneditkeyup':'scwin.grd_menu_oneditkeyup',fixedColumnWithHidden:'true',dataList:'data:dlt_file',ignoreCellClick:'false',style:'height:296px;',readOnly:'true',autoFit:'allColumn',scrollByColumn:'true',autoFitMinWidth:'900'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column5',value:'파일순번',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column4',value:'데이터순번',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column3',value:'원본파일명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column2',value:'파일크기',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column1',value:'파일업로드일시',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'FILE_SEQ',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'DATA_SEQ',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'ORIGIN_FILE_NM',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'FILE_SIZE',value:'',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormatter:'scwin.displayFileSize'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'FILE_UPLOAD_DATE',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'pglbox'},E:[{T:1,N:'w2:pageList',A:{delimiter:'','ev:onclick':'scwin.pgl_file_onclick',displayButtonType:'display',displayFormat:'#',pageSize:'5',pagingType:'0',style:'',id:'pgl_file',class:'pgl'}}]}]}]}]}]}]}]})