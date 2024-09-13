import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import usersData from "../../data/users.json";
import Filter from "./components/filter";
import './style.css'
import { useState } from "react";

export default function Home() {

  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [search, setSearch] = useState(usersData); //irá retornar toda a lista quando reiniciar a página

  
  const navigate = useNavigate();

  //função de navegação para página detalhes
  const navigateToDetail = () => {
    navigate('/detail');
  }


  //função que pega o evento onChange do input Name
  const inputChangeName = (event) => {
    setNameFilter(event.target.value);
  }

  //função que pega o evento onChange do input Email
  const inputChangeEmail = (event) => {
    setEmailFilter(event.target.value);
  }

  //função pra filtrar na lista de users de acordo com o que digitar no input
  const usersFilters = () => {
    const searching = usersData.filter(user => 
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase())
    );

    setSearch(searching);
  };



  return (
    <div className="container">
      <h1 className="title">Lista de Usuários</h1>
      <div className="filterContainer">
        <Filter name='Nome: ' placeholder='Filtrar por nome' value={nameFilter} onChange={inputChangeName}/>
        <Filter name='Email:' placeholder='Filtrar por email'value={emailFilter} onChange={inputChangeEmail}/>
        <Button name='Buscar' onClick={usersFilters}/>
      </div>
      <ul className="list">
        {search.map ((user) => (
          <li key={user.id} className="listItem">
            <span className="userName">{user.name}</span>
            <span className="userEmail">{user.email}</span>
          </li>
        ))}
      </ul>
      <Button name='Mostrar Detalhes' onClick={navigateToDetail}/>
    </div>
  );
}