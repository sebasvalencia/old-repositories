import React from "react";

class UserForm extends React.Component {


    nameRef = React.createRef();
    idRef = React.createRef();
    emailRef = React.createRef();
    birthdayRef = React.createRef();
    githubRef = React.createRef();


  createUser = (event) => {
      console.log("create User");
      event.preventDefault();
      const user = {
        name : this.nameRef.current.value,
        id: this.idRef.current.value,
        email: this.emailRef.current.value,
        birthday: this.birthdayRef.current.value,
        github: this.githubRef.current.value
      }
      console.log(user);

      this.props.createUser(user);

      
  };

  render() {
    return (
      <form className="user-form" onSubmit={this.createUser}>
        <input type="text" name="name" placeholder="Name" ref={this.nameRef} />
        <input type="text" name="id" placeholder="Identification" ref={this.idRef} />
        <input type="text" name="email" placeholder="Email" ref={this.emailRef} />
        <input type="text" name="birthday" placeholder="Birthday" ref={this.birthdayRef} />
        <input type="text" name="github" placeholder="Github User" ref={this.githubRef} />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default UserForm;
