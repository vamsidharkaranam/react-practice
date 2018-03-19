
class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visibilityStatus: false
    };
  }
  handleVisibility(){
    //console.log("handleVisibility");
    this.setState((prevState)=>{
      return {
        visibilityStatus: !prevState.visibilityStatus
      };
    });
    
  }
  render(){
    return (
      <div>
        <h1>Toggle Visibility</h1>
        <button onClick={this.handleVisibility}>{this.state.visibilityStatus ? "Hide Details" : "Show Detials"}</button>
        {this.state.visibilityStatus && <p>These are some details. </p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

























// console.log("Build it visible");

// let visibilityStatus = false;
// const onToggleButton = () => {
//   // if(visibilityStatus){
//   //   visibilityStatus = false;
//   // }
//   // else{
//   //   visibilityStatus = true;
//   // }
//   visibilityStatus = !visibilityStatus;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggleButton}>{visibilityStatus ? "Hide Details" : "Show details"}</button>
//       {(visibilityStatus) && (
//         <div>
//         <p>These are the details: </p>
//         <p>Vivamus lacinia vulputate mauris, ut volutpat sapien fermentum quis. Phasellus sit amet ullamcorper nisl. Integer elementum ex a dignissim iaculis. Aenean leo dolor, volutpat nec risus et, elementum varius lacus. Maecenas et convallis massa. Nunc a tellus et felis ullamcorper facilisis. Pellentesque gravida quam mi, eget ultricies dolor sagittis eu.
//         </p>
  
//   <p>Pellentesque in libero ac tortor interdum efficitur eget suscipit lectus. Ut mollis euismod sapien, a sodales purus condimentum a. In lobortis at nunc ac sodales. Nunc aliquam at neque vel suscipit. Nulla in tincidunt arcu. Nulla facilisi. Fusce facilisis quam ac magna commodo, a mollis libero volutpat.
//         </p>
//         </div>
//         )}
//     </div>
//   );
  
  
//   const appRoot = document.getElementById("app");
//   ReactDOM.render(template, appRoot);
// };

// render();
