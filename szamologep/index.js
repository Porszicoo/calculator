function NewPage(){
    window.location.assign("https://www.youtube.com/watch?v=LZ7Df_l3Hbg")
}


function Szorzas(){
   let Num1 = document.getElementById("Number1").value 
   let Num2 =  document.getElementById("Number2").value
   let Num3 = Num1 * Num2
   document.getElementById("Equal").innerHTML = Num3
}

function Osztas(){
    let Num1 = document.getElementById("Number1").value 
   let Num2 =  document.getElementById("Number2").value
   let Num3 = Num1 / Num2
   document.getElementById("Equal").innerHTML = Num3
}

function Kivon(){
    let Num1 = document.getElementById("Number1").value 
   let Num2 =  document.getElementById("Number2").value
   let Num3 = Num1 - Num2
   document.getElementById("Equal").innerHTML = Num3

}

function Sum(){
    let Num1 = parseInt(document.getElementById("Number1").value) 
    let Num2 =  parseInt(document.getElementById("Number2").value)
    let Num3 = Num1 + Num2
    document.getElementById("Equal").innerHTML = Num3
 }



 function Szazalek(){
    let Num1 = parseInt(document.getElementById("Number1").value) 
    let Num2 =  parseInt(document.getElementById("Number2").value)
    if(Num1 < Num2 ){
       let num3 = Num1 / Num2 * 100
       document.getElementById("Equal").value = num3 + "%"
       document.getElementById("Equal").value = num3 + "%"

    }
    else if(Num1 > Num2){
        let num4 =   Num2 / Num1 * 100 
            document.getElementById("Equal").innerHTML = num4 + "%"
            document.getElementById("Equal").innerHTML = num4 + "%"
    }
    
 }


 
 //asd