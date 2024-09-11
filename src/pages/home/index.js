import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import usersData from "../../data/users.json";
import Filter from "./components/filter";
import './style.css'

export default function Home(){

const filteredUsers = usersData;

const navigate = useNavigate();

const navigateToDetail = () => {
    navigate('/detail');
}

  return (
    <div className="container">
      <h1 className="title">Lista de Usuários</h1>
      <div className="filterContainer">
        <Filter name='Nome: ' placeholder='Filtrar por nome'/>
        <Filter name='Email:' placeholder='Filtrar por email'/>
        <Button name='Buscar'/>
      </div>
      <ul className="list">
        {filteredUsers.map((user) => (
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