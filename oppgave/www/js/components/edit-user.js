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
      <input id="firstName" name="firstName" type="text" placeholder="First Name" value="${this.user.firstName}" required>
    </div>
    <div>
      <input id="lastName" name="lastName" type="text" placeholder="Last Name" value="${this.user.lastName}" required>
    </div>
    <div>
      <input id="uname" name="uname" type="text" placeholder="E-mail" value="${this.user.uname}" required>
    </div>
    <div>
      <input id="oldPwd" name="oldPwd" type="password" placeholder="Old password" required>
    </div>
    <div>
      <input id="newPwd" name="newPwd" type="password" placeholder="New password" required>
    </div>
    <br>
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
