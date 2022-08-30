let subhan = document.querySelector(".subhan");
let alhamd = document.querySelector(".alhamd");
let Akbar = document.querySelector(".Akbar");
let subhan_num = document.querySelector(".subhan_num");
let alhamd_num = document.querySelector(".alhamd_num");
let Allah_num = document.querySelector(".Allah_num");
let all_numbers = document.querySelector(".all_numbers div"); // العدد الكلي
let btn = document.querySelector("#btn"); // مسح الكل
let doura_num1 = document.querySelector(".doura_num1");
let doura_num2 = document.querySelector(".doura_num2");
let doura_num3 = document.querySelector(".doura_num3");
let big_alert = document.querySelector(".big_alert");
let accept = document.querySelector(".accept");
let reject = document.querySelector(".reject");


function myFun(btn123 , number_count , doura , i){
    btn123.addEventListener("click" , ()=>{
        if(+number_count.innerHTML == 33){
            number_count.innerHTML = 0;
            doura.innerHTML = +doura.innerHTML + 1;
        }else{
            number_count.innerHTML = +number_count.innerHTML + 1;
        }
        all_numbers.innerHTML = +subhan_num.innerHTML + +alhamd_num.innerHTML + +Allah_num.innerHTML + +doura_num1.innerHTML * 33 + +doura_num2.innerHTML * 33 + +doura_num3.innerHTML * 33;
    })
}
myFun(subhan , subhan_num , doura_num1)
myFun(alhamd , alhamd_num , doura_num2)
myFun(Akbar , Allah_num , doura_num3)

btn.addEventListener("click" , (e)=>{
    big_alert.style.display = "flex";
    reject.addEventListener("click" , ()=>{
        big_alert.style.display = "none";
    })

    accept.addEventListener("click" , ()=>{
        big_alert.style.display = "none";
        subhan_num.innerHTML = 0;
        alhamd_num.innerHTML = 0;
        Allah_num.innerHTML = 0;
        all_numbers.innerHTML = 0;
        doura_num1.innerHTML = 0;
        doura_num2.innerHTML = 0;
        doura_num3.innerHTML = 0;
    })

})




















// function funNumOne(one , num1 , doura , ilter1){
//     one.addEventListener("click" , ()=>{
    
//         if(+num1.innerHTML == 33){
//             ilter1 = 0;
//             num1.innerHTML = ilter1;
//             let x = +doura.innerHTML;
//             doura.innerHTML = ++x;
//         }else{
//             if(mood == false){
//                 ilter1 = 1;
//                 num1.innerHTML = ilter1;
//                 mood = true
//             }else{
//                 num1.innerHTML = ++ilter1;
//             }
//         }

//         all_numbers.innerHTML = +subhan_num.innerHTML + +alhamd_num.innerHTML + +Allah_num.innerHTML + +doura_num1.innerHTML * 33 + +doura_num2.innerHTML *33 + +doura_num3.innerHTML * 33
    
//     })
// }

// funNumOne(subhan , subhan_num , doura_num1 , i1);
// funNumOne(alhamd , alhamd_num , doura_num2 , i1);
// funNumOne(Akbar , Allah_num , doura_num3 , i1);

// btn.addEventListener("click" , ()=>{
//     big_alert.style.display = "flex";
//     accept.addEventListener("click" , ()=>{
//         big_alert.style.display = "none";
//         removeValues(i1);
//     })
//     reject.addEventListener("click" , ()=>{
//         big_alert.style.display = "none";
//     })
// })

// function removeValues(numb1){
//     i1 = 0;
    
//     subhan_num.innerHTML = numb1;
//     alhamd_num.innerHTML = numb1;
//     Allah_num.innerHTML = numb1;
//     doura_num1.innerHTML = numb1;
//     doura_num2.innerHTML = numb1;
//     doura_num3.innerHTML = numb1;
//     all_numbers.innerHTML = numb1;
//     mood = false;
// }
