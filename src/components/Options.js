import React from 'react';
import Option from './Option';

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

export default Options;