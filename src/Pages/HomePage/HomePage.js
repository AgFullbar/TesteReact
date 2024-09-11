import React, { useEffect, useState } from "react";
import usersData from "../../data/users.json"
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";

// components imports
import InputFilter from "../../components/InputFilter/InputFilter";
import StandardButton from "../../components/StandardButton/StandardButton";

function HomePage() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(usersData);


    // Filtro incial por nome, buscaria ao digitar, sem precisar da ação do botão, apenas precisaria jogar a const "Users" no map
    // const Users = filteredUsers.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase())) 


    // Função para ativação do filtro apenas a partir do Botão  (filtra por Nome e email)
    const handleSearch = () => {
        const filtered = usersData.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) &&
            user.email.toLowerCase().includes(searchEmail.toLowerCase())

        );
        setFilteredUsers(filtered);
    };


    return (
        <div className="container">
            <h1 className="title">Lista de Usuários</h1>
            <div className="filterContainer">
                <InputFilter
                    placeholder={"Filtrar por nome"}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}>
                    Nome
                </InputFilter>

                <InputFilter
                    placeholder={"Filtrar por email"}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    value={searchEmail}>
                    Email
                </InputFilter>
                <StandardButton onClick={handleSearch} >Buscar</StandardButton>
                <StandardButton onClick={() => navigate('/usersPage')}>Todos os usuários</StandardButton>
            </div>

            <ul className="list">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="listItem">
                        <span className="userName">{user.name}</span>
                        <span className="userEmail">{user.email}</span>
                        <StandardButton onClick={() => navigate(`/userProfile/${user.id}`)} >Ver usuário</StandardButton>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default HomePage;
