import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Button} from 'reactstrap';
const Navba = () => {
    return (
        <div>
            <Navbar className="nav">
                <h1 className="logo"><NavLink to="/" className="white">Resturent</NavLink></h1>
               <div className="butt">
                   <div>
                   <Button><NavLink to='/signup' className="white">
                      Signup</NavLink>
                   </Button>
                   </div>
                   <div>
                    <Button><NavLink to='/signin' className="white">
                   Signin</NavLink>
                   </Button>
                   </div>

                </div>
            </Navbar>
        </div>
        
    )
}

export default Navba;
