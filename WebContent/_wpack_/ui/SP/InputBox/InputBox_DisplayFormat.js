/*amd /ui/SP/InputBox/InputBox_DisplayFormat.xml 55731 9f158a8e0ef741f653d7e5e7a9d2eacfdcb68d4fe6b81439422d621b39a5363f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 InputBox의 데이터 형태에 따른 Format 적용 방법을 제공한다.\n지정한 형태의 format을 그대로 적용하는 displayFormat 속성 및 사용자가 직접 정의하여 사용하는 \ndisplayFormatter 기능 및 이와 관련된 API에 대하여 기술하고 있다.   \n각 데이터 포맷 타입별 세부 내용은 다음과 같다.\n</div>\n<div class="etc_tit">1. displayFormat</div>\n  1.1. 기본 속성으로 지정된 format의 형식을 따라 그대로 표현하게 된다.\n  1.2. 예시\n	displayFormat = \'######-#######\'\n	결과 : \'1111112222222\' => \'111111-2222222\' \n<div class="etc_tit"></div>	\n<div class="etc_tit">2. displayFormatter</div>\n  2.1. 사용자 직접 정의한 함수를 지정하여 format을 표현하게 된다.\n  2.2. 예시\n	displayFormatter = \'fn_userFormat1\'\n\n		function fn_userFormat1(arg){\n			return return arg.substring(0, 4) + ":" + arg.substring(4, 6) + ":" + arg.substring(6)\n		}\n\n	결과 : \'111111\' => \'11:11:11\'\n<div class="etc_tit"></div>	\n<div class="etc_tit">3. 화폐 표시</div>\n   3.1. 유로화를 표시한다.\n    [ 예시 ]\n	dataType = \'euro\'\n	결과 : \'234512130000,00\' => \'234.512.130.000,00\'\n	 \n   3.2. 인도 화폐를 표시한다.\n   [ 예시 ]\n	dataType = \'rupee\'\n	결과 : \'234512130000,00\' => \'23,45,121,30,00,000\'\n	 \n   3.3. 카자흐스탄 화폐를 표시한다.\n   [ 예시 ]\n	dataType = \'tenge\'\n	결과 : \'234512130000,00\' => \'234 512 130 000-00\'  \n<div class="etc_tit"></div>			\n<div class="etc_tit">4. 관련 API</div>\n	4.1. setDisplayFormat(format) : format을 설정한다.\n	4.2. getDisplayValue() : 포맷, 또는 마스킹이 설정된 input의 값을 반환한다.\n	4.3. setDisplayFormatter(formatter): format용 함수를 설정한다.\n	4.4. getDisplayFormatter() : 설정된 format용 함수를 반환한다.   \n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">						\n<div class="etc_tit">1. 과정</div>\n	1.1. 각각의 InputBox 항목의 속성을 확인한다.\n	1.2. \'getValue\' 등의 버튼을 클릭하여 결과값을 실행한다.\n<div class="etc_tit"></div>	\n<div class="etc_tit">2. 결과</div>\n	2.1. displayFormat이 적용된 항목의 값을 확인한다.\n	2.2. displayFormatter 가 적용된 항목의 값을 확인한다.\n	2.3. format 설정과 관련된 API의 기능을 확인한다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_formatData'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'phoneFormat',name:'phoneFormat',dataType:'text'}},{T:1,N:'w2:key',A:{id:'moneyFormat',name:'moneyFormat',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateFormat',name:'dateFormat',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'phoneFormat',E:[{T:4,cdata:'01043211090'}]},{T:1,N:'moneyFormat',E:[{T:4,cdata:'2345663407.56'}]},{T:1,N:'dateFormat',E:[{T:4,cdata:'20161111'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 초기화 함수
 * 
 * @event
 * @name onpageload
 * @description 초기화 함수
 */
scwin.onpageload = function () {
  ibx_idNum.setValue("1234561234567");
  ibx_phoneNum.setValue("021110000");
  ibx_time.setValue("123402");
  ibx_round.setValue("23.4567");
  ibx_floor.setValue("23.4567");
  ibx_ceil.setValue("23.4533");
  ibx_commaFormatter.setValue("3000000");
  ibx_money.setValue("300");
  ibx_percent.setValue("78.567");
  ibx_text.setValue("1234567");
  ibx_date.setValue("20120319");
  ibx_date2.setValue("20120319");
  ibx_toUpperFormatter.setValue("displayFormatter");
  ibx_phoneFormat.setValue("01089511234");
  ibx_moneyFormat.setValue("2345663407.56");
  ibx_dateFormat.setValue("20160716");
  scwin.disposableFormat_Phone = false;
  scwin.disposableFormat_Money = false;
  scwin.disposableFormat_Date = false;
  ibx_cmoneyFormatter.setValue("8947391200");
};

/**
 * 영어 알파벳을 대문자로 교체한다.
 * 
 * @method
 * @name toUpperFormatter
 * @description 영어 알파벳을 대문자로 교체한다.
 * @param {String} value 대문자 교체대상문자.
 */
scwin.toUpperFormatter = function (value) {
  return value.toUpperCase();
};

/**
 * setDisplayFormat의 버튼 클릭시, 포멧 세팅
 * 
 * @method
 * @name btnClick_format
 * @description setDisplayFormat의 버튼 클릭시, 포멧 세팅
 */
scwin.btnClick_format = function () {
  // var frontId = this.getID().split("_")[1];
  const splitId = this.getID().split("_");
  const splitLen = splitId.length;
  const frontId = splitId[splitLen - 2];
  const backId = splitId[splitLen - 1];
  const fullId = frontId + "_" + backId;
  const btnId = "btn_" + fullId;
  const ibxId = "ibx_" + frontId;
  const componentBtnId = $c.util.getComponent($p, btnId);
  const componentIbxId = $c.util.getComponent($p, ibxId);

  //split[2]의 문자열이 Gv일 때
  if (backId == "Gv") {
    $c.win.alert($p, componentIbxId.getValue()); //ibx의 Value를 알림창에 띄운다.
  }
  //split[2]의 문자열이 Sdf일 때
  else if (backId == "Sdf") {
    //split[1]의 문자열이 PhoneFormat일 때
    if (frontId == "phoneFormat") {
      componentIbxId.setDisplayFormat("###-####-####"); //ibx컴포넌트의 DisplayFormat 속성에 해당 포멧을 적용한다
    }
    //split[1]의 문자열이 MoneyFormat일 때
    else if (frontId == "moneyFormat") {
      componentIbxId.setDisplayFormat("#,###.##0"); //ibx컴포넌트의 DisplayFormat 속성에 해당 포멧을 적용한다
    }
    //split[1]의 문자열이 DateFormat일 때
    else if (frontId == "dateFormat") {
      componentIbxId.setDisplayFormat("yyyy/MM/dd"); //ibx컴포넌트의 DisplayFormat 속성에 해당 포멧을 적용한다
    }
    //split[1]의 문자열이 그 외일 때 (오류)
    else {
      $c.win.alert($p, "Sdf Error!");
    }
  }
  //split[2]의 문자열이 Gdf일 때
  else if (backId == "Gdf") {
    $c.win.alert($p, componentIbxId.getDisplayFormat()); //ibx컴포넌트의 DisplayFormat 속성 값을 알림창에 띄운다
  }
  //split[2]의 문자열이 Gdv일 때
  else if (backId == "Gdv") {
    $c.win.alert($p, componentIbxId.getFormattedValue()); //ibx컴포넌트의 DisplayFormat 속성의 Vlaue 값을 알림창에 띄운다
  }
  //split[2]의 문자열이 그 외일 때 (오류)
  else {
    $c.win.alert($p, "Format Error!");
  }
};

/**
 * setDisplayFormatter의 버튼 클릭시, 포메터 세팅
 * 
 * @method
 * @name btnClick_formatter
 * @description setDisplayFormatter의 버튼 클릭시, 포메터 세팅
 */
scwin.btnClick_formatter = function () {
  const splitId = this.getID().split("_");
  const splitLen = splitId.length;
  const frontId = splitId[splitLen - 2];
  const backId = splitId[splitLen - 1];
  const fullId = frontId + "_" + backId;
  const btnId = "btn_" + fullId;
  const ibxId = "ibx_" + frontId;
  const componentBtnId = $p.getComponentById(btnId);
  const componentIbxId = $p.getComponentById(ibxId);

  //split[2]의 문자열이 Gv일 때
  if (backId == "Gv") {
    //split[1]의 문자열이 ToUpperFormatter일 때
    if (frontId.indexOf("Formatter") > 0) {
      $c.win.alert($p, componentIbxId.getValue()); //버튼그룹에 속한 ibx의 ID Value를 알림창에 띄운다.
    } else {
      //ibx의 ID를 얻고 길이를 가공한 후, 컴포넌트로 만들고 Value를 알림창에 띄운다.
      $c.win.alert($p, $c.util.getComponent($p, getComponentById.slice(0, componentIbxId.getID().length - 3)).getValue());
    }
  }
  //split[2]의 문자열이 Sdf일 때
  else if (backId == "Sdf") {
    //split[1]의 문자열이 PhoneFormatter일 때
    if (frontId == "phoneFormatter" && scwin.disposableFormat_Phone == false) {
      componentIbxId.setDisplayFormatter("$c.str.formatPhone");
      //componentIbxId.setValue($c.str.formatPhone(componentIbxId.getValue())); //ibx의 value에 공통함수($c.str.formatPhone)로 포메터 적용
      scwin.disposableFormat_Phone = true;
    }
    //split[1]의 문자열이 MoneyFormatter일 때
    else if (frontId == "moneyFormatter" && scwin.disposableFormat_Money == false) {
      componentIbxId.setDisplayFormatter("$c.num.formatNumber");

      //componentIbxId.setValue($c.num.formatNumber(componentIbxId.getValue(), "won")); //ibx의 value에 공통함수($c.num.formatNumber)로 포메터 적용
      scwin.disposableFormat_Money = true;
    }
    //split[1]의 문자열이 DateFormatter일 때
    else if (frontId == "dateFormatter" && scwin.disposableFormat_Date == false) {
      componentIbxId.setDisplayFormatter("$c.date.formatDate");
      //componentIbxId.setValue($c.date.formatDate(componentIbxId.getValue(), "slash")); //ibx의 value에 공통함수($c.date.formatDate)로 포메터 적용
      scwin.disposableFormat_Date = true;
    }
    //이미 포멧터가 적용 됐을 경우
    else {
      $c.win.alert($p, "이미 포멧터가 적용 되었습니다.");
    }
  }
  //split[2]의 문자열이 Gdf일 때
  else if (backId == "Gdf") {
    //split[1]의 문자열이 PhoneFormatter일 때
    if (frontId == "phoneFormatter") {
      $c.win.alert($p, "$c.str.formatPhone"); //사용한 공통함수명을 알림창에 띄운다.
    }
    //split[1]의 문자열이 MoneyFormatter일 때
    else if (frontId == "moneyFormatter") {
      $c.win.alert($p, "$c.num.formatNumber"); //사용한 공통함수명을 알림창에 띄운다.
    }
    //split[1]의 문자열이 DateFormatter일 때
    else if (frontId == "dateFormatter") {
      $c.win.alert($p, "$c.date.formatDate"); //사용한 공통함수명을 알림창에 띄운다.
    }
    //split[1]의 문자열이 그 외일 때 (오류)
    else {
      $c.win.alert($p, "Gdf Error!");
    }
  }
  //split[2]의 문자열이 Gdv일 때
  else if (backId == "Gdv") {
    $c.win.alert($p, componentIbxId.getFormattedValue()); //포메터가 적용된 Value를 알림창에 띄운다.	
  }
  //split[2]의 문자열이 그 외일 때 (오류)
  else {
    $c.win.alert($p, "Formatter Error!");
  }
};

/**
 * 유럽연합 화폐
 * Euro Formatter
 * 
 * @event
 * @name btn_euro_onclick
 * @description
 * 유럽연합 화폐
 * Euro Formatter
 */
scwin.btn_euro_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("euro");
};

/**
 * @event
 * @name btn_euroFormatter_onclick
 * @description 유럽연합 화폐단위로 formatter를 적용한다.
 */
scwin.btn_euroFormatter_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("euro", "#`###~00", "`", "~");
};

/**
 * 인도 화폐
 * Rupee Formatter
 * 
 * @event
 * @name btn_rupee_onclick
 * @description
 * 인도 화폐
 * Rupee Formatter
 */
scwin.btn_rupee_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("rupee");
};

/**
 * @event
 * @name btn_rupeeFormatter_onclick
 * @description 인도 화폐단위로 formatter를 적용한다.
 */
scwin.btn_rupeeFormatter_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("rupee", "##|##|###=00", "|", "=");
};

/**
 * 카자흐스탄 화폐
 * Tenge Formatter
 * 
 * @event
 * @name btn_tenge_onclick
 * @description
 * 카자흐스탄 화폐
 * Tenge Formatter
 */
scwin.btn_tenge_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("tenge");
};

/**
 * @event
 * @name btn_tengeFormatter_onclick
 * @description 카자흐스탄 화폐단위로 formatter를 적용한다.
 */
scwin.btn_tengeFormatter_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("tenge", "#@###:00", "@", ":");
};

/**
 * 숫자
 * Number Formatter
 * 
 * @event
 * @name btn_number_onclick
 * @description
 * 숫자
 * Number Formatter
 */
scwin.btn_number_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("number");
};

/**
 * @event
 * @name btn_numberFormatter_onclick
 * @description 숫자 formatter를 적용한다.
 */
scwin.btn_numberFormatter_onclick = function () {
  ibx_cmoneyFormatter.changeCurrency("number", "#_###/00", "_", "/");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'msgbox info',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'',label:'텍스트 입력 컴포넌트 중에서 가장 기본이 되는 컴포넌트이다. 문자열을 입력할 수 있는 기본 상태에서 읽기 전용 여부를 설정하여 제어할 수 있으며, 데이터 유형별 입력 설정 및 포맷을 지정할 수 있다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'msgbox info',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'',label:'displayFormat',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',for:'',id:'',label:'- dataType에 따라 사용가능한 포맷이 다르며, 단순 포맷을 정의할 수 있다.<br/>',style:'',tagname:'',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'txt_con',escape:'false',for:'',id:'',label:'- 아래 샘플들의 inputbox에 정의된 dataType과 displayFormat 속성을 참고한다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="text" 이며, fn_userFormat1은 "123456-1234567" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주민번호',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'1234561234567',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_idNum',style:'width:100%',displayFormat:'######-#######','ev:onchange':'',initValue:'','ev:onkeyup':'',displayFormatter:'','ev:onviewchange':'',maxlength:'13',userData1:'',minlength:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_idNum_Gv',style:'',type:'button','ev:onclick':'scwin.btnClick_format'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_idNum_Gdv',style:'',type:'button','ev:onclick':'scwin.btnClick_format'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="text" 이며, fn_userFormat2는 "02)111-0000" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'021110000',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_phoneNum',style:'width:100%;',displayFormat:'##)###-####',initValue:'',displayFormatter:'',maxlength:'11'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_phoneNum_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',leftOffImageClass:'btn_phoneNum_Gdv',style:'',id:'btn_phoneNum_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="text" 이며, fn_userFormat3은 "12:34:02" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시간',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'123402',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_time',style:'width:100%;',displayFormat:'##:##:##',initValue:'',displayFormatter:'',maxlength:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_time_Gv',style:'',type:'button','ev:onclick':'scwin.btnClick_format'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_time_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat4는 "23.46" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소수두째자리까지표현(반올림)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'23.4567',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_round',style:'width:100%;',displayFormat:'##.##',dataType:'number',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_round_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_round_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat5는 "23.45" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소수두째자리까지표현(내림)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'23.4567',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_floor',style:'width:100%;',dataType:'number',displayFormat:'#.##[floor]',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_floor_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_floor_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat6은 "23.46" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소수두째자리까지표현(올림)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'23.4533',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_ceil',style:'width:100%;',dataType:'number',displayFormat:'#.##[ceil]',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_ceil_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_ceil_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat7은 "3,000,000" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세번째자리마다 , 표시',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'3000000',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_commaFormatter',style:'width:100%;',dataType:'number',displayFormat:'#,###',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_commaFormatter_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_commaFormatter_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat8은 "$ 300" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액 ($)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'300',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_money',style:'width:100%;',displayFormat:'$ #,###,00',dataType:'number',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_money_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_money_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="number" 이며, fn_userFormat9는 "78.57%" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비율',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'78.567',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_percent',dataType:'number',allowChar:'0-9, .',style:'width:100%;',displayFormat:'##.#0%',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_percent_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_percent_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="text" 이며, fn_userFormat10은 "12345.67" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'텍스트',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'1234567',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_text',style:'width:100%;',dataType:'text',maxlength:'',allowChar:'0-9',displayFormat:'####.##',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_text_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_text_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="date" 이며, fn_userFormat11은 "12/03/19" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'날짜',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'20120319',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_date',style:'width:100%;',dataType:'date',displayFormat:'',ioFormat:'YYyyMMdd',dateMask:'yy/MM/dd',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_date_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_date_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="date" 이며, fn_userFormat12는 "2012년 03월 19일" 형식으로 반환한다.',class:'sub_contents'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'날짜',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'20120319',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_date2',style:'width:100%;',dataType:'date',displayFormat:'yyyy년 MM월 dd일',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_date2_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_date2_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'msgbox info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'',label:'displayFormat',class:'txt_msg'}},{T:1,N:'w2:textbox',A:{tagname:'',for:'',style:'',id:'',label:'- displayFormatter 속성에 사용자정의 함수를 선언 해당 사용자정의 함수의 return 값을 표시한다.',class:'txt_con',escape:'false'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'dataType="text" 이며, fn_userFormatter1 은 "DISPLAYFORMATTER" 형식으로 반환한다.',class:''}}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'toUpperCase',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tal',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{class:'th_pt',id:'',label:'입력값',style:''}},{T:1,N:'w2:span',A:{class:'th_txt',id:'',label:'displayFormatter',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_toUpperFormatter',style:'width:100%',displayFormatter:'scwin.toUpperFormatter',displayFormat:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_toUpperFormatter_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_toUpperFormatter_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'msgbox info',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'',label:'동적인 포맷과 관련된 API',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- setDisplayFormat(format) : format을 설정한다.',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- getDisplayValue() : 포맷, 또는 마스킹이 설정된 input의 값을 반환한다.',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- setDisplayFormatter(formatter): format용 함수를 설정한다.',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- getDisplayFormatter() : 설정된 format용 함수를 반환한다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'dataType="text" 이며, fn_userFormatter1 은 "011-1234-5678" 형식으로 반환한다.',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'lybox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormat("###-####-####")',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_phoneFormat',style:'width:100%',ref:'',displayFormat:'',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_phoneFormat_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_phoneFormat_Sdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormat(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_phoneFormat_Gdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormat()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_phoneFormat_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormatter("$c.str.formatPhone")',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_phoneFormatter',style:'width:100%',ref:'data:dma_formatData.phoneFormat',displayFormat:'',displayFormatter:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_phoneFormatter_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_phoneFormatter_Sdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormatter(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_phoneFormatter_Gdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormatter()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_phoneFormatter_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'dataType="number" 이며, fn_userFormatter2 는 "2,345,663,407.56원" 형식으로 반환한다.',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'lybox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormat("#,###.##0")',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_moneyFormat',style:'width: 100%',dataType:'number'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_moneyFormat_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_moneyFormat_Sdf',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormat(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_moneyFormat_Gdf',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormat()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_moneyFormat_Gdv',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormatter("$c.num.formatNumber")',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_moneyFormatter',style:'width: 100%',ref:'data:dma_formatData.moneyFormat',displayFormat:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_moneyFormatter_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_moneyFormatter_Sdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormatter(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_moneyFormatter_Gdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormatter()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_moneyFormatter_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'dataType="date" 일때 dateMask의 기본값은 yyyy-MM-dd 이며, fn_userFormatter3 은 "2013/11/23" 형식으로 반환한다',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormat("yyyy/MM/dd)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_dateFormat',style:'width: 100%',displayFormat:'yyyyMMdd',dataType:'date'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_dateFormat_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_dateFormat_Sdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormat(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_dateFormat_Gdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormat()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_format',style:'',id:'btn_dateFormat_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'.setDisplayFormatter("$c.date.formatDate")',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_dateFormatter',style:'width: 100%',ref:'data:dma_formatData.dateFormat',dataType:'date',displayFormat:'yyyyMMdd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_dateFormatter_Gv',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_dateFormatter_Sdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.setDisplayFormatter(format)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_dateFormatter_Gdf',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayFormatter()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnClick_formatter',style:'',id:'btn_dateFormatter_Gdv',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'.getDisplayValue()'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:'',tagname:'h4'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'dataType 과 Mask를 사용(예: dataType="euro" euroMask="#.###,00")하여 나라별 통화를 표시하며, 통화를 변경하기 위해서는 .changeCurrency() API를 사용한다.',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'lybox col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'euro',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_euro',applyFormat:'all',ref:'data:dma_currency.commonMoney',dataType:'euro',style:'width: 100%;',euroMask:'#.###,00'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'rupee (인도)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_rupee',applyFormat:'all',ref:'data:dma_currency.commonMoney',dataType:'rupee',style:'width: 100%;',rupeeMask:'##,##,###.00'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'tenge (카자흐스탄)',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_tenge',applyFormat:'all',ref:'data:dma_currency.commonMoney',dataType:'tenge',style:'width:100%',tengeMask:'# ###-00'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'msgbox info',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'',label:'API : input1.changeCurrency(type, format, delimeter, decimalDelimeter) type에 따른 format을 확인하여 통화를 표시한다.',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- type : 새로 설정할 dataType(number, euro, rupee(인도), tenge(카자흐스탄))',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- format : 새로 설정할 displayFormat 미입력시 dataType에 따른 option의 mask가 format으로 적용된다.(numberMask, euroMask, rupeeMask, tengeMask)',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- delimeter : 통화 구분자',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',id:'',label:'- decimalDelimeter : 통화 소수 구분자',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{dataType:'number',euroMask:'#.###,00',id:'ibx_cmoneyFormatter',numberMask:'#,###.00',rupeeMask:'##,##,###.00',style:'width:100%',tengeMask:'# ###-00'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_euro_onclick',id:'trigger13',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"euro"'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_euroFormatter_onclick',id:'trigger14',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"euro","#`###~00","`","~"'}]}]},{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_rupee_onclick',id:'trigger15',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"rupee"'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_rupeeFormatter_onclick',id:'trigger16',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"rupee","##|##|###=00","|","="'}]}]},{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_tenge_onclick',id:'trigger17',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"tenge"'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_tengeFormatter_onclick',id:'trigger18',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"tenge","#@###:00","@",":"'}]}]},{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_number_onclick',id:'trigger19',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"number"'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_numberFormatter_onclick',id:'trigger20',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'"number", "#_###/00","_","/"'}]}]}]}]}]}]}]}]})