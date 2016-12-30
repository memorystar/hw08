/*                ↓ var msg = "Hello"  */
/*function showMsg(msg1,msg2){
    alert(msg1+msg2);
}
*/

function showMsg(msg1,msg2){
    var allMsg = 
    msg1+msg2;
    return allMsg;
}

function random(){
    var M = parseInt(document.getElementById('M').value);
    /*console.log(M);*/
    /*return Math.floor(Math.random()*M+1);*/
    document.getElementById('result').value = Math.floor(Math.random()*M+1);
}

function bigmath(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    if (a>b){
        document.getElementById('result2').value = a+" 比較大";
    }
    else{
        document.getElementById('result2').value = b+" 比較大";
    }
}

function arr(){
    var arr1 = document.getElementById('arr1').value;
    var arr2 = [arr1].value;
    document.getElementById('result3').value = "最後一個元素為"+arr2;
    }

function abp(){
    var ap = parseInt(document.getElementById('ap').value);
    var bp = parseInt(document.getElementById('bp').value);
    document.getElementById('result4').value = "答案為"+((ap*ap)+(bp*bp));
    }


function leapYearA(){
    var yearA = parseInt(document.getElementById('yearA').value);
    var ya = "Yes";
    var yb = "No";
    if (yearA % 400 === 0 ) {
        document.getElementById('result5').value = ya;
    }
    else if(yearA % 4 === 0 && yearA % 100 != 0 ){
        document.getElementById('result5').value = ya;
    }
    else{
        document.getElementById('result5').value = yb;
    }
}





myShose = {
    brand:"sk",
    size:7,
    forFemale:true
}

/*
$(document).ready(function(){
  $("input").mouseover(function(){
   $(".hint").css("display","block");
  })
  
  $("input").mouseout(function(){
   $(".hint").css("display","none");
  })
  
})*/

/*
 $(document).ready(function(){
   
   $("td").mouseover(function(){
     $(this).css("background","lightblue");
   })
   
   $("[rowspan=2]").mouseover(function(){
     $(this).css("background","lightgreen");
   })
   
   $("td").mouseout(function(){
     $(this).css("background","white");
   })
   */
   
   /*$("td").click(function(){
     $(this).hide();
   })
   
   $("td[colspan=2]").click(function(){
     $("table *").show();
   })*/
   /*
   $("td[colspan=2]").click(function(){
     $("td").fadeToggle(1000);
     $(this).show();
   })
   
 })
 */