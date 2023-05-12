"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

export const FormationResult: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Le résultat de la formation</Title>
        <Paragraph>
          A l'issue de cette formation :<br />
          <ul>
            <li>
              Vous connaîtrez parfaitement toute la théorie qui soutient la
              Clean Architecture
            </li>
            <li>
              Vous saurez discuter avec d'autres développeurs & architectes
              logiciels
            </li>
            <li>
              Vous serez capable de développer des logiciels en Clean
              Architecture en partant de zéro, peu importe la technologie
            </li>
            <li>
              Vous ne confondrez plus jamais Architecture Hexagonale & Clean
              Architecture
            </li>
            <li>
              Vous aurez acquis des fondations qui sont indépendantes de tout
              langage de programmation et qui vous seront utiles toute votre vie
            </li>
          </ul>
        </Paragraph>
      </Container>
    </View>
  );
};

const View = styled.div`
  margin-block: 80px;
  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;
const Title = styled.h2`
  color: var(--color-primary);
  font-size: var(--fs-big);

  margin: 0;
`;
