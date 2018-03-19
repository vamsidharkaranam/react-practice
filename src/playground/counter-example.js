

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    const count = parseInt(localStorage.getItem('count'), 10);
    if(!isNaN(count)){
      this.setState(()=>({
        count
      }));
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      const count = this.state.count;
      localStorage.setItem('count', count);
    }
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count:prevState.count + 1
      };
    });
  }
  handleMinusOne(){
    this.setState((prevState)=> {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState(()=> {
      return {count: 0};
    });
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+</button>
        <button onClick={this.handleMinusOne}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps={
  count: 0
};
ReactDOM.render(<Counter />, document.getElementById('app'));


















// //sec 3 lecture 16, 17
// //events and attributes

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   //console.log("Plus one", count);
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count=0;
//   renderCounterApp();
// };
// //sec 3 lecture 16
// //throws error as "unknown DOM property" while using class="button" in JSX, instead use className="button".
// //'class' keyword is reserved for es6 CLASSES in javascript therefore we can't use 'class' in js or jsx.
// //sec 3 lecture 17
// //jsx doesnot have built in databinding
// //with renderCounterApp(); we are doing manual databinding, to rerender jsx in button click. we can do it with components also.
// //to render everthing for every little change is not efficient
// //but react uses virtualDOM algorithm to detect minimal number of changes which renders only the updated values. This is done by ReactDOM.render
// //VirtualDOM algorithm is also a javascript, react runs this js to compare current js and determines what exactly need to be changed.

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id="countButton" className="button" onClick={addOne}>+</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(template2, appRoot);
// };
// renderCounterApp();