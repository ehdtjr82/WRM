package com.inswave.wrm.sample.beans;

public class UserBean {
	private String custNm;

	public String getCustNm() {
		return custNm;
	}

	public void setCustNm(String custNm) {
		this.custNm = custNm;
	}

	public String toString() {
		final String TAB = "	";
		String retValue = "";
		retValue = "UserBean ( " + super.toString() + TAB + "custNm = " + this.custNm + TAB + " )";
		return retValue;
	}
}
