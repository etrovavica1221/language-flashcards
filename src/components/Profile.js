import React from 'react';
import axios from "axios";
import Alert from './Alert';
import AvatarEditor from 'react-avatar-editor';
import '../styles/Profile.css';
import examplePic from '../styles/cat-reading-newspaper-445x299.jpg';

class Profile extends React.Component {
  alertState = {
      message: "",
      isSuccess: false,
    }

  state = {
    //profile
    forename: this.props.userState.forename,
    surname: this.props.userState.surname,
    translateFrom:this.props.userState.translateFrom,
    translateTo: this.props.userState.translateTo,
    email: this.props.userState.email,
    newPassword: "",
    confirmNewPassword: "",
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

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({scale})
  }
  
  handleNewImage = e => {
    this.setState({image: e.target.files[0]})
  }
   
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSave = (e) => {
    //const img = this.editor.getImageScaledToCanvas().toDataURL()
    //const rect = this.editor.getCroppingRect()
    e.preventDefault();
    if (this.state.newPassword === this.state.confirmNewPassword) {
      axios
        .patch(`https://translation-app-mcrcodes.herokuapp.com/updateUser?id="${this.props.userState.userID}"`, {
          "forename":this.state.forename,
          "surname":this.state.surname,
          "translateFrom":this.state.translateFrom,
          "translateTo":this.state.translateTo,
        })
        .then((response) => {
          if (this.state.newPassword) {
            axios
              .patch(`https://translation-app-mcrcodes.herokuapp.com/updateUser?id="${this.props.userState.userID}"`, {
                "password":this.state.newPassword
              })
              .then((response) => {
                console.log(response)
              })
              .catch((err) => {
                console.log(err);
              })
          }
          console.log(JSON.stringify(response.data));
          this.props.userState.forename = this.state.forename
          this.props.userState.surname = this.state.surname
          this.props.userState.translateFrom = this.state.translateFrom
          this.props.userState.translateTo = this.state.translateTo
          this.setState({edit: false});
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('passwords')
      this.alertState.message = "Passwords do not match"
      this.alertState.isSuccess = false
      console.log(this.alertState)
    }
  }
  
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
            <label className='profile-labels' htmlFor='translateTo'>Translate To:</label>
            <h1 className='profile-details' name="translateTo">
              {this.state.translateTo}
            </h1>
            <button
              className="base-button"
              onClick={() => {
                this.setState({edit: true});
              }}
            >
              Edit
            </button>
          </div>)
          :(
          <div id='profile-input-container-edit'>
            <h4>*Only update the fields that need to be updated in your profile</h4>
            {this.alertState.message && (<Alert message={this.alertState.message} success={this.alertState.isSuccess} />)}
            <label htmlFor='forename'>Name:</label>
            <input className='profile-input' type="text" onChange={this.handleChange} placeholder="First Name" defaultValue={this.state.forename} required name="forename" />
            <label htmlFor='surname'>Surname:</label>
            <input className='profile-input' type="text" onChange={this.handleChange} placeholder="Surname" defaultValue={this.state.surname} required name="surname" />
            <label htmlFor='email'>Email:</label>
            <input className='profile-input' type="email" onChange={this.handleChange} placeholder="Email Address" defaultValue={this.state.email} disabled name="email" />
            <label htmlFor='password'>New Password:</label>
            <input className='profile-input' type="password" onChange={this.handleChange} placeholder="Password" required name="newPassword" />
            <label htmlFor='confirmPassword'>Confirm New Password:</label>
            <input className='profile-input' type="password" onChange={this.handleChange} placeholder="Confirm Password" required name="confirmNewPassword" />
            <label htmlFor='translateFrom'>Translate From:</label>
            <select className='profile-input' onChange={this.handleChange} defaultValue={this.state.translateFrom} name="translateFrom">
              <option value="">Translate From</option>
              <option value="EN">English</option>
              <option value="RU">Russian</option>
              <option value="CH">Chinese</option>
            </select>
            <label htmlFor='translateTo'>Translate To:</label>
            <select className='profile-input' onChange={this.handleChange} defaultValue={this.state.translateTo} name="translateTo">
              <option value="">Translate To</option>
              <option value="EN">English</option>
              <option value="RU">Russian</option>
              <option value="CH">Chinese</option>
            </select>
            <input type="button" className="base-button" onClick={this.handleSave} value="OK" />
            <button
              className="base-button"
              id="cancel-button"
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
