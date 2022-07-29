window.addEventListener('DOMContentLoaded',function(){
    
    
    //  解决应小窗口打开  导航栏  未关闭   切换到  大窗口的  显示问题




    let tabtn =document.querySelectorAll('.recommend-items');
    let tablist = [...tabtn[0].children,...tabtn[1].children];
    let tabitem = document.querySelector('.recommend-count').children;

    // tab 栏  案例切换
    for(let i = 0 ; i <= tablist.length - 1 ; i++ ) {
        let index = i;
        index = index >= tabitem.length ? index-tabitem.length : index;
        tablist[i].addEventListener('click',function(){
            for(let i = 0 ; i <= tablist.length - 1 ; i++ ){
                tablist[i].classList.remove('current');
            }
            for(let i = 0 ; i <= tabitem.length - 1 ; i++) {
                tabitem[i].classList.remove('current');
            }
            this.classList.add('current');
            tabitem[index].classList.add('current');
        })
    }
    
})
let btn1 = document.querySelector("#small-list");
    let btnIcon = document.querySelectorAll('.small-icon');
    let btn2 =document.querySelector('.icon-hidden');
    let page = document.querySelector('article');
    // 小窗口下 导航栏的  打开按钮
     function changeOff(){
        btn1.style.display = 'block';
        btnIcon.forEach(function(ele){
            ele.style.display = 'none';
        })
        btn2.style.display = 'block';
        page.style.display = 'none';
     }
    //  小窗口下 导航栏 关闭按钮
     function changeOn(){
        btn1.style.display = 'none';
        btnIcon.forEach(function(ele){
            ele.style.display = 'block';
        })
        btn2.style.display = 'none';
        page.style.display = 'block';
     }
