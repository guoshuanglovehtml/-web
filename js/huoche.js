var oDepDate  = new Date();
var oBackDate = new Date(oDepDate.getFullYear(), oDepDate.getMonth(), oDepDate.getDate()+1);
//开始时间实例	
var oDepCal = new Calendar({
		id: 		   "#J_date_11",			//触发显示日历元素ID
		isPopup:       !0,					//弹出式日历
		isPrevBtn:     !0,					//显示上月按钮
		isNextBtn:     !0,					//显示下月按钮
		isCloseBtn:    !0,					//显示关闭按钮
		isHoliday:     !0,					//节假日特殊显示
		isHolidayTips: !0,					//显示节假日1~3天/后1~3天信息
		isDateInfo:    !0,					//显示日期信息
		isMessage: 	   !0,					//有日历提示信息
		isCalStart:    !0,					//标记为开始时间
		dateInfoClass: "date-info-start",	//开始时间icon样式
		range:		   {mindate: "2011-09-01", maxdate: "2020-12-31"},	//限制范围（当天——2020-12-31）
		count: 		   2,					//日历个数
		monthStep:	   1,					//切换上下月日历步长
		onSelectDate:  fnSelectDate,		//选择日期回调方法
		onClose:	   fnClose				//关闭日历回调方法	
});
//结束时间实例
var oBackCal = new Calendar({
		id: 		   "#J_date_22",			//触发显示日历元素ID
		isPopup:       !0,					//弹出式日历
		isPrevBtn:     !0,					//显示上月按钮
		isNextBtn:     !0,					//显示下月按钮
		isCloseBtn:    !0,					//显示关闭按钮
		isHoliday:     !0,					//节假日特殊显示
		isHolidayTips: !0,					//显示节假日1~3天/后1~3天信息
		isDateInfo:    !0,					//显示日期信息
		isMessage: 	   !0,					//有日历提示信息
		isCalEnd:      !0,					//标记为结束时间
		dateInfoClass: "date-info-end",		//结束时间icon样式
		range:		   {mindate: "2011-09-01", maxdate: "2020-12-31"},	//限制范围（当天——2020-12-31）
		count: 		   2,					//日历个数
		monthStep:	   1,					//切换上下月日历步长
		onSelectDate:  fnSelectDate,		//选择日期回调方法
		onClose:	   fnClose				//关闭日历回调方法	
});
//单日历 年/月/时/分
var oBackCalTime = null;
oBackCalTime = new Calendar({
		id: 		   "#J_date_33",			//触发显示日历元素ID
		isPopup:       !0,					//弹出式日历
		isPrevBtn:     !0,					//显示上月按钮
		isNextBtn:     !0,					//显示下月按钮
		isCloseBtn:    !0,					//显示关闭按钮
		isHoliday:     !0,					//节假日特殊显示
		isHolidayTips: !0,					//显示节假日1~3天/后1~3天信息
		isDateInfo:    !0,					//显示日期信息
		isMessage: 	   !0,					//有日历提示信息
		isCalEnd:      !0,					//标记为结束时间
		dateInfoClass: "date-info-end",		//结束时间icon样式
		range:		   {mindate: "2011-09-01", maxdate: "2020-12-31"},	//限制范围（当天——2020-12-31）
		count: 		   1,					//日历个数
		monthStep:	   1,					//切换上下月日历步长
		onSelectDate:  fnSelectDate,		//选择日期回调方法
		onClose:	   fnClose,				//关闭日历回调方法	
		onCalendar:	   1				    //时分秒单日历	
});
//单日历
var oBackCalTime1 = null;
oBackCalTime1 = new Calendar({
		id: 		   "#J_date_44",			//触发显示日历元素ID
		isPopup:       !0,					//弹出式日历
		isPrevBtn:     !0,					//显示上月按钮
		isNextBtn:     !0,					//显示下月按钮
		isCloseBtn:    !0,					//显示关闭按钮
		isHoliday:     !0,					//节假日特殊显示
		isHolidayTips: !0,					//显示节假日1~3天/后1~3天信息
		isDateInfo:    !0,					//显示日期信息
		isMessage: 	   !0,					//有日历提示信息
		isCalEnd:      !0,					//标记为结束时间
		dateInfoClass: "date-info-end",		//结束时间icon样式
		range:		   {mindate: "2011-09-01", maxdate: "2020-12-31"},	//限制范围（当天——2020-12-31）
		count: 		   1,					//日历个数
		monthStep:	   1,					//切换上下月日历步长
		onSelectDate:  fnSelectDate,		//选择日期回调方法
		onClose:	   fnClose				//关闭日历回调方法	
});
//为结束实例添加className, 主要为了样式需要
oDepCal.container.style.zIndex = 100;
oDepCal.container.style.width = '406px';
oBackCal.container.className = "cal-end";
oBackCal.container.style.zIndex = 100;
oBackCal.container.style.width = '406px';

//开启结束实例的鼠标移动范围
oBackCal.showRange();
//开启键盘事件
oDepCal.CalStart = oBackCal.CalStart = oDepCal;
oDepCal.CalEnd   = oBackCal.CalEnd   = oBackCal;
oDepCal.keyup();
oBackCal.keyup();

//选择日期回调函数
function fnSelectDate(obj) {
	if(obj["data-date"])
	{
		switch(this.triggerNode.id) {
			case "J_date_11":
				oBackCal.startDate = this.startDate = obj["data-date"];
				oBackCal.render(this.startDate);
				this.render(this.startDate);
				oBackCal.focus();
				break;
			case "J_date_22":
				oDepCal.endDate = this.endDate = obj["data-date"];
				oDepCal.render(this.startDate);
				this.render(this.endDate);
				break;
			case "J_date_33":
				oBackCalTime.endDate = this.endDate = obj["data-date"];
				oBackCalTime.render(this.endDate);
				this.render(this.endDate);
				break;
			case "J_date_44":
				oBackCalTime1.endDate = this.endDate = obj["data-date"];
				oBackCalTime1.render(this.endDate);
				this.render(this.endDate);
				break;
		}
	
	}
	else
	{
		this.oneMonthY(timeMonth);
		oBackCalTime.endDate = oYear+'-'+lzc.zero(timeMonth)+'-'+oBackCalTime.r;
		oBackCalTime1.endDate = oYear+'-'+lzc.zero(timeMonth)+'-'+oBackCalTime1.r;
	}
}

//关闭日历回调函数
function fnClose() {
	this.hideMessage()
}


//默认时间
oDepCal.startDate = oBackCal.startDate = _CAL.formatStrDate(oDepDate);
oDepCal.endDate   = oBackCal.endDate   = _CAL.formatStrDate(oBackDate);

oDepCal.setDateInfo(_CAL.formatStrDate(oDepDate));
oBackCal.setDateInfo(_CAL.formatStrDate(oBackDate));

function funAjax(){
	//alert(1)
}

oBackCalTime.emptyTime(oBackCalTime);
oBackCalTime1.eTime(oBackCalTime1);