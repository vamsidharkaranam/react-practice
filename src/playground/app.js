//React component is nothing but es6 class
//react component has one special method called 'render'
//react compoment require 'render' method to be defined
//with react components you must define render
//React components inforces uppercase first letter as tha component name


//Topics covered
//1. JSX
//2. conditional JSX
//3. components
//4. class-based components and methods
//5. props in class-based components
//6. states in class-based components
//7. stateless-functional components
//8. default props in components
//9. life cycles in class-based components
//10. Local storage
//11. array filter, concat, map
//12. classes in es6
//13. let, const and var
//14. arrow functions
//15. error handling and try catch
//16. using (e) event object in form submit



class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: this.props.Options
    };
  }
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(()=>({
          options
        }));
      }
    }catch(e){
      // do nothing
    }

   
  }

  componentDidUpdate(prevProps, prevState){
console.log(prevState.options);
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
      
    }
  }

  componentWillUnmount(){

  }

  handleDeleteOptions(){
    this.setState(()=> ({options: []}));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>(
      {options: prevState.options.filter((option)=>{
        return optionToRemove !== option;
      })}
    ));
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }


  handleAddOption(option)
  {
    if(!option){
    return 'Enter valid value to add item';
  } else if(this.state.options.indexOf(option) > -1){
    return 'This option already exists';
  }
    //this.state.options.push(option);
    this.setState((prevState)=>
      ({options: prevState.options.concat([option])})
    );
 
  }
  render(){
    const subtitle = "Put your life in the hands of computer";
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        hasOptions={this.state.options.length > 0}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}


IndecisionApp.defaultProps = {
  Options: []
};



const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps = {
  title: "Indecision"
};





const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  );
};





const Options = (props) => {
  return (
    <div>
    {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>*/}
    {/*doing like this is inefficient, it require re-run bind everytime component re-renders*/}
    {/*instead we over rider constructor function for react component to fix the 'this' bind issue for handleRemoveAll*/}
    <button disabled={!props.hasOptions} onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length == 0 && <p>Please add an option to get started!</p>}
     {props.options.map((option)=>{
       return (
         <Option 
         key={option} 
         optionText={option} 
         handleDeleteOption={props.handleDeleteOption}
         />);
     })}
    </div>
  );
};





const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=>{
        props.handleDeleteOption(props.optionText, e);
      }}>Remove</button>
    </div>
  );
};






class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(
      ()=>({error})
    );

    if(!error){
      e.target.option.value='';
    }

  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form  onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}





ReactDOM.render(<IndecisionApp Options={[]}/>, document.getElementById('app'));
