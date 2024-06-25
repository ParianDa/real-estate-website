import React from "react";
import UserProfile from "./UserProfile";

export default function Header({ user, onLogout }) {
    return (
        <header className="dashboard-header">
            <h1 className="dashboard-title">Real Estate Dashboard</h1>
            <UserProfile user={user} onLogout={onLogout} />
        </header>
    );
}
