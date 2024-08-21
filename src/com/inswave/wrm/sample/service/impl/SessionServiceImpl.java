package com.inswave.wrm.sample.service.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inswave.wrm.sample.service.SessionService;

@Service
public class SessionServiceImpl implements SessionService {

    @Autowired
    private HttpServletRequest request;
    
    private boolean updated = false;
    private long lastUpdateTime = System.currentTimeMillis(); // 현재 시간
    
    @Override
    public void createSession(String key, Object value) {
        HttpSession session = request.getSession();
        lastUpdateTime = System.currentTimeMillis();
        session.setAttribute(key, value);
    }

    @Override
    public Object getSession(String key) {
        HttpSession session = request.getSession();
        updated = true;
        lastUpdateTime = System.currentTimeMillis();
        return session.getAttribute(key);
    }

    @Override
    public void invalidateSession() {
        HttpSession session = request.getSession();
        session.invalidate();
    }

    @Override
    public void setSessionExpireTime(int interval) {
        HttpSession session = request.getSession();
        System.out.println("interval :"+interval);
        session.setMaxInactiveInterval(interval); // 세션 유효시간 설정
    }
    
    @Override
    public int getSessionExpireTime() {
        //HttpSession session = request.getSession();
    	int remainingTimeInSeconds =0;
        HttpSession session = request.getSession(false); // 현재 세션을 가져옴

        if (session != null) {
            //long creationTime = session.getCreationTime(); // 세션 생성 시간
            //long lastAccessTime = session.getLastAccessedTime();//
            int maxInactiveInterval = session.getMaxInactiveInterval(); // 세션의 최대 유효 시간 (초 단위)
            long currentTime = System.currentTimeMillis(); // 현재 시간
			/*
			 * long elapsedTime = currentTime - creationTime; if(updated) { elapsedTime =
			 * currentTime - lastUpdateTime; }
			 */
            long elapsedTime = currentTime - lastUpdateTime; 

            //long elapsedTime = currentTime - creationTime; // 세션 생성 이후 경과된 시간 (밀리초 단위)
            //lastAccessTime
            //long elapsedTime = currentTime - lastAccessTime; // 세션 생성 이후 경과된 시간 (밀리초 단위)
            remainingTimeInSeconds = maxInactiveInterval - (int) (elapsedTime / 1000); // 세션의 남은 시간 (초 단위)
            //System.out.println("creationTime        : " + creationTime);
            //System.out.println("lastAccessTime      : " + lastAccessTime);
            System.out.println("lastUpdateTime      : " + lastUpdateTime);
            System.out.println("maxInactiveInterval : " + maxInactiveInterval);
            System.out.println("currentTime         : " + currentTime);
            
            System.out.println("현재 세션의 남은 시간    : " + remainingTimeInSeconds + "초");
        }

        
        return remainingTimeInSeconds; // 세션 유효시간 가져오기
    }
}
