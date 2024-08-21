package com.inswave.wrm.common.service;

import java.util.List;
import java.util.Map;

public interface HolidayService {

	// 공휴일 데이터 조회
	public List selectHoliday(Map map);
	
	// 공휴일 데이터 저장
	public Map saveHoliday(List<Map<String, Object>> param);
}
