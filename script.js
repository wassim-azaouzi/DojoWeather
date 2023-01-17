var term=document.querySelector(".alert");
function removealert(element){
    term.remove();
}

var temp1= document.querySelectorAll(".red1");
var temp2= document.querySelectorAll(".blue1");
var arr1=[];
var arr2=[];
for (var i=0; i<temp1.length; i++){
    arr1.push(temp1[i].innerHTML);
    arr2.push(temp2[i].innerHTML);
    console.log("this is it:", temp1[i].innerHTML);
}



function changet(element){

    console.log( "this is arr1: ", arr1 );
    console.log( "this is arr2: ", arr2);
    if (element.value== "celcuis") {
        var j=1;
        for (var i=0; i<temp1.length; i++){
            document.querySelector(".red1"+j).innerHTML=arr1[i];
            j++;
            console.log(document.querySelector(".red1"+j))
        }

        j=1;
        for (var i=0; i<temp2.length; i++){
            document.querySelector(".blue1"+j).innerHTML=arr2[i];
            j++;
        }   
    }

    else if (element.value=== "fahrenheit"){
        j=1;
        for (var i=0; i<temp1.length; i++){
            var temp1a= Number(temp1[i].innerHTML);
            temp1a=Math.trunc((temp1a * 9/5) + 32);
            console.log(temp1a);
            document.querySelector(".red1"+j).innerHTML=temp1a;
            j++;
        }
        j=1;
        for (var i=0; i<temp2.length; i++){
            var temp2a= Number(temp2[i].innerHTML);
            temp2a=Math.trunc((temp2a * 9/5) + 32);
            console.log(temp2a);
            document.querySelector(".blue1"+j).innerHTML=temp2a;
            j++;
        }   
    }
}




    
