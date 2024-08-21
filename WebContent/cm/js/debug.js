// =============================================================================
/**
 * 디버그용 개발자도구 Console 로그 출력 관련 함수를 작성한다.
 *
 * @author Inswave Systems
 * @class console
 * @namespace console
 */
// =============================================================================

var DEBUG_MODE = false; 


//웹스퀘어 엔진이 디버그 모드가 아닐 경우 경우 console 로그가 출력되지 않도록 한다.
if (WebSquare.core.getConfiguration("debug") === "false") {
	
	// 운영 환경(DEBUG_MODE = false)에서 디버깅을 위해서 Console 로그 출력이 필요한 경우에 
	// debugMode 파라미터를 true로 설정하면 Console 로그가 출력된다.
	// ex) http://127.0.0.1/?debugMode=true
	var debugMode = $p.getParameter("debugMode");
	if (debugMode == "true") {
		DEBUG_MODE  = true;
	} else {
		DEBUG_MODE = false;
	}
}  else {
	DEBUG_MODE = true;
}

/**
 * 일반 메시지를 웹 브라우저 콘솔에 출력한다.
 *
 * 추가 매개변수와 함께 문자열 치환을 사용할 수 있다.
 *
 * @param {Object} 출력할 메시지 문자열 또는 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
var user = { name : "홍길동", age : 29 };
console.log(user);

var userList = [
	{ name : "홍길동", age : 29 },
	{ name : "김용수", age : 40 },
	{ name : "박찬용", age : 40 }
];
console.log(userList);

console.log("사용자 등록이 완료되었습니다.");
console.log("%s님의 %d번째 등록이 완료되었습니다", "홍길동", 5);
 */
console.log = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.log, console);
	} else {
		return new Function();
	}
})();


/**
 * 정보 메시지를 웹 브라우저 콘솔에 출력한다.
 *
 * 추가 매개변수와 함께 문자열 치환을 사용할 수 있다.
 *
 * @param {Object} 출력할 메시지 문자열 또는 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
var user = { name : "홍길동", tel : "010-2344-2323" };
console.info(user);

var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.info(userList);

console.info("사용자 등록이 완료되었습니다.");
console.info("%s님의 %d번째 등록이 완료되었습니다", "홍길동", 5);
 */
console.info = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.info, console);
	} else {
		return new Function();
	}
})();


/**
 * 스택 출력을 웹 브라우저 콘솔에 출력한다.
 *
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
console.trace();
 */
console.trace = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.trace, console);
	} else {
		return new Function();
	}
})();


/**
 * 정보 메시지를 웹 브라우저 콘솔에 출력한다.
 *
 * 추가 매개변수와 함께 문자열 치환을 사용할 수 있다.
 *
 * @param {Object} 출력할 메시지 문자열 또는 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
var user = { name : "홍길동", tel : "010-2344-2323" };
console.error(user);

var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.error(userList);

console.error("사용자 등록에 실패 했습니다.");
console.error("%s님의 %d번째 등록에 실패 했습니다.", "홍길동", 5);

try {
	var idx = idx2;
} catch(ex) {
	console.error(ex);
}
 */
console.error = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.error, console);
	} else {
		return new Function();
	}
})();


/**
 * 경고 메시지를 웹 브라우저 콘솔에 출력한다.
 *
 * 추가 매개변수와 함께 문자열 치환을 사용할 수 있다.
 *
 * @param {Object} 출력할 메시지 문자열 또는 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
var user = { name : "홍길동", tel : "010-2344-2323" };
console.warn(user);

var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.warn(userList);

console.warn("사용자 등록이 완료되었습니다.");
console.warn("%s님의 %d번째 등록이 완료되었습니다", "홍길동", 5);
 */
console.warn = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.warn, console);
	} else {
		return new Function();
	}
})();


/**
 * 디버그용 메시지를 웹 브라우저 콘솔에 출력한다.
 *
 * 추가 매개변수와 함께 문자열 치환을 사용할 수 있다.
 *
 * @param {Object} 출력할 메시지 문자열 또는 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
var user = { name : "홍길동", tel : "010-2344-2323" };
console.debug(user);

var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.debug(userList);

console.debug("사용자 등록이 완료되었습니다.");
console.debug("%s님의 %d번째 등록이 완료되었습니다", "홍길동", 5);
 */
console.debug = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.debug, console);
	} else {
		return new Function();
	}
})();


/**
 * 인자로 전달된 객체를 덤프해서 보기 쉽게 표시한다.
 *
 * JSON이나 Array를 Console창에 출력 시에 적합함
 *
 * @param {Object} Console에 출력할 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Object} 콘솔 로그 출력
 * @example
var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.dir(userList);
 */
console.dir = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.dir, console);
	} else {
		return new Function();
	}
})();


/**
 * 인자로 전달된 객체를 테이블 형식으로 표시한다.
 *
 * IE에서는 console.log 함수와 동일하게 동작함. (IE에서는 console.table() 미지원)
 *
 * JSON이나 Array를 Console창에 출력 시에 적합함.
 *
 * @param {Object} Console에 출력할 객체
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Object} 콘솔 로그 출력
 * @example
var userList = [
	{ name : "홍길동", tel : "010-2344-2323" },
	{ name : "김용수", tel : "010-2112-7562" },
	{ name : "박찬용", tel : "010-4241-2322" }
];
console.table(userList);
 */
if ($c.util.getUserAgent() !== "msie") {
	console.table = (function() {
		if (DEBUG_MODE === true) {
			return Function.prototype.bind.call(console.table, console);
		} else {
			return new Function();
		}
	})();
} else {
	console.table = (function() {
		if (DEBUG_MODE === true) {
			return Function.prototype.bind.call(console.log, console);
		} else {
			return new Function();
		}
	})();
}


/**
 * 특정 행이 몇 번 실행되었는지 확인하기 위해서 사용한다.
 *
 * @param {String} 카운터 레이블 (행의 카운터 체크를 위한 레이블)
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @example
for (var idx = 0; idx < 100; idx++) {
	console.count("Level1");
	if (idx % 5 === 0) {
		console.count("Level2");
	}
}
 */
console.count = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.count, console);
	} else {
		return new Function();
	}
})();


/**
 * 콘솔 창에 시간 측정을 시작한다. (밀리초 단위로 표시됨)
 *
 * @param {String} 시간 측정 아이디 (console.timeEnd 실행 시 console.time 아이디와 동일해야 함)
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Date} 시간 출력
 * @example
console.time("Check-1");
for (var i = 0; i < 1000000; i++) { }
console.timeEnd("Check-1");
 */
console.time = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.time, console);
	} else {
		return new Function();
	}
})();


/**
 * 콘솔 창에 시간 측정을 종료한다. (밀리초 단위로 표시됨)
 *
 * @param {String} 시간 측정 아이디 (console.timeEnd 실행 시 console.time 아이디와 동일해야 함)
 * @memberOf console
 * @date 2020.05.16
 * @author Inswave Systems
 * @return {Time} 시간 출력
 * @example
console.time("Check-1");
for (var i = 0; i < 1000000; i++) { }
console.timeEnd("Check-1");
 */
console.timeEnd = (function() {
	if (DEBUG_MODE === true) {
		return Function.prototype.bind.call(console.timeEnd, console);
	} else {
		return new Function();
	}
})();

