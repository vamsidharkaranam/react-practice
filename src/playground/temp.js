class CustomTable extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      test: false,
      records: this.props.records
    };
  }

  // componentDidMount() {
  //   setInterval(this.handleSubmit, 1000);
  // }

  handleSubmit(values){
  //  let count = Object.keys(values).length;
  //  let hasEmpty = 0;
  //   for(let item in values){
  //     if(values[item] === ""){
  //       ++hasEmpty;
  //     }
  //   }
  //   if(hasEmpty != 0){
  //     if(hasEmpty === count) return 'Begin entering values!!';
  //     else return 'Please enter all values to submit!!';
  //   }
      //console.log("values",values);
      // this.setState((prevState)=>
      // ({records: prevState.records.concat([values])})
      // );
      console.log("before: ",this.state.test);
      this.setState(()=>({
        test: true
      }));
      console.log("after: ",this.state.test);
      //console.log("records",this.state.records);
  }


render(){
  return (
    <div>
      <h1>Welcome to Custom Table</h1>
      <Table records={this.state.records}/>
      <AddInfo handleSubmit={this.handleSubmit}/>
    </div>
  );
}
}

class AddInfo extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleSubmit(e){
    e.preventDefault();
    const values = {
      date: e.target.date.value.trim(),
      category: e.target.category.value.trim(),
      amount: e.target.amount.value.trim(),
      description: e.target.description.value.trim(),
      status: e.target.status.value.trim()
    };
    const error = this.props.handleSubmit(values);
    this.setState(()=>({
      error
    }));
    if(!error){
      e.target.date.value = '';
      e.target.category.value = '';
      e.target.amount.value = '';
      e.target.description.value = '';
      e.target.status.value = '';
    }

  }

 
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      {this.state.error && <p>{this.state.error}</p>}
        <p><input type="text" placeholder="Date" name="date" className='form-control'/></p>
        <p><input type="text" placeholder="Category" name="category" className='form-control'/></p>
        <p><input type="text" placeholder="Amount" name="amount" className='form-control'/></p>
        <p><input type="text" placeholder="Description" name="description" className='form-control'/></p>
        <p><input type="text" placeholder="Status" name="status" className='form-control'/></p>
        <button className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

const Table = (props)=> {
    return (
      <div>
        <table className='table'>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {console.log("Table: ", props.records.values)}
          
          </tbody>
        </table>
        <br />
      </div>
    );
};

const Record = (props) => {
  return (
    <tr>
      <td>{props.values && props.values.date}</td>
      <td>{props.values && props.values.category}</td>
      <td>{props.values && props.values.amount}</td>
      <td>{props.values && props.values.description}</td>
      <td>{props.values && props.values.status}</td>
      <td><button className='btn btn-danger'>Remove</button></td>
    </tr>
  );
};



ReactDOM.render(<CustomTable records={[]}/>, document.getElementById('app'));

// {props.records.map((item)=>{
//   return (<Record values={item.values} key={item.values}></Record>);
// })}


//neelima code
    // let validate = undefined;
    // for(let item in values){
    //     if(values[item] === ""){
    //       if(validate === undefined)
    //       break;
    //       else{
    //       validate = true;
    //       //validate === undefined ? undefined: true;
    //       break;
    //     }
    //     }
    //     else {
    //       validate = false;
    //     }
    //   }
    //   if(validate=== undefined){
    //     error = 'Begin entering values!!';
        
    //     console.log(error);
    //   }else {
    //     error = 'Please enter all values to submit!!';
    //     console.log(error);
    //   }





















    class CustomTable extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      test: false
    };
  }


  componentDidUpdate(prevProps, prevState){
    console.log('component updated', this.state.test);
      }

  handleSubmit(){
      console.log("before: ",this.state.test);
      this.setState(()=>{
    console.log("--------------------------");
    return   {test: true};
        
      });
      console.log("after: ",this.state.test);
      console.log('1');
      console.log('2');
      console.log('3');
      console.log('4');

  }
render(){
  return (
    <div>
      <AddInfo handleSubmit={this.handleSubmit}/>
    </div>
  );
}
}

class AddInfo extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit();
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <button className='btn btn-primary'>Submit</button>
      </form>
      </div>
    );
  }
}


ReactDOM.render(<CustomTable records={[]}/>, document.getElementById('app'));

