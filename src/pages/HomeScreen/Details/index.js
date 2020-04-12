import React from "react";

import { Container, TypeTitle, TypeDescription } from "./styles";

const Details = ({ duration, location, empresa, descricao }) => (
  <Container>
    <TypeTitle>{empresa}</TypeTitle>
    <TypeDescription>{descricao}</TypeDescription>
    <TypeTitle>{location}</TypeTitle>
    <TypeDescription>{duration} min</TypeDescription>
  </Container>
);

export default Details;
