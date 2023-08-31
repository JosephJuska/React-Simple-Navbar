import logo from './github-mark/github-mark/github-mark.png';
import { useState } from 'react';
import { CustomLink } from './CustomLink';
export function Navbar(){
    const [ checked, setChecked ] = useState(false);

    return (
        <header>
            <img alt="logo" src={ logo } onClick={() => window.open("https://github.com/JosephJuska", "_blank")} />
            
            <ul className={checked? 'show' : ''}>
                <li><CustomLink to="/" onClick={() => setChecked(false)}>Home</CustomLink></li>
                <li><CustomLink to="/About" onClick={() => setChecked(false)}>About</CustomLink></li>
                <li><CustomLink to="/Services" onClick={() => setChecked(false)}>Services</CustomLink></li> 
                <li><CustomLink to="/Contact" onClick={() => setChecked(false)}>Contact</CustomLink></li>
            </ul>

            <label className="menu" htmlFor="check">
                <i className="fa fa-bars"></i>
            </label>
            <input type="checkbox" id="check" className="check" onClick={() => setChecked(!checked)} />
        </header>
    );
}