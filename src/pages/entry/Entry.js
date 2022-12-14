import React,{useState} from 'react'
import './Entry.css'
import { Jumbotron } from "react-bootstrap";
import { Login } from '../../components/login/Login'
import { ResetPassword } from '../../components/password-reset/Password_Reset';

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name,value);

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all the form!");
    }

    //TODO call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    if (!email) {
      return alert("Please enter the email!");
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {frmLoad === "rest" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  )
}
