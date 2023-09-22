import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
 rgba(0, 0, 0, 0.5);
  max-width: 300px;

  h1 {
    margin-top: 0;
    font-size: 24px;
  }
`;

const InputContainer = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin-bottom: 5px;
    font-size: 16px;
  }
  input[type="email"],
  input[type="password"] {
    padding: 10px;
    border: 1px solid #eb0028;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #eb0028;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff003d;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      window.location.href = "/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <h1>Login</h1>
        <form>
          <InputContainer>
            <label htmlFor='email'>Email:</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type='email'
              id='email'
              name='email'
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor='password'>Password:</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type='password'
              id='password'
              name='password'
              required
            />
          </InputContainer>
          <Button onClick={handleSubmit} type='submit'>
            Login
          </Button>
        </form>
      </LoginContainer>
    </PageContainer>
  );
};

export default Login;
