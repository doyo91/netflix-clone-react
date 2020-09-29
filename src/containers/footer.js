import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>¿Preguntas? Llama al 900 943 249</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Preguntas frecuentes</Footer.Link>
          <Footer.Link href="#">Inversores</Footer.Link>
          <Footer.Link href="#">Formas de ver</Footer.Link>
          <Footer.Link href="#">Información corporativa</Footer.Link>
          <Footer.Link href="#">Originales de Netflix</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Centro de ayuda</Footer.Link>
          <Footer.Link href="#">Empleo</Footer.Link>
          <Footer.Link href="#">Términos de uso</Footer.Link>
          <Footer.Link href="#">Contáctanos</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Cuenta</Footer.Link>
          <Footer.Link href="#">Canjear tarjetas regalo</Footer.Link>
          <Footer.Link href="#">Privacidad</Footer.Link>
          <Footer.Link href="#">Prueba de velocidad</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Zona de prensa</Footer.Link>
          <Footer.Link href="#">Comprar tarjetas regalo</Footer.Link>
          <Footer.Link href="#">Preferencias de cookies</Footer.Link>
          <Footer.Link href="#">Avisos legales</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix España</Footer.Text>
    </Footer>
  );
}
