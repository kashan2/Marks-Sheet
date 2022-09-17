
Name = prompt('Enter your Name', '')

Mathematics = prompt('Enter your mathematics marks','');

Chemistry = prompt('Enter your Chemistry marks','');

Physics = prompt('Enter your physics marks','');

Computer = prompt('Enter your computer marks','');

English = prompt('Enter your english marks','');

Total = 500;

Ob = eval(Mathematics)+eval(Chemistry)+eval(Physics)+eval(Computer)+eval(English);

Per = Ob*100/Total+'%' ;

if(per>=40){
    Result = "Pass";
}

else{
    Result = "Fail";
}

if(per>=80){
    Grade = "A1";
}

else if(per>=70){
    Grade = "A";
}

else if(per>=60){
    Grade = "B";
}

else if(per>=50){
    Grade = "c";
}

else{
    Grade = "D";
}
