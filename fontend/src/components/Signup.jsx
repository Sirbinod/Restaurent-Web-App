import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const Signup = () => {
    return (
        <div className="form">
            <h1 className="megin">Signup</h1>
            <h1 className="megon">---------------------------------</h1>
            <Form>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" id="fname" placeholder=""/>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" id="fname" placeholder=""/>
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Conform Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup>
                    <Label>Phone Number</Label>
                    <Input type="text" id="fname" placeholder=""/>
                </FormGroup>
                <FormGroup>
        <Label for="exampleSelect">Roll</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Admin</option>
          <option>User</option>
        </Input>
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

export default Signup
