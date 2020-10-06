import React from 'react';
import axios from "axios";
import Alert from './Alert';
import AvatarEditor from 'react-avatar-editor';
import '../styles/Profile.css';

class Profile extends React.Component {
  alertState = {
      message: "",
      isSuccess: false,
    }

  state = {
    //profile
    forename: this.props.userState.forename,
    surname: this.props.userState.surname,
    translateTo: this.props.userState.translateTo,
    email: this.props.userState.email,
    newPassword: "",
    confirmNewPassword: "",
    //avatar
    image: this.props.userState.image,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 50,
    width: 120,
    height: 120
  }

  handlePositionChange = position => {
    this.setState({ position })
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({scale})
  }
  
  handleNewImage = e => {
    let file = e.target.files[0];
    // Split the filename to get the name and type
    let fileParts = e.target.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    axios.post("https://translation-app-mcrcodes.herokuapp.com/sign_s3",{
      fileName : fileName + Date.now() + '.' + fileType,
      fileType : fileType,
      position : this.state.position,
      scale: this.state.scale, 
    })
    .then(response => {
      const returnData = response.data.data.returnData;
      const signedRequest = returnData.signedRequest;
      const url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);
      
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        this.setState({image: url})
        this.props.userState.image = this.state.image
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
  }
   
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSave = (e) => {
    e.preventDefault();
    if (this.state.newPassword === this.state.confirmNewPassword) {
      axios
        .patch(`https://translation-app-mcrcodes.herokuapp.com/updateUser?id="${this.props.userState.userID}"`, {
          "forename":this.state.forename,
          "surname":this.state.surname,
          "translateTo":this.state.translateTo,
          "image":this.state.image,
          "position":this.state.position,
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
                position={this.state.position}
                onPositionChange={this.handlePositionChange}
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
            <label htmlFor='translateTo'>Translate To:</label>
            <select className='profile-input' onChange={this.handleChange} defaultValue={this.state.translateTo} name="translateTo">
              <option value="">Translate To</option>
              <option value="EN">English</option>
              <option value="RU">Russian</option>
              <option value="zh-CN">Chinese</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
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
