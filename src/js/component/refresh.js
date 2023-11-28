import React from "react";

const Refresh = ({seconds}) =>{

    const recarga = () =>{
        location.reload()
        if(seconds ===1){
            alert(`El contador ha finalizado en un segundo.`);
        }
        else{
           alert(`El contador ha finalizado en ${seconds} segundos.`); 
        } 
        
    };
    return(
        <div>
            <button className="m-5 btn btn-success" type="button" value="Recargar" onClick={recarga}>Iniciar de nuevo</button>
        </div>
        
    );
};

export default Refresh;