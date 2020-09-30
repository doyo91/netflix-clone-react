import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Preguntas frecuentes</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          ¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a
          Netflix o reactivarla.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Correo electrónico" />
        <OptForm.Button>Empezar</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
