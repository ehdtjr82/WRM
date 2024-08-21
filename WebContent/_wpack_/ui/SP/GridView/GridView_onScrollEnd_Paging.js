/*amd /ui/SP/GridView/GridView_onScrollEnd_Paging.xml 8257 17c6b44346c96bb92b088a50d185513ce6fe11b1909f39e9c3718c40affac4d2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 GridView의 세로 스크롤을 이용한 페이징 처리 방법을 제공한다.\n본 페이지는 50건씩 가져오도록 처리되어 있다.\n</div>\n<div class="etc_tit">1. onscrollend 이벤트</div>\n   최초 조회시에 전체 건수를 함께 조회하여 onscrollend 이벤트에서 조회된 데이터의 양이 전체 건수보다 작을 경우 \n   추가로 데이터를 조회하여 dataList에 append 해 주는 방식을 이용한다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n</div>						\n<div class="etc_tit">1. 과정</div>\n  1.1. [조회] 버튼을 클릭하여 데이터를 조회한다.\n  1.2. 화면 로딩 후 GridView의 세로스크롤을 끝까지 내려 onscrollend 이벤트를 발생시킨다.\n</div>\n<div class="etc_tit">2. 결과</div>\n  2.1. onscrollend 후 전체 건수 보다 조회된 건수가 작을 경우 계속 추가로 조회 transaction이 발생한다.\n	  (브라우저의 개발자 도구 Network 구간을 확인해 본다.)\n  2.2. 전체 건수만큼의 데이터를 가져오면 더이상의 조회 transaction은 발생하지 않는다.  \n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text',defaultValue:'Y'}},{T:1,N:'w2:key',A:{id:'START_NUM',name:'시작 순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'END_NUM',name:'끝 순번',dataType:'number',defaultValue:'5'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_update',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'UPT_SEQ',name:'업데이트순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_DATE',name:'작성일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_CONTENT',name:'내용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mainList',ref:'data:json,dma_search',target:'',action:'/page/selectPageInfo',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mainList_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.append = false;
scwin.totalCnt = 0;

/**
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 * 
 * @event
 * @name ondataload
 * @description 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {};

/**
 * @event
 * @name sbm_mainList_submitdone
 * @description 메인리스트 조회의 callback
 * @param {Object} e Submission객체
 */
scwin.sbm_mainList_submitdone = function (e) {
  // 조회 성공인 경우  
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    if ($c.util.isEmpty($p, e.responseJSON.TOTAL_CNT) === false) {
      spn_totalCnt.setValue(e.responseJSON.TOTAL_CNT.CNT);
    }
    const firstYn = dma_search.get("TOTAL_YN");

    // 최초 조회일 경우에만 전체 건수를 구하여 전역변수에 담는다.
    if (firstYn == "Y") {
      scwin.totalCnt = e.responseJSON.TOTAL_CNT.CNT;
    }
    dlt_update.setJSON(e.responseJSON.dlt_update, scwin.append);
  }
};

/**
 * 조회 (현재 샘플은 50개씩 조회할 경우 기준) 
 * param1 - 조회 시작 순번
 * param2 - 총 건수 조회 여부 
 * 
 * @method
 * @name searchMain
 * @description 
 * 조회 (현재 샘플은 50개씩 조회할 경우 기준) 
 * param1 - 조회 시작 순번
 * param2 - 총 건수 조회 여부
 *  
 * @param {Numer} idx 조회할 데이터의 시작 idx
 * @param {String} strYn 총 건수 조회여부
 */
scwin.searchMain = function (idx, strYn) {
  dma_search.set("TOTAL_YN", strYn);
  dma_search.set("START_NUM", $c.num.parseInt($p, idx));
  dma_search.set("END_NUM", 50);
  $c.sbm.execute($p, sbm_mainList);
};

/**
 * @event
 * @name gridView1_onscrollend
 * @description GridView의 스크롤이 최하단에 왔을 때 이후 데이터를 조회한다.
 */
scwin.gridView1_onscrollend = function () {
  const startRow = dlt_update.getRowCount();

  // 전체 건수보다 조회된 건수가 작을 경우에만 추가 조회를 한다.
  if (scwin.totalCnt > startRow) {
    scwin.append = true;
    scwin.searchMain(startRow, "N");
  }
};

// 처음부터 다시 조회 
/**
 * @event
 * @name btn_search_onclick
 * @description 처음부터 다시 조회
 */
scwin.btn_search_onclick = function () {
  scwin.append = false;
  scwin.searchMain(0, "Y");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'w2:wframe',A:{src:'../../cm/xml/contentDesc.xml'}},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lt'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'예제',class:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'count'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  search',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox grp_flex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'gvw',dataList:'data:dlt_update','ev:onscrollend':'scwin.gridView1_onscrollend',fixedColumnWithHidden:'true',id:'gridView1',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:164px;',summaryAuto:'false',useShiftKey:'true',autoFitMinWidth:'800'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'업데이트순번',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'',value:'제목',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'작성일',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'',value:'내용',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_SEQ',inputType:'text',style:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_TITLE',inputType:'text',style:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_DATE',inputType:'text',style:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_CONTENT',inputType:'text',style:'',width:'70'}}]}]}]}]}]}]}]}]})