import { Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './Pages/HomePage/HomePage';
import UsersPage from './Pages/UsersPage/UsersPage';
import UserProfile from './Pages/UserProfile/UserProfile';

export function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/usersPage' element={<UsersPage />} />
            <Route path='/userProfile/:id' element={<UserProfile />} />
        </Routes>
    )
}

export default Navigation;