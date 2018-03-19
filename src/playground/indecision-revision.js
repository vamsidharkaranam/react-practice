
class Indecision extends React.Component {
  constructor(props){
    super(props);
    this.handleAction = this.handleAction.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: this.props.Options
    };
  }


  componentDidMount(){
    try{
      const options = JSON.parse(localStorage.getItem('options'));
      if(options){
        this.setState(()=>({
          options
        }));
      }
    }
    catch(e){
      //
    }
  }

  componentDidUpdate(prevProps, prevState){
    //console.log(prevState.options);
    
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    //console.log("prevState: ",prevState.options);
    }
  }

  componentWillUnmount(){

  }


  handleAction(){
    if(this.state.options.length > 0){
      let random = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[random]);
    }
    
  }

  handleDeleteOptions(){
    this.setState(()=>(
      {
        options: []
      }
    ));
  }

  handleDeleteOption(optionToDelete){
    // const options = this.state.options.filter((option)=>{
    //   return option !== optionToDelete;
    // });
    this.setState(()=>(
      {
        options: this.state.options.filter((option)=>{
          return option !== optionToDelete;
        })
      }
    ));
  }

  handleAddOption(option){
    if(this.state.options.indexOf(option) !== -1){
      return 'Option already exists.';
    } else if(!option){
      return 'Enter valid option.';
    }
    this.setState((prevState)=>
    ({options: prevState.options.concat([option])})
  );
  }

  render(){
    return(
      <div>
        <Header />
        <Action handleAction={this.handleAction}
          options={this.state.options}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer!'

};

const Action = (props) => {
  return (
    <div>
    {props.options.length === 0 && <p>Enter any option to begin with!</p> }
      <button disabled={!props.options.length > 0} onClick={props.handleAction}>What should I do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
    <button disabled={!props.options.length > 0} onClick={props.handleDeleteOptions} >Remove All</button>
    {props.options.map((option)=>{
      return (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}></Option>
      );
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
      }}
      >Remove</button>
    </div>
  );
};


class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption =this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=>({error}));
    if(!error){
      e.target.option.value = '';
    }
  }
 render(){
   return (
     <form onSubmit={this.handleAddOption}>
     {this.state.error && <p>{this.state.error}</p>}
      <input type='text' name='option'/>
      <button >Add Option</button>
     </form>
   );
 }
}

Indecision.defaultProps = {
  options: []
};

ReactDOM.render(<Indecision Options={[]}/>, document.getElementById('app'));