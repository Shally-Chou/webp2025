/*const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}*/

const styleArgument = { fontSize: '100px', color: 'red'};

const HelloCGU=()=>{
    return <h1 style = {styleArgument} > hello CGU!! </h1>;
}

export default HelloCGU;