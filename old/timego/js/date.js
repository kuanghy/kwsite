/**
 * 日期
 */
$(document).ready(function() {
    var years, months, days, hours, minutes, seconds;
    var intYears, intMonths, intDays, intHours, intMinutes, intSeconds;
    var today;

    today = new Date(); //系统当前时间
    intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
    intMonths = today.getMonth() + 1; //得到月份，要加1
    intDays = today.getDate(); //得到日期
    intWeek = today.getDay(); //得到星期
    intHours = today.getHours(); //得到小时 
    intMinutes = today.getMinutes(); //得到分钟
    intSeconds = today.getSeconds(); //得到秒钟

    var week = new Array(
        " 星期日 ", // Sunday     星期日
        " 星期一 ", // Monday     星期一
        " 星期二 ", // Tuesday    星期二
        " 星期三 ", // Wednesday  星期三
        " 星期四 ", // Thursday   星期四
        " 星期五 ", // Friday     星期五
        " 星期六 "  // Saturday   星期六
        );

    years = intYears + "年"; 

    if(intMonths < 10 ){
        months = "0" + intMonths + "月";
    } else {
        months = intMonths + "月";
    }

    if(intDays < 10 ){
        days = "0" + intDays + "日";
    } else {
        days = intDays + "日";
    }

    if (intHours == 0) {
        hours = "00:";
    } else if (intHours < 10) {
        hours = "0" + intHours+":";
    } else {
        hours = intHours + ":";
    }

    if (intMinutes < 10) {
        minutes = "0"+intMinutes+":";
    } else {
        minutes = intMinutes+":";
    }

    if (intSeconds < 10) {
        seconds = "0"+intSeconds+" ";
    } else {
        seconds = intSeconds+" ";
    }

    //timeString = years + months + days + week[intWeek] + hours + minutes + seconds;
    timeString = years + months + days + "&nbsp;&nbsp;" + week[intWeek];

    /* 农历 */
    var lunar = calendar.solar2lunar();
    timeString += "&nbsp;&nbsp;" + lunar.IMonthCn + lunar.IDayCn + '&nbsp;&nbsp;' 
        + lunar.gzYear + '年' + lunar.gzMonth + '月' + lunar.gzDay + '日（' + lunar.Animal + '年）';

    document.getElementById("today_info").innerHTML = timeString;
});
