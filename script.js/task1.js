let firstNum,secondNum,thirdNum,fourthNum;
 let number=prompt("Ededi daxil edin");
firstNum=parseInt(number/1000);
secondNum=parseInt(number/100)%10;
thirdNum=parseInt(number/10)%10;
fourthNum=number%10;
if(firstNum==fourthNum && secondNum==thirdNum){
    console.log(true);
}else{
    console.log(false);
}
