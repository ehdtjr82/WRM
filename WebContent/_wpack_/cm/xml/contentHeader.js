/*amd /cm/xml/contentHeader.xml 4673 a6f06ca9fb0bb978f8903c2c5b199e30a11c7a16d9d6a3ce58da03be07d8cf7b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.wfTitleFavInit();
};
scwin.wfTitleFavInit = function () {
  const param = $c.data.getParameter($p, "menuInfo", $p.parent().$p);
  const menuInfoArr = [];
  try {
    let favStatus = "F";
    if ($p.main().wfm_side.getWindow().scwin.hasFavCode(param.menuCode) > 0) {
      favStatus = "T";
    }
    scwin.setFavStatus(param.menuCode, favStatus);
    scwin.setMenuNavi(param.menuCode, param.menuNm, param.menuType);
  } catch (ex) {
    grp_main.hide();
  }
};
scwin.setMenuNavi = function (menuCode, menuName, menuType) {
  let naviArr, naviArrLen, naviStr, menuNm;
  try {
    if (typeof menuType !== "undefined" && menuType === "SP") {
      menuNm = menuName;
      naviArr = ["샘플화면", menuName];
    } else {
      naviArr = $p.main().wfm_side.getWindow().scwin.getMenuNavigation(menuCode).split("%|%");
      naviArrLen = parseInt(naviArr.length / 2);
      naviStr = "";
      menuNm = naviArr[0];
      for (let i = naviArrLen; i >= 0; i--) {
        naviStr += naviArr[i * 2];
        if (i < naviArrLen && i > 0) {
          naviStr += " > ";
        }
      }
    }
  } catch (ex) {
    naviStr = "";
    menuNm = menuName;
  } finally {
    scwin.generator_insertMenu(naviArr);
    txt_h1.setValue(menuNm);
  }
};
scwin.generator_insertMenu = function (naviArr) {
  let genChildren;
  let arr = [];

  // 배열 거꾸로 풀기
  if (naviArr.length > 2) {
    for (let i = naviArr.length - 1; i >= 0; i--) {
      if (i % 2 === 0 && naviArr[i] != "") {
        arr.push(naviArr[i]);
      }
    }
    ;
  } else {
    arr = naviArr;
  }
  ;

  // draw
  for (let num = 0; num < arr.length; num++) {
    gen_navi.insertChild(num);
    genChildren = gen_navi.getChild(num, "spn_menu");
    genChildren.setValue(arr[num]);
  }
  ;
};
scwin.setFavStatus = function (menuCode, favStatus) {
  btn_fav.setUserData("t_menuCode", menuCode);
  btn_fav.setUserData("t_favStatus", favStatus);
  if (favStatus == "T") {
    btn_fav.addClass("on");
  } else {
    btn_fav.removeClass("on");
  }
};
scwin.btn_fav_onclick = function () {
  const menuCode = btn_fav.getUserData("t_menuCode");
  let favStatus = btn_fav.getUserData("t_favStatus");
  $p.main().wfm_side.getWindow().scwin.updateFav(menuCode, favStatus);
  if (favStatus == "T") {
    favStatus = "F";
  } else {
    favStatus = "T";
  }
  scwin.setFavStatus(menuCode, favStatus);
};
scwin.showScreenInfo = function () {
  const pageUrl = $p.parent().$p.getFrame().getSrc();
  $c.win.alert($p, "[" + txt_h1.getValue() + "] 페이지의 파일 경로는 다음과 같습니다.\n" + pageUrl);
};

/**
 * 화면을 갱신한다.
 */
scwin.reload = function () {
  $p.parent().$p.reinitialize();
};
scwin.btn_home_onclick = function () {
  $c.win.goHome($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'grp_main',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'txt_h1',label:'Page Title',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_home',outerDiv:'false',style:'','ev:onclick':'scwin.btn_home_onclick'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_navi',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'spn_menu',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'rt',style:'margin-left: 4px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_fav_onclick',toolTip:'즐겨찾기를 추가/해제합니다',style:'',id:'btn_fav',type:'button',class:'btn_fav'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.showScreenInfo',style:'',id:'',type:'button',title:'화면 정보',class:'btn_cm guide icon'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.reload',style:'',id:'',type:'button',title:'화면 갱신',class:'btn_cm refresh icon'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'hide',id:'',style:''}}]}]}]})