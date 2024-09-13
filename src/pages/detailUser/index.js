import './style.css'
import usersData from "../../data/users.json";
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';



export default function DetailUser(){

    const filteredUsers = usersData;

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }
    
    return(
        <div className='infos'>
        <Button name='Voltar' onClick={navigateToHome}/>
        <div className='containerGrid'>
            <ul className='listUsers'>
                {filteredUsers.map((user) => (
                    <li key={user.id} className='itemUser'>
                        <h3 className='itemName'>{user.name}</h3>
                        <p className='item'><span>Email: </span> {user.email}</p>
                        <p className='item'><span>Phone: </span> {user.phone}</p>
                        <p className='item'><span>Age: </span> {user.age}</p>
                        <p className='item'><span>Address: </span>{user.address}</p>
                    </li>
                ))}
            </ul>
        </div>  
        </div>  
    )
}