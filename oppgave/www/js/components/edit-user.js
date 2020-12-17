import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }

    };
  }

  // din kode her


  //  fetch("api/fetchUsers.php") Already done
  // 

  render() {
   return html`

     <!-- Display all fields to change -->
    <form class= "updateUserInfo">
      <p> Username: ${this.uname} </p>
      <p> First Name: ${this.firstName} </p>
      <p> Last Name: ${this.lastName} </p>
      <p> old password: ${this.oldPwd} </p>
      <p> new password: ${this.pwd} </p>

      <!-- Submit button  can be implemented-->
    </form>
    `
  }
}
customElements.define('edit-user', EditUser);
