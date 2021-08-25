import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
// import Particles from 'react-particles-js';

import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Probabilities from './components/Probabilities/Probabilities';
import axios from 'axios'



// const particlesOptions = {
//   particles: {
//     number:{
//       value:30,
//       density:{
//         enable:true,
//         value_area:800
//
//       }
//
//     }
//   }
// }

//'rote: signin'

const initialState = {
  input:'',
  imageUrl:'',
  prediction:"",
  imagemessage:'',
  final: false,
  box:{},
  route: 'signin',
  isSignedIn:false,
  user:{
    id:'',
    name:'',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    }

  
  loadUser = (data) =>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateProbabilities =(data) =>{
    return {
    first: data.prediction.uno.replace(/_/g," "),
    second: data.prediction.dos.replace(/_/g," "),
    third:  data.prediction.tres.replace(/_/g," ")
    }

  }

displayProbabilities = (box) =>{
  this.setState({box:box})
};


  onInputChange = (event) =>{

    let reader = new FileReader();
    reader.onload = (event) => {
        let dataURL = reader.result;
        let nLetters = dataURL.indexOf(";")
        let text = dataURL.slice(0,nLetters)
        dataURL = dataURL.replace(text,"data:image/jpeg")
        let base64Image = dataURL.replace("data:image/jpeg;base64,","");
        base64Image = base64Image.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
        this.setState({input:dataURL})
        this.setState({imagemessage: base64Image});
    }

    reader.readAsDataURL(event.target.files[0]);
    //this.setState({input:event.target.files[0]});
  }

  
  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input})
    this.setState({final:true})
    let message = {
                image: this.state.imagemessage
            }
          axios.post('https://machinelearningpred.herokuapp.com/predict_dog_breed',{
            data: JSON.stringify(message.image)
          })
        .then(response => {
          this.setState({prediction:response.data.prediction})
          return response})
        .then(response => {
          if(response){
            fetch('https://limitless-wave-40652.herokuapp.com/image',{
              method:'put',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({
                id:this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user,{entries:count}))
            })
            .catch(console.log())
          }
        }).catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    if (route==='signout') {
      this.setState(initialState)
    }else if (route==='home'){
      this.setState({isSignedIn:true})
    }
      this.setState({route:route})
  }

// <Particles className='particles' params={particlesOptions}/>
  render() {
    const {isSignedIn, imageUrl,route,box, final} = this.state;
    return(
    <div>

      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {route==='home'
      ? (
          <div>
            <Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <Probabilities box={box} final={final}/>
            <div style={{borderRadius:'4px',height:'300px', width:'300px', backgroundColor: 'black',opacity:'0.8', color:'white',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',margin: '10px auto'}}> 
                {this.state.prediction.split(';').map((pred,idx)=>{
                  return(
                    <div style={{display:'flex',flexDirection:'column', alignSelf:'center',margin:'1px auto', padding:'10px 0'}} key={idx}>
                      {pred}
                    </div>
                  )
                })
                }              
            </div>
            <FaceRecognition imageUrl={imageUrl}/>

          </div>
        )
      : (
        route === 'signin'
        ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )




      }
    </div>
  )};
}

export default App;
