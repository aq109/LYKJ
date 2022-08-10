document.addEventListener('DOMContentLoaded',function(){
        // 获取事件源
    let shuru = document.querySelector('#shuru');
    let submit = document.querySelector('#submit');
    
    // 创建 监听 提交按钮的事件

    submit.addEventListener('click',function(){
        // 判断 输入框是否为空
        let local = getData();
        if(shuru.value.trim()) {
            local.push({title:shuru.value.trim(),done:true});
            // 清空输入框
            shuru.value = null;
        }
        saveData(local);
        load();
    });





    

    // 数据渲染  加载
    let notItems = document.querySelector('.notItems');
    let finishItems = document.querySelector('.finishItems');
    let notUse = document.querySelector('.notUse');
    let toUse = document.querySelector('.toUse');
    // 全局变量    待处理数量
    let notNumber=0;
    let toNumber = 0;

    load();
    function load(){
        let data = getData();
        data.forEach(function(item){
            if(item.done){
                notNumber++;
                let li = document.createElement('li');
                li.innerHTML = `<label class="items-article">
                                    <input type="checkbox" name="" id="checkBtn">
                                    <span>${item.title}</span>
                                </label>
                                <a href="javascript:;">删除</a>`;
                notItems.prepend(li);
            }else{
                toNumber++;
                let li = document.createElement('li');
                li.classList.add('current')
                li.innerHTML = `<label class="items-article">
                                    <input type="checkbox" name="" id="checkBtn" checked>
                                    <span>${item.title}</span>
                                </label>
                                <a href="javascript:;">删除</a>`;
                finishItems.prepend(li);
            }
        })
        notUse.innerHTML = notNumber;
        toUse.innerHTML = toNumber;
    }


    


    //读取  本地存储的源数据
     function getData() {
        let data = localStorage.getItem('todolist');
        if(data !== null) {
            return JSON.parse(data);
        }else {
            return [];
        }
     }
    //  保存到 本地存储   数据
    function saveData(data){
        data = JSON.stringify(data);
        localStorage.setItem('todolist',data);
    }
})