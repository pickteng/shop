// 设置cookie
function setCookie(key,value,time){
    // 获取当前的时间戳
    const thisTime=new Date();
    let t=thisTime.getTime();

    // 由于当前时间与服务器时间相差8个小时，需要减去这8个小时的毫秒数
    t=t-(8*3600*1000);

    // 再加上cookie的时效
    t=t+time*1000;
    
    // 将时间戳，设置回时间格式
    thisTime.setTime(t);

    // 判断调用时，时效是否为空
    let a = t===undefined ? '' : thisTime;
    // path=/  设置cookie时，是设置WWW目录下的
    document.cookie=`${key}=${value};expires=${a};path=/`;
}

// 获取cookie
function getCookie(cookieStr){
    // 定义一个空数组，存储转化之后的内容
    const obj={};
    // 把得到的cookie的字符串转化为数组
    const cookieArr1=cookieStr.split('; ');
    // console.log(cookieArr1);
    // 循环数组，再把循环的每一项转化为数组
    cookieArr1.forEach((val)=>{
        const cookieArr2=val.split('=');
        // console.log(cookieArr2);
        
        // 数组 cookieArr2 中 索引0的内容是键名，索引1的内容是数值

        // 要将 0存储的键名,设定成对象的键名
        // 要将 1存储的数值,设定为对象的数值
        obj[cookieArr2[0]]=cookieArr2[1];
    })
    // console.log(obj);
    return obj;
}