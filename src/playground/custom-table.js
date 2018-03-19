class CustomTable extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      records: this.props.records,
    };
  }

  componentDidMount(){
    try{
      const records = JSON.parse(localStorage.getItem('records')); 
      this.setState(()=>({
        records
      }));
    }
    catch(e){
      //
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.records.length !== this.state.records.length){
    const json = JSON.stringify(this.state.records);
    localStorage.setItem('records', json);
    }
  }

  handleSubmit(values){
   let count = Object.keys(values).length;
   let hasEmpty = 0;
    for(let item in values){
      if(values[item] === ""){
        ++hasEmpty;
      }
    }
    if(hasEmpty != 0){
      if(hasEmpty+1 === count) return 'Begin entering values!!';
      else return 'Please enter all values to submit!!';
    }

    // this.state.records.map((item)=>{
    //       if(item.id === values.id){
    //         values.id = item.id+1;
    //         console.log('got it'+ item.id);
    //       } 
    //     });
        
        this.setState(()=>{
          return {records: this.state.records.concat([values])};
        });

  }

  handleRemove(optionToRemove){
    if(optionToRemove){
      this.setState(()=>({
        records: this.state.records.filter((item)=>{
          return item.id !== optionToRemove;
        })
      }));
    }
  }


render(){
  return (
    <div>
      <h1>Welcome to Custom Table</h1>
      <br />
      <br />
      {this.state.records.length > 0 && <Table records={this.state.records}  handleRemove={this.handleRemove}/>}
      <AddInfo handleSubmit={this.handleSubmit} records={this.state.records} id={this.state.id}/>
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
    let id = 1;
    if(this.props.records){
      id = this.props.records.length + 1;
    }
    const values = {
      id: Date.now(),
      date: e.target.date.value.trim(),
      category: e.target.category.value.trim(),
      amount: e.target.amount.value.trim(),
      description: e.target.description.value.trim(),
      status: e.target.status.value.trim()
    };
    const error = this.props.handleSubmit(values);
    this.setState(()=>({
      error: error

    }));
    if(!error){
      e.target.date.value = '';
      e.target.amount.value = '';
      e.target.category.value = 'Category';
      e.target.description.value = '';
      e.target.status.value = 'Status';
    }
  }
 
  render(){
    return (
      <form onSubmit={this.handleSubmit} style={{width: 250 + 'px'}}>
      {this.state.error && <p>{this.state.error}</p>}
      <p><input type="date" placeholder="Date" name="date" className='form-control'/></p>
      <p><input type="number" placeholder="Amount" name="amount" className='form-control'/></p>
        <p><select className="form-control" name="category" placeholder="Category">
        <option>Category</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Default Expenses</option>
      </select></p>
        <p><textarea type="text" placeholder="Description" name="description" className='form-control'/></p>
        <p><select className="form-control" name="status" placeholder="Status">
        <option>Status</option>
        <option>Paid</option>
        <option>Pending</option>
      </select></p>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const Table = (props)=> {
    return (
      <div>
      <table className="table table-sm table-striped" >
        <tbody>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
          {props.records.map((item)=>{
            //console.log(item);
            return (
              <Record values={item} key={item.id} handleRemove={props.handleRemove} records={props.records}></Record>);
          })}
          </tbody>
        </table>
        <br />
      </div>
    );
};

const Record = (props) => {
  if(props.records.length > 0){
    return (
      <tr className={ props.values.status === "Pending" ? 'table-danger' : 'table'}>
        <td>{props.values && props.values.id}</td>
        <td>{props.values && props.values.date}</td>
        <td>{props.values && props.values.amount}</td>
        <td>{props.values && props.values.category}</td>
        <td>{props.values && props.values.description}</td>
        <td>{props.values && props.values.status}</td>
        <td>{ props.values.status !== "" && <button className='btn btn-danger btn-sm' onClick={(e)=>{
          props.handleRemove(props.values.id, e);
        }}><i className="material-icons md-18">delete</i></button>}
        </td>
      </tr>
    );
  }

};



ReactDOM.render(<CustomTable records={[]}/>, document.getElementById('app'));

// {props.records.map((item)=>{
//   return (<Record values={item.values} key={item.values}></Record>);
// })}


//neelima code
    // let valiID = undefined;
    // for(let item in values){
    //     if(values[item] === ""){
    //       if(valiID === undefined)
    //       break;
    //       else{
    //       valiID = true;
    //       //valiID === undefined ? undefined: true;
    //       break;
    //     }
    //     }
    //     else {
    //       valiID = false;
    //     }
    //   }
    //   if(valiID=== undefined){
    //     error = 'Begin entering values!!';
        
    //     console.log(error);
    //   }else {
    //     error = 'Please enter all values to submit!!';
    //     console.log(error);
    //   }
