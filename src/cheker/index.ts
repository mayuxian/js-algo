export class Checker{
  //校验身份证号
  checkIdCard(id:string) :boolean{
    // 1 "验证通过!", 0 //校验不通过
    const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
    //号码规则校验
    if (!format.test(id)) {
      //身份证号码不合规
      return false
    }
    //区位码校验
    //出生年月日校验   前正则限制起始年份为1900;
    const year =Number(id.substr(6, 4)),//身份证年
      month = Number(id.substr(10, 2)),//身份证月
      date = Number(id.substr(12, 2)),//身份证日
      time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
      now_time = Date.parse(new Date().toString()),//当前时间戳
      dates = (new Date(year, month, 0)).getDate();//身份证当月天数
    if (time > now_time || date > dates) {
      //出生日期不合规
      return false;
    }
    //校验码判断
    const c =  [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];   //系数
    const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];  //校验码对照表
    const id_array = id.split("");
    let sum = 0;
    for (let k = 0; k < 17; k++) {
      sum += parseInt(id_array[k]) * parseInt(c[k].toString());
    }
    if (id_array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
      //身份证校验码不合规
      return false;
    }
    return true;
  }


}
