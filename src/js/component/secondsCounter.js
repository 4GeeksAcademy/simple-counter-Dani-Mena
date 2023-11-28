import React from "react";

const SecondsCounter = ({seconds}) =>{
    let hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour.toString();
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute.toString();
    let second = seconds % 60;
    second = (second < 10)? '0' + second : second.toString();  
    return(
        <div className="d-flex justify-content-center gap-3 p-2">
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"50px", height:"40px"}}><i className="fa fa-clock"> </i></h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{hour[0]}</h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{hour[1]}</h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{minute[0]}</h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{minute[1]}</h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{second[0]}</h1>
            <h1 className="bg-secondary bg-opacity-10 rounded" style={{width:"30px", height:"40px"}}>{second[1]}</h1>
        </div>
       
    );
}

export default SecondsCounter;