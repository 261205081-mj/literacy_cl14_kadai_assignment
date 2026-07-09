function getRandomButterfly(max) {
    return Math.floor(Math.random() * (max - 100 +1) + 100);
}
function getRandomFoo(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

document.querySelectorAll(".depict-butterfly").forEach(function (el) {
    // 蝶が 3 つあれば、 el に 1 つずつ入って、ここが 3 回実行される
    el.addEventListener("mouseover", function () {
        // マウスが乗るたびに、ここが実行される
        const rdmnumX = getRandomButterfly(480);
        const rdmnumY = getRandomButterfly(374);
        
        el.style.left = rdmnumX + "px";
        el.style.top  = rdmnumY + 'px';
    })
    el.addEventListener("mouseout", function() {
        // マウスが離れるたびに、ここが実行される
    })
})

document.querySelectorAll(".depict-foo").forEach(function (el) {
    // foo が 5 つあれば、 el に 1 つずつ入って、ここが 3 実行される
    el.addEventListener("mouseover", function () {
        const rdmnumX = getRandomFoo(370, 800);
        const rdmnumY = getRandomFoo(200, 300);

        el.style.left = rdmnumX + "px";
        el.style.top  = rdmnumY + "px";
    })

})