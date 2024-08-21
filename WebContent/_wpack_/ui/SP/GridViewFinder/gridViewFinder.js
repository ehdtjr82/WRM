/*amd /ui/SP/GridViewFinder/gridViewFinder.xml 34250 9f801c6d26e1914d6cf4614da3f636129f4017508d97b58f84318105e355aa87 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.gridViewFinderShow,scwin.gridFinderUtilFormatter,scwin.gridFinderUtilHideFindWindow,scwin.gridFinderClose,scwin.gridViewFinderCreate,scwin.gridFinderUtilSetGrid,scwin.gridFinderUtil_createFindWindow,scwin.gridFinderUtilClearFindWindow,scwin.setBtnGridviewId,scwin.setBtn_gridviewId,scwin.gridFinderUtilFind,scwin.gridFinderUtil_searchData,scwin.gridFinderUtil_markKeyword,scwin.gridFinderUtiMoveNext,scwin.gridFinderUtilMoveNext,scwin.gridFinderUtilRecalculation,scwin.gridFinderUtilMovePrevious,scwin.gridFinderUtil_refresh,scwin.getTabActivate,scwin.searchGridView'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_gridViewFinder
 * @pluginName 
 * @company inswave
 * @developer 
 * @category /cm/udc
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @description 
 * @variableClone true
 * @width 
 * @height 
 * @license 
 * @homepage 
 * @imagePath 
 */

/**
 * @name gridFinderUtil
 * @type object
 * @description GridView안의 데이터를 검색을 위한 객체
 */
scwin.gridFinderUtil = {
  keyword: null,
  columnList: null,
  searchedCellList: null,
  focusedIdx: null,
  gridView: null,
  dataList: null,
  isExistFindWindow: false,
  allowWindowIdList: [],
  popupList: [],
  layoutType: null,
  layout: "",
  layoutName: null
};

/**
 * @method
 * @name onpageload	
 * @description UDC 최초 실행
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 */
scwin.onpageload = function () {
  grp_searchGrp.hide("");
};

/**
 * @method
 * @name tbx_close_onclick	
 * @description gridViewFinder를 닫는다
 * @param 
 * @returns 
 * @hidden N
 */
scwin.tbx_close_onclick = function (e) {
  scwin.gridFinderUtilClearFindWindow();
  grp_gridFinder.hide("");
};

/**
 * @method
 * @name gridViewFinderShow
 * @description gridViewFinder의 창을 보여준다
 * @param {string} gridViewInfo focus된 gridView의 정보
 * @hidden N
 * @exception 
 */
scwin.gridViewFinderShow = function (gridViewInfo) {
  grp_gridFinder.show();
  ibx_searchKeyword.focus();
  scwin.gridViewFinderCreate(gridViewInfo);
};

/**
 * @method
 * @name gridViewFinderCreate
 * @description gridView의 검색객체를 생성한다
 * @param {string} gridViewInfo gridView정보
 * @hidden N
 * @exception 
 */
scwin.gridViewFinderCreate = function (gridViewInfo) {
  let layoutName;
  let popupList;
  const layout = scwin.gridFinderUtil.layoutType == undefined ? $p.top().main.getLayoutId() : scwin.gridFinderUtil.layoutType;
  if (layout == "T") {
    layoutName = scwin.gridFinderUtil.layoutName == null ? $p.top().tac_layout : scwin.gridFinderUtil.layoutName;
    layoutName.bind("onchange", this.$w.getParentWindow().udc_gridVIew_finder.id + ".gridFinderUtilHideFindWindow");
    popupList = $c.util.getComponent($p, layoutName.id).getWindow().$p.getPopupList();
  } else if (layout == "M") {
    layoutName = scwin.gridFinderUtil.layoutName == undefined ? $p.top().wdc_main : scwin.gridFinderUtil.layoutName;
    layoutName.bind("onwindowchange", this.$w.getParentWindow().udc_gridVIew_finder.id + ".gridFinderUtilHideFindWindow");
    popupList = $c.util.getComponent($p, layoutName.id).getWindow($c.util.getComponent($p, layoutName.id).getSelectedWindowId()).$p.getPopupList();
  } else if (layout == "S") {
    layoutName = scwin.gridFinderUtil.layoutName == undefined ? $p.top().wfm_layout : scwin.gridFinderUtil.layoutName;
    layoutName.bind("onbeforewframeunload", this.$w.getParentWindow().udc_gridVIew_finder.id + ".gridFinderUtilHideFindWindow");
    popupList = $c.util.getComponent($p, layoutName.id).getWindow().$p.getPopupList();
  } else {
    return;
  }
  scwin.gridFinderUtil.popupList = popupList;
  scwin.gridFinderUtil.layoutName = layoutName;
  scwin.gridFinderUtil.layout = layout;
  if (typeof gridViewInfo === "undefined") {
    let gridViewList = [];
    gridViewList = scwin.searchGridView();
    const gridViewCount = gridViewList.length;
    for (let idx = 0; idx < gridViewCount; idx++) {
      scwin.gridFinderUtil.gridView = gridViewList[idx];
      scwin.gridFinderUtil.searchedCellList = null;
      scwin.gridFinderUtilSetGrid(gridViewList[idx]);
    }
  } else if (typeof gridViewInfo !== "undefined") {
    let gridViewList = gridViewInfo;
    const gridViewCount = gridViewList.length;
    for (let idx = 0; idx < gridViewCount; idx++) {
      scwin.gridFinderUtil.gridView = gridViewList[idx];
      scwin.gridFinderUtil.searchedCellList = null;
      scwin.gridFinderUtilSetGrid(gridViewList[idx]);
    }
  }
  //scwin.gridFinderUtil_createFindWindow();
};

/**
 * @method
 * @name gridFinderUtilSetGrid
 * @description GridView와 Column 정보를 세팅한다.
 * @param {string} gridView gridView객체
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilSetGrid = function (gridView) {
  try {
    scwin.gridFinderUtil.gridView = gridView;
    if (scwin.gridFinderUtil.gridView.getRowCount() == 0) return; //탭 alwaysDraw="false" 구분한다.

    if (typeof scwin.gridFinderUtil.gridView === null) {
      return;
    }
    scwin.gridFinderUtil.dataList = $c.util.getComponent($p, scwin.gridFinderUtil.gridView.getDataList());
    if (scwin.gridFinderUtil.columnList === null) {
      const columnCount = scwin.gridFinderUtil.gridView.getColumnCount();
      scwin.gridFinderUtil.columnList = [];
      for (let idx = 0; idx < columnCount; idx++) {
        const cellInfo = scwin.gridFinderUtil.gridView.getCellInfo(idx);
        if (typeof cellInfo.options.customFormatterOrigin === "undefined") {
          cellInfo.options.customFormatterOrigin = cellInfo.options.customFormatter;
        }
        const customFormatterFunc = cellInfo.options.customFormatterOrigin;
        const columnVisible = scwin.gridFinderUtil.gridView.getColumnVisible(idx);
        const columnInfo = {
          "columnId": scwin.gridFinderUtil.gridView.getColumnID(idx),
          "visible": columnVisible,
          "customFormatter": customFormatterFunc
        };
        scwin.gridFinderUtil.columnList.push(columnInfo);
      }
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @method
 * @name gridFinderUtil_createFindWindow
 * @description 검색창을 만든다.
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtil_createFindWindow = function () {
  if (scwin.gridFinderUtil.isExistFindWindow === false) {
    scwin.gridFinderUtil.isExistFindWindow = true;
  } else {
    scwin.gridFinderUtilClearFindWindow();
    return;
  }
  let gridViewList = "";
  //팝업 일때 예외 처리 한다.
  let popupZIndex = 0;
  let popupList = scwin.gridFinderUtil.popupList;
  gridViewList = scwin.searchGridView();
  let keywordhidden = "";
  for (let idx = 0; idx < gridViewList.length; idx++) {
    scwin.gridFinderUtil.gridView = gridViewList[idx];
    scwin.gridFinderUtil.searchedCellList = null;
    scwin.gridFinderUtilSetGrid(gridViewList[idx]);
    keywordhidden += "," + gridViewList[idx].id;
  }
  ibx_gridviewId.setValue(keywordhidden);
  ibx_searchKeyword.focus();
  ibx_searchKeyword.select();
};

/**
 * @method
 * @name gridFinderUtilClearFindWindow
 * @description Grid 데이터 검색 기능을 초기화 한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilClearFindWindow = function () {
  scwin.gridFinderUtil.keyword = null;
  scwin.gridFinderUtil.popupList = null;
  scwin.gridFinderUtil.isExistFindWindow = false;
  let ibxGridviewId = ibx_gridviewId.getValue();
  ibxGridviewId = ibxGridviewId.substring(1);
  const ibx_gridviewIds = ibxGridviewId.split(",");
  if (ibx_gridviewIds[0] != "") {
    for (let i = 0; i < ibx_gridviewIds.length; i++) {
      scwin.gridFinderUtil.gridView = $c.util.getComponent($p, ibx_gridviewIds[i]);
      scwin.gridFinderUtil.dataList = $c.util.getComponent($p, ibx_gridviewIds[i])._dataList;
      scwin.gridFinderUtil.columnList = scwin.gridFinderUtil.dataList.cellIdList;
      if (scwin.gridFinderUtil.columnList !== null) {
        const columnCount = scwin.gridFinderUtil.columnList.length;
        for (let columnIdx = 0; columnIdx < columnCount; columnIdx++) {
          if (scwin.gridFinderUtil.columnList[columnIdx] !== null) {
            if (scwin.gridFinderUtil.gridView.getCellInfo(scwin.gridFinderUtil.columnList[columnIdx]).options.customFormatter) {
              if (scwin.gridFinderUtil.gridView.getCellInfo(scwin.gridFinderUtil.columnList[columnIdx]).options.customFormatter == scwin.gridFinderUtilFormatter) {
                scwin.gridFinderUtil.gridView.setCustomFormatter(scwin.gridFinderUtil.columnList[columnIdx], "");
              }
            }
          }
        }
        scwin.gridFinderUtil.columnList = null;
      }
      if (scwin.gridFinderUtil.searchedCellList !== null) {
        const searchedCellCount = scwin.gridFinderUtil.searchedCellList.length;
        for (let cellIdx = 0; cellIdx < searchedCellCount; cellIdx++) {
          scwin.gridFinderUtil.searchedCellList[cellIdx].rowIdx = null;
          scwin.gridFinderUtil.searchedCellList[cellIdx].colId = null;
          scwin.gridFinderUtil.searchedCellList[cellIdx] = null;
        }
        scwin.gridFinderUtil.searchedCellList = null;
      }
    }
    scwin.gridFinderUtil.focusedIdx = null;
    scwin.gridFinderUtil.gridView = null;
    scwin.gridFinderUtil.dataList = null;
    ibx_searchKeyword.setValue("");
    ibx_gridviewId.setValue("");
    grp_searchGrp.hide("");
  }
};
/**
 * @method
 * @name gridFinderUtilFormatter
 * @description desc
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */
/**
 * @method
 * @name setBtnGridviewId
 * @description gridViewId 값을 셋팅한다
 * @param {string} param gridVIewId
 * @hidden N
 * @exception 
 */
scwin.setBtnGridviewId = function (param) {
  btn_gridviewId.setValue(param);
};
/**
 * @method
 * @name setBtn_gridviewId
 * @description gridViewId 값을 셋팅한다
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setBtn_gridviewId = function () {
  btn_gridviewId.getValue();
};
scwin.ibx_searchKeyword_onkeydown = function (e) {
  if (e.keyCode === 13) {
    $c.util.setTimeout($p, function () {
      const keyword = ibx_searchKeyword.getValue();
      scwin.gridFinderUtilFind(keyword);
    }, {
      delay: 200,
      key: "searchKeyword_" + $c.date.formatDateTime($p, new Date(), "yyyy-MM-dd HH:mm:ss SSS")
    });
    return false;
  }
};

/**
 * @method
 * @name gridFinderUtilFind
 * @description 특정 키워드를 gridFinder GridView안에서 검사한다.
 * @param {String} searchKeyWord 검색할 Keyword
 * @param {String} refreshYn     첫번째 일때 재귀 방지를 위해 설정 
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilFind = function (keyword, refreshYn) {
  try {
    if (typeof keyword !== "undefined" && keyword !== null && keyword.trim() !== "") {
      scwin.gridFinderUtil.keyword = keyword;
      scwin.gridFinderUtil_searchData(scwin.gridFinderUtil.keyword, refreshYn);
    } else {
      $c.win.alert($p, "검색 조건을 입력하세요.");
      return;
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @method
 * @name gridFinderClose
 * @description gridFinder 창을 닫는다
 * @param {string} gridViewInfo gridView정보를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.gridFinderClose = function (gridViewInfo) {
  if (grp_gridFinder.getStyle("display") == "block") {
    scwin.tbx_close_onclick();
  }
};

/**
 * @method
 * @name gridFinderUtil_searchData
 * @description 특정 키워드를 DataList 안에서 검색한다
 * @param {String} keyword 검색 Keyword
 * @param {String} refreshYn     첫번째 일때 재귀 방지를 위해 설정 
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtil_searchData = function (keyword, refreshYn) {
  try {
    delete scwin.gridFinderUtil.searchedCellList;
    refreshYn = refreshYn ? refreshYn : "Y";

    //girdview가 있는 tab 활성화 여부 떄문에 그리드 갯수와 column set을 input에서 enter event시 재조회 한다.
    let gridViewList = [];
    gridViewList = scwin.searchGridView();
    if (gridViewList.length == 0) {
      grp_searchGrp.hide("");
      return;
    }
    const gridViewCount = gridViewList.length;
    let keywordhidden = "";
    for (let idx = 0; idx < gridViewCount; idx++) {
      scwin.gridFinderUtil.gridView = gridViewList[idx];
      scwin.gridFinderUtil.searchedCellList = [];
      scwin.gridFinderUtilSetGrid(gridViewList[idx]);
      keywordhidden += "," + gridViewList[idx].id;
    }
    ibx_gridviewId.setValue(keywordhidden);
    ibx_searchKeyword.focus();
    ibx_searchKeyword.select();

    //girdview가 있는 tab 활성화 여부 떄문에 그리드 갯수와 column set을 input에서 enter event시 재조회 한다.

    let btnGridviewId = ibx_gridviewId.getValue();
    btnGridviewId = btnGridviewId.substring(1);
    const btn_gridviewIds = btnGridviewId.split(",");
    if (btn_gridviewIds.length == 0 || btn_gridviewIds.length == 1 && btn_gridviewIds[0] == "") return;
    for (let i = 0; i < btn_gridviewIds.length; i++) {
      scwin.gridFinderUtil.dataList = $c.util.getComponent($p, btn_gridviewIds[i])._dataList;
      scwin.gridFinderUtil.columnList = scwin.gridFinderUtil.dataList.cellIdList;
      const allData = scwin.gridFinderUtil.dataList.getAllJSON();
      const rowCount = allData.length;
      for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
        const colCount = scwin.gridFinderUtil.columnList.length;
        for (let colIdx = 0; colIdx < colCount; colIdx++) {
          if ($c.util.getComponent($p, btn_gridviewIds[i]).cellIdList.join(",").indexOf(scwin.gridFinderUtil.columnList[colIdx]) > -1) {
            let cellData = allData[rowIdx][scwin.gridFinderUtil.columnList[colIdx]];
            if (typeof cellData !== "undefined") {
              if (typeof cellData === "number") {
                cellData = cellData.toString();
              }
              if (cellData.indexOf(keyword) > -1) {
                cellInfo = {
                  "gridView": $c.util.getComponent($p, btn_gridviewIds[i]),
                  "rowIdx": rowIdx,
                  "colId": scwin.gridFinderUtil.columnList[colIdx]
                };
                $c.util.getComponent($p, btn_gridviewIds[i]).removeFocusedCell();
                scwin.gridFinderUtil.searchedCellList.push(cellInfo);
              }
            }
          }
        }
      }
    }
    const resultMessage = scwin.gridFinderUtil.searchedCellList.length + "건의 데이터가 검색 되었습니다.";
    grp_message.setValue(resultMessage);
    grp_searchGrp.show("");
    if (scwin.gridFinderUtil.searchedCellList.length == 0) {
      grp_focusLoc.setValue(["0/0"]);
      return;
    } else if (btn_gridviewIds.length > 0) {
      scwin.gridFinderUtil_markKeyword();
      if (refreshYn == "Y") {
        scwin.gridFinderUtil.focusedIdx = null;
        scwin.gridFinderUtiMoveNext();
      }
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @method
 * @name gridFinderUtil_markKeyword
 * @description GridView의 셀에 검색 Keyword를 Marking 한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtil_markKeyword = function () {
  try {
    let gridviewId = ibx_gridviewId.getValue();
    gridviewId = gridviewId.substring(1);
    const btn_gridviewIds = gridviewId.split(",");
    for (let i = 0; i < btn_gridviewIds.length; i++) {
      scwin.gridFinderUtil.columnList = $p.getComponentById(btn_gridviewIds[i]).cellIdList;
      scwin.gridFinderUtil.gridView = $p.getComponentById(btn_gridviewIds[i]);
      let columnCount = scwin.gridFinderUtil.columnList.length;
      for (let idx = 0; idx < columnCount; idx++) {
        if (scwin.gridFinderUtil.gridView.getColumnVisible(scwin.gridFinderUtil.columnList[idx])) {
          //customFormatter 적용된 Cell 적용 하지 않는다.
          if (scwin.gridFinderUtil.gridView.getCellInfo(idx).options.customFormatter == undefined || scwin.gridFinderUtil.gridView.getCellInfo(idx).options.customFormatter == "") {
            scwin.gridFinderUtil.gridView.setCustomFormatter(scwin.gridFinderUtil.columnList[idx], this.$w.getParentWindow().udc_gridVIew_finder.id + ".gridFinderUtilFormatter");
          }
        }
      }
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * GridView CustomFormatter를 이용해서 각 셀 별로 Keyword를 Marking한다.
 */
/**
 * @method
 * @name gridFinderUtilFormatter
 * @description GridView CustomFormatter를 이용해 각 셀별로 KeyWord를 Marking 한다.
 * @param {string} value 값
 * @param {string} formatValue format값
 * @param {string} rowIdx 행 인덱스
 * @param {string} colIdx 열 인덱스
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilFormatter = function (value, formatValue, rowIdx, colIdx) {
  let result = value;
  try {
    const customFormatterFunc = scwin.gridFinderUtil.columnList[colIdx].customFormatter;
    let preFormatValue = null;
    if (typeof customFormatterFunc === "function") {
      preFormatValue = customFormatterFunc(value, formatValue, rowIdx, colIdx);
    } else {
      preFormatValue = formatValue;
    }
    result = preFormatValue;
    let columnData = null;
    if (typeof preFormatValue === "number") {
      columnData = preFormatValue.toString();
    } else {
      columnData = preFormatValue;
    }
    if (value.toString().indexOf(scwin.gridFinderUtil.keyword) != -1) {
      result = columnData.replace(scwin.gridFinderUtil.keyword, '<span style="color:red;margin:0;background-color:yellow;">' + scwin.gridFinderUtil.keyword + '</span>');
    } else {
      result = columnData;
    }
    return result;
  } catch (ex) {
    console.log(ex);
    return result;
  }
};
/**
 * @method
 * @name gridFinderUtiMoveNext
 * @description 현재 포커스에서 KeyWord가 포함된 다음 Cell로 이동한다
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtiMoveNext = function () {
  try {
    //scwin.gridFinderUtil_refresh("N");
    if (scwin.gridFinderUtil.focusedIdx === null) {
      scwin.gridFinderUtil.focusedIdx = 0;
    } else {
      scwin.gridFinderUtil.gridView = scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView;
      if (scwin.gridFinderUtil.searchedCellList.length - 1 > scwin.gridFinderUtil.focusedIdx) {
        scwin.gridFinderUtil.focusedIdx++;
      } else {
        let btn_gridviewId = ibx_gridviewId.getValue();
        btn_gridviewId = btn_gridviewId.substring(1);
        const btn_gridviewIds = btn_gridviewId.split(",");
        if (grp_focusLoc.getValue().split("/")[1].split("]")[0] == grp_focusLoc.getValue().split("/")[0].split("[")[1]) {
          //재계산 로직 작성 
          scwin.gridFinderUtilRecalculation("next");
          return;
        }
      }
    }
    if (scwin.gridFinderUtil.searchedCellList !== null && scwin.gridFinderUtil.searchedCellList.length > 0) {
      //그리드에서 다른 그리드 이동 했을 때 
      if (scwin.gridFinderUtil.gridView != scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView) {
        scwin.gridFinderUtil.gridView.removeFocusedCell();
        if (scwin.gridFinderUtil.focusedIdx != 0) {
          scwin.gridFinderUtilRecalculation("next", "Y");
        }
      }
      scwin.gridFinderUtil.gridView = scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView;
      scwin.gridFinderUtil.gridView.setFocusedCell(scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].rowIdx, scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].colId, false);
      btn_moveNext.focus();
    }
    if (scwin.gridFinderUtil.searchedCellList.length > 0) {
      const focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx + 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_focusLoc.setValue(focusLoc);
    } else {
      grp_focusLoc.setValue("");
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @method
 * @name gridFinderUtilMoveNext
 * @description 현재 포커스에서 KeyWord가 포함된 다음 Cell로 이동한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilMoveNext = function () {
  try {
    if (scwin.gridFinderUtil.focusedIdx === null) {
      scwin.gridFinderUtil.focusedIdx = 0;
    } else {
      scwin.gridFinderUtil.gridView = scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView;
      if (scwin.gridFinderUtil.searchedCellList.length - 1 > scwin.gridFinderUtil.focusedIdx) {
        scwin.gridFinderUtil.focusedIdx++;
      } else {
        let btn_gridviewId = ibx_gridviewId.getValue();
        btn_gridviewId = btn_gridviewId.substring(1);
        const btn_gridviewIds = btn_gridviewId.split(",");
        if (grp_focusLoc.getValue().split("/")[1].split("]")[0] == grp_focusLoc.getValue().split("/")[0].split("[")[1]) {
          //재계산 로직 작성 
          scwin.gridFinderUtilRecalculation("next");
          return;
        }
      }
    }
    if (scwin.gridFinderUtil.searchedCellList !== null && scwin.gridFinderUtil.searchedCellList.length > 0) {
      //그리드에서 다른 그리드 이동 했을 때 
      if (scwin.gridFinderUtil.gridView != scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView) {
        scwin.gridFinderUtil.gridView.removeFocusedCell();
        if (scwin.gridFinderUtil.focusedIdx != 0) {
          scwin.gridFinderUtilRecalculation("next", "Y");
        }
      }
      scwin.gridFinderUtil.gridView = scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView;
      scwin.gridFinderUtil.gridView.setFocusedCell(scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].rowIdx, scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].colId, false);
      btn_moveNext.focus();
    }
    if (scwin.gridFinderUtil.searchedCellList.length > 0) {
      const focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx + 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_focusLoc.setValue(focusLoc);
    } else {
      grp_focusLoc.setValue("");
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @method
 * @name gridFinderUtilRecalculation
 * @description finder 재계산 함수
 * @param {String} move        이동시구분값(next:앞, Previous:뒤)
 * @param {String} newGrid     그리드에서 다음 그리드로 갈떄 여부 확인 Y, N
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilRecalculation = function (move, newGrid) {
  delete scwin.gridFinderUtil.searchedCellList;
  scwin.gridFinderUtil.searchedCellList = [];
  let btn_gridviewId = ibx_gridviewId.getValue();
  btn_gridviewId = btn_gridviewId.substring(1);
  const btn_gridviewIds = btn_gridviewId.split(",");
  for (let i = 0; i < btn_gridviewIds.length; i++) {
    scwin.gridFinderUtil.dataList = $c.util.getComponent($p, btn_gridviewIds[i])._dataList;
    scwin.gridFinderUtil.columnList = scwin.gridFinderUtil.dataList.cellIdList;
    const allData = scwin.gridFinderUtil.dataList.getAllJSON();
    const rowCount = allData.length;
    for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
      const colCount = scwin.gridFinderUtil.columnList.length;
      for (let colIdx = 0; colIdx < colCount; colIdx++) {
        if ($c.util.getComponent($p, btn_gridviewIds[i]).cellIdList.join(",").indexOf(scwin.gridFinderUtil.columnList[colIdx]) > -1) {
          let cellData = allData[rowIdx][scwin.gridFinderUtil.columnList[colIdx]];
          if (typeof cellData !== "undefined") {
            if (typeof cellData === "number") {
              cellData = cellData.toString();
            }
            if (cellData.indexOf(scwin.gridFinderUtil.keyword) > -1) {
              cellInfo = {
                "gridView": $c.util.getComponent($p, btn_gridviewIds[i]),
                "rowIdx": rowIdx,
                "colId": scwin.gridFinderUtil.columnList[colIdx]
              };
              $c.util.getComponent($p, btn_gridviewIds[i]).removeFocusedCell();
              scwin.gridFinderUtil.searchedCellList.push(cellInfo);
            }
          }
        }
      }
    }
  }
  let resultMessage = "";
  let focusLoc = "";
  if (move == "next") {
    //총갯수와 이동수가 같을 
    if (grp_message.getValue().split("건의 데이터가 검색 되었습니다.")[0] * 1 != scwin.gridFinderUtil.searchedCellList.length && newGrid != "Y") {
      resultMessage = scwin.gridFinderUtil.searchedCellList.length + "건의 데이터가 검색 되었습니다.";
      grp_message.setValue(resultMessage);
      focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx + 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_focusLoc.setValue(focusLoc);
      scwin.gridFinderUtiMoveNext();
    } else if (newGrid == "Y") {
      //그리드뷰에서 다른 그리드뷰로 이동
      resultMessage = scwin.gridFinderUtil.searchedCellList.length + "건의 데이터가 검색 되었습니다.";
      grp_message.setValue(resultMessage);
      focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx + 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_focusLoc.setValue(focusLoc);
    } else {
      scwin.gridFinderUtil.focusedIdx = null;
      scwin.gridFinderUtilMoveNext();
    }
  } else if (move == "Previous") {
    if (grp_message.getValue().split("건의 데이터가 검색 되었습니다.")[0] * 1 != scwin.gridFinderUtil.searchedCellList.length) {
      resultMessage = scwin.gridFinderUtil.searchedCellList.length + "건의 데이터가 검색 되었습니다.";
      scwin.gridFinderUtil.focusedIdx = scwin.gridFinderUtil.searchedCellList.length - 1;
      focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx - 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_message.setValue(resultMessage);
      grp_focusLoc.setValue(focusLoc);
      scwin.gridFinderUtilMovePrevious();
    } else {
      scwin.gridFinderUtil.focusedIdx = grp_message.getValue().split("건의 데이터가 검색 되었습니다.")[0] * 1;
      scwin.gridFinderUtilMovePrevious();
    }
  }
};

/**
 * 현재 포커스에서 Keyword가 포함된 이전 Cell로 이동한다.
 */
/**
 * @method
 * @name gridFinderUtilMovePrevious
 * @description 현재 포커스에서 KeyWord가 포함된 이전 Cell로 이동한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilMovePrevious = function () {
  try {
    scwin.gridFinderUtil_refresh();
    if (scwin.gridFinderUtil.focusedIdx === null) {
      scwin.gridFinderUtil.focusedIdx = 0;
    } else {
      if (scwin.gridFinderUtil.focusedIdx > 0) {
        scwin.gridFinderUtil.focusedIdx--;
      } else {
        if (scwin.gridFinderUtil.focusedIdx == 0) {
          scwin.gridFinderUtilRecalculation("Previous");
          return;
        }
      }
    }
    if (scwin.gridFinderUtil.searchedCellList !== null && scwin.gridFinderUtil.searchedCellList.length > 0) {
      if (scwin.gridFinderUtil.gridView != scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView) scwin.gridFinderUtil.gridView.removeFocusedCell();
      scwin.gridFinderUtil.gridView = scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].gridView;
      scwin.gridFinderUtil.gridView.setFocusedCell(scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].rowIdx, scwin.gridFinderUtil.searchedCellList[scwin.gridFinderUtil.focusedIdx].colId, false);
    }
    if (scwin.gridFinderUtil.searchedCellList.length > 0) {
      const focusLoc = "[" + (scwin.gridFinderUtil.focusedIdx + 1) + "/" + scwin.gridFinderUtil.searchedCellList.length + "]";
      grp_focusLoc.setValue(focusLoc);
    } else {
      grp_focusLoc.setValue("");
    }
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * @event
 * @name btn_movePrevious_onclick
 * @description 이전 버튼을 클릭한다.
 * @param e 이벤트 정보를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.btn_movePrevious_onclick = function (e) {
  $c.util.setTimeout($p, function () {
    scwin.gridFinderUtilMovePrevious();
  }, {
    delay: 100,
    key: "tabMovePrevious"
  });
};

/**
 * @event
 * @name btn_moveNext_onclick
 * @description 다음 버튼을 클릭한다.
 * @param e 이벤트 정보를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.btn_moveNext_onclick = function (e) {
  $c.util.setTimeout($p, function () {
    scwin.gridFinderUtilMoveNext();
  }, {
    delay: 100,
    key: "taMoveNext_" + $c.date.formatDateTime($p, new Date(), "yyyy-MM-dd HH:mm:ss SSS")
  });
};

/**
 * @method
 * @name gridFinderUtil_refresh
 * @description 검색 조건이 변경된 경우 갱신 처리한다.
 * @param {String} refreshYn     첫번째 일때 재귀 방지를 위해 설정 
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.gridFinderUtil_refresh = function (refreshYn) {
  try {
    const keyword = ibx_searchKeyword.getValue();
    if (scwin.gridFinderUtil.keyword !== keyword) {
      scwin.gridFinderUtilFind(keyword, refreshYn);
    }
  } catch (ex) {
    console.log(ex);
    return value;
  }
};

/**
 * @method
 * @name gridFinderUtilHideFindWindow
 * @description grid 데이터 검색 창을 숨기면서 초기화한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.gridFinderUtilHideFindWindow = function () {
  grp_gridFinder.hide("");
  scwin.gridFinderUtilClearFindWindow();
};

/**
 * @method
 * @name getTabActivate
 * @description gridView 상위 tabControl 활성화 여부를 확인한다.
 * @param {Object} grdObj gridView
 * @param {Boolean} actChk 활성화 여부
 * @return {Boolean} actChk tab 존체가 활설화이면 true, 아니면 false
 * @hidden N
 * @exception 
 * @example scwin.getTabActivate(grd_memberFamily, false); // return true
 */
scwin.getTabActivate = function (grdObj, actChk) {
  let reactChk = actChk;
  const gridObj = grdObj.getScope().getParent();
  console.log("gridObj.id===" + gridObj.id + "," + gridObj._wTagName);
  console.log("grdObj.id===" + grdObj.id);
  if (gridObj._wTagName == 'tabControl') {
    if (grdObj.id.indexOf(gridObj.contentsArr[gridObj.getSelectedTabIndex()].contentsID) > -1) {
      //활성화 로직
      console.log("true===");
      reactChk = true;
    } else {
      //만약에 비활성화 로직활성화 
      reactChk = false;
      return reactChk;
    }
  }
  if (gridObj.scope_id !== "mf") {
    //재귀호출 로직
    reactChk = scwin.getTabActivate(grdObj.getScope().getParent(), reactChk);
  }
  return reactChk;
};

/**
 * @method
 * @name searchGridView
 * @description 화면에 GridView 정보를 가져온다.
 * @param
 * @return {Object} gridView 정보
 * @hidden N
 * @exception 
 * @example scwin.searchGridView(); 
 */
scwin.searchGridView = function () {
  let gridViewList = [];
  let gridViewLists;
  let popupZIndex = 0; //팝업일 때 와 팝업 아닌 떄 분리. 

  if (scwin.gridFinderUtil.popupList != null && scwin.gridFinderUtil.popupList.length > 0) {
    const popupList = scwin.gridFinderUtil.popupList;
    for (let i = 0; i < popupList.length; i++) {
      if ($c.util.getComponent($p, popupList[0].id).getStyle("z-index") * 1 > popupZIndex) {
        popupZIndex = $c.util.getComponent($p, popupList[0].id).getStyle("z-index") * 1;
        gridViewLists = WebSquare.util.getChildren($c.util.getComponent($p, popupList[0].id), {
          includePlugin: "gridView",
          recursive: true
        });
      }
    }
  } else {
    if (scwin.gridFinderUtil.layout == "T") {
      gridViewLists = WebSquare.util.getChildren(scwin.gridFinderUtil.layoutName.getFrame(scwin.gridFinderUtil.layoutName.getSelectedTabID()), {
        includePlugin: "gridView",
        recursive: true
      });
    } else if (scwin.gridFinderUtil.layout == "M") {
      gridViewLists = WebSquare.util.getChildren(scwin.gridFinderUtil.layoutName.getFrame(scwin.gridFinderUtil.layoutName.getSelectedWindowId()), {
        includePlugin: "gridView",
        recursive: true
      });
    } else if (scwin.gridFinderUtil.layout == "S") {
      gridViewLists = WebSquare.util.getChildren(scwin.gridFinderUtil.layoutName, {
        includePlugin: "gridView",
        recursive: true
      });
    }
  }
  for (let idx = 0; idx < gridViewLists.length; idx++) {
    if (gridViewLists[idx].activeStatus == 'active' && getComputedStyle(document.getElementById("" + gridViewLists[idx].id)).visibility == 'visible') {
      gridViewList.push(gridViewLists[idx]);
    }
  }
  return gridViewList;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_gridFinder',style:'display: none;',class:'w2grid_finder gvw_finder'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'finderLayout'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'w2grid_finder_form'},E:[{T:1,N:'xf:input',A:{id:'ibx_searchKeyword',style:'','ev:onkeydown':'scwin.ibx_searchKeyword_onkeydown'}},{T:1,N:'xf:input',A:{id:'ibx_gridviewId',type:'hidden',style:''}},{T:1,N:'w2:textbox',A:{id:'btn_movePrevious',label:'<',style:'',tagname:'button','ev:onclick':'scwin.btn_movePrevious_onclick',class:'btn_movePrevious'}},{T:1,N:'w2:textbox',A:{id:'btn_moveNext',label:'>',style:'',tagname:'button','ev:onclick':'scwin.btn_moveNext_onclick',class:'btn_moveNext'}},{T:1,N:'w2:textbox',A:{id:'tbx_close',label:'X',style:'',tagname:'button',class:'btn_finder_close','ev:onclick':'scwin.tbx_close_onclick'}}]},{T:1,N:'xf:group',A:{id:'grp_searchGrp'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'grp_focusLoc',label:'[0/0]',class:'message'}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'grp_message',label:'건의 데이터가 검색 되었습니다.',class:'message'}}]}]}]},{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''}}]}]}]})