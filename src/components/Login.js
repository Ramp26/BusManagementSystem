import axios from 'axios'
import React, { useState } from 'react'

import { withRouter } from 'react-router-dom'

function Login(props) {
    const [loginArr, setloginArr] = useState([])
    // let loginObj = props.loginObj
    // let setLoginObj = props.setLoginObj
    const [loginObj, setLoginObj] = useState({
        userName:'',
        password:''

    })
    
    const [superUserError, setsuperUserError] = useState('')
    const [isUserValid, setisUserValid] = useState(false)
    const [superPasswordError, setsuperPasswordError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(false)

    const handleChange = (e) => {
        setLoginObj({
            ...loginObj,
            [e.target.name]: e.target.value
        })
        console.log('loginObj ->', loginObj);
    }


//password verification
const validatePassword = (password) => {
    if (password) {
        let pass = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$^&*]).{6,20}$/;
        if (password.match(pass)) {
            setisPasswordValid(false)
            setsuperPasswordError('*Please enter valid password')
            return false
  
        } else {
  
            setisPasswordValid(true)
            setsuperPasswordError('')
            return true
        }
    } else {
        setisPasswordValid(false)
        setsuperPasswordError('*Please enter your passowrd')
        return false
    }
  }


  //user name validation

const validateUserName = (name) => {
    if (name !== '') {
        let lName = (/^[a-zA-Z]+$/);
        if (name.match(lName)) {
            setisUserValid(true)
            setsuperUserError('')
            console.log(superUserError);
            return true
        } else {
            setisUserValid(false)
            setsuperUserError('*Please enter valid username')
            console.log(superUserError);
            return false
        }
    } else {
        setisUserValid(false)
        setsuperUserError('*Please enter your user name')
        console.log(superUserError);
        return false
    }
  }

    const handlelogin =  async(event) => {

        event.preventDefault();
     
        const isUserNameValid = validateUserName(loginObj.userName)
        const isPassValid = validatePassword(loginObj.password)
       
        if ( isPassValid === true && isUserNameValid === true  ) {
            setloginArr([
                ...loginArr,
                loginObj
            ])
      
            console.log("loginArr",loginArr);
            let res = await axios.post("http://localhost:8080/login",loginObj);
      
            localStorage.setItem("role",JSON.stringify(res.data.role));
            localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
            console.log(res.data.jwt);
            // localStorage.setItem("role",JSON.stringify(res.data.role) );
         console.log(res.data.role);
            let role=localStorage.getItem("role");
            let roledata=JSON.parse(role)
            console.log(roledata[0].authority,"hiiioioi");
            if(roledata[0].authority=="ROLE_owner"){
            props.history.push("/homeowner");
            alert("login successfull");
            }else if(roledata[0].authority=="ROLE_admin"){
              props.history.push("/admintable");
              alert("login successfull");
            }
            setLoginObj({
              adminUserName: "",
              adminPassword: "",
            });
      
          } else {
            alert("give valid data");
          }
      }
      


    return (
        <div>
            <form class="col-md-4 mb-3 m-auto mt-5" style={{border:'1px solid blue',boxShadow:'0 5px 0 3px blue'}} >

                <div class="form-group">
                    <label for="exampleInputPassword1">UserName</label>  
                    <input type="text" class="form-control" id="exampleInputUserNmae" name='userName' value={loginObj.userName} onChange={(e) => { handleChange(e) }}/>
                    {!isUserValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superUserError}</span> : null}

                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={loginObj.password} onChange={(e) => { handleChange(e) }}/>
                    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPasswordError}</span> : null}
                </div>


                <button  class="btn btn-dark"   onClick={handlelogin} className='mt-3'>Login</button>
                <hr/>
             
              <button
              className='mb-2'
                variant="light"
                onClick={() => {
                  props.history.push("/reg");
                }}
              >
                If not Registered Please Register
              </button>
               
            </form>


        </div>
    )
}

export default withRouter(Login)