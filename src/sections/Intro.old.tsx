"use client";

import { Container } from "@/components/Container";
import React from "react";
import { styled } from "styled-components";
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
            Elle offre un <b>ensemble de guidelines</b> pour architecturer son
            application de sorte à faire{" "}
            <b>émerger le besoin auquel le code répond</b>, à
            <b>rendre le code testable de fond en comble</b> et à permettre aux
            développeurs d'ajouter des fonctionnalités continuellement{" "}
            <b>sans trainer une dette technique douloureuse.</b>
            <br />
            <br />
            La Clean Architecture promet de{" "}
            <b>réduire durablement l'entropie logicielle.</b> et d'être dans une
            dynamique véritablement agile dans laquelle les bugs sont rares et
            les développeurs passent leur temps à s'amuser à ajouter de
            nouvelles fonctionnalités.
            <br />
            <br />
            C'est votre boss qui va être content :)
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
              <b>toute la théorie de la Clean Architecture</b> dans ses moindres
              détails
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
            <li>
              Et une mise en pratique à travers{" "}
              <b>le développement de véritables applications</b>
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
