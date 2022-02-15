const Button = () =>{
    let age  = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let Calc_Imc = weight/(height*height)*10000;
    let Total = Calc_Imc.toFixed(2);
    let output = document.getElementById('output').innerHTML = 'Seu IMC é: ' + Calc_Imc + ' kg/m2';
   if (Total <= 16.9){
       document.getElementById('output').innerHTML = '<span style = "color:red;">Muito abaixo do peso</span>';
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'
   }else if (Total <= 18.4){
       document.getElementById('output').innerHTML = '<span style = "color:yellow">Abaixo do peso</span>';
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <= 24.9){
       document.getElementById('output').innerHTML = '<span style = "color:green;">Normal</span>';
       document.getElementById('imc-output').innerHTML = Total+ ' kg/m2'

   }else if (Total <=29.9){
       document.getElementById('output').innerHTML = '<span style = "color:blue;">Acima</span>';
       document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <= 34.9){
    document.getElementById('output').innerHTML = '<span style = "color:blue;">Obesidade I</span>';
    document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (Total <=40){
    document.getElementById('output').innerHTML = '<span style = "color:blue;">Obesidade II</span>';
    document.getElementById('imc-output').innerHTML = Total + ' kg/m2'

   }else if (weight || height == ''){
    document.getElementById('output').innerHTML = '<span style = "color:gray;">Não definido</span>';
    document.getElementById('imc-output').innerHTML = '<span style  = "color:gray;">Não definido</span>';
}

}



/*


 function calcularIMC(peso, altura){
    return peso / (altura*altura)
}
function classFic(imc){
    if(imc <=16.9){
        return 'Muito abaixo do peso';
    }else if (imc <=18.4){
        return 'Abaixo do peso';
    }else if (imc <= 24.9){
        return 'Normal';
    }else if (imc <= 29.9){
        return 'Acima';
    }else if (imc <= 34.9){
        return 'Obesidade I';
    }else if (imc <= 40){
        return 'Obesidade II';
    }else{
        return 'Obesidade III';
    }
}



let imc  = calcularIMC(peso, altura);
let classifica = classFic(imc);
console.log('Classificação IMC:  ' + classifica);
*/