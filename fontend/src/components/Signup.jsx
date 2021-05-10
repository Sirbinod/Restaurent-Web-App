import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        fname:"",lname:"",email:"",password:"",cpassword:"",phone:"",select:""
    })
    let name, value;

    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    };
    const PostData = async (e) =>{
        e.preventDefault();
        const {fname,lname,email,password,cpassword,phone,select} = user;

        const res = await fetch("/signup",{
            method: "POST",
            header:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               firstName:fname, lastName:lname, email:email, password:password,cPassword:cpassword,phoneNumber:phone, roll:select
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data){
            window.alert("invalid signup");
            console.log("invalid signup");
        }else{
            window.alert("Signup Success");
            console.log("succes");
            history.push("/signin");
        }
    }

    return (
        <div className="form container-md">
            <h1 className="megin">Signup</h1>
            <h1 className="megon">---------------------------------</h1>
            <Form>
                <FormGroup>
                    <Label for="fname">First Name</Label>
                    <Input type="text" name="fname" id="fname" placeholder="First Name" value={user.fname} onChange={handleInputs}/>
                </FormGroup>
                <FormGroup>
                    <Label for="lname">Last Name</Label>
                    <Input type="text" name="lname" id="lname" placeholder="Last Name" value={user.lname} onChange={handleInputs}/>
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="ex:00np10@gmail.com" value={user.email} onChange={handleInputs}/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInputs}/>
            </FormGroup>
            <FormGroup>
                <Label for="cpassword">Conform Password</Label>
                <Input type="password" name="cpassword" id="cpassword" placeholder="Password" value={user.cpassword} onChange={handleInputs}/>
            </FormGroup>
            <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input type="number" name="phone" id="phone" placeholder="0987654321" value={user.phone} onChange={handleInputs}/>
                </FormGroup>
                <FormGroup>
        <Label for="select">Roll</Label>
        <Input type="select" name="select" id="select" value={user.select} onChange={handleInputs}>
          <option>Admin</option>
          <option>User</option>
        </Input>
      </FormGroup>
            </Form>
            <div className="jfl d-flex ml-5 mb-5">
            <div className="ml-5">
                <Button onClick={PostData}>Signup</Button>
            </div>
            </div>
        </div>
    )
}

export default Signup
