
//summary sec 3 lecture 12,13
//different ways to use conditional rendering in JSX

const user = {
  name: 'Vamsi',
  age: 31,
  location: 'Webster'
};

function getLocation(location){
  if(location){
    return <li>Location: {location}</li>;
  }
  else undefined; 
}

const template = (
  <div>
    <h1>Welcome from react</h1>
    <p>Details of {user.name ? user.name : 'Anonymous'}</p>
    <ul>
      {(user.age && user.age>=18) && <li>Age: {user.age}</li>}
      {getLocation(user.location)}
    </ul>
    
  </div>
);

console.log(template);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);