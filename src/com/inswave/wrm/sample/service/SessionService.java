package com.inswave.wrm.sample.service;

public interface SessionService {
    void createSession(String key, Object value);
    Object getSession(String key);
    void invalidateSession();
    void setSessionExpireTime(int interval); 
    int getSessionExpireTime();
}