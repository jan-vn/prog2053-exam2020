import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
    <form onsubmit:"javascript: return false;" id="user" method="POST">
    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div>
      <label for="email">E-mail</label>
      <input id="uname" name="uname" type="text" value="${this.user.uname}" required>
    </div>
    <div>
      <label for="oldPwd">Old Password</label>
      <input id="oldPwd" name="oldPwd" type="password" required>
    </div>
    <div>
      <label for="newPwd">New Password</label>
      <input id="newPwd" name="newPwd" type="password" required>
    </div>
     <input type="submit" @click=${this.updateUser} id="submit" name="editUser" value="Submit"></input>
    </form>
  `;
}

updateUser(e) {
  const data = new editedData(e.target.form);
  console.log(e);
  fetch('api/updateUsers.php', {
    method: 'POST',
    body: data
  }).then(res=>res.json()).then(data=>{
    if (data.status == 'success') {
      console.log("Sucess: user has been updated");
    } else {
      console.log("Error: user has not been updated");
    }
  })
}

}

customElements.define('edit-user', EditUser);
