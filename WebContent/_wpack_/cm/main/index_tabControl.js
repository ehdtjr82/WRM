/*amd /cm/main/index_tabControl.xml 6578 3b00e02abab04b506df44aeae4cf691254ac7b21dc509fe83f272e331ad4ee29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.settingBox_handlerEvent,scwin.closeTab'}},{T:1,N:'meta',A:{name:'viewport',content:'width=device-width, user-scalable=no'}},{T:1,N:'w2:common',A:{src:'../../cm/pcc/main.xml',id:'main'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_index_tabControl
 * @pluginName
 * @company
 * @developer
 * @category /cm/main
 * @notSupportBrowser
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license
 * @imagePath
 * @homepage
 */

// chat 통신 flag
scwin.chatFlag = false;
scwin.onpageload = function () {
  // Mobile일때 메뉴 동작	
  if (WebSquare.util.isMobile()) {
    grp_wrap.removeClass("show_menu");
    $(".btn_toggle_menu").click(function () {
      grp_wrap.toggleClass("show_menu");
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
};

/**
 * @event
 * @name btn_tab_allclose_onclick
 * @description 탭뷰 사용 시 모두 닫기 버튼을 누른 경우
 */
scwin.btn_tab_allclose_onclick = async function () {
  main.pushStateMain();
  scwin.tabCount = tac_layout.getTabCount();
  for (let i = scwin.tabCount; i > 0; i--) {
    await tac_layout.deleteTab(i);
  }
};

/**
 * @event
 * @name tac_layout_onbeforetabclose
 * @description 탭뷰 모드에서 탭이 닫히기 전 이벤트 정의
 */
scwin.tac_layout_onbeforetabclose = function (tabID, idx) {
  const tabFrame = this.getFrame(idx);
  return main.closeBeforePage(tabFrame);
};

/**
 * @event
 * @name wfm_side_onwframeload
 * @description side.xml 화면이 로드된 직후 이벤트 정의
 */
scwin.wfm_side_onwframeload = function () {
  main.initMainLoad();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onkeydown':'scwin.settingBox_handlerEvent','ev:onclick':'scwin.settingBox_handlerEvent',class:'wrm'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_dimLayer',class:'dim'}},{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'grp_wrap',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wfm_header',class:'header',scope:'true',src:'../../cm/xml/header.xml'}},{T:1,N:'xf:group',A:{class:'container',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tac_layout',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'',class:'tbc_layout',hiddenTab:'',tabPosition:'',closable:'true',useAccessibilityMenu:'false',tableRender:'',tabScroll:'true',focusOnStart:'',preventTabClickEvent:'',selectedIndex:'',spaAuto:'',confirmMessage:'','ev:onbeforetabclose':'scwin.tac_layout_onbeforetabclose',changeActiveTab:'true'}},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'btn_tab_allclose',class:'tbc_close','ev:onclick':'scwin.btn_tab_allclose_onclick',title:'탭 전체 닫기'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭전체닫기'}]}]},{T:1,N:'xf:group',A:{id:'grpMsg',style:'position: absolute;bottom:40px;left:10px;min-width:calc( 98% - 20px );z-index: 9980;'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_success',class:'msg_box success'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'min-height:20px',id:'txt_success',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_info',class:'msg_box info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_info',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_warning',class:'msg_box warning'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_warning',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeWarnMsg',disabled:'',style:'',id:'btn_warnig',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_warning',placeholder:''}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_error',class:'msg_box error'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_error',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeErrorMsg',disabled:'',style:'',id:'btn_error',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_error',placeholder:''}}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_wtalk',class:'',src:'/cm/xml/wtalk.xml'}}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_side',class:'side',scope:'true',src:'../../cm/xml/side.xml','ev:onwframeload':'scwin.wfm_side_onwframeload'}},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_footer',scope:'true',src:'../../cm/xml/footer.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})