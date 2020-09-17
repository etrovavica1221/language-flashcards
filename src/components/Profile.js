import React from 'react';
import axios from "axios";
import AvatarEditor from 'react-avatar-editor';
import '../styles/Profile.css';
import examplePic from '../styles/cat-reading-newspaper-445x299.jpg';

class Profile extends React.Component {
  state = {
    //profile
    forename: "john",
    surname: "smith",
    translateFrom:"english",
    translateTo: "russian",
    email: "johnsmith@gmail.com",
    password: "verysecret",
    //avatar
    image: examplePic,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 50,
    width: 120,
    height: 120  
  }

  // componentDidMount() {
  //   axios
  //   .get("http://localhost:5000")
  //   .then(response => {
  //     // this.setState((prevState) => ({
  //     //   forename: Value.forename,
  //     //   surname: Value.surname,
  //     //   translateFrom: Value.translateFrom,
  //     //   translateTo: Value.translateTo,
  //     //   email: Value.email,
  //     //   password: Value.password,
  //     //   ...prevState
  //     // }))
  //     console.log(response)
  //   })
  // }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({scale})
  }
  
  handleNewImage = e => {
    this.setState({image: e.target.files[0]})
  }
   
  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL()
    const rect = this.editor.getCroppingRect()
    
    // e.preventDefault();
    // if (Value.password === Value.confirmPassword) {
      //   console.log('passwords match');
      //   axios
      //     .put("http://localhost:5000", {
        //       forename: Value.forename,
        //       surname: Value.surname,
    //       translateFrom: Value.translateFrom,
    //       translateTo: Value.translateTo,
    //       email: Value.email,
    //       password: Value.password,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       setUserState({
      //         img,
    //         rect,
    //         scale: this.state.scale,
    //         userName: response.data.forename,
    //         forename: Value.forename,
    //         surname: Value.surname,
    //         translateFrom: response.data.translateFrom,
    //         translateTo: response.data.translateTo,
    //         email: Value.email,
    //         password: Value.password,
    //         loggedIn: true,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  }
  
  // edit = () => {
  //   this.setState({edit: !this.state.edit})
  // }

  render() {
    return (
      <div className="profile-data">
        <div id='profile-wrap'>
          <div id='img-wrap'>
              <AvatarEditor
                id='avatar'
                width={120}
                height={120}
                border={1}
                color={[0,0,0]} 
                scale={parseFloat(this.state.scale)}
                image={this.state.image}
              />
          <div id='edit-button-pic'>
          </div>
            {this.state.edit ? (
              <div id='avatar-settings'>
                <input name="newImage" type="file" onChange={this.handleNewImage} />
                <br />
                <input type="range" onChange={this.handleScale} min='1.2' max="2" step="0.05"/>
                <br />
                <input type="button" onClick={this.handleSave} value="OK" />
                <br />
              </div>
            ):(
              null
            )}
          </div>
          
          {!this.state.edit ?
          (<div id='profile-input-container'>
            <label className='profile-labels' htmlFor='forename'>Name:</label>
            <h1 className='profile-details' name="forename">
              {this.state.forename}
            </h1>
            <label className='profile-labels' htmlFor='surname'>Surname:</label>
            <h1 className='profile-details' name="surname">
              {this.state.surname}
            </h1>
            <label className='profile-labels' htmlFor='email'>Email:</label>
            <h1 className='profile-details' name="email">
              {this.state.email}
            </h1>
            <label className='profile-labels' htmlFor='translateFrom'>Translate From:</label>
            <h1 className='profile-details' name="translateFrom">
              {this.state.translateFrom}
            </h1>
            <label className='profile-labels' for='translateTo'>Translate To:</label>
            <h1 className='profile-details' name="translateTo">
              {this.state.translateTo}
            </h1>
            <button
              onClick={() => {
                this.setState({edit: true});
              }}
            >
              Edit
            </button>
          </div>)
          :(
          <div id='profile-input-container-edit'>
            <label htmlFor='forename'>Name:</label>
            <input className='profile-input' type="text" placeholder="First Name" required name="forename" />
            <label htmlFor='surname'>Surname:</label>
            <input className='profile-input' type="text" placeholder="Surname" required name="surname" />
            <label htmlFor='email'>Email:</label>
            <input className='profile-input' type="email" placeholder="Email Address" required name="email" />
            <label htmlFor='password'>Password:</label>
            <input className='profile-input' type="password" placeholder="Password" required name="password" />
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input className='profile-input' type="password" placeholder="Confirm Password" required name="confirmPassword" />
            <label htmlFor='translateFrom'>Translate From:</label>
            <select className='profile-input' defaultValue="Translate From" name="translateFrom">
              <option value="">Translate From</option>
              <option value="EN">English</option>
              <option value="RU">Russian</option>
              <option value="CH">Chinese</option>
            </select>
            <label htmlFor='translateTo'>Translate To:</label>
            <select className='profile-input' defaultValue="Translate To" name="translateTo">
              <option value="">Translate To</option>
              <option value="EN">English</option>
              <option value="RU">Russian</option>
              <option value="CH">Chinese</option>
            </select>
            <button
              onClick={() => {
                this.setState((prevState) => ({edit: false, ...prevState.profile }));
              }}
            >
              Cancel
            </button>
          </div>)} 
        </div>    
      </div>
    )
  }
}

export default Profile;
