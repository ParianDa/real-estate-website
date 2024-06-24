import React from "react";
import UserProfile from "./UserProfile";

export default function Header({user,onLogout}) {
    return(
        <header className="header">
            <h1>Real Estate Dashboard</h1>
            <UserProfile user={user} onLogout={onLogout}/>
        </header>
        
    )
}