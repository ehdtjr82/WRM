/*amd /ui/SP/LoginSessionTimer/TimerPopup.xml 3543 1a8c686bf37cb5d6ec6c3437b39c0930e7990cac5db1ad88448247c1d2d27ecb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'파일 설명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'파일 테스트 방법',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\\n<pre class="textNor" style="">\\n<div class="etcbox">로그인 시간 제한 체크 기능 테스트 샘플이다.\\n단위 개발자가 단위 화면 관리를 위한 용도로 사용한다.\\n</div>\\n<div class="etc_tit">정적 submission 생성 </div>\\n  - 정적 submission을 등록하여 사용한다.\\n  예) &lt;xf:submission id="sbm_selectTemp" ....&gt;&lt;/xf:submission&gt;\\n</pre>\\n\\t\\t\\t\\t\\t\\t'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etc_tit">1. 과정</div>\n- 아래와 같이 등록한 submission을 실행한다.\n  com.sbm.execute(sbm_selectTemp);\n</div>\n<div class="etc_tit">2. 결과</div>\n- 정적 submission을 통해 실행된 결과가 gridView에 표현된다.\n</pre>\n						'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:common',A:{src:'../../ui/SP/LoginSessionTimer/setIdleInterval.xml',id:'timer'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event
 * @name onpageload
 * @description 초기화 함수
 */
scwin.onpageload = async function () {
  let _opt = {
    showComp: tbx_time.getID(),
    _msg: {
      title: "자동로그아웃 안내",
      content: "고객님의 안전한 거래를 위해 $0분동안 이용이 없어 자동로그아웃합니다.\n 로그인 시간을 연장하시겠습니까?"
    },
    _time: {
      unit: 0,
      // 0: min[default], 1:second
      type: 0,
      // 0: once, 1: interval
      max: 1,
      // 1분 후에 자동로그아웃 안내 메시지가 출력
      first: 1,
      chkInterval: 0.5 // 서버의 남아있는 세션시간을 확인하는 interval time 			
    }
  };
  _opt._msg.content = scwin.replaceString(_opt._msg.content, _opt._time.max);
  await timer.setIdleTime.svr($p, 'create', _opt);
};

/**
 * @event
 * @name btn_continue_onclick
 * @description reset Timer버튼을 누른 경우 연장한다.
 */
scwin.btn_continue_onclick = function (e) {
  if (timer.setIdleTime.worker) {
    console.log('연장!!');
    timer.setIdleTime.svr($p, 'continue');
  }
};

/**
 * @method
 * @name replaceString
 * @description 문자열을 받아 재배치한다.
 */
scwin.replaceString = function (str, ...values) {
  return str.replace(/\$(\d+)/g, (match, index) => values[index]);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'w2:textbox',A:{style:'height: 40px;',id:'tbx_time',label:''}},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_continue_onclick',style:'',id:'btn_continue',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'reset Timer'}]}]}]}]}]}]}]}]})