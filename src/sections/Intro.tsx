"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "@/components/Container";
import { Paragraph, Title, UnorderedList } from "../components/Typography";

export const Intro: React.FC<{}> = () => {
  return (
    <View>
      <Block>
        <Container>
          <Title>Qu'est-ce que c'est ?</Title>
          <Paragraph>
            <b>La Clean Architecture est le sujet du moment</b> : il s'agit
            d'une méthodologie mise au point par Robert C. Martin à partir de
            2012 qu'il a distillé dans le livre éponyme : Clean Architecture,
            paru en 2017.
            <br />
            <br />
            L'objectif est simple : développer des applications robustes qui{" "}
            <b>maintiennent la productivité</b> des développeurs et la{" "}
            <b>flexibilité du système. </b>
            <br />
            <br />
            Elle s'appuie sur la fameuse <b>Architecture Hexagonale</b> mais
            l'enrichit en proposant une structure plus détaillée qui s'articule
            autour des <b>Use Cases</b> qui représentent les fonctionnalités de
            l'application.
            <br />
            <br />
            La Clean Architecture promet donc de{" "}
            <b>réduire durablement l'entropie logicielle.</b>
          </Paragraph>
        </Container>
      </Block>
      <Block>
        <Container>
          <Title>Une formation complète et accessible</Title>
          <Paragraph>
            Les ressources permettant de se former sur la Clean Architecture
            sont rares, souvent <b>difficiles à comprendre</b> et ont un
            contexte très différent de celui des applications que l'on développe
            au quotidien.
            <br />
            <br />
            De ce constat est né cette formation :<br />
          </Paragraph>
          <UnorderedList>
            <li>
              Un cours comprenant{" "}
              <b>toute la théorie de la Clean Architecture</b>
            </li>
            <li>
              Recentré sur le contexte des <b>applications actuelles</b>
            </li>
            <li>
              Appuyé par des <b>schémas et exemples de code clair et concis</b>
            </li>
            <li>
              Avec des <b>définitions simples et sans fioritures</b>
            </li>
          </UnorderedList>
        </Container>
      </Block>
    </View>
  );
};

export const View = styled.div`
  margin-block: 80px;
`;

const Block = styled.div`
  margin-top: 60px;
`;
