import React from "react";
import {useParams} from "react-router-dom"

export const UserDetail = () => {
    const params = useParams();
    const id = params.userid - 1
    const userView = JSON.parse(localStorage.getItem("usersLocal"))
    console.log(userView)

    return(
        <div className="card m-5">
            <div className="m-5">
                <h2>User Id: {id + 1}</h2>
                <h1 className= "card-text">{userView[id].name}</h1>
                <p className= "card-text">{userView[id].mail}</p> 
                <h5 className= "card-text">{"Address: "}</h5>
                <p className= "card-text">{userView[id].address.city + ", ZP: " + userView[id].address.zipcode + ", Str: " + userView[id].address.street}</p> 
                <h5 className= "card-text">{"Phone: "}</h5>
                <p className= "card-text">{userView[id].phone}</p>
                <h5 className= "card-text">{"Web Site: "}</h5> 
                <p className= "card-text">{userView[id].website}</p>
                <h5 className= "card-text">{"Company: "}</h5> 
                <p className= "card-text">{userView[id].company.name}</p>             
            </div>            
        </div>
    )
}