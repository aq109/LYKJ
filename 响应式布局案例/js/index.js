let btn1 = document.querySelector("#small-list");
        let btnIcon = document.querySelectorAll('.small-icon');
        let btn2 =document.querySelector('.icon-hidden');
         function changeOff(){
            btn1.style.display = 'block';
            btnIcon.forEach(function(ele){
                ele.style.display = 'none';
                btn2.style.display = 'block';
            })
         }
         function changeOn(){
            btn1.style.display = 'none';
            btnIcon.forEach(function(ele){
                ele.style.display = 'block';
                btn2.style.display = 'none';
            })
         }