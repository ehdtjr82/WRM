/*amd /ui/SP/Bean/Bean_Transaction.xml 11624 005e389691094dcd399739177a84cf5a4b4207cf87c72fb6becd90eb78410ce7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'파일 설명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'파일 테스트 방법',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etcbox">본 화면은 Bean방식으로 통신하는 CRUD Sample 이다.\n</div>\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n  1.1. [조회]를 클릭하여 조회 내용을 확인한다. 성명 테스트 데이터 - <font color=red><B>\'test\'</B></font>\n  1.2. [등록], [저장] 버튼을 통하여 입력, 수정, 삭제 기능을 확인한다.\n</div>\n<div class="etc_tit">2. 결과</div>\n  2.1. debugger 기능을 통하여 Bean 방식으로 통신함을 확인한다. \n  2.2. 정상적으로 입력, 수정, 삭제, 조회가 되는지 확인한다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'custNm',name:'성명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_temp',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'id',name:'id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custEmail',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtCmpnyNm',name:'소속',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'이름',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tel',name:'전화번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_userList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'id',name:'아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tel',name:'전화번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectTemp',ref:'data:json,{"id":"dma_search","key":"param"}',target:'data:json,{"id":"dlt_temp","key":"data"}',action:'/sample/bean/tempBeanSelect',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectTemp_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_saveTemp',ref:'data:json,{"id":"dlt_temp","action":"modified", "key":"param"}',target:'data:json,dma_Result',action:'/sample/bean/tempBeanSave',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveTemp_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
  $c.win.setEnterKeyEvent($p, grp_search, scwin.btn_search_onclick);
  $c.util.setGridViewDelCheckBox($p, [grd_customer]);
};

/**
 * @event
 * @name btn_search_onclick
 * @description 검색 버튼 클릭, 유효성 검사 후 검색진행
 */
scwin.btn_search_onclick = function () {
  if ($c.data.validateGroup($p, grp_search) === false) {
    return;
  } else {
    $c.sbm.execute($p, sbm_selectTemp);
  }
};

/**
 * @event
 * @name btn_add_onclick
 * @description GridView에 행 추가를 한다
 */
scwin.btn_add_onclick = function () {
  const rowIndex = dlt_temp.insertRow();
};

/**
 * @event
 * @name btn_save_onclick
 * @description GridView의 추가, 수정, 삭제된 데이터를 저장한다.
 */
scwin.btn_save_onclick = function () {
  const cnt = dlt_temp.getModifiedIndex().length;
  $c.win.confirm($p, cnt + "건의 데이터를 반영하시겠습니까", function (res) {
    if (res.clickValue === true) {
      $c.sbm.execute($p, sbm_saveTemp);
    }
  });
};

/**
 * @event
 * @name sbm_saveTemp_submitdone
 * @description 저장을 위한 submission의 callback 함수
 * @param {Object} e Submission객체
 */
scwin.sbm_saveTemp_submitdone = function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    $c.sbm.execute($p, sbm_selectTemp);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_cont',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'767',class:'w2tb tbl',id:'grp_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_custNm',ref:'data:dma_search.custNm',style:'width:150px;',class:'',mandatory:'true',placeholder:'예시 : test',refSync:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w2selectbox',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'',style:'width:120px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'6월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'7월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'8월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'9월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'11월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'12월'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',renderDiv:'true',renderType:'native',rightAlign:'false',style:'width: 120px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  row_add',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.btn_add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'800',class:'gvw',dataList:'data:dlt_temp',editModeEvent:'onclick','ev:oncellclick':'scwin.grd_customer_oncellclick',fixedColumnWithHidden:'true',id:'grd_customer',keyMoveEditMode:'true',rowNumVisible:'true',rowStatusVisible:'true',scrollByColumn:'false',style:'height:296px;',useShiftKey:'true',rowNumHeaderValue:'No',rowStatusHeaderValue:'상태','ev:onviewchange':'',keepDefaultColumnWidth:'true',rowNumWidth:'50',rowStatusWidth:''},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'선택',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column11',value:'id',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'성명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'전화번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column3',value:'이메일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column1',value:'소속',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'chk',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'70',inputType:'text',style:'',id:'id',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',style:'',id:'custNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',style:'',id:'custTelNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',style:'',id:'custEmail',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',style:'',id:'prdtCmpnyNm',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]}]})