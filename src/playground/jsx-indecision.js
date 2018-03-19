
//summary sec 3 lecture 1218
//Forms and Inputs

const app = {
  title: 'Indesicion App',
  Subtitle: 'Put your life in the habds of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  //arrays are supported by jsx by default, not like objects
  //jsx breaking in to your array, breaking them in to pieces and renders it in to screen.
  //{ [1, 2, 3] } => {1}{2}{3}
  //to optmize rendering process, we need to specify unique keay for each child item in an array while rendering in jsx directly.
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll} disabled={(app.options.length == 0) && 'disabled'}>Remove All</button>
   
      <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
      <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();