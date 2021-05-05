
import React from 'react'
import { Form , FormGroup, Label, Input,Button} from 'reactstrap'

const Signin = () => {
    return (
        <div className="form">
            <h1 className="megin">Signin</h1>
            <h1 className="megon">---------------------------------</h1>
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            </Form>
            <div className="jfl">
                <div>
            <Button>Signin</Button>
            </div>
            <div>
                <Button>Signup</Button>
            </div>
            </div>
           
        </div>
    )
}

export default Signin
