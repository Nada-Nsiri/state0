
import './App.css';
import React from 'react';
import image from'./imagefolder/image.jpg';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            fullName:"Nada Nsiri",
            bio:"ma biographie" ,
             imgSrc:{image},
            profession:"étudiante",
            show:true,
            time:0
           };
      }

      toggleClick() {
this.setState(state => ({
        show: !state.show 
      }),()=>console.log(this.state.show)
        )
}

componentDidMount (){

  setInterval(() => { 
    this.setState(state => ({
     time : this.state.time+1 
    }))
    
  },1000);
  
  }


render()
{

return (
<div>
<button onClick={()=>this.toggleClick()} >
cliquer ici
</button>
<h1>{this.state.show ? this.state.fullName :""}</h1>
<h1>{this.state.show ? this.state.bio :""}</h1>
<h1>{this.state.show ? this.state.profession :""}</h1>
<div>   {this.state.show ? <img src={this.state.imgSrc}  alt='photos'/>:""}</div>
<p>{this.state.time}</p>

</div>
)
}
}
export default App;
