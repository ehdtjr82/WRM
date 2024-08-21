/*amd /ui/SP/GridView/GridView_Excel_Basic.xml 11996 e2ab03abb5d1ae2365700728783df77f355a5170a2cfdd1c0caeb323aa76f30f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etcbox">그리드뷰의 데이터를 파일 형태(xlsx, xls, csv)에 따라 엑셀 다운로드/업로드 하는 기능을 제공한다.\n파일명을 제외하고 별도의 다운로드/업로드 옵션 설정이 없는 기본 예제이다.	\n</div> \n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etc_tit">1. 다운로드 과정</div>\n  1.1 [조회] 버튼을 클릭하여 데이터를 조회한다.\n  1.2. 파일 형태 (xlsx, xls, csv) 중 하나를 선택한다.  \n  1.3. [엑셀다운로드] 버튼을 클릭한다.\n</div>	\n<div class="etc_tit">2. 업로드 과정</div>\n  2.1. 파일 형태 (xlsx, xls)중 하나를 선택한다.   \n  2.2. [업로드포맷] 버튼을 클릭하여 헤더만 있는 템플릿 파일을 다운로드 한다. (csv는 지원하지 않는다.)\n  2.3. 다운받은 템플릿 파일을 변경한다.\n  2.4. 그리드뷰에  데이터가 있는 경우, [지우기] 버튼을 클릭하여 데이터를 지운다.  \n  2.5. [엑셀업로드] 버튼을  클릭하여 파일 업로드 한다.\n</div>\n<div class="etc_tit">3. 결과</div>\n  3.1. 다운로드 : data.xlsx, data.xls,  data.csv  \n  3.2. 업로드 : header.xlsx, header.xls\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_advancedExcel',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_NM',name:'부모메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_advancedExcel',ref:'',target:'data:json,dlt_advancedExcel',action:'/ui/SP/JsonData/advancedExcel.json',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_advancedExcel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 초기 스크립트 수행 함수 정의
 * 
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {};

/** 
 * /ui/SP/Data/advancedExcel.json 파일을 읽어온다.
 * 
 * @event
 * @name btn_search_onclick
 * @description /ui/SP/Data/advancedExcel.json 파일을 읽어온다.
 */
scwin.btn_search_onclick = function () {
  $c.sbm.execute($p, sbm_advancedExcel);
};

/**
 * sbm_advancedExcel의 submitdone, 조회된 행의 총 갯수를 count한다.
 * 
 * @event
 * @name sbm_advancedExcel_submitdone
 * @description sbm_advancedExcel의 submitdone, 조회된 행의 총 갯수를 count한다.
 * @param {Object} e Submission객체
 */
scwin.sbm_advancedExcel_submitdone = function (e) {
  spn_excelBasicCnt.setValue(dlt_advancedExcel.getRowCount());
};

/** 
 * 그리드뷰의 데이터를 엑셀로 다운로드 한다.
 * 필요한 옵션이 있다면 options, infoArr배열에 옵션을 넣는다.
 * 
 * @event
 * @name btn_downloadExcelBasic_onclick
 * @description
 * 그리드뷰의 데이터를 엑셀로 다운로드 한다.
 * 필요한 옵션이 있다면 options, infoArr배열에 옵션을 넣는다.
 */
scwin.btn_downloadExcelBasic_onclick = function () {
  const option = {};
  const info = {};
  if (rad_excelType.getValue() == "csv") {
    option.fileName = "data." + rad_excelType.getValue();
    $c.data.downloadGridViewCSV($p, grd_excelGrid, option, info);
  } else if (rad_excelType.getValue() == "xls" || rad_excelType.getValue() == "xlsx") {
    option.fileName = "data." + rad_excelType.getValue();
    $c.data.downloadGridViewExcel($p, grd_excelGrid, option, info);
  } else {
    $c.win.alert($p, "지원하지 않는 파일 형식입니다.");
  }
};

/**	 
 * 엑셀의 데이터를 그리드뷰로 업로드 한다.
 * 필요한 옵션이 있다면 options배열에 옵션을 넣는다.
 * 
 * @event
 * @name btn_uploadDataBasic_onclick
 * @description
 * 엑셀의 데이터를 그리드뷰로 업로드 한다.
 * 필요한 옵션이 있다면 options배열에 옵션을 넣는다.
 */
scwin.btn_uploadDataBasic_onclick = function () {
  const option = {};
  if (rad_excelType.getValue() == "csv") {
    $c.data.uploadGridViewCSV($p, grd_excelGrid, option);
  } else if (rad_excelType.getValue() == "xls" || rad_excelType.getValue() == "xlsx") {
    $c.data.uploadGridViewExcel($p, grd_excelGrid, option);
  } else {
    $c.win.alert($p, "지원하지 않는 파일 형식입니다.");
  }
};

/**
 * 엑셀 업로드 후, 건수를 체크한다.
 * 
 * @event
 * @name grd_excelGrid_onfilereadend
 * @description 엑셀 업로드 후, 건수를 체크한다.
 * @param {String} value 업로드 파일명
 */
scwin.grd_excelGrid_onfilereadend = function (value) {
  spn_excelBasicCnt.setValue(grd_excelGrid.getTotalRow());
};

/**
 * 그리드의 데이터가 지워진다.
 * 
 * @event
 * @name btn_gridRemoveExcelBasic_onclick
 * @description 그리드의 데이터가 지워진다.
 */
scwin.btn_gridRemoveExcelBasic_onclick = function () {
  dlt_advancedExcel.removeAll();
};

/**
 * 그리드 Excel 포맷을 다운로드 하는 기능 ( 업로드용  Excel 포맷 )
 * 
 * @event
 * @name btn_defaultExcelFormat_onclick
 * @description 그리드 Excel 포맷을 다운로드 하는 기능 ( 업로드용  Excel 포맷 )
 */
scwin.btn_defaultExcelFormat_onclick = function () {
  if (rad_excelType.getValue() == "csv") {
    $c.win.alert($p, "csv는 header 포맷 다운로드 기능을 제공하지 않습니다.");
    return;
  }
  const option = {};
  option.fileName = "header." + rad_excelType.getValue();
  option.dataProvider = "com.inswave.wrm.provider.ExcelDownHeader";
  const info = {};
  $c.data.downloadGridViewExcel($p, grd_excelGrid, option, info);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'count',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:''}},{T:1,N:'w2:textbox',A:{style:'',id:'spn_excelBasicCnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'파일형태 :',style:''}},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'rad_excelType',ref:'',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:'',class:'mr10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xlsx'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xls'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xls'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'csv'}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_defaultExcelFormat',class:'btn_cm ',toolTip:'그리드의 Header만 엑셀로 다운로드 한다.','ev:onclick':'scwin.btn_defaultExcelFormat_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드포맷'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  upload',id:'btn_uploadDataBasic',style:'',type:'button',toolTip:'엑셀의 데이터를 그리드로 업로드 한다.','ev:onclick':'scwin.btn_uploadDataBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_downloadExcelBasic',style:'',type:'button',toolTip:'그리드의 데이터를 엑셀로 다운로드 한다.','ev:onclick':'scwin.btn_downloadExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_gridRemoveExcelBasic',style:'',type:'button',toolTip:'현재 그리드에 업로드 되어있는 데이터를 삭제한다.','ev:onclick':'scwin.btn_gridRemoveExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지우기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  search',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'gvw',columnMove:'',columnMoveWithFooter:'',dataList:'data:dlt_advancedExcel','ev:onafteredit':'','ev:onfilereadend':'scwin.grd_excelGrid_onfilereadend',fixedColumnWithHidden:'true',id:'grd_excelGrid',ignoreCellClick:'false',rowNumHeaderValue:'순서',rowNumVisible:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height:296px;',useShiftKey:'true',rowNumWidth:'50',rowStatusWidth:'',keepDefaultColumnWidth:'true',autoFitMinWidth:'800'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'메뉴코드',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'메뉴명',width:'100',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'부모메뉴명',width:'100',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',value:'메뉴레벨',width:'80',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',value:'경로',width:'150',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',value:'부모메뉴코드',width:'50',style:''}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_CD',inputType:'text',style:'',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_NM',inputType:'text',style:'',width:'40',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PARENT_MENU_NM',inputType:'text',style:'',textAlign:'left',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',falseValue:'N',id:'MENU_LEVEL',inputType:'text',style:'',textAlign:'center',trueValue:'Y',valueType:'other',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'SRC_PATH',inputType:'text',width:'50',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PARENT_MENU_CD',inputType:'text',style:'',width:'150'}}]}]}]}]}]}]}]}]})