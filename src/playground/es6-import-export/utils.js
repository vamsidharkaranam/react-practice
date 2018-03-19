console.log('uitls.js is running');

export const square = function square(x){
 return x*x;
};

export default (a,b) => a-b;

//named export
//export {square};

//but a single file should have only one default export
//export { square, substract as default};