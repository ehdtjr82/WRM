/*amd /ui/HM/HM003S02.xml 7625 2da106ae30a3573095fcada4b6f9768174864b1aab51248f40624e8400b3b078 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_memberFamily',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SEQ',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'RELATIONSHIP',name:'관계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FAMILY_NM',name:'가족성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'RESIDENT_NO',name:'주민번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOB',name:'직업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_CORESIDENCE',name:'동거여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'IS_SUPPORT',name:'부양여부',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:aliasDataMap',A:{id:'adm_memberBasic',scope:'../dma_memberBasic',studioSrc:'/ui/HM/HM003M01.xml'}}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMemberFamilyList',ref:'',target:'data:json,{"id":"dlt_memberFamily","key":"data"}',action:'/member/selectMemberFamily',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMemberFamily',ref:'data:json,{"id":"dlt_memberFamily","action":"modified","key":"family"}',target:'',action:'/member/saveMemberFamily',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMemberFamily_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  const codeOptions = [{
    code: "00025",
    compID: "grd_memberFamily:RELATIONSHIP"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.util.setGridViewDelCheckBox($p, grd_memberFamily);
  $c.data.setChangeCheckedDc($p, dlt_memberFamily);
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
  $c.sbm.execute($p, sbm_getMemberFamilyList, param);
};

/** 
 * 가족 정보를 추가한다.
 */
scwin.btn_insertFamily_onclick = function () {
  const idx = $c.data.insertRow($p, grd_memberFamily);
  dlt_memberFamily.setCellData(idx, "EMP_CD", adm_memberBasic.get("EMP_CD"));
  grd_memberFamily.setFocusedCell(idx, "RELATIONSHIP");
};
scwin.btn_saveFamily_onclick = async function () {
  const familyInfo = [{
    id: "RELATIONSHIP",
    mandatory: true
  }, {
    id: "FAMILY_NM",
    mandatory: true
  }, {
    id: "RESIDENT_NO",
    mandatory: true,
    minLength: 13
  }];
  if (dlt_memberFamily.getModifiedIndex().length > 0) {
    if ($c.data.validateGridView($p, grd_memberFamily, familyInfo)) {
      if (await $c.win.confirm($p, $c.data.getMessage($p, "MSG_CM_00042"))) {
        scwin.saveMemberFamilyConfirmCallback();
      }
    }
  } else {
    $c.win.alert($p, $c.data.getMessage($p, "MSG_CM_00045"));
  }
};
scwin.saveMemberFamilyConfirmCallback = function () {
  $c.sbm.execute($p, sbm_saveMemberFamily);
};
scwin.btn_cancelFamily_onclick = function () {
  $c.data.undoGridView($p, grd_memberFamily);
};
scwin.sbm_saveMemberFamily_submitdone = function (e) {
  $c.sbm.execute($p, sbm_getMemberFamilyList);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'group7',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_insertFamily',style:'',type:'button','ev:onclick':'scwin.btn_insertFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveFamily',style:'',type:'button','ev:onclick':'scwin.btn_saveFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_cancelFamily',style:'',type:'button','ev:onclick':'scwin.btn_cancelFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{sortEvent:'ondblclick',hideHeader:'',rowStatusWidth:'',useShiftKey:'false',keepDefaultColumnWidth:'true',scrollByColumn:'false',sortable:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',fixedColumnWithHidden:'true',dataList:'data:dlt_memberFamily',keyMoveEditMode:'true',enterKeyMove:'',style:'height: 160px;',autoFit:'allColumn',id:'grd_memberFamily',class:'gvw'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',checkboxLabelColumn:'',id:'chk',blockSelect:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'관계',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',style:'',id:'column9',value:'가족성명',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'142',inputType:'text',style:'',id:'column7',value:'주민번호',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'148',inputType:'text',style:'',id:'column5',value:'직업',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'동거여부',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'부양여부',blockSelect:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'chk',blockSelect:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'RELATIONSHIP',class:'req',blockSelect:'false'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'95',inputType:'text',style:'',id:'FAMILY_NM',class:'req',blockSelect:'false'}},{T:1,N:'w2:column',A:{maxlength:'13',width:'142',displayFormat:'######-#######',inputType:'text',style:'',id:'RESIDENT_NO',class:'req',blockSelect:'false',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'148',inputType:'text',style:'',id:'JOB',value:'',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'IS_CORESIDENCE',blockSelect:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'IS_SUPPORT',blockSelect:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]}]}]}]})