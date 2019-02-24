
var jsx =
<div className="container">
      <img src="https://pbs.twimg.com/profile_images/637612843374911488/L5uLPa5j_400x400.png" />   
      <h1>Hello React</h1> 
      <p>библиотека для создания пользовательских интерфейсов</p> 
</div>;
ReactDOM.render(jsx, document.getElementById('rootk'));


function Car(props){
const classes=['card']

if(props.car.marked){
   classes.push('marked')
 }
  
  return (
  <div className={classes.join(' ')} onClick={props.onMark}>

      <div className="card-img">
      <img 
      src={props.car.img}
      alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price}</p>
   </div>
    )
}


class App extends React.Component{
state = {
  cars:[
{marked: false, name: 'BMW M2 Coupe', price: 20000, img:'https://mochamanstyle.com/wp-content/uploads/2016/07/BMW-M5-Pure-Metal-Silver-Limited-Edition-640x280.jpg'},
{marked: false, name: 'Hyundai Lancaster Pa', price: 25000, img: 'https://imganuncios.mitula.net/2012_hyundai_sonata_lancaster_pa_5070018486249853791.jpg'},
{marked: false, name: 'Bmw M4 Gts Unveiled', price: 20000, img: 'http://www.automotorblog.com/wp-content/uploads/2015/10/BMW-M4-GTS-40-830x450.jpg'},
{marked: false, name: 'Toyota RAV4', price: 30000, img: 'http://assets.nydailynews.com/polopoly_fs/1.4044655.1543253540!/img/httpImage/image.jpg_gen/derivatives/article_1200/2019-toyota-rav4-xse-white-front-quarter.jpg'}

],
visible: true,
appTitle: 'Этот текст ты можешь изменить'
}

buttonHand(){
 this.setState({visible: !this.state.visible})
}

handMarked(name){
  const cars = this.state.cars.concat()
  const car = cars.find(c => c.name === name)
  car.marked = !car.marked
  this.setState({cars})  
}

renderCars(){
if(!this.state.visible){
  return null
}
  return this.state.cars.map(car=>{ 
    return (
      <Car car={car} 
      key={car.name + Math.random()}
      onMark={this.handMarked.bind(this, car.name)}
      />
    )
  }) 
}

titleChangeHandler(title){

  this.setState({appTitle:title})
}




  render(){
    return (
      <div className="app">
        <div><h1>{this.state.appTitle}</h1></div>
        <button id="elem" onClick={() => this.buttonHand()}>Скрыть</button> 
        <input type="text" id="tu" 
        placeholder= "измени заголовок"
        onChange={(event) => this.titleChangeHandler(event.target.value)}
        value={this.state.appTitle}
        />
        <hr/>
         <div className="list">
             { this.renderCars() }
          </div>
      </div>
  )
 }
}

ReactDOM.render(<App />, document.getElementById('root'))