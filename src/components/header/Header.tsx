import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const authClassName = location.pathname === '/login' ? 'isActive' : '';

  const handleAuthToggle = () => {
    auth?.user
      ? auth?.signout(() => navigate('/', { replace: true }))
      : navigate('/login')
  };

  
  return (
    <header className="header">
      <div className="header_logo">
        <img src="http://localhost:3000/pictures/logo/logo_icon.svg" alt="img1"/>
      </div>
      <div className="header_navbar">
        <NavLink to="/home"><a>HOME</a></NavLink>
        <NavLink to="/Jets"><a>JETS</a></NavLink>
        <NavLink to="/Heli"><a>HELI</a></NavLink>
        <NavLink to="/Rent"><a>RENT</a></NavLink>
        <NavLink to="Faq"><a>FAQ</a></NavLink>
        <div className="header_navbar--image">
          <img src="http://localhost:3000/pictures/lang/ru_lang.svg" alt="img2"/>
        </div>
      </div>
      <div className="header_login">
        <a>LOGIN</a>
      </div>
    </header>
  )
} 