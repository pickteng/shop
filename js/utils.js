function all() {
    // 登录
    $('[name="login"]').click(function () {
        window.location.href = `./login.html?${window.location.href}`;
    })

    // 退出登录
    $('[name="out"]').click(function () {
        setCookie('login', '1', -1);
        window.alert('退出成功');
    })

    // 注册
    $('[name="reg"]').click(function () {
        window.location.href = `./reg.html?${window.location.href}`;
    })

    // 购物车
    $('[name="cart"]').click(function () {
        const cookieObj = getCookie(document.cookie);
        if (cookieObj['login'] !== undefined) {
            window.location.href = './cart.html';
        } else {
            const bool = window.confirm('您还没登陆,请先登录');
            if (bool === true) {
                window.location.href = `./login.html?${window.location.href}`;
            }
        }
    })

    // 跳转首页
    $('[name="index"]').click(function(){
        window.location.href = '../index.html';
    })
}