// Add your code here

let name = "Steve"
let email = "steve@steve.com"

function submitData(usrName, usrEmail){

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
                     name : `${usrName}`,
                     email: `${usrEmail}`
                 })
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        let body = document.querySelector('body');
        body.innerHTML = object.id;        
      })
      .catch(function (error) {
        let body = document.querySelector('body');
        body.innerHTML = error.message;
      })
}

submitData(name, email)