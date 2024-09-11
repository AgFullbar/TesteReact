import { useEffect, useState } from "react";
import usersData from "../../data/users.json";
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import StandardButton from "../../components/StandardButton/StandardButton";

const UsersPage = () => {
    const filteredUsers = usersData;
    const navigate = useNavigate();

    return (
        <>
            <div className="usersPage-container">

                <StandardButton onClick={() => navigate('/')}>Retornar a página inicial</StandardButton>


                {filteredUsers.map((user) => (
                    <li key={user.id} className="usersPage-listItem">
                        <span className="usersPage-userName">{user.name}</span>
                        <span className="usersPage-userEmail">{user.email}</span>
                        <span className="usersPage-userEmail">{user.phone}</span>
                        <span className="usersPage-userEmail">{user.age}</span>
                        <span className="usersPage-userAddress">{user.address}</span>
                    </li>
                ))}
            </div>
        </>
    )
};

export default UsersPage;