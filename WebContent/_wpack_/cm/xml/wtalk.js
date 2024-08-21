/*amd /cm/xml/wtalk.xml 8358 cc7a0c83b5426bd1468ab7df9b8a7c538cd61010a74d0945ef584069ff52610e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {
  const path = ["/cm/js/showdown.min.js"];
  const opt = {
    "noCache": false
  };
  await $p.jsAsync(path, opt);
};

/**
 * @event
 * @name btn_chat_onclick
 * @description W-talk 버튼 클릭 시 이벤트 정의
 */
scwin.btn_chat_onclick = async function (e) {
  btn_chat.setDisabled(true);

  // 유효성 검사 실시
  if (!$c.data.validateGroup($p, grp_chatIn)) return;
  const currentTime = $c.date.getServerDateTime($p, "HH:mm");
  scwin.len = gen_chat.getLength();
  gen_chat.insertChild(scwin.len);
  let user = gen_chat.getChild(scwin.len, "grp_userMsg");
  user.getChildren()[0].setValue(txt_chat.getValue());
  user.getChildren()[1].setValue(currentTime);
  let bot = gen_chat.getChild(scwin.len, "grp_botMsg");
  bot.getChildren()[1].hide();
  bot.getChildren()[2].hide();
  bot.getChildren()[3].hide();
  let param = {
    "question": txt_chat.getValue(),
    "category": "websquare"
  };
  param = JSON.stringify(param);
  const opt = {
    "action": "https://6me8js6qma.execute-api.ap-northeast-2.amazonaws.com/dev/private/v1/ask_question",
    "mode": "asynchronous",
    "mediatype": "application/json",
    "method": "POST",
    "requestData": param,
    "requestHeader": {
      "Authorization": "Bearer 6a586bab-587f-45e0-959e-0df17fd724c5"
    },
    "success": scwin.ajax_callback,
    "error": scwin.ajax_callback
  };

  // ajax 통신
  $p.ajax(opt);

  // 통신 flag
  scwin.chatFlag = true;
  txt_chat.setValue("");

  // scroll 최하단 이동.
  scwin.scrollToBottom();
};

/**
 * @method
 * @name ajax_callback
 * @description W-talk의 ajax통신 결과 callback 함수
 * @param {string} e ajax 통신 결과를 가진 객체
 * @hidden N
 * @exception 
 */
scwin.ajax_callback = async function (e) {
  if (!e.errorType) {
    const bot = gen_chat.getChild(scwin.len, "grp_botMsg");
    bot.getChildren()[4].hide();
    let title = bot.getChildren()[1];
    let response = bot.getChildren()[2];
    let time = bot.getChildren()[3];
    const converter = new showdown.Converter();
    const text = e.responseJSON.answer.response;
    const html = converter.makeHtml(text);
    title.setValue(e.responseJSON.answer.title);
    response.setValue(html);
    time.setValue($c.date.getServerDateTime($p, "HH:mm"));

    // 코드형 답변에 대한 처리.
    let pre = document.getElementsByTagName('pre');
    for (let pres of pre) {
      pres.style.whiteSpace = 'pre-wrap';
      pres.style.wordBreak = 'break-word';
      pres.style.maxWidth = '100%';
    }
    bot.getChildren()[1].show();
    bot.getChildren()[2].show();
    bot.getChildren()[3].show();
  } else if (e.errorType) {
    if (e.responseStatusCode === 404) {
      if (await $c.win.confirm($p, "서버가 요청한 리소스를 찾을 수 없습니다. 창을 닫으시겠습니까?")) {
        scwin.confirmCallback();
      } else {
        gen_chat.removeAll();
      }
    } else if (e.responseStatusCode >= 500) {
      if (await $c.win.confirm($p, "서버 오류입니다. 자세한 사항은 관리자에게 문의해주세요. 창을 닫으시겠습니까?")) {
        scwin.confirmCallback();
      } else {
        gen_chat.removeAll();
      }
    } else if (e.responseStatusCode === 0) {
      scwin.offlineActivate();
    }
  }

  // 제너레이터 idx 증가
  scwin.let++;
  // chat 버튼 활성화
  btn_chat.setDisabled(false);
  // chat 통신 Flag 변경
  scwin.chatFlag = false;
  scwin.scrollToBottom();
};

/**
 * @method
 * @name confirmCallback
 * @description confirm창에 대한 callback 함수
 * @hidden N
 * @exception 
 */
scwin.confirmCallback = function () {
  gen_chat.removeAll();
  scwin.btn_chatClose_onclick();
};

/**
 * @event
 * @name txt_chat_onkeydown
 * @description 채팅 내용을 입력 시 발생하는 이벤트 정의
 */
scwin.txt_chat_onkeydown = function (e) {
  if (e.keyCode == 13) {
    // chat 통신 중이 아닐 때 실행
    if (!scwin.chatFlag && !e.shiftKey) {
      e.preventDefault();
      scwin.btn_chat_onclick();
    } else {
      // 통신 중일 때 개행방지
      e.preventDefault();
    }

    // shift + Enter 를 누른 경우 개행
    if (e.shiftKey) {
      e.preventDefault();
      let val = txt_chat.getValue();
      txt_chat.setValue(val + "\n");
    }
    //Enter만 누른 경우 개행 방지
    e.preventDefault();
  }
};

/**
 * @method
 * @name scrollToBottom
 * @description W-talk 답변 시 스크롤이 발생할 때 포커스를 하단으로 내린다
 * @param
 * @hidden N
 * @exception 
 */
scwin.scrollToBottom = function () {
  let scroll = document.getElementsByClassName("chat_contents")[0];
  $(".chat_contents").animate({
    scrollTop: scroll.scrollHeight
  }, 1500);
};

/**
 * @method
 * @name offlineActivate
 * @description 인터넷, 외부망에 연결되지 않은 경우 W-Talk 초기 메시지 셋팅
 * @hidden N
 * @exception
 */
scwin.offlineActivate = function () {
  // Generator 초기화
  gen_chat.removeAll();
  gen_chat.insertChild(0);

  // 사용자 메시지 및 필요 없는 항목 정리
  let user = gen_chat.getChild(0, "grp_userMsg");
  user.setStyle("display", "none");

  // bot메시지를 통해 사용자에게 인터넷 연결을 알린다.
  let child = gen_chat.getChild(0, "grp_botMsg").getChildren();
  child[3].hide();
  child[4].hide();
  child[1].setValue("인터넷 연결이 감지되지 않습니다.");
  child[2].setValue("W-Talk를 사용할 수 없습니다.");
};
scwin.btn_chatClose_onclick = function (e) {
  $(".chat_wrap").toggleClass("on");
  $p.main().wfm_header.getWindow().scwin.displayChk[2] = false;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'chat_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'chat_close',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_close',id:'btn_chatClose',style:'',type:'button','ev:onclick':'scwin.btn_chatClose_onclick'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{class:'chat_contents',id:'grp_chat',style:''},E:[{T:1,N:'xf:group',A:{class:'chat_list',id:''},E:[{T:1,N:'w2:textbox',A:{class:'date',escape:'false',id:'chat_date',label:'01. 25 <span>(목)</span>',style:''}},{T:1,N:'w2:generator',A:{style:'',id:'gen_chat',class:'chat_list'},E:[{T:1,N:'xf:group',A:{id:'grp_userMsg',style:'',class:'grp_message user'},E:[{T:1,N:'w2:textbox',A:{class:'bubble',id:'user_chat',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'time',id:'user_time',label:'',style:''}}]},{T:1,N:'xf:group',A:{id:'grp_botMsg',style:'',class:'grp_message bot'},E:[{T:1,N:'w2:textbox',A:{class:'title',id:'bot_title',label:'WebSquare',style:''}},{T:1,N:'w2:textbox',A:{class:'bubble',id:'bot_msg1',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'bubble',id:'bot_msg2',label:'',style:'',escape:'false',tagname:'div'}},{T:1,N:'w2:textbox',A:{class:'time',id:'',label:'',style:''}},{T:1,N:'xf:group',A:{class:'bubble loading',id:'bot_pen',style:''},E:[{T:1,N:'xf:group',A:{class:'dot',id:'',style:''}},{T:1,N:'xf:group',A:{class:'dot',id:'',style:''}},{T:1,N:'xf:group',A:{class:'dot',id:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'chat_footer',id:''},E:[{T:1,N:'xf:group',A:{class:'chat_input_group',id:'grp_chatInput'},E:[{T:1,N:'xf:group',A:{class:'chat_input',id:'grp_chatIn'},E:[{T:1,N:'xf:textarea',A:{id:'txt_chat',placeholder:'내용을 입력하세요.',style:'',title:'내용을 입력하세요.','ev:onkeydown':'scwin.txt_chat_onkeydown',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn_file',id:'',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_send',id:'btn_chat',style:'',title:'전송',type:'button','ev:onclick':'scwin.btn_chat_onclick'},E:[{T:1,N:'xf:label'}]}]}]}]}]}]}]})