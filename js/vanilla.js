const cars =[
{name: 'BMW M2 Coupe', price: 20000, img:'https://mochamanstyle.com/wp-content/uploads/2016/07/BMW-M5-Pure-Metal-Silver-Limited-Edition-640x280.jpg'},
{name: 'Hyundai Lancaster Pa', price: 25000, img: 'https://imganuncios.mitula.net/2012_hyundai_sonata_lancaster_pa_5070018486249853791.jpg'},
{name: 'Bmw M4 Gts Unveiled', price: 20000, img: 'http://www.automotorblog.com/wp-content/uploads/2015/10/BMW-M4-GTS-40-830x450.jpg'},
{name: 'Toyota RAV4', price: 30000, img: 'http://assets.nydailynews.com/polopoly_fs/1.4044655.1543253540!/img/httpImage/image.jpg_gen/derivatives/article_1200/2019-toyota-rav4-xse-white-front-quarter.jpg'}
]

function createCar(car){

	return `
	<div class="card1">
		<div class="card-img">
			<img 
			src="${car.img}"
			alt="${car.name}">
		</div>
		<h3>${car.name}</h3>
		<p>${car.price}</p>
	</div>
	`
}
 
const templates=cars.map(car=>createCar(car))
const html=templates.join(' ')
document.querySelector('.list1').innerHTML=html


//динамическая рамка для карточки с машиной


document.querySelector('.list1').onclick = function(ev) {
    var target = ev.target; 

}

var checkList = [];
for(var ctr=0;ctr<cars.length;ctr++){
	checkList.push(false);
}

for (var j = 0, len = document.querySelector('.list1').children.length; j < len; j++){

    (function(index){ 	

        document.querySelector('.list1').children[j].onclick = function(){
              
        if(checkList[index]){
        	document.querySelectorAll('.card1')[index].style.border='';
        	checkList[index]=0;
        }else{
        	document.querySelectorAll('.card1')[index].style.border='2px groove green';
        	checkList[index]=1;
        }              
        } 
           
    })(j);  
}








