import React from 'react'

const Header = ({title}) => {
    return ( 
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">This proyect illustrate the characters of the famous Rick and Morthy Series</p>
                </div>

            </div>
        </header>
     );
}
 
export default Header;