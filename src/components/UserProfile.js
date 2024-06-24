import React from "react";

export default function UserProfile({user,onLogout}) {
    return(
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={user.profilePicture} alt={`${user}'s profile`} className="profile-picture" />
            <span className="user-name">{user.name}</span>
            <button onClick={onLogout}>Log out</button>
        </div>
    )
}