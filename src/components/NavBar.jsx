import { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeMateLogo from './RecipeMateLogo';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg relative">
      <div className={`container mx-auto px-4 flex justify-between items-center ${isOpen ? 'flex flex-col p-2 space-y-4 transition delay-150 duration-300 ease-in-out'  : ''} `}>
        <Link to="/">
          <RecipeMateLogo />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md  focus:outline-none"
        >
          {!isOpen? (
            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
            </svg>
          ) : <p className='absolute inset-y-0 right-2 font-extrabold'>X</p>

          }
        </button>
        <div className={`md:flex md:flex-row md:items-center md:space-x-4 ${isOpen ? 'flex flex-col space-y-4 items-center justify-center transition delay-150 duration-300 ease-in-out' : 'hidden'}`}>
          <Link to="/all-recipes">Recetas</Link>
          <Link to="/breakfast">Desayuno</Link>
          <Link to="/lunch">Almuerzo</Link>
          <Link to="/dinner">Cena</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;