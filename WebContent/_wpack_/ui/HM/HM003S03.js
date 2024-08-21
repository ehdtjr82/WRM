/*amd /ui/HM/HM003S03.xml 7524 df4ed1084eaf1773335fec17e791680bdb6a8ff375794451f3fff3e4b036b500 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_memberProject',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SEQ',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PROJECT_NM',name:'프로젝트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROJECT_DESC',name:'프로젝트 개요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'START_DATE',name:'참여시작기간',dataType:'date'}},{T:1,N:'w2:column',A:{id:'END_DATE',name:'참여종료기간',dataType:'date'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORDERING_ORG',name:'발주처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COMPANY',name:'소속사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataMap',A:{id:'adm_memberBasic',scope:'../dma_memberBasic',studioSrc:'/ui/HM/HM003M01.xml'}}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMemberProjectList',ref:'',target:'data:json,{"id":"dlt_memberProject","key":"data"}',action:'/member/selectMemberProject',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMemberProject',ref:'data:json,{"id":"dlt_memberProject","action":"modified","key":"project"}',target:'',action:'/member/saveMemberProject',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMemberProject_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  $c.util.setGridViewDelCheckBox($p, grd_memberProject);
  $c.data.setChangeCheckedDc($p, dlt_memberProject);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
  const param = {
    "dma_memberBasic": {
      "EMP_CD": adm_memberBasic.get("EMP_CD")
    }
  };
  $c.sbm.execute($p, sbm_getMemberProjectList, param);
};

/**
 * 프로젝트 정보를 추가한다.
 */
scwin.btn_insertProject_onclick = function () {
  const idx = $c.data.insertRow($p, grd_memberProject);
  dlt_memberProject.setCellData(idx, "EMP_CD", adm_memberBasic.get("EMP_CD"));
  grd_memberProject.setFocusedCell(idx, "PROJECT_NM");
};
scwin.btn_saveProject_onclick = async function () {
  const projectInfo = [{
    id: "PROJECT_NM",
    mandatory: true
  }, {
    id: "START_DATE",
    mandatory: true
  }, {
    id: "END_DATE",
    mandatory: true
  }];
  if (dlt_memberProject.getModifiedIndex().length > 0) {
    if ($c.data.validateGridView($p, grd_memberProject, projectInfo)) {
      if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00042"))) {
        scwin.saveMemberProjectConfirmCallback();
      }
    }
  } else {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00045"));
  }
};
scwin.saveMemberProjectConfirmCallback = function () {
  $c.sbm.execute($p, sbm_saveMemberProject);
};
scwin.btn_cancelProject_onclick = function () {
  $c.data.undoGridView($p, grd_memberProject);
};
scwin.sbm_saveMemberProject_submitdone = function (e) {
  $c.sbm.execute($p, sbm_getMemberProjectList);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'group8',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  row_add',id:'btn_insertProject',style:'',type:'button','ev:onclick':'scwin.btn_insertProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveProject',style:'',type:'button','ev:onclick':'scwin.btn_saveProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_cancelProject',style:'',type:'button','ev:onclick':'scwin.btn_cancelProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{sortEvent:'ondblclick',rowStatusWidth:'',useShiftKey:'false',keepDefaultColumnWidth:'true',scrollByColumn:'false',sortable:'true',rowStatusHeaderValue:'상태',adaptive:'crosstab',rowStatusVisible:'true',fixedColumnWithHidden:'true',dataList:'dlt_memberProject',keyMoveEditMode:'true',style:'height: 160px;',autoFit:'allColumn',id:'grd_memberProject',class:'gvw'},E:[{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',checkboxLabelColumn:'',id:'chk',blockSelect:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'172',inputType:'text',style:'',id:'column29',value:'프로젝트명',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'183',inputType:'text',style:'',id:'column27',value:'프로젝트 개요',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'참여시작기간',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'참여종료기간',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'107',inputType:'text',style:'',id:'column21',value:'담당업무',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',style:'',id:'column19',value:'발주처',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',style:'',id:'column17',value:'소속사',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'134',inputType:'text',style:'',id:'column15',value:'비고',blockSelect:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'chk',blockSelect:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'172',inputType:'text',style:'',id:'PROJECT_NM',class:'req',value:'',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'183',inputType:'text',style:'',id:'PROJECT_DESC',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'START_DATE',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'105',inputType:'calendar',style:'',id:'END_DATE',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'107',inputType:'text',style:'',id:'ASSIGNED_TASK',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',style:'',id:'ORDERING_ORG',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'102',inputType:'text',style:'',id:'COMPANY',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'134',inputType:'text',style:'',id:'NOTE',blockSelect:'false'}}]}]}]}]}]}]}]})