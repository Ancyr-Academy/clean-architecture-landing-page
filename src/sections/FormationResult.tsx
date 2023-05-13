"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { UnorderedList } from "@/components/Typography";

export const FormationResult: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Le résultat de la formation</Title>
        <Paragraph>
          A l'issue de cette formation :<br />
        </Paragraph>
        <UnorderedList>
          <li>
            <b>Vous connaîtrez parfaitement toute la théorie</b> qui soutient la
            Clean Architecture
          </li>
          <li>
            Vous saurez <b>discuter avec d'autres développeurs</b> & architectes
            logiciels
          </li>
          <li>
            Vous serez{" "}
            <b>capable de développer des logiciels en Clean Architecture</b> en
            partant de zéro, peu importe la technologie
          </li>
          <li>
            Vous ne confondrez plus jamais{" "}
            <b>Architecture Hexagonale & Clean Architecture</b>
          </li>
          <li>
            Vous aurez acquis{" "}
            <b>
              des fondations qui sont indépendantes de tout langage de
              programmation{" "}
            </b>
            et qui vous seront utiles toute votre vie
          </li>
        </UnorderedList>
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
