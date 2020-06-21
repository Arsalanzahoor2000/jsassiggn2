//chap  21-25

//q1
var first=prompt('enter your first name' )
var last=prompt('enter your last name' )
var fullName=first+' '+last
alert('welcome '+fullName)

//q2
var mobile=prompt('enter your favt. mobile name')
document.write('my favt. mobile phone is:'+mobile+"<br>")
document.write('length of string:'+mobile.length)

//q3
var word='pakistan'
document.write('string:'+word+"<br>")
document.write('Index of n:'+word.indexOf('n'))

//q4
var word='hello world'
document.write('string:'+word+"<br>")
document.write('Index of n:'+word.lastIndexOf('l'))

//q5
var word='pakistan'
document.write('string:'+word+"<br>")
document.write('char at index 3:'+word.charAt(3))

//q6
var first=prompt('enter your first name' )
var last=prompt('enter your last name' )
alert('welcome '+first+last)

//q7
var city='hyderabad'
document.write('city:'+city+"<br>")
city1=city.slice(5)
document.write('after replacement:'+'islam'+city1)

//q8
var para1 = 'Ali and Sami are best friends. They play cricket and football together';
var para=para1.replace('and','&')
var para2=para.replace('and','&')
document.write(para2)

//q9
var number="472"
document.write('value:'+number+"<br>")
document.write('number:'+typeof(number)+"<br>")
number=parseInt(number)
document.write('value:'+number+"<br>")
document.write('result:'+typeof(number))

//q10
var name=prompt('enter a name')
document.write('user input:'+name+"<br>")
name=name.toUpperCase()
document.write('upper case:'+name)

//q11
var name=prompt('enter a name')
document.write('user input:'+name+"<br>")
name1=name.charAt(0)
name2=name.slice(1)
name1=name1.toUpperCase()
document.write('upper case:'+name1+name2)

//q12
var num=35.36
document.write('number:'+num+"<br>"+'type:'+typeof(num)+"<br>")
num=num*100
num=num.toString()
document.write('result:'+num+"<br>"+'type:'+typeof(num))

//q13
var name=prompt('enter your name')
for(var i=0;i<name.length;i++){
         name1=name[i]
         if(name=='!' ||name1=='@'||name1=='.'||name1==','){
            alert('enter a valid name')
         }
}

//q14
var arr=['cake', 'apple pie', 'cookie', 'chips', 'patties']
var bakery=prompt('welcome to the bakery.what do you want to order sir/maam?')
bakery=bakery.toLowerCase()
for(var i=0;i<=arr.length-1;i++){
    if(bakery==arr[i]){
        alert(bakery+' is available at index '+i+' in our bakery')

     }

/////q15////
var password=prompt('enter pasword')
var check1=/^[a-z,A-Z,0-9]*$/
var result1=check1.test(password)
if (result1){
    document.write('valid password:'+"<br>")
}
else{
    document.write('please write an alphanumeric or alpha'+"<br>")
}
var range=/^[0-9]*$/
if (range.test(password[0])){
    document.write('valid password:'+"<br>")

}
else{
    document.write('password can not begin with a number'+"<br>")

}
if(password.length<=6){
    document.write('valid password:'+"<br>")

}
else{
    document.write('password can not exceed 6 numbers'+"<br>")

}

//q16
var university = 'University of Karachi';
for(var i=0;i<university.length;i++)
{
    document.write(university[i]+"<br>")
}

//q17
var name=prompt('enter a name:')
document.write('user input:'+name+"<br>")
name1=name.length
document.write('last index of '+name+'is '+name[name1-1])

//q18
var para='the quick brown fox jumps over the lazy dog'
var count=0

for (var i=0;i<para.length;i++){
    para1=para.slice(i,i+3)
    if(para1=='the'){
        count=count+1
    }
}
document.write('there are ' +count+' occurences of the word the')


///////////////chap 26-30//////////////////////
//q1
var num=+prompt('enter a positive number')
document.write('number:'+num+"<br>")
document.write('round off value:'+Math.round(num)+"<br>")
document.write('floor value:'+Math.floor(num)+"<br>")
document.write('ceil value:'+Math.ceil(num)+"<br>")

//q2
var num=+prompt('enter a -ve number')
 document.write('number:'+num+"<br>")
 document.write('round off value:'+Math.round(num)+"<br>")
 document.write('floor value:'+Math.floor(num)+"<br>")
document.write('ceil value:'+Math.ceil(num)+"<br>")

//q3
var num=+prompt('enter a number')
if(num<0){
    document.write('the absolute value of '+num+' is '+num*-1)
}
else{
    document.write('the absolute value of '+num+' is '+num)

}

//q4
var num=Math.random()*6
document.write('random dice value:'+Math.round(num)+"<br>")
var num=Math.random()*6
document.write('random dice value:'+Math.round(num))

//q5
 var num=Math.random()*2
 num2=Math.round(num)
 document.write('random dice value:'+num2+"<br>")
    if(num2==2){
        document.write('random coin value:Heads')

    }
    else if(num2==1){
        document.write('random coin value:tails')

    }
    else{
        document.write('try again')
    }

//q6
var num=Math.random()*100
document.write('random number between 1 and 100 is:'+Math.round(num)+"<br>")

//q7
var weight=prompt('enter your weight')
document.write('the weight of user is:'+weight)

//q8
var num=Math.random()*10
var num2=Math.round(num)
var secret=+prompt('enter a secret number between 1 and 10')
if(num2==secret){
    alert('eureka!you have found it')
}
else(
    alert('try again')
)

///////////chap 31-34///////////////////////
//q1
var a=new Date()
alert(a)

//q2
var a=new Date()
var b=a.toString()
c=b.slice(4,7)
alert('current month:'+c)

//q3
var a=new Date()
var b=a.toString()
c=b.slice(0,3)
alert('Today is:'+c)

//q4
var a=new Date()
var b=a.toString()
c=b.slice(0,3)

if(c=='sat'){
    alert('its fun day')
}

else if(c=='sun'){
    alert('its fun day')
}

//q5
var a=new Date()
a=a.getDate()
if(a<15){
    document.write('First fifteen days of the month')
}
else{
    document.write('Last days of the month')
}

//q6
var a=new Date()
document.write('Current Date:'+a+"<br>")
b=a.getTime()
document.write('elapsed millisecond since jan 1,1970:'+b+"<br>")
document.write('elapsed mibutes since jan 1,1970:'+b/(1000*60*60))

//q7
var a= new Date()
a=a.getHours()
if(a<12){
    alert('Its AM')
}
else{
    alert('Its PM')
}

//q8
var a =new Date('Dec 31,2020')
alert('Later date:'+a)

//q9
var ramadan=new Date('Apr 24,2020')
var ramadanmilli=ramadan.getTime()
var today=new Date()
var todaymilli=today.getTime()
var diff=todaymilli-ramadanmilli
var days=diff/(1000*60*60*24)
var accurate=Math.floor(days)
alert(accurate+' days have passed since 1st ramadan')

//q10
var ramadan=new Date('Jan 01,2020')
var ramadanmilli=ramadan.getTime()
var today=new Date()
var todaymilli=today.getTime()
var diff=todaymilli-ramadanmilli
var days=diff/(1000*60)
var accurate=Math.floor(days)
alert(accurate+' days have passed since 1st jan')



//q13
var dob=new Date(prompt('enter your age','Dec 17,1987'))
var dobmilli=dob.getTime()
var today=new Date()
var todaymilli=today.getTime()
var diff=todaymilli-dobmilli
var accurate=Math.floor(diff/(1000*60*60*24*30*12))
alert('your age is:'+accurate)

//q14
var name=prompt('enter name')
var date=new Date()
var b=date.toString()
var a=b.slice(3,7)
var units=prompt('enter number of units')
var unitprice=prompt('enter charges per unit')
document.write('K-Electric Bill'+"<br>"+"<br>")
document.write('Customer Name:'+name+"<br>")
document.write('Month:'+a+"<br>")
document.write('Units consumed:'+units+"<br>")
document.write('Charges per unit:'+unitprice+"<br>"+"<br>")

document.write('Net Amount Payable(with in due date):'+units*unitprice+"<br>")
document.write('LAte payment surcharge:'+350+"<br>")
document.write('Units consumed:'+(unitprice*units+350)+"<br>")





/////////////////chap 35-38
//q1
function time(){
var a=new Date()
document.write(a)}
time()

//q2
function greet(){
var first=prompt('enter your first name')
var last=prompt('enter your last name')
document.write('welcome '+first+' '+last)
}
greet()

//q3
function add(){
    var num1=+prompt('enter first number')
    var num2=+prompt('enter second number')
    document.write('sum:'+(num1+num2))
}
add()

///////q4
function calculator(){

 var num1=+prompt('enter 1st number')
 var num2=+prompt('enter 2nd number')
 var sign=prompt('enter an operator i.e:+,-,*,/')
 if(sign=='+'){
     document.write(num1+sign+num2+'='+(num1+num2))
 }
 else if(sign=='-'){
     document.write(num1+sign+num2+'='+(num1-num2))
 }
 if(sign=='*'){
     document.write(num1+sign+num2+'='+(num1*num2))
 }
 if(sign=='/'){
     document.write(num1+sign+num2+'='+(num1/num2))
 }

}
calculator()

//q5
function square(a){
        document.write('square of '+a+'is:'+(a*a))
}
square(5)

//q6
function factorial(){
var fact=1
var num=+prompt('enter a number')
for(var i=1;i<=num;i++){
    fact=fact*i
}
alert(fact)}
factorial()

//q7
function series(){
var start=+prompt('enter a starting number')
var end=+prompt('enter ane ending number')
for(var i=start;i<=end;i++){
    document.write(i+"<br>")
}}
series()

//q8
function hyp(){
    var base=+prompt('enter base of triangle')
    var perp=+prompt('enter perpendicular of triangle')
    function square(){
        base=base*base
        perp=perp*perp
    }
    square()
    document.write('hypotenuse='+((base)+(perp)))
    }
hyp()

///q9
function area(w,h){
    var area=w*h
    document.write('Area:'+area)
}
area(5,4)

q10
var palin=prompt('enter a palindrome word')
for(var i=palin.length-1;i>=0;i--){
    palin[i]
}

if(word==palin){
    document.write('thi is a palindrome word')
}
else{
    document.write('this is not a palindrome word')
}

//q11
var para='the quick brown fox'
var capi=para.toUpperCase()
alert(capi)

q12



//q13
function count(para,letter){
    var count=0
    for(var i=0;i<para.length;i++){
        var para1=para[i]
        if(para1=='o'){
            count=count+1
        }
    }
document.write(count)
}
count('JSResources.com','o')

//q14
function calcCircumference(r){
    var circum=2*3.14*r
    document.write('the circumference is:'+circum+"<br>")
}
function calcArea(r){
    var area=3.14*r*r
    document.write('the area is:'+area)

}
calcCircumference(5)
calcArea(5)



























































































































































































































