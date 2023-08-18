import {useState} from 'react';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const Header = () => {
    const [ddState, setDdState] = useState(false);

    return (
        <div className='header-container' style={{padding: window.innerWidth<=500?'0 10px':'0 40px'}}>
            <Link
                to="/"
                className='header-logo'
            >
                <img
                    src="https://opomboapi.vercel.app/logo-circle.png"
                    style={{width: 55}}
                    alt="logo"
                />
                <span style={{display: window.innerWidth<=400?'none':'block'}}>O Pombo</span>
            </Link>
            <div className='dd'>
                <button
                    onClick={()=>setDdState(!ddState)}
                    className='header-menu-btn'
                >
                    {
                        ddState?
                        <X style={{transform: 'translateY(2px)'}}/>:
                        <List style={{transform: 'translateY(2px)'}}/>
                    }
                </button>
                <div
                    className='header-menu-content'
                    style={{
                        right: window.innerWidth<=500 ? 10 : 40,
                        display: ddState?'flex':'none'
                    }}
                >
                    <a href="/sobre" className='header-menu-link'>Sobre</a>
                    <a href="/pesquisar" className='header-menu-link'>Pesquisar</a>
                    <a href="/salvos" className='header-menu-link'>Salvos</a>
                    <a href="/autores" className='header-menu-link'>Autores</a>
                    <a target='_blank' href="https://instagram.com/opombo.jornal" className='header-menu-link'>Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Header
