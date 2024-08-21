/*amd /ui/SP/Promise/promise.xml 28685 71611229dd501c6516ba0334c2e17f843212254730c232276b04b9de4e2a7200 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 Layer Alert, Confirm, Popup에서 Promise 기술을 적용하는 방법을 제공한다.\n</div>\n<div class="etc_tit">1. ALERT</div>\n  Promise 기술을 적용해서 Layer Alert 창을 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">2. CONFIRM</div>\n  Promise 기술을 적용해서 Layer Confirm 창을 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">3. 반복 ALERT</div>\n  Promise 기술을 적용해서 반복문에서 Layer Alert 창을 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">4. 반복 CONFIRM</div>\n  Promise 기술을 적용해서 반복문에서 Layer Confirm 창을 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">5. 팝업</div>\n  Promise 기술을 적용해서 Layer 팝업창 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">6. Submission</div>\n  Promise 기술을 적용해서 Submission을 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">7. 반복 정적 Submission</div>\n  Promise 기술을 적용해서 정적으로 생성한 Submission을 여러 개 반복해서 실행하는 방법을 제공한다.\n</div>\n<div class="etc_tit">8. 반복 동적 Submission</div>\n  Promise 기술을 적용해서 동적으로 생성한 Submission을 여러 개 반복해서 실행하는 방법을 제공한다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n  1.1. ALERT\n    [실행] 버튼을 클릭한다.\n\n  1.2. CONFIRM\n    [실행] 버튼을 클릭한다.\n\n  1.3. 반복 ALERT\n    [실행] 버튼을 클릭한다.\n\n  1.4. 반복 CONFIRM\n    [실행] 버튼을 클릭한다.\n\n  1.5. 팝업\n    [실행] 버튼을 클릭한다.\n\n  1.6. Submission\n    [실행] 버튼을 클릭한다.\n\n  1.7. 반복 정적 Submission\n    [실행] 버튼을 클릭한다.\n\n  1.8. 반복 동적 Submission\n    [실행] 버튼을 클릭한다.\n\n<div class="etc_tit">2. 결과</div>\n  2.1. ALERT\n    Alert 창이 순서대로 실행된다.\n\n  2.2. CONFIRM\n   Confirm 창이 순서대로 실행된다.\n\n  2.3. 반복 ALERT\n   반복문에서 Alert 창이 순서대로 실행된다.\n\n  2.4. 반복 CONFIRM\n   반복문에서 Confirm 창이 순서대로 실행된다.\n\n  2.5. 팝업\n   팝업 창이 순서대로 실행된다.\n\n  2.6. Submission\n   Submission이 순서대로 실행된다.\n\n  2.7. 반복 정적 Submission\n   정적으로 생성된 Submission이 반복해서 실행된다.\n\n  2.8. 반복 동적 Submission\n   동적으로 생성된 Submission이 반복해서 실행된다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{id:'dlt_sampleCode',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'case1-1',name:'case1-1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case1-2',name:'case1-2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case2-1',name:'case2-1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case2-2',name:'case2-2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case3-1',name:'case3-1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case3-2',name:'case3-2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case4-1',name:'case4-1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case4-2',name:'case4-2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case5',name:'case5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case6',name:'case6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case7',name:'case7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'case8',name:'case8',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'case1-1',E:[{T:4,cdata:'alert("Step - 1");\nconsole.log("Step - 1");\n\nalert("Step - 2");\nconsole.log("Step - 2");\n\nalert("Step - 3");\nconsole.log("Step - 3");'}]},{T:1,N:'case1-2',E:[{T:4,cdata:'let promise = $c.win.alert("Step - 1");\npromise = promise.then(function() { console.log("Step - 1"); })\n			 .then(function() { return $c.win.alert("Step - 2"); })\n			 .then(function() { console.log("Step - 2"); })\n			 .then(function() { return $c.win.alert("Step - 3"); })\n			 .then(function() { console.log("Step - 3"); });'}]},{T:1,N:'case2-1',E:[{T:4,cdata:'let rtn = confirm("확인창");\nif (rtn) {\n	console.log("1차 확인 선택");\n	rtn = confirm("확인 선택 후 2차확인");\n} else {\n	console.log("1차 취소 선택");\n	rtn = confirm("취소 선택 후 2차확인");\n}\n\nif (rtn) {\n	console.log("2차 확인 선택");\n} else {\n	console.log("2차 취소 선택");\n}'}]},{T:1,N:'case2-2',E:[{T:4,cdata:'let promise = $c.win.confirm("확인창");\npromise = promise.then(function(rtn) {\n	if (rtn) {\n		console.log("1차 확인 선택");\n		return $c.win.confirm("확인 선택 후 1차확인");\n	} else {\n		console.log("1차 취소 선택");\n		return $c.win.confirm("취소 선택 후 1차확인");\n	}\n});\n\npromise = promise.then(function(rtn) {\n	if (rtn) {\n		console.log("2차 확인 선택");\n	} else {\n		console.log("2차 취소 선택");\n	}\n});'}]},{T:1,N:'case3-1',E:[{T:4,cdata:'scwin.idx = 0; // 반복횟수\nfor (let i = 0; i < 5; i++) {\n	scwin.idx++;\n	console.log(scwin.idx + " 반복횟수");\n	alert(scwin.idx + " 반복횟수");\n}\n\nconsole.log("최종확인");\nalert("최종확인");'}]},{T:1,N:'case3-2',E:[{T:4,cdata:'let promise = Promise.resolve();\nscwin.idx = 0; // 반복횟수\n\nfor (let i = 0; i < 5; i++) {\n	promise = promise.then(function(){\n		scwin.idx++\n		console.log(scwin.idx + " 반복횟수");\n		return $c.win.alert(scwin.idx + " 반복횟수");\n	}); \n}\n\npromise.then(function(){\n	console.log("최종확인");\n	$c.win.alert("최종확인");\n});'}]},{T:1,N:'case4-1',E:[{T:4,cdata:'const arr = [];\nlet rtn;\nscwin.idx = 0;\n\nfor (let i = 0; i < 3; i++) {\n	rtn = confirm(scwin.idx+1 +"확인체크");\n	if (rtn) { \n		arr.push(scwin.idx+1 + "확인");\n	} else { \n		arr.push(scwin.idx+1 +"취소");\n	}\n	console.log(scwin.idx + " 반복횟수");\n	scwin.idx++\n}\n\nalert(arr.join(", ") +"선택함");'}]},{T:1,N:'case4-2',E:[{T:4,cdata:'let promise = Promise.resolve();\nconst arr = [];\nscwin.idx = 0;\n\nfor (let i = 0; i < 3; i++) {\n	promise = promise.then(function(){return $c.win.confirm(scwin.idx+1 +"확인체크");}); \n	promise = promise.then(function(rtn){if(rtn) { arr.push(scwin.idx+1 + "확인");} else { arr.push(scwin.idx+1 +"취소");}});\n	promise = promise.then(function() {\n		console.log(scwin.idx + " 반복횟수");\n		scwin.idx++\n	});\n}\n\npromise.then(function(){\n	$c.win.alert(arr.join(", ") +"선택함");\n});'}]},{T:1,N:'case5',E:[{T:4,cdata:'let data = { message : "샘플 팝업(1)을 오픈합니다." };\nlet optsions = { id : "SamplePopup1",\n				popupName : "샘플 팝업(1)",\n				modal : true,\n				width : 560, height: 400 };\nlet promise = $c.win.openPopup("/ui/SP/Promise/messageBox1.xml", optsions, data);\n\npromise = promise.then(function(rtn) {\n	if (rtn) {\n		console.log( "샘플 팝업(1) 리턴 파라미터 : " + rtn);\n	} else {\n		console.log( "샘플 팝업(1) 리턴");\n	}\n	\n	data = { message : "샘플 팝업(2)을 오픈합니다." };\n	optsions = { id : "SamplePopup2",\n				popupName : "샘플 팝업(2)",\n				modal : true,\n				width : 560, height: 400 };\n	return $c.win.openPopup("/ui/SP/Promise/messageBox2.xml", optsions, data);\n});\n\npromise = promise.then(function(rtn) {\n	if (rtn) {\n		console.log( "샘플 팝업(2) 리턴 파라미터 : " + $c.str.serialize(rtn));\n	} else {\n		console.log( "샘플 팝업(2) 리턴");\n	}\n});'}]},{T:1,N:'case6',E:[{T:4,cdata:'let promise = $c.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: "00020" } });\npromise = promise.then(function (rtn) {\n	console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize(rtn.responseJSON.dlt_commonCode_00020));\n	return $c.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: "00001" } });\n}).then(function (rtn) {\n	console.log("[sbm_commonCode] 통신 정상 완료 : " + $c.str.serialize(rtn.responseJSON.dlt_commonCode_00001));\n}).catch(function (rtn) {\n	console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize(rtn));\n});'}]},{T:1,N:'case7',E:[{T:4,cdata:'let promise = Promise.resolve();\nconst arr = [];\nscwin.idx = 0;\n\nfor (let i = 0; i < 3; i++) {\n	const codeGroup = "0000" + (i + 1);\n	promise = promise.then(function () { return $c.sbm.execute(sbm_commonCode, { dma_commonCode: {GRP_CD: codeGroup } }); });\n	promise = promise.then(function (rtn) {\n		console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize(rtn.responseJSON["dlt_commonCode_" + codeGroup]));\n		console.log(scwin.idx + " 반복횟수");\n		scwin.idx++;\n	});\n}\n\npromise = promise.catch(function (rtn) {\n	console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize(rtn));\n});'}]},{T:1,N:'case8',E:[{T:4,cdata:'let promise = Promise.resolve();\nconst arr = [];\nscwin.idx = 0;\nconst searchCodeGrpOption = { id : "sbm_commonGroup", action : "/common/selectCodeList"};\n\nfor (let i = 0; i < 3; i++) {\n	const codeGroup = "0000" + (i + 1);\n	promise = promise.then(function () { return $c.sbm.executeDynamic(searchCodeGrpOption, { dma_commonCode: {GRP_CD: codeGroup } }); });\n	promise = promise.then(function (rtn) {\n		console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize(rtn.responseJSON["dlt_commonCode_" + codeGroup]));\n		console.log(scwin.idx + " 반복횟수");\n		scwin.idx++;\n	});\n}\n\npromise = promise.catch(function (rtn) {\n	console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize(rtn));\n});'}]}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_commonCode',ref:'',target:'data:json,dlt_commonCode',action:'/common/selectCodeList',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commonGroup',ref:'data:json,dma_search',target:'data:json,dlt_commonGrp',action:'/common/selectCommonGroup',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 초기 스크립트 수행 함수 정의
 * 
 * @event
 * @name onpageload
 * @description 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {};

/**
 * @event
 * @name btn_trigger1_onclick
 * @description Promise가 적용된 alert창을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger1_onclick = function (e) {
  let promise = $c.win.alert($p, "Step - 1");
  promise = promise.then(function () {
    console.log("Step - 1");
  }).then(function () {
    return $c.win.alert($p, "Step - 2");
  }).then(function () {
    console.log("Step - 2");
  }).then(function () {
    return $c.win.alert($p, "Step - 3");
  }).then(function () {
    console.log("Step - 3");
  });
};

/**
 * @event
 * @name btn_trigger2_onclick
 * @description Promise가 적용된 confirm창을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger2_onclick = function (e) {
  let promise = $c.win.confirm($p, "확인창");
  promise = promise.then(function (rtn) {
    if (rtn) {
      console.log("1차 확인 선택");
      return $c.win.confirm($p, "확인 선택 후 1차확인");
    } else {
      console.log("1차 취소 선택");
      return $c.win.confirm($p, "취소 선택 후 1차확인");
    }
  });
  promise = promise.then(function (rtn) {
    if (rtn) {
      console.log("2차 확인 선택");
    } else {
      console.log("2차 취소 선택");
    }
  });
};

/**
 * @event
 * @name btn_trigger3_onclick
 * @description Promise가 적용된 반복 alert창을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger3_onclick = function (e) {
  let promise = Promise.resolve();
  scwin.idx = 0; // 반복횟수

  for (let i = 0; i < 5; i++) {
    promise = promise.then(function () {
      scwin.idx++;
      console.log(scwin.idx + " 반복횟수");
      return $c.win.alert($p, scwin.idx + " 반복횟수");
    });
  }
  promise.then(function () {
    console.log("최종확인");
    $c.win.alert($p, "최종확인");
  });
};

/**
 * @event
 * @name btn_trigger4_onclick
 * @description Promise가 적용된 반복 confirm창을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger4_onclick = function (e) {
  let promise = Promise.resolve();
  const arr = [];
  scwin.idx = 0;
  for (let i = 0; i < 3; i++) {
    promise = promise.then(function () {
      return $c.win.confirm($p, scwin.idx + 1 + "확인체크");
    });
    promise = promise.then(function (rtn) {
      if (rtn) {
        arr.push(scwin.idx + 1 + "확인");
      } else {
        arr.push(scwin.idx + 1 + "취소");
      }
    });
    promise = promise.then(function () {
      console.log(scwin.idx + " 반복횟수");
      scwin.idx++;
    });
  }
  promise.then(function () {
    $c.win.alert($p, arr.join(", ") + "선택함");
  });
};

/**
 * @event
 * @name btn_trigger5_onclick
 * @description Promise가 적용된 팝업창을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger5_onclick = function (e) {
  let data = {
    message: "샘플 팝업(1)을 오픈합니다."
  };
  let optsions = {
    id: "SamplePopup1",
    popupName: "샘플 팝업(1)",
    modal: true,
    width: 560,
    height: 400
  };
  let promise = $c.win.openPopup($p, "/ui/SP/Promise/messageBox1.xml", optsions, data);
  promise = promise.then(function (rtn) {
    if (rtn) {
      console.log("샘플 팝업(1) 리턴 파라미터 : " + rtn);
    } else {
      console.log("샘플 팝업(1) 리턴");
    }
    data = {
      message: "샘플 팝업(2)을 오픈합니다."
    };
    optsions = {
      id: "SamplePopup2",
      popupName: "샘플 팝업(2)",
      modal: true,
      width: 560,
      height: 400
    };
    return $c.win.openPopup($p, "/ui/SP/Promise/messageBox2.xml", optsions, data);
  });
  promise = promise.then(function (rtn) {
    if (rtn) {
      console.log("샘플 팝업(2) 리턴 파라미터 : " + $c.str.serialize($p, rtn));
    } else {
      console.log("샘플 팝업(2) 리턴");
    }
  });
};

/**
 * @event
 * @name btn_trigger6_onclick
 * @description Promise가 적용된 Submission을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger6_onclick = function (e) {
  let promise = $c.sbm.execute($p, sbm_commonCode, {
    dma_commonCode: {
      GRP_CD: "00020"
    }
  });
  promise = promise.then(function (rtn) {
    console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize($p, rtn.responseJSON.dlt_commonCode_00020));
    return $c.sbm.execute($p, sbm_commonCode, {
      dma_commonCode: {
        GRP_CD: "00001"
      }
    });
  }).then(function (rtn) {
    console.log("[sbm_commonCode] 통신 정상 완료 : " + $c.str.serialize($p, rtn.responseJSON.dlt_commonCode_00001));
  }).catch(function (rtn) {
    console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize($p, rtn));
  });
};

/**
 * @event
 * @name btn_trigger7_onclick
 * @description Promise가 적용된 반복 정적 Submission을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger7_onclick = function (e) {
  let promise = Promise.resolve();
  const arr = [];
  scwin.idx = 0;
  for (let i = 0; i < 3; i++) {
    const codeGroup = "0000" + (i + 1);
    promise = promise.then(function () {
      return $c.sbm.execute($p, sbm_commonCode, {
        dma_commonCode: {
          GRP_CD: codeGroup
        }
      });
    });
    promise = promise.then(function (rtn) {
      console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize($p, rtn.responseJSON["dlt_commonCode_" + codeGroup]));
      console.log(scwin.idx + " 반복횟수");
      scwin.idx++;
    });
  }
  promise = promise.catch(function (rtn) {
    console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize($p, rtn));
  });
};

/**
 * @event
 * @name btn_trigger8_onclick
 * @description Promise가 적용된 반복 동적 Submission을 호출한다.
 * @param {Object} e 이벤트정보객체
 */
scwin.btn_trigger8_onclick = function (e) {
  let promise = Promise.resolve();
  const arr = [];
  scwin.idx = 0;
  const searchCodeGrpOption = {
    id: "sbm_commonGroup",
    action: "/common/selectCodeList"
  };
  for (let i = 0; i < 3; i++) {
    const codeGroup = "0000" + (i + 1);
    promise = promise.then(function () {
      return $c.sbm.executeDynamic($p, searchCodeGrpOption, {
        dma_commonCode: {
          GRP_CD: codeGroup
        }
      });
    });
    promise = promise.then(function (rtn) {
      console.log("[sbm_commonGroup] 통신 정상 완료 : " + $c.str.serialize($p, rtn.responseJSON["dlt_commonCode_" + codeGroup]));
      console.log(scwin.idx + " 반복횟수");
      scwin.idx++;
    });
  }
  promise = promise.catch(function (rtn) {
    console.error("[sbm_commonGroup] 통신 에러 발생 : " + $c.str.serialize($p, rtn));
  });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'1. ALERT',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_search',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_memberBasicDetailTop',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:141px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Native&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT11',ref:'data:dlt_sampleCode.case1-1',style:'width:100%;height:170px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT12',ref:'data:dlt_sampleCode.case1-2',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'2. CONFIRM',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group1',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_group2',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:141px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Native&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT21',ref:'data:dlt_sampleCode.case2-1',style:'width:100%;height:170px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT22',ref:'data:dlt_sampleCode.case2-2',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'3. 반복 ALERT',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group3',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger3',style:'',type:'button','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_group4',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:141px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Native&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT31',ref:'data:dlt_sampleCode.case3-1',style:'width:100%;height:170px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT32',ref:'data:dlt_sampleCode.case3-2',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'4. 반복 CONFIRM',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group5',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger4',style:'',type:'button','ev:onclick':'scwin.btn_trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_group6',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:141px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Native&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT41',ref:'data:dlt_sampleCode.case4-1',style:'width:100%;height:170px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT42',ref:'data:dlt_sampleCode.case4-2',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'5. 팝업',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group7',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger5',style:'',type:'button','ev:onclick':'scwin.btn_trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_group8',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT50',ref:'data:dlt_sampleCode.case5',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6. Submission',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group9',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger6',style:'',type:'button','ev:onclick':'scwin.btn_trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'grp_group10',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT60',ref:'data:dlt_sampleCode.case6',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'7. 반복 정적 Submission',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'group1',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger7',style:'',type:'button','ev:onclick':'scwin.btn_trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',class:'w2tb tbl',id:'group2',style:'width:100%;',tagname:'table',adaptiveThreshold:'767'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT70',ref:'data:dlt_sampleCode.case7',style:'width:100%;height:170px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'8. 반복 동적 Submission',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'grp_group13',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_trigger8',style:'',type:'button','ev:onclick':'scwin.btn_trigger8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'767',class:'w2tb tbl',id:'grp_group14',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Promise&nbsp;코딩방식'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_CONTENT80',ref:'data:dlt_sampleCode.case8',style:'width:100%;height:170px;'}}]}]}]}]}]}]}]}]})