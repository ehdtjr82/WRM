/*amd /ui/BM/BM004M01.xml 26716 c4f545956a254b754646bf77d217d240ad8d6dde13419f01cd61e4837253d927 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_menu',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_CD',name:'프로그램그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_NM',name:'프로그램그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_NM',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'메뉴정렬순서',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TYPE',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CONTENT',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_menuSearchItem',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_NM',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_CD',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_NM',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchMenu',ref:'data:json,dma_search',target:'data:json,dlt_menu',action:'/menu/searchMenu',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchMenu_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_menuSearchItem',ref:'',target:'data:json,{"id":"dlt_menuSearchItem","key":"dlt_menu"}',action:'/menu/searchMenu',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMenu',ref:'data:json,[{"id":"dlt_menu","action":"modified"},"dma_search"]',target:'data:json,dlt_menu',action:'/menu/saveMenu',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveMenu_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setFontFormat,scwin.sbm_searchMenu_submitdone,scwin.selectLevel,scwin.selectLevelCallbak,scwin.lowerLevel,scwin.getInsertRowMenuCd,scwin.getInsertRowIndex,scwin.equalLevel,scwin.callbackProgramSearch,scwin.setGridViewRowCheckBox,scwin.checkParentColumn,scwin.sbm_saveMenu_submitdone'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의, sbm_menuSearchItem은 검색박스에 검색어들을 나열한다.
 */
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_menuSearchItem, {});
  $c.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
  $c.util.setGridViewDelCheckBox($p, [grd_menu]);
  $c.data.setChangeCheckedDc($p, dlt_menu);
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
 * @method
 * @name setFontFormat
 * @description 조회된 건수와 조직 레벨에 따른 메뉴명, 부모메뉴명의 폰트색을 변경한다.
 * Level 1 :  #E74C3C (붉은색)
 * Level 2 :  #1FCC25 (초록색)
 * Level 3 :  #348FE2 (파란색)
 * @param {string} data 데이터
 * @param {string} fData font데이터
 * @param {string} rowIndex 행 index 값
 * @param {string} colIndex 열 index 값
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setFontFormat = function (data, fData, rowIndex, colIndex) {
  const realRowIndex = grd_menu.getRealRowIndex(rowIndex);
  const val_level = dlt_menu.getCellData(realRowIndex, "MENU_LEVEL");
  if (val_level == "1") {
    grd_menu.setCellColor(realRowIndex, "MENU_NM", "#E74C3C");
    grd_menu.setCellColor(realRowIndex, "PARENT_MENU_NM", "#E74C3C");
  } else if (val_level == "2") {
    grd_menu.setCellColor(realRowIndex, "MENU_NM", "#1FCC25");
    grd_menu.setCellColor(realRowIndex, "PARENT_MENU_NM", "#1FCC25");
  } else if (val_level == "3") {
    grd_menu.setCellColor(realRowIndex, "MENU_NM", "#348FE2");
    grd_menu.setCellColor(realRowIndex, "PARENT_MENU_NM", "#348FE2");
  }
  return fData;
};

/**
 * @event
 * @name sbx_ChoiceBox_onviewchange
 * @description 검색항목(selectBox)의 내용이 변경되었을 때 실행된다 
 */
scwin.sbx_ChoiceBox_onviewchange = function (info) {
  if (info.newValue == "MENU_CD") {
    acb_autoChoiceBox.setNodeSet("data:dlt_menuSearchItem", "MENU_CD", "MENU_CD");
    sbx_menuLevel.hide();
    acb_autoChoiceBox.show("");
  } else if (info.newValue == "MENU_NM") {
    acb_autoChoiceBox.setNodeSet("data:dlt_menuSearchItem", "MENU_NM", "MENU_NM");
    sbx_menuLevel.hide();
    acb_autoChoiceBox.show("");
  } else if (info.newValue == "PARENT_MENU_CD") {
    acb_autoChoiceBox.setNodeSet("data:dlt_menuSearchItem", "PARENT_MENU_NM", "PARENT_MENU_CD");
    sbx_menuLevel.hide();
    acb_autoChoiceBox.show("");
  } else if (info.newValue == "MENU_LEVEL") {
    acb_autoChoiceBox.hide();
    sbx_menuLevel.show("");
  }
};

/**
 * @event
 * @name btn_search_onclick
 * @description 메뉴 조회 버튼시 발생하며, 조건에 따른 메뉴 리스트를 조회한다.
 */
scwin.btn_search_onclick = function () {
  if (sbx_ChoiceBox.getValue() == "MENU_LEVEL") {
    dma_search.set("CONTENT", sbx_menuLevel.getValue());
  } else {
    dma_search.set("CONTENT", acb_autoChoiceBox.getValue());
  }
  $c.sbm.execute($p, sbm_searchMenu);
};

/**
 * @method
 * @name sbm_searchMenu_submitdone
 * @description 메뉴 조회 버튼 콜백메소드
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_searchMenu_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    spn_menuCnt.setValue(grd_menu.getTotalRow());
  }
};

/**
 * @event
 * @name btn_addMenu_onclick
 * @description 메뉴관리 등록 버튼 클릭
 */
scwin.btn_addMenu_onclick = function () {
  const menu_cnt = dlt_menu.getTotalRow();
  if (menu_cnt == 0) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00022"));
    return;
  }
  if (grd_menu.getFocusedRealRowIndex() === -1) {
    grd_menu.setFocusedCell(0, "MENU_CD");
  }
  const currMenuNm = dlt_menu.getCellData(grd_menu.getFocusedRealRowIndex(), "MENU_NM");
  const currMenuLevel = $c.num.parseInt($p, dlt_menu.getCellData(grd_menu.getFocusedRealRowIndex(), "MENU_LEVEL"));
  if (menu_cnt != 0 && grd_menu.getFocusedRowIndex() == -1) {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00029"));
  } else {
    if (currMenuLevel < 3) {
      scwin.selectLevel(currMenuNm);
    } else {
      scwin.equalLevel();
    }
  }
};

/**
 * @method
 * @name selectLevel
 * @description 메뉴레벨이 1 또는 2일 경우에 실행되는 함수, Yes, No에 따라서 하위에 만들 것인지, 동일한 레벨로 만들 것인지 결정한다.
 * @param {string} returnValue 메뉴레벨이 1 또는 2인 메뉴명
 * @hidden N
 * @exception 
 */
scwin.selectLevel = async function (returnValue) {
  // $c.win.confirm(returnValue + $c.data.getMessage("MSG_CM_00030"), "scwin.selectLevelCallbak");
  if (await $c.win.confirm($p, returnValue + $c.data.getMessage($p, "MSG_CM_00030"))) {
    scwin.selectLevelCallbak(true);
  } else {
    scwin.selectLevelCallbak(false);
  }
};

/**
 * @method
 * @name selectLevelCallbak
 * @description selectLevel 이후의 callback 함수
 * @param {string} res selectLevel의 결과
 * @hidden N
 * @exception 
 */
scwin.selectLevelCallbak = function (res) {
  if (res === true) {
    scwin.lowerLevel();
  } else {
    scwin.equalLevel();
  }
};

/**
 * @method
 * @name lowerLevel
 * @description 하위 레벨의 노드에 메뉴를 추가한다.(포커스가 잡혔는데 depth가 1~2일 경우)
 * @hidden N
 * @exception 
 */
scwin.lowerLevel = function () {
  const focusedRowIndex = grd_menu.getFocusedRealRowIndex();
  const parentMenuCd = dlt_menu.getCellData(focusedRowIndex, "MENU_CD");
  const menuLevel = $c.num.parseInt($p, dlt_menu.getCellData(focusedRowIndex, "MENU_LEVEL")) + 1;
  const sortOrder = 1;
  let insertRowIndex = scwin.getInsertRowIndex(parentMenuCd);
  if (insertRowIndex === -1) {
    insertRowIndex = focusedRowIndex + 1;
  }
  const menuCd = scwin.getInsertRowMenuCd(parentMenuCd, menuLevel, true);
  const insertJson = [{
    "MENU_CD": menuCd,
    "PARENT_MENU_CD": parentMenuCd,
    "MENU_LEVEL": menuLevel,
    "SORT_ORDER": sortOrder
  }];
  dlt_menu.insertJSON(insertRowIndex, insertJson);
  dlt_menu.setCellData(insertRowIndex, "IS_USE", 'Y');
  grd_menu.setFocusedCell(insertRowIndex, "MENU_NM", true);
};

/**
 * @method
 * @name getInsertRowMenuCd
 * @description 새로 추가되는 메뉴의 메뉴 코드를 반환한다. ( MENU_LEVEL 3일 경우 하위메뉴 생성 )
 * @param {string} parentMenuCd 상위 메뉴 코드
 * @param {string} menuLevel 메뉴 레벨 
 * @param {string} isBottom bottom여부
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.getInsertRowMenuCd = function (parentMenuCd, menuLevel, isBottom) {
  const menuCdArr = dlt_menu.getMatchedColumnData("PARENT_MENU_CD", parentMenuCd, "MENU_CD", true, 0, dlt_menu.getTotalRow());
  if (menuCdArr.length > 0) {
    const lastMenuCd = menuCdArr[menuCdArr.length - 1];
    const nodeIndex = (menuLevel - 1) * 3;
    const preNodeCd = lastMenuCd.substr(nodeIndex, 3);
    const newNodeCd = $c.str.lpad($p, $c.num.parseInt($p, preNodeCd) + 1, 3, "0");
    return lastMenuCd.substr(0, nodeIndex) + lastMenuCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
  } else {
    if (isBottom) {
      const nodeIndex = parentMenuCd.indexOf("000");
      return parentMenuCd.substr(0, nodeIndex) + parentMenuCd.substr(nodeIndex).replace("000", "001");
    } else {
      const nodeIndex = parentMenuCd.indexOf("000");
      const preNodeCd = parentMenuCd.substr(nodeIndex, 3);
      const newNodeCd = $c.str.lpad($p, $c.num.parseInt($p, preNodeCd) + 1, 3, "0");
      return parentMenuCd.substr(0, nodeIndex) + parentMenuCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
    }
  }
};

/**
 * @method
 * @name getInsertRowIndex
 * @description 새로 추가되는 메뉴로 RowIndex를 반환한다.
 * @param {string} parentMenuCd 상위 메뉴 코드
 * @hidden N
 * @exception 
 */
scwin.getInsertRowIndex = function (parentMenuCd) {
  const rowIndexArr = dlt_menu.getMatchedIndex("PARENT_MENU_CD", parentMenuCd, true, 0, dlt_menu.getTotalRow());
  let rowIdx = "";
  if (rowIndexArr.length > 0) {
    const lastIndex = rowIndexArr[rowIndexArr.length - 1];
    rowIdx = dlt_menu.getMatchedIndex("PARENT_MENU_CD", dlt_menu.getRowJSON(lastIndex).MENU_CD, true, 0, dlt_menu.getTotalRow());
    if (rowIdx == "") {
      rowIdx = dlt_menu.getMatchedIndex("MENU_CD", dlt_menu.getRowJSON(lastIndex).MENU_CD, true, 0, dlt_menu.getTotalRow());
    }
    const lastMenuCd = dlt_menu.getCellData(rowIdx[rowIdx.length - 1], "MENU_CD");
    rowIndex = scwin.getInsertRowIndex(lastMenuCd);
    if (rowIndex !== -1) {
      return rowIndex;
    } else {
      return rowIdx[rowIdx.length - 1] + 1;
    }
  } else {
    return -1;
  }
};

/**
 * @method
 * @name equalLevel
 * @description 같은 레벨의 노트에 메뉴를 추가한다.
 * @hidden N
 * @exception 
 */
scwin.equalLevel = function () {
  const focusedRowIndex = grd_menu.getFocusedRealRowIndex();
  const parentMenuCd = dlt_menu.getCellData(focusedRowIndex, "PARENT_MENU_CD");
  const rowIndexArr = dlt_menu.getMatchedIndex("PARENT_MENU_CD", parentMenuCd, true, 0, dlt_menu.getTotalRow());
  const menuLevel = $c.num.parseInt($p, dlt_menu.getCellData(rowIndexArr[rowIndexArr.length - 1], "MENU_LEVEL"));
  const sortOrder = $c.num.parseInt($p, dlt_menu.getCellData(rowIndexArr[rowIndexArr.length - 1], "SORT_ORDER")) + 1;
  const insertRowIndex = scwin.getInsertRowIndex(parentMenuCd);
  const menuCd = scwin.getInsertRowMenuCd(parentMenuCd, menuLevel, false);
  const insertJson = [{
    "MENU_CD": menuCd,
    "PARENT_MENU_CD": parentMenuCd,
    "MENU_LEVEL": menuLevel,
    "SORT_ORDER": sortOrder
  }];
  dlt_menu.insertJSON(insertRowIndex, insertJson);
  dlt_menu.setCellData(insertRowIndex, "IS_USE", 'Y');
  grd_menu.setFocusedCell(insertRowIndex, "MENU_NM", true);
};

/**
 * @event
 * @name btn_cancelMenu_onclick
 * @description 메뉴관리 리스트에서 취소 버튼클릭시 데이타를 이전 상태로 바꾸고 추가된 것들은 삭제한다.
 */
scwin.btn_cancelMenu_onclick = function () {
  $c.data.undoGridView($p, grd_menu);
};

/**
 * @event
 * @name btn_saveMenu_onclick
 * @description 업데이트(입력, 수정 삭제)된 메뉴 데이터를 저장한다.
 */
scwin.btn_saveMenu_onclick = async function () {
  const valMenuInfo = [{
    id: "MENU_NM",
    mandatory: true
  }];
  if ($c.data.isModified($p, dlt_menu)) {
    if ($c.data.validateGridView($p, grd_menu, valMenuInfo)) {
      if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00031"))) {
        $c.sbm.execute($p, sbm_saveMenu);
      }
    }
    ;
  } else {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00032"));
  }
};

/**
 * @event
 * @name grd_menu_ontextimageclick
 * @description 프로그램을 선택하기 위한 프로그램 검색창을 실행한다.
 */
scwin.grd_menu_ontextimageclick = async function (row, col) {
  const data = {
    program: dlt_menu.getCellData(row, "PROGRAM_NM"),
    callbackFn: "scwin.callbackProgramSearch"
  };
  const options = {
    id: "ProgramSearchPopup",
    popupName: "프로그램 목록 조회",
    modal: true,
    width: 960,
    height: 450
  };
  await $c.win.openPopup($p, "/ui/BM/BM004P01.xml", options, data);
};

/**
 * @method
 * @name callbackProgramSearch
 * @description 프로그램 검색 콜백 처리 함수
 * @param {Object} data 검색된 프로그램 데이터
 * @hidden N
 * @exception 
 */
scwin.callbackProgramSearch = function (data) {
  const rowIndex = dlt_menu.getRowPosition();
  dlt_menu.setBroadcast(false);
  dlt_menu.setCellData(rowIndex, "PROGRAM_CD", data.PROGRAM_CD);
  dlt_menu.setCellData(rowIndex, "PROGRAM_NM", data.PROGRAM_NM);
  dlt_menu.setCellData(rowIndex, "PROGRAM_GROUP_CD", data.PROGRAM_GROUP_CD);
  dlt_menu.setCellData(rowIndex, "PROGRAM_GROUP_NM", data.PROGRAM_GROUP_NM);
  dlt_menu.setBroadcast(true, true);
};

/**
 * @event
 * @name grd_menu_oneditkeyup
 * @param {Object} info 이벤트가 발생한 cell의 정보가 담긴 객체
 * @description 메뉴 그리드의 키를 눌렀다 놓았을 때 발생하는 이벤트 정의
 */
scwin.grd_menu_oneditkeyup = function (info) {
  if (info.keyCode == 13 && info.colID == "PROGRAM_NM") {
    scwin.grd_menu_ontextimageclick(info.rowIndex, info.colIndex);
  }
};

/**
 * @event
 * @name grd_menu_oncellclick
 * @param {Number} row 클릭된 셀의 행 index
 * @param {Number} col 클릭된 셀의 열 index
 * @description 메뉴 그리드의 셀을 클릭 했을 때의 이벤트 정의
 */
scwin.grd_menu_oncellclick = function (row, col) {
  const colId = grd_menu.getColumnID(col);

  // IS_USE 컬럼을 Check할 경우 자신 하위의 Row에 대한 체크 또는 해제 처리한다.
  if (colId == "IS_USE") {
    let newValue = false;
    if (dlt_menu.getCellData(row, colId) == "Y") {
      newValue = true;
    }
    dlt_menu.setBroadcast(false);
    scwin.setGridViewRowCheckBox(grd_menu, row, col, newValue);
    scwin.checkParentColumn(grd_menu, row, col, newValue);
    dlt_menu.setBroadcast(true, true);
  }
};

/**
 * @method
 * @name setGridViewRowCheckBox
 * @description DrillDown이 적용된 GridView에서 CheckBox를 클릭할 경우 자신의 하위의 Row도 체크 또는 해제되도록 처리한다.
 * @param {string} gridViewObj gridView 객체
 * @param {string} rowIndex 클릭된 checkBox의 행 index
 * @param {string} colIndex 클릭된 checkBox의 열 index
 * @param {string} newValue 하위 Row에 대한 체크 처리
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setGridViewRowCheckBox = function (gridViewObj, rowIndex, colIndex, newValue) {
  const rowIndexArr = gridViewObj.getChildrenRowIndexArray(rowIndex);
  for (let idx in rowIndexArr) {
    const childRowIndexArr = gridViewObj.getChildrenRowIndexArray(rowIndexArr[idx]);
    if (childRowIndexArr.length > 0) {
      scwin.setGridViewRowCheckBox(gridViewObj, rowIndexArr[idx], colIndex, newValue);
    } else {
      gridViewObj.setCellChecked(rowIndexArr[idx], colIndex, newValue);
    }
  }
  gridViewObj.setCellChecked(rowIndex, colIndex, newValue);
};

/**
 * @method
 * @name checkParentColumn
 * @description 자식 Row가 체크되었는데 부모 Row가 체크되지 않았다면 체크되도록 한다.
 * @param {string} gridViewObj GridView 객체
 * @param {string} rowIndex 체크된 행 index
 * @param {string} colIndex 체크된 열 index
 * @param {string} newValue 하위 Row에 대한 체크 처리
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.checkParentColumn = function (gridViewObj, rowIndex, colIndex, newValue) {
  if (newValue) {
    const parentRowIndex = gridViewObj.getParentRowIndex(rowIndex);
    if (parentRowIndex > -1) {
      gridViewObj.setCellChecked(parentRowIndex, colIndex, newValue);
      scwin.checkParentColumn(gridViewObj, parentRowIndex, colIndex, newValue);
    }
  }
};
scwin.btn_excelMenu_onclick = function () {
  $c.data.downloadGridViewExcel($p, grd_menu);
};

/**
 * @method
 * @name sbm_saveMenu_submitdone
 * @description desc
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.sbm_saveMenu_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    scwin.btn_search_onclick();
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'schbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'flex flex_no'},E:[{T:1,N:'xf:select1',A:{ref:'data:dma_search.TYPE',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'','ev:onviewchange':'scwin.sbx_ChoiceBox_onviewchange',disabled:'false',style:'width:100px;',allOption:'',id:'sbx_ChoiceBox',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MENU_NM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MENU_CD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부모메뉴명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PARENT_MENU_CD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴레벨'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MENU_LEVEL'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{selectedData:'',chooseOptionLabel:'',submenuSize:'auto',interactionMode:'','ev:onchange':'',textAlign:'left',caseSensitive:'false',chooseOption:'',useKeywordHighlight:'false',allOption:'true',displayMode:'label',chooseOptionValue:'',ref:'',search:'start',emptyValue:'',emptyItem:'','ev:onviewchange':'',editType:'select',noResult:'useData',style:'width:300px;',id:'acb_autoChoiceBox',class:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_menuSearchItem'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_NM'}}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_menuLevel',ref:'',renderType:'native',style:'width:150px;display: none;',submenuSize:'auto','ev:onblur':'',chooseOptionLabel:'-전체-'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_menuSearchItem'},E:[{T:1,N:'xf:label',A:{ref:'MENU_LEVEL'}},{T:1,N:'xf:value',A:{ref:'MENU_LEVEL'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'xf:group',A:{class:'lt',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메뉴',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'count',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:''}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_menuCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addMenu',class:'btn_cm row_add','ev:onclick':'scwin.btn_addMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelMenu',style:'',type:'button','ev:onclick':'scwin.btn_cancelMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelMenu',style:'',type:'button',disabled:'','ev:onclick':'scwin.btn_excelMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'gvw',dataList:'data:dlt_menu','ev:oncellclick':'scwin.grd_menu_oncellclick','ev:oneditkeyup':'scwin.grd_menu_oneditkeyup','ev:onrowindexchange':'','ev:ontextimageclick':'scwin.grd_menu_ontextimageclick',fixedColumnWithHidden:'true',id:'grd_menu',ignoreCellClick:'false',rowNumVisible:'',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',style:'height:243px;',useShiftKey:'true',keepDefaultColumnWidth:'true',autoFitMinWidth:'1024',sortable:'false'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',value:'',width:'40'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',style:'',value:'메뉴코드',width:'79'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'메뉴명',width:'214',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column19',inputType:'text',style:'',textAlign:'center',value:'프로그램분류',width:'113'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column26',inputType:'text',style:'',value:'프로그램',width:'197'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column24',inputType:'text',style:'',value:'사용여부',width:'60'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column22',inputType:'text',style:'',value:'비고',width:'171'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',style:'',width:'40'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.setFontFormat',displayMode:'label',hidden:'false',id:'MENU_CD',inputType:'text',readOnly:'true',style:'',width:'79'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',depthColumn:'MENU_LEVEL',depthType:'div',displayMode:'label',id:'MENU_NM',inputType:'drilldown',showDepth:'3',style:'',textAlign:'left',width:'214'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'PROGRAM_GROUP_NM',inputType:'text',readOnly:'true',style:'',textAlign:'left',viewType:'icon',width:'113',allOption:'',chooseOption:'',ref:'',sortLabel:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_linkMenu'},E:[{T:1,N:'w2:label',A:{ref:'MENU_LEVEL'}},{T:1,N:'w2:value',A:{ref:'MENU_LEVEL'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'PROGRAM_NM',imageHeight:'14',imageSrc:'../../cm/images/product/g_btn_search.png',imageWidth:'15',inputType:'textImage',readOnly:'',textAlign:'left',viewType:'icon',width:'197',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',falseValue:'N',id:'IS_USE',inputType:'checkbox',trueValue:'Y',valueType:'other',width:'60',checkboxLabelColumn:'',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'NOTE',inputType:'text',width:'171',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveMenu',style:'',type:'button','ev:onclick':'scwin.btn_saveMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})