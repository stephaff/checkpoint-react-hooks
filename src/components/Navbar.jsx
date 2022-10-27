import React from 'react';

const Navbar = ({ setSearchMovie }) => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <a href="#"><h2 className='logo'>StephMovies</h2></a>
                <input type="search" placeholder='Rechercher un film' onChange={ e => setSearchMovie(e.target.value) } />
                <button className='btn-ajouter'>Ajouter</button>
            </div>
        </div>
    );
}

export default Navbar;
