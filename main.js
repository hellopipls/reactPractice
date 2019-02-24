



//меню
document.getElementById('nav').onmouseover= function(event) {
    var targ = event.target; // где был клик?
    if (targ.className == 'menu-item') {
        var s=targ.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event) {
    var targ = event.target; // где был клик?    
    if (targ.className!='menu-item' && targ.className!='submenu') {
        closeMenu();
    }
}

function closeMenu(){
    var menu=document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
//Кнопка1-а
 function sayThanks() {
  alert( 'Спасибо!' );
}

buton.onclick = sayThanks;


//кнопка2
    elem.ontransitionend = function() {
    alert( "ontransitionend" ); // не сработает
  }

  elem.addEventListener("transitionend", function() {
    alert( "Хороший выбор" ); // сработает по окончании анимации
  })

 //animation-кнопка
function textchange() {
 document.getElementById('mes').style.backgroundColor='green';
}

function textreturn() {
document.getElementById('mes').style.color='white';  
document.getElementById('mes').style.backgroundColor='blue';
}

mes.addEventListener("mouseover", textchange);
mes.addEventListener("mouseout", textreturn);



//menu-test (сладости)
   var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

   

//Пример checkbox
function fun1() {     //создали именную функцию fun1() 
var chbox;                         //объявили переменную 
chbox=document.getElementById('one'); 
                      
    if (chbox.checked) {
        alert('Выбран');
    }
    else {
        alert ('Не выбран');
    }
}

//Первый Второй Третий (RADIOBUTTON В JS)

function fun2() {
    var rad=document.getElementsByName('r1');
    for (var i=0; i<rad.length; i++) {
        if (rad[i].checked) {
            alert('Выбран элемент №  '+i);
        }
    }
}

//Яблоки Апельсины груши бананы
function fun3() {
    var sel=document.getElementById('mySelect').selectedIndex;
    var options=document.getElementById('mySelect').options;
    alert('Выбрана опция ' +options[sel].value+' - '+options[sel].text);
}

//три вида бегунка

function fun4() {
    var rng=document.getElementById('r2');   
    var p=document.getElementById('ones');    
        p.innerHTML=rng.value;
}


function fun5() {
     var rng=document.getElementById('r3'); //rng - это ползунок
   var i1=document.getElementById('i1'); // i1 - input
    i1.value=rng.value;
}


function fun6() {
    var rng=document.getElementById('r4'); //rng - это Input
    var div=document.getElementById('test'); // div - блок test
    div.style.width=rng.value+'px';
}

//зелёный квадрат и бегунок
function fun7() {
    //rtl - радиус скругления верхний левый угол
    var rtl=document.getElementById('rtl').value;
    //rtr - радиус скругления верхний правый угол
    var rtr=document.getElementById('rtr').value;
    //rbr - радиус скругления нижний правый угол
    var rbr=document.getElementById('rbr').value;
    //rbl - радиус скругления верхний правый угол
    var rbl=document.getElementById('rbl').value;
    //Теперь получим элементы input type="text"
    var ttl=document.getElementById('ttl');
    var ttr=document.getElementById('ttr');
    var tbr=document.getElementById('tbr');
    var tbl=document.getElementById('tbl');
    // получаем div по id
    var block=document.getElementById('block');

    // передаем значения из ползунков в input
    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    //скругляем углы прямоугольника
    block.style.borderRadius=rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px ';
}







//модальное окно2
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName('close')[0];

btn.onclick=function(){
    modal.style.display="block";    
}

span.onclick=function(){
    modal.style.display="none"; 
}

window.onclick=function(event){
   if(event.target==modal){
    modal.style.display="none";
   }
}



   


