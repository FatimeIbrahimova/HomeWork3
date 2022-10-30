let a,b,c;
 a=prompt("Enter first number");
 b=prompt("Enter second number");
 c=prompt("Enter third number");
if((a>c)&&(a>b)&&(b>c)){
    console.log((a+c)/2);
}else if((a>c)&&(a>b)&&(c>b)){
    console.log((a+b)/2);
}else if((b>a)&&(b>c)&&(a>c)){
    console.log((b+c)/2);
}else if((b>a)&&(b>c)&&(c>a)){
    console.log((b+a)/2);
}else if((c>a)&&(c>b)&&(a>b)){
    console.log((c+b)/2);
}else if((c>a)&&(c>b)&&(b>a)){
    console.log((c+a)/2);
}else {
    console.log(a);

}