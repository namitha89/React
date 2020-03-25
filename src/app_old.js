console.log("app.js is running")

// JSX - javascript XML

const app ={
    title:"Indecision App",
    subtitle:"This is my subtitle",
    options:['One', 'Two']
}
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// );

// const username = 'Namitha';
// const userAge = 17;
// const userLocation = 'Philadelphia';

// // or 

// const user = {
//     name:'Nami',
//     age:26,
//     location:'Philadelphia'
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>
//     }
// }

// let count=0;
// const addOne = () =>{
//     count++;
//     renderCounterApp()
//     console.log('addOne');
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp()
//     console.log('minus');
// }
// const reset = () =>{
//     count=0;
//     renderCounterApp()
//     console.log('reset');
// }

const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log('form submitted');
    const option = e.target.elements.option.value;
    if (option){
            app.options.push(option);
            e.target.elements.option.value='';
            render()
        }
};

const onRemoveAll =()=>{
    app.options =[]
    render()
}

const onDecision = () =>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber]
    alert(option)
}
 
const appRoot = document.getElementById("app");
  
const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0? 'Here your options':'No options'}</p>
                <p>{app.options.length}</p>
                <button onClick={onDecision}>what should I do?</button>
                <button onClick={onRemoveAll}>RemoveAll</button>
                <ol>
                    {
                        app.options.map((option) => {
                            return <li key={option}>{option}</li>;
                        })
                    }
                </ol>
                <form onSubmit = {onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};


render();


