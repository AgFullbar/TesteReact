import usersData from "../../data/users.json";
import Filter from "./components/filter";
import './style.css'

export default function Home(){

const filteredUsers = usersData;

  return (
    <div className="container">
      <h1 className="title">Lista de Usuários</h1>
      <div className="filterContainer">
        <Filter name='Nome: ' placeholder='Filtrar por nome'/>
        <Filter name='Email:' placeholder='Filtrar por email'/>
        <button className="button">Buscar</button>
      </div>
      <ul className="list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="listItem">
            <span className="userName">{user.name}</span>
            <span className="userEmail">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}