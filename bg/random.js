// 定义横屏和竖屏的背景图片数组
const landscapeBackgrounds = ['bg/bg_l_1.jpg', 'bg/bg_l_2.jpg'];
const portraitBackgrounds = ['bg/bg_p_1.jpg', 'bg/bg_p_2.jpg', 'bg/bg_p_3.jpg'];

// 获取当前屏幕的宽高比并设置背景
function setRandomBackground() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let randomBackground;

    // 根据宽高比判断是横屏还是竖屏
    if (width > height) {
        // 横屏时从 landscapeBackgrounds 中随机选择
        randomBackground = landscapeBackgrounds[Math.floor(Math.random() * landscapeBackgrounds.length)];
    } else {
        // 竖屏时从 portraitBackgrounds 中随机选择
        randomBackground = portraitBackgrounds[Math.floor(Math.random() * portraitBackgrounds.length)];
    }

    // 设置背景图片
    document.body.style.backgroundImage = `url(${randomBackground})`;
}

// 初始加载时设置背景，只运行一次
window.addEventListener('load', setRandomBackground);