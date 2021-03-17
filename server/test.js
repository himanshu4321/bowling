//my name is himanshu
//himanshu is name my
var str = "my name is himanshu";
reverseString();
function reverseString(){
    var strTemp ='';
    for(var i=str.length-1;i>=0;i--){
        strTemp+=str.charAt(i);
    }
    var tempValue ='';
    str = '';
    for(var i=0;i<strTemp.length;i++){
        tempValue+=strTemp.charAt(i);
        if(strTemp.charAt(i)==' ' || i==strTemp.length-1){
            for(var j=tempValue.length-1;j>=0;j--){
                str+= tempValue.charAt(j);
            }
            //console.log(tempValue);
            str+=' ';
            tempValue = '';
        }
    }
    console.log(str);
}
