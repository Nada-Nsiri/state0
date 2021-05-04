
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
            show:true
           };
      }

      toggleClick() {
this.setState(state => ({
        show: !state.show 
      }),()=>console.log(this.state.show)
        )

}
componentDidMount() {
  setInterval(() => {
    console.log (new Date ())
    },100000000000);
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

</div>
)
}
}
export default App;
