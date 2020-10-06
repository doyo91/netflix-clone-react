import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check form input valid
  const isInvalid = password === "" || emailAddress === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Iniciar sesión</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="email"
              placeholder="Correo electrónico"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Contraseña"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Iniciar sesión
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            ¿Todavía sin Netflix?{" "}
            <Form.Link to="/signup">Suscríbete ya.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Esta página utiliza Google reCAPTCHA para garantizar que no eres un
            robot.
            <Form.Link to="#">Más información</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
