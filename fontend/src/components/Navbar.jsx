import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Button} from 'reactstrap';
const Navba = () => {
    return (
        <div>
            <Navbar className="nav container-md">
                <h1 className="logo"><NavLink to="/" className="white">Resturent</NavLink></h1>
               <div className="butt d-flex">
                   <div className="mr-2">
                   <Button><NavLink to='/signup' className="">
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
