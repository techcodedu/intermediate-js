// database
let users = [];

// saving  id="saveUser"

document.querySelector("#saveUser").addEventListener("click", () => {
  //logic on saving the data from form
  // name, age, email
  // id = "name";
  // id = "age";
  // id = "email";
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const email = document.querySelector("#email").value;

  //array call (users)
  users.push({ name, age, email });

  displayUsers();
});

// function to display
function displayUsers() {
  const userList = document.querySelector("#usersList");
  console.log(users);
  //clear last inserted value
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const perUserData = `<tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>
            <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
             <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
            </td>
    </tr>`;

    userList.innerHTML += perUserData;
  });
}

// function to delete a specific user
function deleteUser(index) {
  // splice(start, deleteCount)
  //console.log(`The user selected index number is ${index}`);
  users.splice(index, 1);
  displayUsers();
}

function editUser(index) {
  const user = users[index];
  console.log(`${user.name}`);
}
