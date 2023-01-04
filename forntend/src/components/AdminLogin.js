
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./style.css"
function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };


    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        if(res.status === 200) {
            navigate("/AdminPage");
        }
        
      })
      .catch((err) => console.error(err));

   
  };
  return (
    <div className="login">
            <h3>Login</h3>
        <form onSubmit={login}>
            <input type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>

{/* 
      <Form className="loginForm">
        <Form.Item
          label="Email"
          name={"email"}
          rules={[
           
            { type: "email", message: "Entered e-mail is invalid!" },
          ]}
        >
          <Input
            placeholder="Enter your e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form> */}
    </div>
  );
}
export default AdminLogin;
