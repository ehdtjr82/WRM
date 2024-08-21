/*amd /ui/HM/HM004M01.xml 7182 56bfcb462ff94b0e113347e65cdd10a8df5506b1ede2f04bafe3d9aec72afa91 */
define({E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_schedule',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'SCHE_ID',name:'식별자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_START',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_END',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MEMO',name:'일정내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_THEME',name:'색상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_TITLE',name:'일정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_CODE',name:'일정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_STIME',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCHE_FTIME',name:'마감시간',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_select'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SCHE_ID',name:'식별자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_START',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_END',name:'마감일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MEMO',name:'일정내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_THEME',name:'색상',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_TITLE',name:'일정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_CODE',name:'일정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_STIME',name:'시작시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHE_FTIME',name:'마감시간',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_schedule',ref:'data:json,dma_select',target:'data:json,dlt_schedule',action:'/schedule',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_schedule_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,dlt_schedule',target:'',action:'/schedule/insert',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.popUp,scwin.readSchedule'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @method
 * @name onpageload
 * @description 일정 관리 기능 창이 로드된 후의 동작 설정
 * @hidden N
 * @exception 
 */
scwin.onpageload = function () {
  // 모든 일정 조회
  $c.sbm.execute($p, sbm_schedule);
};

/**
 * @event
 * @name cal_onclick
 * @description ScheduleCalendar를 클릭하면 동작하는 이벤트
 * @param {Object} retObj 클릭한 일정의 정보
 * @hidden N
 * @exception 
 */
scwin.cal_onclick = function (retObj) {
  //초기화
  dma_select.initRowStatus();

  // 팝업 실행
  scwin.popUp(retObj);
};

/**
 * @event
 * @name cal_onbeforeaddschedule
 * @description 사용자 정의 팝업창을 위해 prompt를 억제하는 이벤트
 * @param {Object} retObj 클릭한 일정의 정보
 * @hidden N
 * @exception 
 */
scwin.cal_onbeforeaddschedule = function (retObj) {
  return false;
};

/**
 * @method
 * @name popUp
 * @description 일정과 관련된 팝업창을 불러온다. id값의 유무를 통해 기존 스케쥴 여부를 확인해 일정 추가, 기존 일정 수정창을 팝업으로 부른다.
 * @param {Object} retObj 클릭한 일정의 정보
 * @hidden N
 * @exception 
 */
scwin.popUp = async function (retObj) {
  // 기존 일정이 있을 경우 상세 조회 페이지로 이동
  if (retObj.id != null || retObj.title != null) {
    // 클릭된 정보를 검색해 행 데이터 모두를 가져온다
    const selEvent = dlt_schedule.getMatchedJSON("SCHE_ID", retObj.id);
    const sel = {
      "SCHE_ID": selEvent[0].SCHE_ID,
      "SCHE_TITLE": selEvent[0].SCHE_TITLE,
      "SCHE_START": selEvent[0].SCHE_START,
      "SCHE_END": selEvent[0].SCHE_END,
      "SCHE_THEME": selEvent[0].SCHE_THEME,
      "SCHE_STIME": selEvent[0].SCHE_STIME,
      "SCHE_FTIME": selEvent[0].SCHE_FTIME,
      "SCHE_CODE": selEvent[0].SCHE_CODE,
      "MEMO": selEvent[0].MEMO
    };

    // 검색된 데이터를 DataMap에 바인딩
    dma_select.setJSON(sel);
    const row = dma_select.getJSON();
    const data = {
      data: row,
      callbackFn: "scwin.readSchedule"
    };
    const url = "/ui/HM/HM004P02.xml";
    const opt = {
      id: "select",
      popupName: "상세 일정 조회",
      width: 450,
      height: 480,
      modal: true,
      type: "wframePopup"
    };
    await $c.win.openPopup($p, url, opt, data);

    // 등록된 일정이 아닐 경우 일정 등록 페이지 팝업
  } else {
    // 클릭으로 선택된 정보들을 DataMap에 담는다.
    const start = $c.date.formatDateTime($p, retObj.start);
    const end = $c.date.formatDateTime($p, retObj.end);
    const selInfo = {
      "SCHE_START": start,
      "SCHE_END": end
    };
    dma_select.setJSON(selInfo);
    const data = {
      data: dma_select.getJSON(),
      callbackFn: "scwin.readSchedule"
    };
    const url = "/ui/HM/HM004P01.xml";
    const opt = {
      id: "insert",
      popupName: "일정 등록",
      width: 450,
      height: 480,
      modal: true,
      type: "wframePopup"
    };
    await $c.win.openPopup($p, url, opt, data);
  }
};

// 일정 조회 함수
/**
 * @method
 * @name readSchedule
 * @description 일정을 조회를 한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.readSchedule = function () {
  $c.sbm.execute($p, sbm_schedule);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'sub_contents flex_cont'},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',src:'../../cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'일정 내역',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'rt'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'calendarbox'},E:[{T:1,N:'w2:scheduleCalendar',A:{selectable:'true',ioFormat:'yyyyMMdd',id:'cal',lang:'',defaultDate:'',editable:'true',headerRightBtn:'true',scheduleClickPopup:'false',weekends:'true',titleColumn:'SCHE_TITLE',startColumn:'SCHE_START',dataList:'data:dlt_schedule',style:'width: 100%;height: 550px;',headerLeftBtn:'true',idColumn:'SCHE_ID',headerTitle:'',version:'6.1.11',endColumn:'SCHE_END',themeColumn:'SCHE_THEME',eventOrderColumn:'SCHE_STIME','ev:onclick':'scwin.cal_onclick','ev:onbeforeaddschedule':'scwin.cal_onbeforeaddschedule',includeScheduleEnd:'true',weekStartsOn:'1',timeZone:'Asia/Seoul',timeFormat:'hh:mm'}}]}]}]}]}]})