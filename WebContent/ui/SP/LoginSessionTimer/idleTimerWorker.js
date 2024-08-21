let idleTime = 0;
let alarm_show = false;
let timerId = null;
let remainTime = 0;

self.onmessage = function(e) {
	if (e.data.command === 'initialize') {
		const maxWait = e.data.maxWait; // 최대 10분
		const alarmTime = e.data.alarmTime; // 알람 5분
		const interval = e.data.interval; // 1초(1000ms) 마다 체크 interval
		const chkInterval = e.data.chkInterval;

		alarm_show = false;
		timerId = setInterval(function() {
			idleTime++;
			remainTime = maxWait * 60 - idleTime;
			// 메인 스레드에게 팝업을 띄우라는 메시지를 보냄
			postMessage({
				'remainTime' : remainTime
			});
			
			// 일정시간 이상이 지나면 show
			if (remainTime <= 30 && !alarm_show) {
				alarm_show = true;
				// 메인 스레드에게 팝업을 띄우라는 메시지를 보냄
				postMessage('showPopup');
			}

			// 일정시간 이상이 지나면 check serverTime
			if (idleTime % (chkInterval * 60) == 0 && idleTime > 0) {
				// 현재 서버의 남은 세션시간을 확인
				postMessage('chkSvrRemainTime');
			}

		}, interval);
	} else if (e.data === 'resetTimer') {
		console.log('resetTimer');
		idleTime = 0;
		alarm_show = false;
		// postMessage('resetTimer');

	} else if (e.data === 'stopWorker') {
		if (timerId != null) {
			clearInterval(timerId);
			remainTime = 0;
			timerId = null;
			idleTime = 0;
			alarm_show = false;
		}
		close();
	} else if (e.data.command === 'syncTimer') {

		let svrRemainTime = e.data.svrRemainTime;
		let gap = parseInt(svrRemainTime, 10) - parseInt(remainTime, 10);
		console.log("시간 차이 : " + gap);

	}
};