
import { Link, NavLink } from 'react-router-dom';




export const Navbar = () => {

    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Portada
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/a"
                    >
                        Canción 1
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/b"
                    >
                        Canción 2
                    </NavLink>
                    {/* del search pero con argumetnos no obligatorios */}
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/c"
                    >
                        Canción 3
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/d"
                    >
                        Canción 4
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/e"
                    >
                        Canción 5
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/f"
                    >
                        Canción 6
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/g"
                    >
                        Canción 7
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/h"
                    >
                        Canción 8
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/i"
                    >
                        Canción 9
                    </NavLink>
                    <NavLink 
                        className={({isActive}) =>"nav-item nav-link " + (isActive ? 'active':'')} 
                        to="/j"
                    >
                        Canción 10
                    </NavLink>

                </div>
            </div>

        
        </nav>
    )
}