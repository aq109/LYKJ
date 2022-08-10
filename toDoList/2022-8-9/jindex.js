$(function(){
    
    
    // 点击提交按钮 
    $('#submit').on('click',function(){
        let data = getData();
        if($('#shuru').val().trim()){
            data.push({title:$('#shuru').val().trim(),done:true});
            $('#shuru').val(null).focus();
        }
        saveData(data);
        load();
    })

    // 数据加载函数
    load();
    function load(){
        let notNumber=0;
        let toNumber = 0;
        let data = getData();
        // 在 遍历之前 要清空下 ul 内容
        $('.notItems,.finishItems').empty();
        $.each(data,function(index,item){
            if(item.done){
                notNumber++;
                let li = `<li>
                                <label class="items-article">
                                    <input type="checkbox" name="" id="checkBtn">
                                    <span>${item.title}</span>
                                </label>
                                <a href="javascript:;" data-index="${index}">删除</a>
                            </li>`;
                $('.notItems').prepend(li);
            }else {
                toNumber++;
                let li = `<li>
                                <label class="items-article">
                                    <input type="checkbox" name="" id="checkBtn" checked>
                                    <span>${item.title}</span>
                                </label>
                                <a href="javascript:;" data-index="${index}">删除</a>     
                          </li>`
                $('.finishItems').prepend(li);
            }
        })
        $('.notUse').text(notNumber);
        $('.toUse').text(toNumber);
    }


    // 创建    获取本地存储函数
    function getData(){
        let local = localStorage.getItem('todolist');
        if(local){
            return JSON.parse(local);
        }else {
            return [];
        }
    }

    // 创建    保存到本地存储的函数
    function saveData(data){
        data = JSON.stringify(data);
        localStorage.setItem('todolist',data);
    }

    // 创建    点击删除本地存储数据的函数

    $('.notItems,.finishItems').delegate('a','click',function(){
        let data = getData();
        let index = $(this).attr('data-index');
        data.splice(index,1);
        saveData(data);
        load();
    })

    // 创建   标记   待处理  和   已完成  事件的交换 
    $('.notItems,.finishItems').delegate('#checkBtn','change',function(){
        let data = getData();
        let index = $(this).parent('.items-article').siblings().attr('data-index');
        if(data[index].done) {
            data[index].done = false;
        }else {
            data[index].done = true;
        }
        saveData(data);
        load();
    })


})