//choice option on click

var males = document.querySelector('.male');
males.addEventListener('click',()=>{
    document.getElementById('male').style.backgroundColor="rgba(73, 29, 248, 0.669)"; //like blue
    document.getElementById('female').style.backgroundColor="transparent";
});
var females = document.querySelector('.female');
females.addEventListener('click',()=>{
    document.getElementById('female').style.backgroundColor="rgba(247, 52, 188, 0.76)"; //like pink
    document.getElementById('male').style.backgroundColor="transparent";
});
var valueofchoice;
function gender1(){
    valueofchoice="male";
}
function gender2(){
    valueofchoice="female";
}
//reload oftion
const reload =document.querySelector('#reload');
reload.addEventListener('click', ()=>{
    window.location.reload();
    document.getElementById('reload').style.display="none";
});

const result = document.querySelector('#result');
result.addEventListener('click',()=>{
    
    var mass = document.querySelector('.mass').value;
    var ht = document.querySelector('.ht').value;
    var bmi = (mass)/(ht*ht);
    document.getElementById('bmi-span').innerText=bmi;
    if(valueofchoice==="male"){
        document.getElementById('reload').style.display="block";
        document.getElementById('show').style.display="none";
        
        //----------
        if(ht>=1.20&& ht<=1.40){
            if(bmi<=18.5){document.getElementById("images").src="./assets/man/1mt/mt1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/man/1mt/mt2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/man/1mt/mt3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/man/1mt/mt4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=60){document.getElementById("images").src="./assets/man/1mt/mt5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>60&&bmi<=72){document.getElementById("images").src="./assets/man/1mt/mt6.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.41&&ht<=1.60){
            if(bmi<=18.5){document.getElementById("images").src="./assets/man/2mf/mf1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/man/2mf/mf2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/man/2mf/mf3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/man/2mf/mf4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=60){document.getElementById("images").src="./assets/man/2mf/mf5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.61&&ht<=1.80){
            if(bmi<=18.5){document.getElementById("images").src="./assets/man/3ms/ms1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/man/3ms/ms2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/man/3ms/ms3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/man/3ms/ms4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=45){document.getElementById("images").src="./assets/man/3ms/ms5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.81&&ht<=2.00){
            if(bmi<=18.5){document.getElementById("images").src="./assets/man/4mn/mn1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/man/4mn/mn2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/man/4mn/mn3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=35){document.getElementById("images").src="./assets/man/4mn/mn4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>35&&bmi<=40){document.getElementById("images").src="./assets/man/4mn/mn4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        //----------
    }
    else if(valueofchoice==="female"){
        document.getElementById('show').style.display="none";
        document.getElementById('reload').style.display="block";
        //------
        if(ht>=1.20&& ht<=1.40){
            if(bmi<=18.5){document.getElementById("images").src="./assets/woman/1wt/wt1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/woman/1wt/wt2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/woman/1wt/wt3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/woman/1wt/wt4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=60){document.getElementById("images").src="./assets/woman/1wt/wt5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>60&&bmi<=72){document.getElementById("images").src="./assets/woman/1wt/wt6.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.41&&ht<=1.60){
            if(bmi<=18.5){document.getElementById("images").src="./assets/woman/2wf/wf1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/woman/2wf/wf2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/woman/2wf/wf3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/woman/2wf/wf4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=60){document.getElementById("images").src="./assets/woman/2wf/wf5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.61&&ht<=1.80){
            if(bmi<=18.5){document.getElementById("images").src="./assets/woman/3ws/ws1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/woman/3ws/ws2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/woman/3ws/ws3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=40){document.getElementById("images").src="./assets/woman/3ws/ws4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>40&&bmi<=45){document.getElementById("images").src="./assets/woman/3ws/ws5.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        else if(ht>=1.81&&ht<=2.00){
            if(bmi<=18.5){document.getElementById("images").src="./assets/woman/4wn/wn1.png";document.getElementById('types-of-person').innerHTML="Under-Weight";}
            else if(bmi>18.5&&bmi<=25){document.getElementById("images").src="./assets/woman/4wn/wn2.png";document.getElementById('types-of-person').innerHTML="Normal-weight";}
            else if(bmi>25&&bmi<=30){document.getElementById("images").src="./assets/woman/4wn/wn3.png";document.getElementById('types-of-person').innerHTML="Over-Weight";}

            else if(bmi>30&&bmi<=35){document.getElementById("images").src="./assets/woman/4wn/wn4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else if(bmi>35&&bmi<=40){document.getElementById("images").src="./assets/woman/4wn/wn4.png";document.getElementById('types-of-person').innerHTML="Obesity";}
            else{
                alert("Unhealthy, Your BMI is so high 🥸🥸🥸");
                document.getElementById("images").src="";
            }
        }
        //-------

    }
    else{
        alert("Choice your gender");
        document.getElementById('bmi-span').innerText="here";
    }
});
