/*amd /cm/gcc/win.xml 50308 450181d2887caf9423e1621699465ae310617293de77ff4012d1b95428305642 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.__getI18NUrl,scwin.getScope,scwin.__getScope,scwin.getActiveWindowInfo,scwin.showToastMessage,scwin.openMenu,scwin.openPopup,scwin.closePopup,scwin.closeAllPopup,scwin.isPopup,scwin.messagBox,scwin.setProgramAuthority,scwin.processCommonData,scwin.setHistoryBackEvent,scwin.pushState,scwin.changePageState,scwin.addEventOnBeforeUnload,scwin.removeEventOnBeforeUnload,scwin.__setOnBeforeUnload,scwin.errorHandler,scwin.reload,scwin.getProgramId,scwin.goHome,scwin.logout,scwin.isAdmin,scwin.getFullPath,scwin.setEnterKeyEvent,scwin.alert,scwin.confirm,scwin.getLanguage,scwin.getPopupId,scwin.moveUrl,scwin.setWFrameSrc,scwin.getFrame,scwin.getParent,scwin.setLangCode,scwin.getLangCode,scwin.getCbFunctionManager'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_win
 * @pluginName
 * @company
 * @developer
 * @category /cm/gcc
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

// =============================================================================
/**
 * 업무 화면 영역 제어(권한, 업무 화면 공통 UI 요소 및 버튼 제어, 개인화 등) 함수를 작성한다.
 *
 * @author Inswave Systems
 * @class win
 * @namespace $c.win
 */
// =============================================================================

// 메시지 레이어 인덱스
scwin.MESSAGE_IDX = 1;

// 메세지 알림 콜백 Function 정보 저장
scwin.CB_FUNCTION_MANAGER = {
  cbFuncIdx: 0,
  // 정보 저장 Index Key
  cbFuncSave: {} // 정보 저장 객체
};
scwin.onpageload = function ($p) {
  requires("uiplugin.popup");
};

/**
 * @method 
 * @name __getI18NUrl
 * @description 다국어 처리함수
 * @param {String} xmlUrl 전체 URL중 w2xPath이하의 경로
 * @hidden N
 * @exception 
 * @example
 * $c.getI18NUrl( "/ui/SW/request.xml" ); 
 * //return 예시)"/websquare/I18N?w2xPath=/ui/SW/request.xml"
 */
scwin.__getI18NUrl = function (xmlUrl) {
  const contextPath = $c.sbm.getContextPath($p);
  const baseURL = contextPath + "/I18N";
  let rsURL = "";
  const locale = WebSquare.cookie.getCookie("locale");
  const bXml = "/blank.xml";
  xmlUrl = $c.util.getParameter($p, "w2xPath", xmlUrl) || xmlUrl;
  xmlUrl = xmlUrl.replace(/\?.*/, "");
  if (xmlUrl.search(bXml) > -1 && xmlUrl.search(WebSquare.baseURI) == -1) {
    xmlUrl = WebSquare.baseURI + "/blank.xml";
  }
  rsURL = baseURL + "?w2xPath=" + WebSquare.jsLoader.getUri(WebSquare.core.getURL(xmlUrl));
  if (locale != null && locale != '') {
    rsURL = rsURL + "&locale=" + unescape(locale);
  }
  return rsURL;
};

/**
 * @method
 * @name getScope
 * @description 컴포넌트의 현재 scope 정보를 반환한다.
 * @param {string} comObj 컴포넌트 객체
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.getScope = function ($p, comObj) {
  if (typeof comObj == 'undefined') {
    const scopeApi = $p;
    return $c.win.__getScope(scopeApi);
  }
  try {
    if (typeof comObj === "string") {
      const scopeObj = $c.util.getComponent($p, comObj);
      if (scopeObj !== null) {
        return scopeObj.getScopeWindow();
      }
    } else {
      return comObj.getScopeWindow();
    }
  } catch (ex) {
    console.error(ex);
    return null;
  }
};

/**
 * @method
 * @name __getScope
 * @description $p를 파라미터로 직접 전달하는 getScope
 * @param {Object} comObj 컴포넌트 객체
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.__getScope = function (comObj) {
  try {
    if (typeof comObj === "string") {
      const scopeObj = $c.util.getComponent($p, comObj);
      if (scopeObj !== null) {
        return scopeObj.getScopeWindow();
      }
    } else {
      return comObj.getScopeWindow();
    }
  } catch (ex) {
    console.error(ex);
    return null;
  }
};

/**
 * @method 
 * @name getActiveWindowInfo
 * @description 현재 활성화된 실행 프레임 윈도우 정보를 반환한다.
 * @param {Object} 객체 컴포넌트 객체 또는 아이디(WFrame Scope 경로를 포함한 Full Path Id)
 * @returns {Object} 현재 Active Window 정보 반환
 * {String} activeinfo.type : 액티브 윈도우 타입 [P : 팝업, T: 탭컨텐츠, W: 윈도우컴포넌트]
 * {Object} activeinfo.window : 액티브 윈도우 객체
 * {String} activeinfo.programCd : 액티브 윈도우 프로그램 코드
 * @hidden N
 * @exception 
 * @example
 */
scwin.getActiveWindowInfo = function ($p, scopeApi) {
  // $p를 직접 넣은 경우.
  if (typeof scopeApi == 'object') {
    $p = scopeApi;
  }
  ;
  const activeInfo = {
    "type": "",
    // T:Tabcontrol, W:windowContainer, P:popup
    "window": "",
    // Window객체
    "programCd": "" // 프로그램 코드 (팝업인경우는 예외)
  };
  const popupList = $p.getPopupWindowList();
  let popupWindow = null;
  if (popupList.length > 0) {
    for (let i = popupList.length - 1; i > -1; i--) {
      if (document.activeElement.id + "_wframe" === popupList[i].$p.getFrameId()) {
        popupWindow = $p.getPopupWindow(document.activeElement.id);
      }
    }
  }
  let findProgramList;
  if (popupWindow !== null) {
    // WFrame Popup 방식으로 오픈된 팝업 화면
    activeInfo["type"] = "P";
    activeInfo["programCd"] = $c.win.getProgramId($p, popupWindow.$p);
    activeInfo["window"] = popupWindow;
  } else if ($p.main().main && typeof $p.main().main.getLayoutId === "function") {
    // TabControl 또는 WindowContainer를 통해서 오픈된 업무 화면
    activeInfo["type"] = $p.main().main.getLayoutId();
    if (activeInfo["type"] == "T") {
      const selectedTabId = $p.main().tac_layout.getSelectedTabID();
      findProgramList = $c.data.menuComp.getMatchedJSON("MENU_CD", selectedTabId, true);
      if (findProgramList.length > 0) {
        activeInfo["programCd"] = findProgramList[0].PROGRAM_CD;
      }
      activeInfo["window"] = $p.main().tac_layout.getWindow(selectedTabId);
    } else if (activeInfo["type"] == "M") {
      const selectedWindowId = $p.main().wdc_main.getSelectedWindowId();
      findProgramList = $c.data.menuComp.getMatchedJSON("MENU_CD", selectedWindowId, true);
      if (findProgramList.length > 0) {
        activeInfo["programCd"] = findProgramList[0].PROGRAM_CD;
      }
      activeInfo["window"] = $p.main().wdc_main.getWindow(selectedWindowId);
    } else if (activeInfo["type"] == "S") {
      if (!$c.util.isEmpty($p, $c.data.getParameter($p, $p.main().wfm_layout.getWindow().$p, "menuInfo"))) {
        activeInfo["programCd"] = $c.data.getParameter($p, $p.main().wfm_layout.getWindow().$p, "menuInfo");
      }
      activeInfo["window"] = $p.main().wfm_layout.getWindow();
    }
  } else {
    // Window Popup 방식으로 오픈된 팝업 화면
    activeInfo["type"] = "P";
    activeInfo["programCd"] = $c.win.getProgramId($p);
    activeInfo["window"] = $p.getFrame();
  }
  return activeInfo;
};

/**
 * @method 
 * @name showToastMessage
 * @description 토스트 메시지를 보여준다.
 * @param {String} 메시지 종류 ( 에러 : scwin.MESSAGE_CODE.STATUS_ERROR, 성공 : scwin.MESSAGE_CODE.STATUS_SUCCESS, 경고 : scwin.MESSAGE_CODE.STATUS_WARNING, 정보 : scwin.MESSAGE_CODE.STATUS_INFO )
 * @param {String} 메시지 메시지
 * @hidden N
 * @exception 
 * @example
$c.win.showToastMessage($c.sbm.getMessageCode('STATUS_SUCCESS'), e.responseJSON.rsMsg.statusMsg);
 */
scwin.showToastMessage = function ($p, messageType, message) {
  if ($c.util.isEmpty($p, $p.main().wfm_footer)) {
    return;
  }
  const messageIdx = new Date().getTime();
  const wfmFooter = $p.main().wfm_footer.getWindow();
  let className = "";
  if ($c.sbm.getMessageCode($p, 'STATUS_ERROR') === messageType) {
    className = "error";
  } else if ($c.sbm.getMessageCode($p, 'STATUS_SUCCESS') === messageType) {
    className = "success";
  } else if ($c.sbm.getMessageCode($p, 'STATUS_WARNING') === messageType) {
    className = "warning";
  } else {
    className = "info";
  }
  wfmFooter.$p.dynamicCreate("grp_notice_" + messageIdx, "group", {
    style: "opacity: 0.0;"
  }, wfmFooter.grp_noticeArea);
  let grpNotice = wfmFooter.$p.getComponentById("grp_notice_" + messageIdx);
  grpNotice.addClass("notice");
  wfmFooter.$p.dynamicCreate("grp_noticeInfo_" + messageIdx, "group", {
    style: "opacity: 0.0"
  }, grpNotice);
  let grpNoticeInfo = wfmFooter.$p.getComponentById("grp_noticeInfo_" + messageIdx);
  grpNoticeInfo.addClass(className);
  wfmFooter.$p.dynamicCreate("tbx_message_" + messageIdx, "textbox", {
    style: "display:inline; margin-left:3px",
    label: message
  }, grpNoticeInfo);
  wfmFooter.$p.$("#" + grpNotice.getID()).fadeTo(1000, 1);
  wfmFooter.$p.$("#" + grpNoticeInfo.getID()).fadeTo(1000, 1);
  $c.util.setTimeout($p, function (idx) {
    let grpNotice = wfmFooter.$p.getComponentById("grp_notice_" + idx);
    if (!$c.util.isEmpty($p, grpNotice)) {
      wfmFooter.$p.$("#" + grpNotice.getID()).fadeTo(1000, 0);
    }
    let grpNoticeInfo = wfmFooter.$p.getComponentById("grp_noticeInfo_" + idx);
    if (!$c.util.isEmpty($p, grpNoticeInfo)) {
      wfmFooter.$p.$("#" + grpNoticeInfo.getID()).fadeTo(1000, 0);
    }
    $c.util.setTimeout($p, function (idx) {
      const tbxMessage = wfmFooter.$p.getComponentById("tbx_message_" + idx);
      if (!$c.util.isEmpty($p, tbxMessage)) {
        tbxMessage.remove();
      }
      let grpNoticeInfo = wfmFooter.$p.getComponentById("grp_noticeInfo_" + idx);
      if (!$c.util.isEmpty($p, grpNoticeInfo)) {
        grpNoticeInfo.remove();
      }
      let grpNotice = wfmFooter.$p.getComponentById("grp_notice_" + idx);
      if (!$c.util.isEmpty($p, grpNotice)) {
        grpNotice.remove();
      }
      let objArr = $c.util.getChildren($p, wfmFooter.grp_noticeArea, {
        includePlugin: "group textbox",
        recursive: true
      });
    }, {
      delay: 1500,
      args: [idx],
      key: "MessageRemove" + idx
    });
  }, {
    delay: 3000,
    args: [messageIdx],
    key: "MessageFadeOut" + messageIdx
  });
};

/**
 * @method 
 * @name openMenu
 * @description 특정 메뉴를 오픈한다.
 * @param {String} menuNm 메뉴명 - 단위화면에서 해당 값으로 title을 설정한다.
 * @param {String} url 화면 파일 경로
 * @param {String} menuCode 메뉴코드 - DB에 저장되어있는 메뉴 코드
 * @param {Object} data 화면에 전달할 JSON 데이터 객체
 * @param {Object} option 화면 오픈 옵션
 * @param {String} option.menuType 메뉴타입 ("SP" : 샘플화면)
 * @param {String} option.closable 닫기버튼 보여주기 여부
 * @param {Boolean} option.isHistory Browser History에 기록할 지 여부 (true, false)
 * @returns {Boolean} Main Layout 안에 화면이 오픈 됐는지 여부
 * @hidden N
 * @exception 
 * @example
 * $c.win.openMenu("인사조회","/tmp/tmp01.xml","010001");
 */
scwin.openMenu = function ($p, menuNm, url, menuCode, paramObj, option) {
  // client에서 url 숨기기 메뉴일 경우에는 새 창으로 띄우기 적용 
  if ($c.util.isEmpty($p, url)) {
    $c.win.alert($p, "메뉴에 프로그램이 등록되지 않았습니다.");
    return false;
  }
  if (url == "/") {
    const url = document.location.href + "/";
    window.open(url, "", "width=1200, height=700, left=450, top=100");
    return false;
  } else {
    menuCode = menuCode || "";
    const layout = $p.main().main.getLayoutId();
    let tmpUrl;
    let menuCodeParm = menuCode;
    let frameMode = '';
    let data = {};
    let closable = true;
    let fixed = false;
    if (url.indexOf("/") !== 0) {
      url = "/" + url;
    }
    url = $c.sbm.getContextPath($p) + url;
    if (typeof paramObj !== "undefined" && paramObj !== null) {
      data = paramObj;
    }
    data.menuInfo = {
      menuNm: menuNm,
      menuCode: menuCode,
      src: url
    };
    if (!$c.util.isEmpty($p, option) && !$c.util.isEmpty($p, option.menuType)) {
      data.menuInfo.menuType = option.menuType;
    }
    if (!$c.util.isEmpty($p, option) && !$c.util.isEmpty($p, option.closable)) {
      closable = option.closable;
    }
    if (!$c.util.isEmpty($p, option) && !$c.util.isEmpty($p, option.fixed)) {
      fixed = option.fixed;
    }
    if (layout == "T") {
      const tabObj = {
        closable: closable,
        // 탭 닫기 기능 제공
        openAction: "select",
        // exist 는 기존 탭을 갱신, new 는 항상 새로, select는 동일 id 가 존재하면 선택, last: 기존 tab을 마지막 tab으로 이동후 선택
        label: menuNm
      };
      const contObj = {
        frameMode: "wframePreload",
        scope: true,
        src: url,
        alwaysDraw: false,
        title: menuNm,
        dataObject: {
          type: "json",
          name: "paramData",
          data: data
        }
      };

      // tabObj의 openAction의 last값의 동작 특이 사항으로 선택이 되지 않은 경우 선택하는 로직 추가
      return Promise.resolve().then(function () {
        return $p.main().tac_layout.addTab(menuCode, tabObj, contObj);
      }).then(function (tabId) {
        $p.main().tac_layout.setSelectedTabIndex(tabId);
        return tabId;
      }).then(function (tabId) {
        // history에 화면 전환했던 프로그램 코드 저장
        if (!$c.util.isEmpty($p, option) && option.isHistory && !$c.util.isEmpty($p, menuCode)) {
          $c.win.pushState($p, data);
        }
        return tabId;
      });
    } else if (layout == "M") {
      const options = {
        title: menuNm,
        src: url,
        windowTitle: menuNm,
        windowId: menuCode,
        openAction: "selectWindow",
        frameMode: "wframe",
        fixed: fixed === true ? true : false,
        _closable: closable === false ? false : true,
        closeAction: function (title) {
          const winScope = $p.main().wdc_main.getWindowByUniqueId(this.id);
          if (winScope.options != undefined && winScope.options._closable === false) {
            return false;
          } else {
            const isOnbeforecloseall = $p.main().wdc_main.getUserData("isOnbeforeCloseAll");
            if (typeof isOnbeforecloseall === "undefined" || isOnbeforecloseall === false) {
              const isClose = $p.main().main.closeBeforePage(winScope.$p.getFrame());
              if (isClose === false) {
                $p.main().wdc_main.setFocus($p.main().wdc_main.getSelectedIndex());
              }
              $p.main().wdc_main.setUserData("isOnbeforeCloseAll", false);
              return isClose;
            }
            return true;
          }
        },
        dataObject: {
          type: "json",
          name: "paramData",
          data: data
        }
      };
      return Promise.resolve().then(function () {
        $p.main().wdc_main.createWindow(options);
        return options;
      }).then(function (options) {
        let winScope = $p.main().wdc_main.getWindow(options.windowId);
        winScope.options = {
          _closable: options._closable
        };

        // history에 화면 전환했던 프로그램 코드 저장
        if (!$c.util.isEmpty($p, option) && option.isHistory && !$c.util.isEmpty($p, menuCode)) {
          $c.win.pushState($p, data);
        }
      });
    } else if (layout == "S") {
      const isClose = $p.main().main.closeBeforePage($p.main().wfm_layout.getWindow().$p.getFrame());
      if (isClose) {
        const programCd = $p.main().wfm_side.getWindow().dlt_menu.getMatchedColumnData("SRC_PATH", url, "PROGRAM_CD");
        data.menuInfo.programCd = programCd[0];

        // history에 화면 전환했던 프로그램 코드 저장
        if (!$c.util.isEmpty($p, option) && option.isHistory && !$c.util.isEmpty($p, menuCode)) {
          $c.win.pushState($p, data);
        }
        const param = {
          dataObject: {
            type: "json",
            name: "paramData",
            data: data
          }
        };
        return Promise.resolve().then(function () {
          return $p.main().wfm_layout.setSrc(url, param);
        });
      } else {
        return false;
      }
    }
  }
  return false;
};

/**
 * @method 
 * @name openPopup
 * @description 팝업창을 연다.
 * @param {String} url url 화면경로
 * @param {Array} options Popup창 옵션
 * @param {String} options.id Popup창 아이디
 * @param {String} options.type 화면 오픈 타입 ("wframePopup", "browserPopup")
 * @param {String} options.width Popup창 넓이
 * @param {String} options.height Popup창 높이
 * @param {String} options.popupName useIframe : true시 popup 객체의 이름으로 popup 프레임의 표시줄에 나타납니다.
 * @param {String} options.useIFrame [default : false] true : IFrame 을 사용하는 WebSquare popup / false: window.open 을 사용하는 popup
 * @param {String} options.style Popup의 스타일을 지정합니다. 값이 있으면 left top width height는 적용되지 않습니다.
 * @param {String} options.resizable [default : false]
 * @param {String} options.modal [default : false]
 * @param {String} options.scrollbars [default : false]
 * @param {String} options.title [default : false]
 * @param {String} options.notMinSize [default : false]
 * @param {Object} data 팝업 화면에 전달할 데이터 객체 (type이 wframePopup인 경우만 지원)
 * @hidden N
 * @exception 
 * @example
 */
scwin.openPopup = function ($p, url, opts, data) {
  return new Promise(function (resolve, reject) {
    if ($p.top().$p.getComponentById("udc_gridVIew_finder")) {
      $p.top().$p.getComponentById("udc_gridVIew_finder").gridFinderClose();
    }
    if (typeof opts !== "object") {
      opts = {};
    }
    if ($c.util.isEmpty($p, data)) {
      data = {};
    }
    if ($c.util.isEmpty($p, data.callbackFn)) {
      data.callbackFn = function (rtn) {
        if (!$c.util.isEmpty($p, rtn)) {
          if (!$c.util.isEmpty($p, rtn.clickValue)) {
            resolve(rtn.clickValue);
          } else {
            resolve(rtn);
          }
        } else {
          resolve(false);
        }
      };
    }
    scwin._openPopup($p, url, opts, data);
  });
};

/**
 * @method 
 * @name _openPopup
 * @description 팝업창을 연다.
 * @param {String} url url 화면경로
 * @param {Array} options Popup창 옵션
 * @param {String} options.id Popup창 아이디
 * @param {String} options.type 화면 오픈 타입 ("wframePopup", "browserPopup")
 * @param {String} options.width Popup창 넓이
 * @param {String} options.height Popup창 높이
 * @param {String} options.popupName useIframe : true시 popup 객체의 이름으로 popup 프레임의 표시줄에 나타납니다.
 * @param {String} options.useIFrame [default : false] true : IFrame 을 사용하는 WebSquare popup / false: window.open 을 사용하는 popup
 * @param {String} options.style Popup의 스타일을 지정합니다. 값이 있으면 left top width height는 적용되지 않습니다.
 * @param {String} options.resizable [default : false]
 * @param {String} options.modal [default : false]
 * @param {String} options.scrollbars [default : false]
 * @param {String} options.title [default : false]
 * @param {String} options.notMinSize [default : false]
 * @param {Object} data 팝업 화면에 전달할 데이터 객체 (type이 wframePopup인 경우만 지원)
 * @hidden Y
 * @exception 
 * @example
 */
scwin._openPopup = function ($p, url, opt, data) {
  data.menuInfo = {
    src: url
  };
  const _dataObj = {
    type: "json",
    data: data,
    name: "paramData"
  };
  let width = opt.width || 500;
  let height = opt.height || 500;
  try {
    const deviceWidth = parseFloat($("body").css("width"));
    const deviceHeight = parseFloat($("body").css("height"));
    if (!opt.notMinSize) {
      let borderSize = 4;
      if (opt.type != "browserPopup") {
        borderSize = 4;
        if (deviceWidth > 0 && width > deviceWidth) {
          width = deviceWidth - borderSize; // 팝업 border 고려
        }
        if (deviceHeight > 0 && height > deviceHeight) {
          height = deviceHeight - borderSize; // 팝업 border 고려
        }
      } else {
        if (window.screen.availHeight <= height) {
          height = window.screen.availHeight - 100;
        }
      }
    }
  } catch (ex) {
    console.error(ex);
  }
  opt.type = opt.type || "wframePopup";
  opt.frameModal = opt.frameModal || "";
  opt.className = opt.frameModal == "frame" ? opt.className ? opt.className + " f_pop" : "f_pop" : "";
  let top, left;
  if (opt.type == "browserPopup") {
    top = Math.floor((window.screen.availHeight - 50 - $c.num.parseInt($p, height)) / 2) + (window.screen.availTop || 0) + "px";
    left = Math.floor((window.screen.availWidth - $c.num.parseInt($p, width)) / 2) + (window.screen.availLeft || 0) + "px";
  } else {
    let frameTop = 0;
    let frameLeft = 0;
    if (opt.frameModal === "frame") {
      frameTop = $p.getFrame().render.getBoundingClientRect().top / 2;
      frameLeft = $p.getFrame().render.getBoundingClientRect().left / 2;
    }
    top = document.body.offsetHeight / 2 - $c.num.parseInt($p, height) / 2 - frameTop + $(document).scrollTop() + "px";
    left = document.body.offsetWidth / 2 - $c.num.parseInt($p, width) / 2 - frameLeft + $(document).scrollLeft() + "px";
  }
  if (typeof _dataObj.data !== "undefined") {
    if (typeof _dataObj.data.callbackFn == "function") {
      const cbFuncIdx = ++scwin.CB_FUNCTION_MANAGER["cbFuncIdx"];
      const idx = "__close_callback_Func__" + new Date().getTime() + "_" + cbFuncIdx;
      scwin.CB_FUNCTION_MANAGER["cbFuncSave"][$p.id + idx] = _dataObj.data.callbackFn;
      _dataObj.data.callbackFn = $p.id + idx;
    } else if (typeof _dataObj.data.callbackFn === "undefined") {
      _dataObj.data.callbackFn = "";
    } else if (typeof _dataObj.data.callbackFn === "string") {
      _dataObj.data.callbackFn = $p.id + _dataObj.data.callbackFn;
    }
  }
  const options = {
    id: opt.id,
    popupName: opt.popupName || "",
    type: opt.type,
    width: width + "px",
    height: height + "px",
    top: opt.top || top || "140px",
    left: opt.left || left || "500px",
    modal: opt.modal == false ? false : true,
    frameModal: opt.frameModal,
    dataObject: _dataObj,
    alwaysOnTop: opt.alwaysOnTop || true,
    useModalStack: opt.useModalStack == false ? false : true,
    resizable: opt.resizable == false ? false : true,
    useMaximize: opt.useMaximize || false,
    className: opt.className || "",
    scrollbars: true,
    windowDragMove: opt.windowDragMove || true,
    windowMoveType: opt.windowMoveType || "overflow",
    minVisibleWindowPixel: 20,
    closeAction: function () {
      if ($p.top().$p.getComponentById("udc_gridVIew_finder")) {
        $p.top().$p.getComponentById("udc_gridVIew_finder").gridFinderClose();
      }
      let popupWindow = $p.getPopupWindow(this.id);
      if ($p.getPopupWindow(this.id) == undefined) {
        popupWindow = this.getScopeWindow();
      }
      let isClose = true;
      if (popupWindow.$p.getFrameId() === null) {
        if ($p.main().main && typeof $p.main().main.closeBeforePage === "function") {
          isClose = $p.main().main.closeBeforePage(window.$p.main().$p.getFrame());
        }
      } else {
        if ($p.main().main && typeof $p.main().main.closeBeforePage === "function") {
          isClose = $p.main().main.closeBeforePage(popupWindow.$p.getFrame());
        }
      }
      if (!isClose) {
        return false;
      }
      const messageType = $c.data.getParameter($p, "messageType", popupWindow.$p) || "alert";
      const callbackFuncStr = $c.data.getParameter($p, "callbackFn", popupWindow.$p);
      const callbackFunc = $c.util.getCallBackFunction($p, callbackFuncStr);
      if (typeof callbackFunc === "function") {
        let popup;
        if (popupWindow.$p.isWFramePopup()) {
          popup = popupWindow.scwin._popup;
        } else {
          popup = popupWindow.$p.main().scwin._popup;
        }
        if (!$c.util.isEmpty($p, popup) && !$c.util.isEmpty($p, popup.callbackParam)) {
          callbackFunc($c.util.getJSON($p, popup.callbackParam));
        } else if ($p.main().main && !$c.util.isEmpty($p, popupWindow.$p.main().scwin._popup) && !$c.util.isEmpty($p, popupWindow.$p.main().scwin._popup.callbackParam)) {
          callbackFunc($c.util.getJSON($p, popupWindow.$p.main().main._popup.callbackParam));
        } else {
          if (messageType === "confirm") {
            callbackFunc({
              clickValue: false
            });
          }
        }
      }
      return true;
    },
    popupUrl: "../popup"
  };
  $p.openPopup($c.sbm.getContextPath($p) + url, options);
};

/**
 * @method 
 * @name closePopup
 * @description 팝업창을 닫는다.
 * @param {Object} $p WFrame Scope $p 객체
 * @param {String} popId popup창 id로 값이 없을 경우 현재창의 아이디
 * @param {String} callbackParamStr 부모 창에 전달한 데이터
 * @param {String} callbackFnStr 콜백 함수 명
 * @hidden N
 * @exception 
 * @example
 */
scwin.closePopup = function ($p, callbackParam, callbackFnStr) {
  if (!$c.util.isEmpty($p, callbackParam)) {
    $p.getFrame().scope.scwin._popup = {
      callbackParam: callbackParam
    };
  }
  scwin._closePopup($p, $c.win.getPopupId($p), $c.str.serialize($p, callbackParam), callbackFnStr);
};

// TODO :: 아래의 코드는 테스트 완료 후 삭제해야 합니다.
/**
 * @method 
 * @name _closePopup
 * @description 팝업창을 닫는다.
 * @param {Object} $p WFrame Scope $p 객체
 * @param {String} popId popup창 id로 값이 없을 경우 현재창의 아이디
 * @param {String} callbackParamStr 부모 창에 전달한 데이터
 * @param {String} callbackFnStr 콜백 함수 명
 * @hidden Y
 * @exception 
 * @example
 */
scwin._closePopup = function ($p, popId, callbackParamStr, callbackFnStr) {
  $c.util.setTimeout($p, function () {
    if ($p.isWFramePopup()) {
      $p.closePopup(popId);
    } else {
      let func = $c.util.getCallBackFunction($p, callbackFnStr);
      if (func) {
        func($c.util.getJSON($p, callbackParamStr));
      } else if (opener !== null) {
        func = opener.$c.util.getCallBackFunction($p, callbackFnStr);
        if (func) {
          func($c.util.getJSON($p, callbackParamStr));
        }
      }
      $w.closePopup();
    }
  }, {
    delay: 10,
    key: "closePopup" + (Math.random() * 16).toString().replace(".", "")
  });
};

/**
 * @method 
 * @name closeAllPopup
 * @description 현재 오픈된 전체 팝업창을 닫는다.
 * @hidden N
 * @exception 
 * @example
$c.win.closeAllPopup();
 */
scwin.closeAllPopup = function ($p) {
  // WebSquare.uiplugin.popup.popupList 속성은 엔진 내 비공개 속성으로 공통에서만 제한적으로 사용함(업무 화면 소스 사용 금지)
  const popupList = WebSquare.uiplugin.popup.popupList;
  for (let idx = 0; idx < popupList.length; idx++) {
    $p.closePopup(WebSquare.uiplugin.popup.popupList[idx].id);
  }
};

/**
 * @method 
 * @name isPopup
 * @description 현재 화면이 팝업 인지의 여부를 반환한다.
 * @returns {Boolean} 팝업여부(팝업인 경우 true, 팝업이 아닌 경우 false)
 * @hidden N
 * @exception 
 * @example
if ($c.win.isPopup()) {
	$c.win.alert("현재 화면은 팝업입니다.");
};
 */
scwin.isPopup = function ($p) {
  return isPopup($p);
  function isPopup(scope) {
    if (scope.isPopup()) {
      return true;
    } else if (scope.top().$p.getFrameId() === scope.getFrameId()) {
      return false;
    } else {
      return isPopup(scope.parent().$p);
    }
  }
};

/**
 * @method 
 * @name messagBox
 * @description 메세지 팝업을 호출한다.
 * @param {Object} $p WFrame Scope $p 객체
 * @param {String} messageType 팝업창 타입 (alert || confirm)
 * @param {String} messageStr 메시지
 * @param {String} closeCallbackFncName 콜백 함수명
 * @param {String} title 팝업창 타이틀
 * @hidden N
 * @exception 
 * @example
//alert창을 띄울 경우
scwin.callback = function(){
	console.log("콜백 함수입니다.");
};
$c.win.messagBox($p, "alert", "보낼 메시지", "callback");

//confirm창을 띄울 경우
scwin.callback = function(){
	console.log("콜백 함수입니다.");
};
$c.win.messagBox($p, "confirm", "보낼 메시지", "callback");
 */
scwin.messagBox = function ($p, messageType, messageStr, closeCallbackFncName, opts) {
  messageStr = messageStr || "";
  messageType = messageType || "alert";
  let popId = messageType || "tmp";
  popId = popId + (Math.random() * 16).toString().replace(".", "");
  if (typeof opts.callBackParam !== "object") {
    opts.callBackParam = {};
  }
  let sysMsg = "";
  if ($c.util.isArray($p, messageStr)) {
    sysMsg = $c.data.getMessage($p, messageStr);
    if (typeof sysMsg === "string" && sysMsg != "") {
      messageStr = sysMsg;
    } else {
      messageStr = "";
    }
  } else {
    sysMsg = $c.data.getMessage($p, messageStr);
    if (typeof sysMsg === "string" && $c.util.isEmpty($p, sysMsg) === false) {
      messageStr = sysMsg;
    }
  }
  const data = {
    "message": messageStr,
    "callbackFn": closeCallbackFncName,
    "messageType": messageType,
    "id": popId,
    "callBackParam": opts.callBackParam
  };
  const options = {
    id: popId,
    popupName: messageType == "alert" ? $c.data.getMessage($p, "MSG_CM_00046") : $c.data.getMessage($p, "MSG_CM_00047"),
    width: 380,
    height: 223,
    frameModal: "top",
    className: "messagebox"
  };
  $c.win.openPopup($p, "/cm/xml/messageBox.xml", options, data);
};

/**
 * @method 
 * @name setProgramAuthority
 * @description 사용자의 권한에 따른 화면 컴포넌트 제어를 한다.
 * @hidden N
 * @exception 
 * @example
 */
scwin.setProgramAuthority = function ($p) {
  const menuInfo = $c.data.getParameter($p, "menuInfo");
  if (typeof menuInfo !== "undefined" && typeof menuInfo.menuCode !== "undefined" && menuInfo.menuCode.trim() !== "") {
    const menuCd = menuInfo.menuCode;
    const menuInfoList = $p.main().wfm_side.getWindow().dlt_menu.getMatchedJSON("MENU_CD", menuCd);
    if (menuInfoList.length > 0) {
      const programAuthorityList = $p.main().wfm_side.getWindow().dlt_programAuthority.getMatchedJSON("PROGRAM_CD", menuInfoList[0].PROGRAM_CD);
      if (programAuthorityList.length > 0) {
        const programAuthority = programAuthorityList[0];
        const objArr = $c.util.getChildren($p, $p.getFrame(), {
          excludePlugin: "group textbox output calendar image span",
          recursive: true
        });
        for (let i = 0; i < objArr.length; i++) {
          if (objArr[i].getPluginName() === "anchor" || objArr[i].getPluginName() === "trigger") {
            if (objArr[i].getOriginalID().indexOf("btn_search") > -1) {
              if (programAuthority.IS_AUTH_SELECT !== "Y") {
                objArr[i].hide();
              }
            } else if (objArr[i].getOriginalID().indexOf("btn_add") > -1) {
              if (programAuthority.IS_AUTH_SAVE !== "Y") {
                objArr[i].hide();
              }
            } else if (objArr[i].getOriginalID().indexOf("btn_cancel") > -1) {
              if (programAuthority.IS_AUTH_SAVE !== "Y") {
                objArr[i].hide();
              }
            } else if (objArr[i].getOriginalID().indexOf("btn_save") > -1) {
              if (programAuthority.IS_AUTH_SAVE !== "Y") {
                objArr[i].hide();
              }
            } else if (objArr[i].getOriginalID().indexOf("btn_excel") > -1) {
              if (programAuthority.IS_AUTH_EXCEL !== "Y") {
                objArr[i].hide();
              }
            }
          }
        }
      }
    }
  }
};

/**
 * @method 
 * @name processCommonData
 * @description 공통 코드, 권한, 개인화 처리를 위해서 생성된 Submission을 Promise Workflow 기능을 이용해서 실행한다.
 * @hidden N
 * @exception 
 * @example
 */
scwin.processCommonData = function ($p) {
  const scwinObj = $c.util.getObject($p, "scwin");
  const commonDataWorkflow = {
    "id": "wkf_commonDataWorkflow",
    "processMsg": "",
    "step": [],
    "resolveCallback": "",
    "rejectCallback": ""
  };
  if (typeof scwinObj.ondataload === "function") {
    commonDataWorkflow["resolveCallback"] = scwinObj.ondataload;
  }
  const sbmSearchCode = $c.util.getComponent($p, "_sbm_searchCode");
  if ($c.util.isEmpty($p, sbmSearchCode) === false) {
    commonDataWorkflow.step = [{
      "type": "submit",
      "action": "_sbm_searchCode"
    }, {
      "type": "submitDone",
      "action": "_sbm_searchCode"
    }];
  }
  const sbmSelectShortcutList = $c.util.getComponent($p, "_sbm_selectShortcutList");
  if ($c.util.isEmpty($p, sbmSelectShortcutList) === false) {
    commonDataWorkflow.step.push({
      "type": "submit",
      "action": "_sbm_selectShortcutList"
    });
    commonDataWorkflow.step.push({
      "type": "submitDone",
      "action": "_sbm_selectShortcutList"
    });
  }
  if (commonDataWorkflow.step.length > 0) {
    $c.sbm.executeWorkflow($p, commonDataWorkflow);
  } else {
    if (typeof scwinObj.ondataload === "function") {
      scwinObj.ondataload();
    }
  }
};

/**
 * @method 
 * @name setHistoryBackEvent
 * @description 브라우저 Back, Forward 발생 시 onPopState 이벤트를 등록한다.
 * @hidden N
 * @exception 
 * @example $c.win._setHistoryBackEvent();
 */
scwin.setHistoryBackEvent = function ($p) {
  if (window.addEventListener) {
    window.addEventListener("popstate", $c.win.changePageState);
  } else {
    window.attachEvent("popstate", $c.win.changePageState);
  }
};

/**
 * @method 
 * @name pushState
 * @description history.pushState API를 호출해서 브라우저에서 History 상태를 기록한다.
 * @hidden N
 * @exception 
 * @example $c.win.pushState(option.dataObject.data);
 */
scwin.pushState = function ($p, data) {
  if (data.menuInfo.menuCode === "MAIN") {
    history.pushState({
      "data": data
    }, data.menuInfo.menuNm, $c.sbm.getContextPath($p) + "/");
  } else {
    history.pushState({
      "data": data
    }, data.menuInfo.menuNm, "?menuCd=" + data.menuInfo.menuCode);
  }
};

/**
 * @method 
 * @name changePageState
 * @description 브라우저 Back, Forward 발생 시 onPopState 이벤트 처리를 수행한다.
 * @hidden N
 * @exception 
 * @example $c.win.changePageState();
 */
scwin.changePageState = function ($p) {
  scwin.__changePageState();
};

/**
 * @method
 * @name __changePageState
 * @description changePageState에서 $p를 직접 파라미터로 보내는 경우 사용
 * @param
 * @hidden Y
 * @exception 
 */
scwin.__changePageState = function () {
  if (!$c.util.isEmpty($p, history.state) && !$c.util.isEmpty($p, history.state.data) && !$c.util.isEmpty($p, history.state.data.menuInfo)) {
    const options = {};
    options.isHistory = false;
    const data = history.state.data;
    $c.win.openMenu($p, data.menuInfo.menuNm, data.menuInfo.src, data.menuInfo.menuCode, data.param, options);
  }
};

/**
 * @method 
 * @name addEventOnBeforeUnload
 * @description Window.onBeforeUnload 이벤트를 추가한다.
 * @hidden N
 * @exception 
 * @example $c.win.addEventOnBeforeUnload();
 */
scwin.addEventOnBeforeUnload = function ($p) {
  if (window.addEventListener) {
    window.addEventListener("beforeunload", $c.win.__setOnBeforeUnload);
  } else {
    window.attachEvent("onbeforeunload", $c.win.__setOnBeforeUnload);
  }
};

/**
 * @method 
 * @name removeEventOnBeforeUnload
 * @description Window.onBeforeUnload 이벤트를 삭제한다.
 * @hidden N
 * @exception 
 * @example $c.win.removeEventOnBeforeUnload();
 */
scwin.removeEventOnBeforeUnload = function ($p) {
  if (window.removeEventListener) {
    window.removeEventListener("beforeunload", $c.win.__setOnBeforeUnload);
  } else {
    window.detachEvent("onbeforeunload", $c.win.__setOnBeforeUnload);
  }
};

/**
 * @method
 * @name __setOnBeforeUnload
 * @description Window.onBeforeUnload 이벤트 발생 시 페이지를 떠날 것인지 확인한다.
 * @param {object} e 이벤트 객체
 * @hidden N
 * @exception 
 * @example $c.win.__setOnBeforeUnload();
 */
scwin.__setOnBeforeUnload = function (e) {
  e.preventDefault();
  e.returnValue = "You didn't save changes";
  return e.returnValue;
};

/**
 * @method 
 * @name errorHandler
 * @description 웹스퀘이 페이지 호출 시 에러가 발생할 경우 발생하는 이벤트 함수
 * @hidden N
 * @exception 
 */
scwin.errorHandler = function ($p, e) {
  if (e.status == 404) {
    $c.win.alert($p, e.responseURL + " URL이 존재하지 않습니다.");
  }
};

/**
 * @method 
 * @name reload
 * @description 전체 페이지 새로고침을 한다.
 * @hidden N
 * @exception 
 */
scwin.reload = function ($p) {
  $c.win.removeEventOnBeforeUnload($p);
  window.location.reload();
};

/**
 * @method 
 * @name getProgramId
 * @description 프로그램 아이디를 반환한다.
 * @hidden N
 * @exception 
 * @example
const programId = $c.win.getProgramId();
 */
scwin.getProgramId = function ($p, scopeApi) {
  let programId = "";
  if (typeof scopeApi == "object") {
    programId = scwin.__getProgramId(scopeApi);
    return programId;
  }
  ;
  if ($c.util.isEmpty($p, $p.getMetaValue("meta_screenId"))) {
    // 웹스퀘어 파일명을 프로그램 아이디와 동일하게 작성한 경우에만 정상 동작한다.
    let src = "";
    if (!$c.util.isEmpty($p, $p.getFrame())) {
      src = $p.getFrame().getSrc();
    } else {
      src = $p.getParameter("w2xPath");
    }
    if (src.indexOf("/ui/") >= 0) {
      programId = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
    }
  } else {
    programId = $p.getMetaValue("meta_screenId");
  }
  return programId;
};

/**
 * @method
 * @name __getProgramId
 * @description getProgramId에서 $p를 파라미터로 직접 보내는 경우 호출되는 함수
 * @param {$p} scopeApi $p인자가 담긴 객체
 * @hidden Y
 * @exception 
 */
scwin.__getProgramId = function (scopeApi) {
  const $p = scopeApi;
  let programId = "";
  if ($c.util.isEmpty($p, $p.getMetaValue("meta_screenId"))) {
    // 웹스퀘어 파일명을 프로그램 아이디와 동일하게 작성한 경우에만 정상 동작한다.
    let src = "";
    if (!$c.util.isEmpty($p, $p.getFrame())) {
      src = $p.getFrame().getSrc();
    } else {
      src = $p.getParameter("w2xPath");
    }
    if (src.indexOf("/ui/") >= 0) {
      programId = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
    }
  } else {
    programId = $p.getMetaValue("meta_screenId");
  }
  return programId;
};

/**
 * @method 
 * @name goHome
 * @description 최상위 page를 index화면으로 이동 (/)
 * @param {Boolean} isLogin 로그인 페이지에서 이동한 지 여부
 * @hidden N
 * @exception 
 * @example
 */
scwin.goHome = function ($p) {
  const contextPath = $c.sbm.getContextPath($p);
  if (contextPath == "") {
    top.window.location.href = "/";
  } else {
    top.window.location.href = contextPath;
  }
};

/**
 * @method 
 * @name logout
 * @description
 * 로그아웃으로 WAS의 사용자 session을 삭제한다.
 * 정상 처리 : /로 이동.
 * 오류 발생 : 기존 화면으로 오류 메세지 전송
 * @hidden N
 * @exception 
 * @example
 * $c.win.logout();
 */
scwin.logout = function ($p) {
  $c.win.removeEventOnBeforeUnload($p);
  const logoutGrpOption = {
    id: "_sbm_Logout",
    action: "/main/logout",
    target: "",
    submitDoneHandler: "$c.win.goHome",
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, logoutGrpOption);
};

/**
 * @method 
 * @name isAdmin
 * @description 로그인한 사용자가 시스템 관리자 인지의 여부를 반환한다.
 * @hidden N
 * @exception 
 * @example
 */
scwin.isAdmin = function ($p) {
  const isAdmin = $p.main().wfm_side.getWindow().dma_defInfo.get("IS_ADMIN");
  if (isAdmin === "Y") {
    return true;
  } else {
    return false;
  }
};

/**
 * @method 
 * @name getFullPath
 * @description contextRoot가 포함된 path를 반환한다.
 * @param {String} path 파일경로(Context가 포함되지 않은)
 * @returns {String} Context가 포함된 파일경로
 * @hidden N
 * @exception 
 * @example
// context가 /sample 인경우
$c.win.getFullPath("/ui/dev/common/commonCode1.xml");
 */
scwin.getFullPath = function ($p, path) {
  let rtn_path = "";
  const contextPath = $c.sbm.getContextPath($p);
  if (contextPath == "") {
    rtn_path = path;
  } else {
    rtn_path = contextPath + path;
  }
  return rtn_path;
};

/**
 * @method 
 * @name setEnterKeyEvent
 * @description 해당 그룹 안의 컴포넌트에서 엔터키가 발생하면 해당 컴포넌트의 값을 DataCollection에 저장하고 objFunc 함수를 실행한다.
 * @param {Object} grpObj 그룹 객체
 * @param {Object} objFunc 함수 객체
 * @hidden N
 * @exception 
 * @example
$c.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
 */
scwin.setEnterKeyEvent = function ($p, grpObj, objFunc) {
  let objArr = $c.util.getChildren($p, grpObj, {
    includePlugin: "checkbox checkcombobox editor input inputCalendar multiselect radio selectbox searchbox secret textarea autoComplete",
    recursive: true
  });
  try {
    for (let i = 0; i < objArr.length; i++) {
      try {
        if (typeof objFunc === "function") {
          objArr[i].bind("onkeyup", function (e) {
            if (e.keyCode === 13) {
              if (typeof this.getRef === "function") {
                let ref = this.getRef();
                let refArray = ref.substring(5).split(".");
                if (typeof refArray !== "undefined" && refArray.length === 2) {
                  const dataCollectionName = refArray[0];
                  const columnId = refArray[1];
                  const dataCollection = this.getScopeWindow().$p.getComponentById(dataCollectionName);
                  const dataType = dataCollection.getObjectType().toLowerCase();
                  if (dataType === "datamap") {
                    dataCollection.set(columnId, this.getValue());
                  } else if (dataType === 'datalist' && typeof rowIndex !== "undefined") {
                    dataCollection.setCellData(dataCollection.getRowPosition(), columnId, this.getValue());
                  }
                }
                objFunc();
              }
            }
          });
        }
      } catch (e) {
        console.error("[$c.win.setEnterKeyEvent] Exception :: " + e.message);
      }
    }
  } catch (ex) {
    console.error(ex);
  } finally {
    objArr = null;
  }
};

/**
 * @method 
 * @name alert
 * @description Alert 메시지 창을 호출한다.
 * @param {String} messageStr 메시지
 * @param {String} closeCallbackFncName 콜백 함수명
 * @param {Object} opts 팝업 옵션
 * @returns {String} Context가 포함된 파일경로
 * @hidden N
 * @exception 
 * @example
$c.win.alert("우편번호를 선택하시기 바랍니다.");
$c.win.alert("우편번호를 선택하시기 바랍니다.", "scwin.alertCallBack");

// 공통메시지 아이디를 전달하면 메시지로 변경하여 보여줌
$c.win.alert("$c.cfm.0002") // 저장하시겠습니까?

// 공통메시지에 치환값이 있는 경우는 Array로 전달
$c.win.alert(["bbs.cfm.0001",  "MA0101", "MA010101"]) //"카테고리 [MA0101]를 삭제하시겠습니까?\n삭제 시, [MA0101]로 등록한 게시글을 조회할 수 없습니다."

// 존재하지 않는 공통메시지 아이디인경우 String 인경우
$c.win.alert("$c.cfm.002") // "$c.cfm.002"

// 존재하지 않는 공통메시지 아이디인경우 Array 인경우
$c.win.alert(["bbs.cfm.0001",  "MA0101", "MA010101"]) //메시지 없음
 */
scwin.alert = function ($p, messageStr, closeCallbackFncName, opts) {
  return new Promise(function (resolve, reject) {
    if (typeof opts !== "object") {
      opts = {};
    }
    if ($c.util.isEmpty($p, closeCallbackFncName)) {
      closeCallbackFncName = function () {
        resolve();
      };
    }
    $c.win.messagBox($p, "alert", messageStr, closeCallbackFncName, opts);
  });
};

/**
 * @method 
 * @name confirm
 * @description Confirm 메시지 창을 호출한다.
 * @param {String} messageStr 메시지
 * @param {String} closeCallbackFncName 콜백 함수명
 * @hidden N
 * @exception 
 * @example
$c.win.confirm("변경된 코드 그룹 정보를 저장하시겠습니까?", "scwin.saveCodeGrpConfirmCallback");
$c.win.confirm("하위에 새로운 조직을 추가하시겠습니까?", "scwin.insertConfirmCallBack");
 */
scwin.confirm = function ($p, messageStr, closeCallbackFncName, opts) {
  return new Promise(function (resolve, reject) {
    if (typeof opts !== "object") {
      opts = {};
    }
    if ($c.util.isEmpty($p, closeCallbackFncName)) {
      closeCallbackFncName = function (rtn) {
        if (!$c.util.isEmpty($p, rtn) && !$c.util.isEmpty($p, rtn.clickValue)) {
          resolve(rtn.clickValue);
        } else {
          resolve(false);
        }
      };
    }
    $c.win.messagBox($p, "confirm", messageStr, closeCallbackFncName, opts);
  });
};

/**
 * @method 
 * @name getLanguage
 * @description 언어 코드를 반환한다.
 * @returns {String} 언어코드 (ex. "ko", "en")
 * @hidden N
 * @exception 
 * @example
const lang = $c.win.getLanguage();
 */
scwin.getLanguage = function ($p) {
  const language = $c.win.getLangCode($p) || navigator.language || navigator.userLanguage || navigator.systemLanguage;
  if ($c.util.isEmpty($p, language) === false && language.length > 1) {
    return language.substring(0, 2);
  } else {
    return "";
  }
};

/**
 * @method 
 * @name getPopupId
 * @description 팝업 아이디를 반환한다.
 * @hidden N
 * @exception 
 * @example
const popupId = $c.win.getPopupId();
 */
scwin.getPopupId = function ($p) {
  // const parent = opener || parent;

  if ($p.getPopupId()) {
    return $p.getPopupId();
  } else {
    return window.scwin.$w.getPopupId(window.$p);
  }
};

/**
 * @method 
 * @name moveUrl
 * @description 현재 화면을 특정 URL로 이동한다.
 * @param {String} moveUrl 화면 파일 경로
 * @param {Object} paramObj 이동 시 전달할 파라미터 값
 * @hidden N
 * @exception 
 * @example
const param = {
	id : "00001",
	name : "홍길동"
};
$c.win.moveUrl("/tmp/tmp01.xml", param);
 */
scwin.moveUrl = function ($p, moveUrl, paramObj) {
  paramObj = {
    "dataObject": {
      "type": "json",
      "name": "paramData",
      "data": paramObj
    }
  };
  const contextPath = $c.sbm.getContextPath($p);
  return $p.getFrame().setSrc(contextPath + moveUrl, paramObj);
};

/**
 * @method 
 * @name setWFrameSrc
 * @description 특정 WFrame의 웹스퀘어 페이지(XML)을 변경한다.
 * @param {Object} wframeObj WFrame 객체
 * @param {String} pageUrl 웹스퀘어 페이지(XML) 파일 경로
 * @param {Object} paramObj WFrame을 set할 시 전달할 파라미터 객체
 * @hidden N
 * @exception 
 * @example
const param = {
	id : "00001",
	name : "홍길동"
};
$c.win.setWFrameSrc(wfm_content, "/tmp/tmp01.xml", param);
 */
scwin.setWFrameSrc = function ($p, wframeObj, moveUrl, paramObj) {
  paramObj = {
    "dataObject": {
      "type": "json",
      "name": "paramData",
      "data": paramObj
    }
  };
  const contextPath = $c.sbm.getContextPath($p);
  return wframeObj.setSrc(contextPath + moveUrl, paramObj);
};

/**
 * @method 
 * @name getFrame
 * @description wframe안의 스크립트 영역에서 이 함수를 호출할 경우 자신을 감싼 wframe object를 반환한다. 전역스크립트에서 호출 시에는 null을 반환한다.
 * @returns {Object} 객체 자신을 감싼 wframe object
 * @hidden N
 * @exception 
 * @example
const frameObj = $c.win.getFrame();
 */
scwin.getFrame = function ($p) {
  try {
    return $p.getFrame();
  } catch (ex) {
    console.error(ex);
  }
};
/**
 * @method 
 * @name getParent
 * @description 자신의 부모 WFrame 객체를 찾아 반환한다.
 * @returns {Object} 자신을 감싼 wframe object의 부모 wframe 객체
 * @hidden N
 * @exception 
 * @example
const parentFrame = $c.win.getParent();
const dltObj = parentFrame.dlt_dataList1; // 자기 부모 프레임 내에 있는 dlt_dataList1에 접근
const pScwinObj = parentFrame.scwin; // 자기 부모 프레임에 있는 scwin 객체에 접근
if (!$c.util.isEmpty(pScwinObj){
	pScwinObj.search(); // 부모화면에 있는 scwin.search 함수를 호출
}
 */
scwin.getParent = function ($p) {
  try {
    return $p.parent();
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method 
 * @name setLangCode
 * @description 언어 코드를 설정한다.
 * @param {String} langCode 언어코드 (한국어 : "ko", 영어 : "en", 중국어 : "zh")
 * @hidden N
 * @exception 
 * @example
$c.win.setLangCode("ko");
$c.win.setLangCode("en");
 */
scwin.setLangCode = function ($p, langCode) {
  WebSquare.cookie.setCookie("system_language", langCode);
};

/**
 * @method 
 * @name getLangCode
 * @description 언어 코드를 반환한다.
 * @returns 언어코드 (한국어 : "ko", 영어 : "en", 중국어 : "zh");
 * @hidden N
 * @exception 
 * @example
$c.win.getLangCode();
 */
scwin.getLangCode = function ($p, langCode) {
  return WebSquare.cookie.getCookie("system_language");
};

/**
 * @method
 * @name getCbFunctionManager
 * @description 메세지 알림 콜백 Function 정보 저장을 위한 객체를 불러온다.
 * @param
 * @returns {Object} $c.win에 선언된 CB_FUNCTION_MANAGER 객체를 가져온다
 * @hidden N
 * @exception
 * @example const CB_FUNCTION_MANAGER = $c.win.getCbFunctionManager();
 */
scwin.getCbFunctionManager = function ($p) {
  return scwin.CB_FUNCTION_MANAGER;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})