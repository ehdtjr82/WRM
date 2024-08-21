package com.inswave.wrm.sample.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.inswave.wrm.sample.service.SessionService;
import com.inswave.wrm.util.Result;

@Controller
public class SessionController {

	@Autowired
	private SessionService sessionService;

	@RequestMapping(value = "/session/create", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> createSession(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		Map sParam = null;
		try {
			sParam = (Map) param.get("info");

			sessionService.createSession("loginId", (String) sParam.get("loginId"));
			sessionService.setSessionExpireTime((int) sParam.get("ExpireTime") * 60);

			result.setData("TYPE", "S");

			result.setStatusMsg(result.STATUS_SUCESS, "세션 생성 및 세션 시간 완료!!");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

	@RequestMapping(value = "/session/continue", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getSession(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		try {
			String empCd = (String) sessionService.getSession("EMP_CD");
			result.setData("EMP_CD", empCd);
			result.setData("TYPE", "C");
			result.setStatusMsg(result.STATUS_SUCESS, "세션 값 취득 및 시간 갱신 완료");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

	@RequestMapping(value = "/session/destroy", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> destroySession(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		try {
			sessionService.invalidateSession();
			String value = (String) sessionService.getSession("loginId");
			result.setData("loginId", value);
			result.setData("TYPE", "D");
			result.setStatusMsg(result.STATUS_SUCESS, "세션 삭제 완료 및 확인 완료");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

	@RequestMapping(value = "/session/getRemainTime", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getSessionExpireTime(@RequestBody Map<String, Object> param) {
		Result result = new Result();
		try {
			int value = sessionService.getSessionExpireTime();
			result.setData("remainTime", value + "");
			result.setData("TYPE", "R");
			result.setStatusMsg(result.STATUS_SUCESS, "남은 세션 시간 확인");
		} catch (Exception ex) {
			ex.printStackTrace();
			result.setMsg(result.STATUS_ERROR, "처리 도중 오류가 발생하였습니다.");
		}
		return result.getResult();
	}

}
