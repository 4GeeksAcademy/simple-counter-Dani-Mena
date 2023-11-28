//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digito1 = 0;
let incremento = true;
let decremento = "";
let pausa = true;

const decrementos =(e) =>{
    decremento = parseInt(e.target.value);
}

const cambiar = () => {
    if(typeof decremento === 'number' && decremento > 0){
        digito1=decremento;
        incremento=false;
    }
    else{
        alert("El elemento a decrementar no es un número o es menor a 0");        
    }    
}
const play = ()=>{
    pausa=true;
}

const pause = ()=>{
    pausa=false;
}
const restart = ()=>{
    digito1=0;
    incremento=true;
}




    setInterval(() =>{
    if(pausa===true){
        if(incremento==true){digito1++}
    else{digito1--};
    if(digito1>=0){
        ReactDOM.render
    (<div className="text-center bg-dark text-white">
        <Home digito1={digito1}/>
        <button className="btn btn-info mb-5 me-3 text-white" type="button" value="Cambiar" onClick={restart}><i className="fa fa-arrow-left"></i></button>
        <button className="btn btn-success mb-5 me-3" type="button" value="Cambiar" onClick={play}><i className="fa fa-play"></i></button>
        <button className="btn btn-danger mb-5" type="button" value="Cambiar" onClick={pause}><i className="fa fa-pause"></i></button>
        <h6 className="text-center rounded bg-white text-black p-1 m-auto" style={{width:"150px"}}>CUENTA REGRESIVA</h6>
        <input className="text-center rounded" type="text" onChange={decrementos} placeholder="Segundos a descontar"></input>
        <button className="m-5 btn btn-primary" type="button" value="Cambiar" onClick={cambiar}>Iniciar cuenta atras</button>

    </div>
    
    , document.querySelector("#app"))
    }
    }
    
}, 1000);



