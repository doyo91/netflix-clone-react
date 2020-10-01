import React from "react";
import { Feature, OptForm } from "../components";
import JumbotronContainer from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Todas las películas y series que desees, y mucho más.
          </Feature.Title>
          <Feature.SubTitle>
            Disfruta donde quieras. Cancela cuando quieras.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              ¿Quieres ver algo ya? Escribe tu correo para crear una suscripción
              a Netflix o reactivarla.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Correo electrónico" />
            <OptForm.Button>Empezar</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
