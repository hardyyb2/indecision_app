//My version

// const appRoot = document.querySelector('#app')
// const app = {
//     title:'visibility'
// }

// let buttonText ="hide Details";

// const onButtonClick=()=>{
//     if(buttonPara){
//         buttonText = "show Details";
//         buttonPara="";
//     }
//     else{
//         buttonText ="hide details"
//         buttonPara ="This is some text"
//     }
//     render();
// }
// let buttonPara = "this is some text"


// const render =()=>{

// const template =(
// <div>
// <h1>{app.title}</h1>
// <button onClick= {onButtonClick}>{buttonText}</button>
// <p>{buttonPara}</p>
// </div>
// );
// ReactDOM.render(template,appRoot);
// }

// render();


//Andrew's version
let visibility = true;

const onButtonClick=()=>{
    visibility =!visibility
    render();
}
const render=()=>{
const template =(
    <div>
    <h1>Visibility toggle</h1>
    <button onClick={onButtonClick}>
    {visibility ? "Hide Details":"Show details"}
    </button>
    {visibility && (
        <p>this is some text</p>
    )}
    </div>
)
ReactDOM.render(template,document.querySelector('#app'))
}


render();

