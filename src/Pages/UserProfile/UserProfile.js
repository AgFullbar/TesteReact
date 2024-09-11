import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usersData from "../../data/users.json"
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import StandardButton from "../../components/StandardButton/StandardButton";

const UserProfile = () => {
    const { id } = useParams()
    const [user, setUser] = useState("")

    const navigate = useNavigate();

    //const foundUser faz a pesquisa no array do json/api importado qual user corresponde ao id que veio como parâmetro da url (da "match" entre o Id do user com o do Param)
    useEffect(() => {
        const foundUser = usersData.find(user => String(user.id) === id);
        setUser(foundUser);
    }, [id]);

    return (
        <div className="userProfile-container">
            <div className="userProfile-card">
                <label className="userProfile-label">Nome: {user.name}</label>
                <label className="userProfile-label">Email: {user.email}</label>
                <label className="userProfile-label">Idade: {user.age}</label>
                <label className="userProfile-label">Telefone: {user.phone}</label>
                <label className="userProfile-label">Endereço: {user.address}</label>
            </div>
            <StandardButton onClick={() => navigate('/')}>Retornar a página inicial</StandardButton>

        </div>
    )
}

export default UserProfile;
