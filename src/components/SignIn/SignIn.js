import React from 'react';


class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail:"",
      signInPassword:""
    }
  }

  onEmailChange = (event)=>{
    this.setState({signInEmail:event.target.value});
  }

  onPasswordChange = (event)=>{
    this.setState({signInPassword:event.target.value});
  }

  onSubmitSignIn = () => {
   fetch('https://limitless-wave-40652.herokuapp.com/signin', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       email: this.state.signInEmail,
       password: this.state.signInPassword
     })
   })
     .then(response => response.json())
     .then(user => {
         if (user.id) {
         this.props.loadUser(user);
         this.props.onRouteChange('home');
       }
     })
 }

  render(){
    const {onRouteChange} = this.props;
    return (
      <article className="br3 bw2 ba dark-gray b--black-50 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center bg-blue o-80">
        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                <input onChange={this.onEmailChange}
                       className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                       type="email"
                       name="email-address"
                       id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                       type="password"
                       name="password"
                       id="password"
                       onChange={this.onPasswordChange}/>
              </div>

            </fieldset>
            <div className="center">
              <input onClick={this.onSubmitSignIn} className=" b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white " type="button" value="Sign in"/>
            </div>
            <div className="lh-copy mt3 center">
              <p onClick={() => onRouteChange('register')}href="#0" className="f6 link dim black db pointer white">Register</p>

            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;
