import react from 'react';
import colors from './colors'

const NavBar = (props) => {
    return (
        <header
        style={{backgroundColor:colors.secondary, padding:'15px'}}>
          
            <a href="/">{props.title}</a>
            <span
            role="img"
            aria-label="logo"
            style={
                {
                    fontSize:'60px',
                    display: 'inline-block',
                }
            }
            >
                🐶

            </span>
        </header>)
    }

export default NavBar