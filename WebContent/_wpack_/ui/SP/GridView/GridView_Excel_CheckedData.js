/*amd /ui/SP/GridView/GridView_Excel_CheckedData.xml 16615 f5d9846d712ae9723a07a7ed12f21df5f3873a4f83a37f2a9caa3ffb6090d378 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etcbox">\n파일형태, type, checkedID, checkedData, convertedIndex 옵션을 받아 GridView에서 선택된 Row의 데이터만 엑셀 다운로드 하는 기능을 제공한다.	\n</div> \n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etc_tit">1. 선택된 데이터만 엑셀 다운로드 과정</div>\n  1.1. 아래의 checkedID 항목에서 "chk" 컬럼을 선택한다.\n  1.2. GridView에서 다운로드 받을 Row의 체크박스를 선택한다.\n  1.3. [엑셀다운로드] 버튼을 클릭한다.	\n</div>\n<div class="etc_tit">2. 결과</div>\n  다운로드 : data.xlsx, data.xls\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_advancedExcel',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_NM',name:'부모메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_CD_SEL',name:'메뉴코드_선택',dataType:'text',importFormatter:'scwin.importFormat'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_advancedExcel',ref:'',target:'data:json,dlt_advancedExcel',action:'/ui/SP/JsonData/advancedExcel.json',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_advancedExcel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 초기 스크립트 수행 함수 정의
 * 
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
  // 조회
  scwin.btn_search_onclick();

  // 체크ID 를 선택하기위해 selectbox에 데이터 담기
  grd_excelGrid.cellIdList.forEach(a => sbx_checkIDs.addItem(a, a));
  sbx_checkIDs.setValue("chk");
  ibx_checkData.setValue("true");

  // convertedID를 선택하기위해 checkCombo에 데이터 담기 
  Object.keys(grd_excelGrid.bodyIdColIndexMap).forEach((a, i) => cbo_convertedIndex.addItem(i, a));
};

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
 * @param {Object} e submission객체
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
  if (rad_excelType.getValue() == "xls" || rad_excelType.getValue() == "xlsx") {
    option.fileName = "data." + rad_excelType.getValue();
    option.type = sbx_type.getValue() || "0"; // 다운로드 타입결정
    option.convertIndex = cbo_convertedIndex.getValueArray().toString() || ""; // convertIndex 설정
    option.checkedColumnId = sbx_checkIDs.getValue() || "";
    option.checkedData = ibx_checkData.getValue();
    option.columnMove = true; // GridView의 컬럼 이동을 반영해서 Excel 파일로 다운로드 함함

    $c.data.downloadGridViewExcel($p, grd_excelGrid, option, info);
  } else {
    $c.win.alert($p, "지원하지 않는 파일 형식입니다.");
  }
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
 * @event
 * @name sbx_checkIDs_onviewchange
 * @description CheckID selectBox의 chk 여부를 나타낸다.
 */
scwin.sbx_checkIDs_onviewchange = function (info) {
  ibx_checkData.setValue(info.newValue == 'chk' ? true : "");
};

/**
 * @event
 * @name importFormat
 * @description 메뉴코드를 반환한다.
 * @param {Object} a format정보가 담긴 객체
 */
scwin.importFormat = function (a) {
  return a.MENU_CD;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'xf:group',A:{class:'count',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:''}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_excelBasicCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_downloadExcelBasic',style:'',type:'button',toolTip:'그리드의 데이터를 엑셀로 다운로드 한다.','ev:onclick':'scwin.btn_downloadExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_gridRemoveExcelBasic',style:'',type:'button',toolTip:'현재 그리드에 업로드 되어있는 데이터를 삭제한다.','ev:onclick':'scwin.btn_gridRemoveExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지우기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm search',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'grid-row:1 / 3;',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'mr10',cols:'',disabled:'',id:'rad_excelType',ref:'',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xlsx'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xls'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xls'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'grid-column:2 / 3;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'엑셀다운로드의 확장자를 지정합니다.',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th',style:'grid-row:1 / 3;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_type',ref:'',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'grid-column:2 / 3;'},E:[{T:3,text:'[defalut:&nbsp;0]&nbsp;'},{T:1,N:'br'},{T:3,text:'0&nbsp;:&nbsp;실제&nbsp;데이터&nbsp;'},{T:1,N:'br'},{T:3,text:'1&nbsp;:&nbsp;화면에&nbsp;보이는&nbsp;데이터'},{T:1,N:'br'},{T:3,text:'2&nbsp;:&nbsp;들어가&nbsp;있는&nbsp;data&nbsp;그대로(filter무시&nbsp;expression&nbsp;타입의&nbsp;셀은&nbsp;나오지&nbsp;않음)'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',ref:'',style:'text-align: left',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',style:'grid-row:1 / 3;'},E:[{T:3,text:'checkedID'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.sbx_checkIDs_onviewchange',id:'sbx_checkIDs',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'grid-column:2 / 3;'},E:[{T:3,text:'선택된&nbsp;컬럼을&nbsp;기준으로&nbsp;checkData의&nbsp;값을&nbsp;비교한다.'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',style:'grid-row:1 / 3;'},E:[{T:3,text:'checkedData'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_checkData',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'grid-column:2 / 3;'},E:[{T:3,text:'checkedID에서&nbsp;선택된&nbsp;데이터를&nbsp;기준으로&nbsp;본&nbsp;데이터와&nbsp;매칭하여&nbsp;엑셀다운로드를&nbsp;시도한다.'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',style:'grid-row:1 / 3;'},E:[{T:3,text:'convertedIndex'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:checkcombobox',A:{id:'cbo_convertedIndex',displayAllOptionLabel:'false',chooseOption:'false',style:'width:150px;',submenuSize:'auto',allOption:'false',disabled:'false',direction:'auto',displayMode:'label',checkboxClickSync:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'grid-column:2 / 3;'},E:[{T:3,text:'convertedIndex를&nbsp;선택한다.(테스트&nbsp;목적상&nbsp;chk로&nbsp;설정함)'},{T:1,N:'br'},{T:3,text:'[default:&nbsp;\'chk\']&nbsp;'},{T:1,N:'br'},{T:3,text:'type이&nbsp;"0"&nbsp;또는&nbsp;"1"인&nbsp;경우,&nbsp;특정&nbsp;컬럼만&nbsp;type이&nbsp;"1"&nbsp;또는&nbsp;"0"인&nbsp;데이터로&nbsp;다운로드.&nbsp;'},{T:1,N:'br'},{T:3,text:'ex)type="1"인&nbsp;상태에서&nbsp;convertIndex="0,2"인&nbsp;경우,&nbsp;index가&nbsp;0,2인&nbsp;컬럼은&nbsp;컬름은&nbsp;type="0"으로&nbsp;다운로드.'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'gvw',columnMove:'true',columnMoveWithFooter:'',dataList:'data:dlt_advancedExcel','ev:onafteredit':'','ev:onfilereadend':'scwin.grd_excelGrid_onfilereadend',fixedColumnWithHidden:'true',id:'grd_excelGrid',ignoreCellClick:'false',rowNumHeaderValue:'순서',rowNumVisible:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height:296px;',useShiftKey:'true',rowNumWidth:'50',rowStatusWidth:'',keepDefaultColumnWidth:'true',autoFitMinWidth:'800'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'메뉴코드',width:'80'}},{T:1,N:'w2:column',A:{width:'99',inputType:'text',style:'',id:'column18',value:'메뉴코드 SelectBox',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'메뉴명',width:'100',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'부모메뉴명',width:'100',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',value:'메뉴레벨',width:'80',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',value:'경로',width:'150',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',value:'부모메뉴코드',width:'50',style:''}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_CD',inputType:'text',style:'',width:'80'}},{T:1,N:'w2:column',A:{width:'99',inputType:'select',style:'',id:'MENU_CD_SEL',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_advancedExcel'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_NM',inputType:'text',style:'',width:'40',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PARENT_MENU_NM',inputType:'text',style:'',textAlign:'left',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',falseValue:'N',id:'MENU_LEVEL',inputType:'text',style:'',textAlign:'center',trueValue:'Y',valueType:'other',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'SRC_PATH',inputType:'text',width:'50',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PARENT_MENU_CD',inputType:'text',style:'',width:'150'}}]}]}]}]}]}]}]}]})