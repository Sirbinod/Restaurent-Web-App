import {Button} from 'reactstrap'
import React from 'react'

const Home = () => {
    return (
        <div >
            <img  src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="cover"/>
            <div className="item">
                <div>
                <Button color="primary">Book</Button>
                </div>
                <div>
                <Button color="info">Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default Home
