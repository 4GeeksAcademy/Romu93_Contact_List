import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const GetUsers = () => {
    const [users, setUsers] = useState()
    const host = "https://jsonplaceholder.typicode.com/users";
    const photo = "https://picsum.photos/100/100?random"
    
    const getUsers = async () => {
        if (localStorage.getItem("usersLocal") === null){
            const responce = await fetch(host)
            if (responce.ok){
                const data = await responce.json()
                setUsers(data)
                localStorage.setItem("usersLocal", JSON.stringify(data))
            }else {
                console.log( "ERROR" + responce.status)
            }
        }else{
            setUsers(JSON.parse(localStorage.getItem("usersLocal")))
        }
    }
    console.log(users)    
        
useEffect(() => {
    getUsers()
},[])

return (
    <div className="container" >
            <h1 className="text-primary">Users</h1>
            {!users ? "ERROR" : users.map((user) => 
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-2 text-center">
                                <img src={photo} className="img-fluid rounded-circle mt-3" alt="..."></img>                               
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-subtitle"><i className="fas fa-map-marker-alt me-4"></i>{user.address.street},{user.address.city}</p>
                                    <p className="card-subtitle"><i className="fas fa-phone me-3"></i>{user.phone}</p>
                                    <p className="card-subtitle"><i className="fas fa-envelope me-3"></i>{user.email}</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-end">
                                <div className="card-body me-3 pt-5 mt-4">
                                    <Link to={`/users/${user.id}`} className="btn btn-outline-secondary me-2">
                                        <i className="fas fa-pencil-alt"></i>
                                    </Link>
                                    <Link /*to={`/users/${user.id}`}*/ className="btn btn-outline-secondary">
                                        <i className="fas fa-trash"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            )   }
        </div>            
    )
}