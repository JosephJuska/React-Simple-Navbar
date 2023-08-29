import { Link } from 'react-router-dom';
import logo from './github-mark/github-mark/github-mark.png';
import { useState } from 'react';
export function Navbar(){
    const [ checked, setChecked ] = useState(false);

    return (
        <header>
            <img alt="logo" src={ logo } onClick={() => window.open("https://github.com/JosephJuska", "_blank")} />
            
            <ul className={checked? 'show' : ''}>
                <li><Link onClick={() => setChecked(false)} to="/">Home</Link></li>
                <li><Link onClick={() => setChecked(false)} to="/About">About</Link></li>
                <li><Link onClick={() => setChecked(false)} to="/Services">Services</Link></li> 
                <li><Link onClick={() => setChecked(false)} to="/Contact">Contact</Link></li>
            </ul>

            <label className="menu" htmlFor="check">
                <i className="fa fa-bars"></i>
            </label>
            <input type="checkbox" id="check" className="check" onClick={() => setChecked(!checked)} />
        </header>
    );
}