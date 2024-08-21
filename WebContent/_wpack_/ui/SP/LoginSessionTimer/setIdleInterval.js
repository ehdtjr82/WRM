/*amd /ui/SP/LoginSessionTimer/setIdleInterval.xml 6208 ffc672ba43afabb639acd4da740e8aff6383c557d203e79fd8a014313e0bfa05 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setIdleTime'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.setIdleTime = {
  before: 0,
  worker: null,
  popWindow: null,
  isLogout: false,
  start({
    _time,
    showComp: showCompID,
    jsLoc = $c.sbm.getContextPath($p) + '/ui/SP/LoginSessionTimer/idleTimerWorker.js',
    _msg
  }) {
    const {
      unit = 0,
      max = 10,
      first = 3,
      chkInterval = 1
    } = _time;
    const showComp = $p.getComponentById(showCompID);
    const createWorker = () => {
      this.worker = new Worker(jsLoc);
      this.worker.postMessage({
        command: 'initialize',
        maxWait: max,
        alarmTime: first,
        interval: 1000,
        chkInterval: chkInterval
      });
      this.worker.onmessage = e => {
        let _vv = e.data.remainTime;
        if (!_vv) {
          _vv = this.before;
        } else {
          this.before = e.data.remainTime;
        }
        const _v = this.convertSecondsToMinutes(_vv);
        showComp.setValue(_v);
        if (e.data === 'showPopup') {
          this.popWindow = this.popup(true, _msg);
        }
        if (this.popWindow && this.popWindow.popupWin && this.popWindow.getWindow().tbx_time) {
          this.popWindow.getWindow().tbx_time.setValue(_v + ' 남았습니다.');
        }
        if (e.data === 'chkSvrRemainTime') {
          this.svr($p, 'getRemainTime');
        }
        if (e.data.remainTime <= 0 && !this.isLogout) {
          console.log('로그아웃 처리!!');
          this.svr($p, 'destroy');
          this.isLogout = true;
        }
      };
    };
    if (window.Worker) {
      createWorker();
    } else {
      console.log('Your browser doesn\'t support web workers.');
    }
  },
  convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes + "분 " + remainingSeconds + "초";
  },
  continue() {
    this.worker.postMessage('resetTimer');
  },
  stop() {
    this.isLogout = true;
    this.popup(false);
    this.worker.postMessage('stopWorker');
    $c.win.alert($p, "Session이 종료 되었습니다.\n로그인 화면으로 이동하겠습니다.", function () {
      $c.win.goHome($p);
    });
  },
  popup(flag, opt) {
    console.log("자동로그아웃 확인창 오픈 시간 : " + $p.getCurrentServerDate("yyyy-MM-dd HH:mm:ss"));
    if (flag) {
      const popId = "idleTimePopup" + (Math.random() * 16).toString().replace(".", "");
      const data = {
        msgData: opt,
        id: popId
      };
      const width = opt.width || 450;
      const height = opt.height || 250;
      const deviceWidth = parseFloat($("body").css("width"));
      const deviceHeight = parseFloat($("body").css("height"));
      let borderSize = 4;
      if (deviceWidth > 0 && width > deviceWidth) {
        width = deviceWidth - borderSize;
      }
      if (deviceHeight > 0 && height > deviceHeight) {
        height = deviceHeight - borderSize;
      }
      const options = {
        id: popId,
        popupName: opt.title || 'idleTimePopup',
        type: "wframePopup",
        width: width + "px",
        height: height + "px",
        top: opt.top || "140px",
        left: opt.left || "500px",
        modal: true,
        dataObject: {
          type: "json",
          data,
          name: "paramData"
        },
        alwaysOnTop: true,
        useModalStack: true,
        useMaximize: false,
        className: opt.className || "",
        windowDragMove: opt.windowDragMove !== false,
        windowMoveType: opt.windowMoveType || "restrict",
        closeAction: function () {
          let popWin = $p.getPopupWindow(this.id);
          if (popWin.scwin.continue) {
            console.log("연장함!!");
            scwin.setIdleTime.svr($p, 'continue');
          } else {
            console.log('연장 안함!!');
          }
          scwin.setIdleTime.popWindow = null; // 팝업이 닫힌 후 popWindow 초기화
          delete popWin;
          return true;
        },
        popupUrl: "../popup"
      };
      $p.openPopup($c.sbm.getContextPath($p) + "/ui/SP/LoginSessionTimer/idleTimeBox.xml", options);
      this.popWindow = $p.getPopup(popId);
      return this.popWindow;
    } else {
      if (this.popWindow) {
        this.popWindow = null;
        this.popWindow.close();
      }
    }
  },
  svr($p, action, opt = {}) {
    console.log("세션 체크 시작 시간 : " + $p.getCurrentServerDate("yyyy-MM-dd HH:mm:ss"));
    const {
      max = 10
    } = opt._time || {};
    const _sOpt = {
      id: "_sbm_" + action + "Submission",
      action: $c.sbm.getContextPath($p) + $c.sbm.getServiceURL($p) + "/session/" + action,
      method: "post",
      isProcessMsg: false
    };
    const _param = action === 'create' ? {
      info: {
        loginId: "100001",
        ExpireTime: max
      }
    } : {};
    $c.sbm.executeDynamic($p, _sOpt, _param).then(e => {
      if (e.responseJSON.rsMsg.statusCode == 'S') {
        console.log(e.responseJSON.rsMsg.statusMsg);
        if (e.responseJSON.TYPE == 'S') {
          this.start(opt);
        } else if (e.responseJSON.TYPE == 'C') {
          this.continue();
        } else if (e.responseJSON.TYPE == 'D') {
          this.stop();
        } else if (e.responseJSON.TYPE == 'R') {
          let rTime = e.responseJSON.remainTime || 99;
          this.sync(rTime);
        }
      }
    });
  },
  sync(_svrRemainTime) {
    this.worker.postMessage({
      command: 'syncTimer',
      svrRemainTime: _svrRemainTime
    });
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})