import React from "react";

export default function UserProfile({ user, onLogout }) {
    return (
        <div className="user-profile-container">
            <img src={user.profilePicture} alt={`${user.name}'s profile`} className="user-profile-picture" />
            <span className="user-profile-name">{user.name}</span>
            <button className="logout-button" onClick={onLogout}>Log out</button>
        </div>
    );
}
