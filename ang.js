document.querySelector('.btn-user').addEventListener('click', getUser);
document.querySelector('.btn-property').addEventListener('click', getUserProperty);
let userBox = document.querySelector('.app');
let display = document.querySelector('.text-box');
let propertyBox = document.querySelector('#userProperties');


let variablee = '';
let usedProperty = [];

function getUser(e) {
    const name = document.querySelector('#userName').value;
    e.preventDefault();
    fetch(`https://api.github.com/users/${name}`)   
    .then(response => response.json())
    .then(data => {
        variablee = data;   
        const userDiv= createUserCard(data); 
        display.innerHTML = userDiv;
        const propertyDiv = chooseProperty(data);
        propertyBox.innerHTML = propertyDiv;

    })
}

function getUserProperty(e) {
    e.preventDefault();  
    const userProperty = document.querySelector('#userProperties').value;
    if (usedProperty.includes(userProperty)) {
      return;
    }    
   let newHTML = `<p class="property_details"> ${userProperty}: ${variablee[userProperty]}</p>`
   display.insertAdjacentHTML('beforeend', newHTML);
   usedProperty.push(userProperty);
}
    
function createUserCard(user) {
    return `
    <div class="user">
        <p><img src="${user.avatar_url}" alt="${user.name}" class="user_img"></p>
        <p> name: ${user.name}</p>
    </div>
  `
}

function chooseProperty(properties) {
    const keys = Object.keys(properties);
    console.log(keys);
  return `
    //just thought it would be interesting to get a random index number and get random property for different searched person
    
    <option>${keys[Math.floor(Math.random() * keys.length)]}</option>
    <option>${keys[5]}</option>
    <option>${keys[19]}</option>
    <option>${keys[21]}</option>
    <option>${keys[24]}</option>  
    <option>${keys[20]}</option>  
    `;
}
    

    
