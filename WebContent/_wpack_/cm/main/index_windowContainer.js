/*amd /cm/main/index_windowContainer.xml 10520 21f3db9eb7f6674d186865bc1ec1e9d1ded124564c948390eca8a4f9c371f438 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:common',A:{src:'../../cm/pcc/main.xml',id:'main'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // Mobile일때 메뉴 동작	
  if (WebSquare.util.isMobile()) {
    grp_wrap.removeClass("show_menu");
    $(".btn_toggle_menu").click(function () {
      $(".wrap").toggleClass("show_menu");
      $(".btn_toggle_menu").toggleClass("on");
      $(".dim").toggleClass("on");
    });
  } else {
    $(".btn_toggle_menu").click(function () {
      grp_wrap.toggleClass("show_menu");
      $(".btn_toggle_menu").toggleClass("on");
    });
  }

  // 검색영역 show/hide
  $(".btn_all_search").click(function () {
    $(".search_field").toggleClass("active");
  });

  // 탭 타이틀 on/off
  $(".side_tab a").click(function () {
    $(this).parent().addClass("on").siblings().removeClass("on");
  });

  // 트리뷰 접기
  $(".btn_fold").click(function () {
    $(this).addClass("on");
    $(".btn_fold_list").removeClass("on");
  });
  // 트리뷰 펼치기
  $(".btn_fold_list").click(function () {
    $(this).addClass("on");
    $(".btn_fold").removeClass("on");
  });

  // USER NAME CLICK
  $(".btn_mypage").click(function () {
    $(".mypage .items").toggleClass("on");
  });
  main.initMainLoad();
};

/**
 * @method
 * @name settingBox_handlerEvent
 * @description layout을 선택하는 창에서 이벤트를 제어한다.
 * @param {string} e 이벤트 객체
 * @hidden N
 * @exception 
 */
scwin.settingBox_handlerEvent = function (e) {
  if (e.keyCode == 27 || e.type == "click") {
    $(".settingbox").removeClass("on");
  }
  return false;
};

/**
 * @event
 * @name wdc_main_onbeforecloseall
 * @description 모든 windowContainer 종료 시 발생하는 이벤트 정의
 */
scwin.wdc_main_onbeforecloseall = function () {
  main.pushStateMain();
  wdc_main.setUserData("isOnbeforeCloseAll", true);
  scwin.winCount = wdc_main.windows.length;
  scwin.winIdx = scwin.winCount;
  (async function closeAllWindows() {
    for (let i = 1; i < scwin.winCount; i++) {
      scwin.winIdx--;
      if (scwin.winIdx === 1) {
        wdc_main.setUserData("isOnbeforeCloseAll", false);
      }
      const window = wdc_main.getWindow(wdc_main.windows[scwin.winIdx].windowId);
      const frame = window.$p.getFrame();
      if (main.closeBeforePage(frame)) {
        await wdc_main.closeWindow(wdc_main.windows[scwin.winIdx].windowId);
      }
    }
  })();
  return false;
};

/**
 * @event
 * @name btn_chatClose_onclick
 * @description W-talk 채팅창 닫기 버튼 클릭 시 이벤트
 */
scwin.btn_chatClose_onclick = function (e) {
  $(".chat_wrap").toggleClass("on");
};

/**
 * @event
 * @name btn_chat_onclick
 * @description W-talk 버튼 클릭 시 이벤트 정의
 */
scwin.btn_chat_onclick = async function (e) {
  btn_chat.setDisabled(true);
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
    title.setValue(e.responseJSON.answer.title);
    response.setValue(e.responseJSON.answer.response);
    time.setValue($c.date.getServerDateTime($p, "HH:mm"));
    bot.getChildren()[1].show();
    bot.getChildren()[2].show();
    bot.getChildren()[3].show();
  } else if (e.errorType) {
    if (e.responseStatusCode == 404) {
      if (await $c.win.confirm($p, "서버가 요청한 리소스를 찾을 수 없습니다. 창을 닫으시겠습니까?")) {
        scwin.confirmCallback();
      } else {
        gen_chat.removeAll();
      }
    }
    if (e.responseStatusCode >= 500) {
      if (await $c.win.confirm($p, "서버 오류입니다. 자세한 사항은 관리자에게 문의해주세요. 창을 닫으시겠습니까?")) {
        scwin.confirmCallback();
      } else {
        gen_chat.removeAll();
      }
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
      // 통신 중일 때 개행 방지
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
}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onkeydown':'scwin.settingBox_handlerEvent','ev:onclick':'scwin.settingBox_handlerEvent',class:'wrm'},E:[{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'grp_wrap',style:''},E:[{T:1,N:'w2:wframe',A:{class:'header',id:'wfm_header',scope:'true',src:'../../cm/xml/header.xml',style:''}},{T:1,N:'xf:group',A:{class:'container',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:windowContainer',A:{class:'wdc_layout',controlIconPosition:'allright',frameMode:'wframe',hideTitleOnMaximize:'false',id:'wdc_main',spaInitCount:'0',stopMinimizeOnNameLayer:'true',stopToggleOnLast:'false',style:'',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'true',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'true',useStatusMsg:'false',windowAutoResize:'false',windowMaxNum:'30',changeActiveWindow:'true',windowMaximizeAll:'false',windowTooltipDisplay:'true',closeType:'','ev:onbeforecloseall':'scwin.wdc_main_onbeforecloseall',fixArrangeFullScreen:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;bottom:40px;left:10px;min-width:calc( 98% - 20px );z-index: 9980;'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_success',class:'msg_box success'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'min-height:20px',id:'txt_success',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_info',class:'msg_box info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_info',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_warning',class:'msg_box warning'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_warning',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeWarnMsg',disabled:'',style:'',id:'btn_warnig',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_warning',placeholder:''}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_error',class:'msg_box error'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_error',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeErrorMsg',disabled:'',style:'',id:'btn_error',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_error',placeholder:''}}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_wtalk',class:'',src:'/cm/xml/wtalk.xml'}}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_side',class:'side',scope:'true',src:'../../cm/xml/side.xml'}},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_footer',scope:'true',src:'../../cm/xml/footer.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})