"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { getCourseURL } from "../../lib/app";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

export const FAQ: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Foire aux questions</Title>
        <Rows>
          <QuestionBlock>
            <Question>
              Saurais-je faire du front-end avec cette formation ?
            </Question>
            <Answer>
              Oui. L'objectif est de vous enseigner la Clean Architecture, peu
              importe l'environnement du logiciel. A l'issue de la formation,
              nous aurons vu un exemple concret de mise en application. Nous
              allons coder une application front-end en ReactJS, de A à Z.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              Comment cette formation se compare-t-elle aux autres formations ?
            </Question>
            <Answer>
              Il existe plusieurs formations en France qui traitent de près ou
              de loin à la Clean Architecture, mais aucune ne s'y prête de façon
              simple, concise, compréhensible et complète comme je le fais.
              C'est une promesse lourde de sens car j'en ai, moi-même, essayé
              plusieurs. C'est d'ailleurs la raison pour laquelle j'ai décidé de
              créer une formation 100% dédiée à la Clean Architecture, en
              pratique, dans un environnement TypeScript.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              Puis-je utiliser mon crédit CPF pour me fournir cette formation ?
            </Question>
            <Answer>A l'heure qu'il est, cela n'est pas possible.</Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>
              A qui puis-je m'adresser si j'ai des questions pendant la
              formation ?
            </Question>
            <Answer>
              Je serai disponible personnellement pour répondre à vos questions
              sur mon Discord, une communauté qui rassemble plus de 400
              développeurs sensibilisés à la qualité dans l'ingénierie
              logicielle.
            </Answer>
          </QuestionBlock>
          <QuestionBlock>
            <Question>La formation est-elle terminée ? </Question>
            <Answer>
              Pour l'heure, la première partie contenant toute la théorie de la
              Clean Architecture est terminée. La seconde partie sur la création
              d'une application back-end est en cours, et sera suivie d'une
              troisième partie sur la création d'une application front-end.
            </Answer>
          </QuestionBlock>
        </Rows>
        <BuyButton href={getCourseURL()}>J'accède à la formation</BuyButton>
      </Container>
    </View>
  );
};

const View = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  ${mediaQuery(breakpoints.phone)} {
    margin-top: 80px;
    margin-bottom: 20px;
  }
`;
const Title = styled.h2`
  font-size: var(--fs-very-big);
  color: var(--color-primary);
  text-align: center;
`;
const Rows = styled.div`
  margin-block: 80px;
  ${mediaQuery(breakpoints.phone)} {
    margin-block: 40px;
  }
`;

const QuestionBlock = styled.div`
  margin-bottom: 40px;
`;
const Question = styled.h6`
  font-size: var(--fs-default);
  color: var(--color-primary);

  text-transform: uppercase;
  margin: 0;
`;
const Answer = styled(Paragraph)`
  margin: 0;
  margin-top: 8px;
`;

export const BuyButton = styled.a`
  display: block;
  text-decoration: none;

  background-color: var(--button-background-color);
  color: var(--button-text-color);

  padding-block: 24px;
  padding-inline: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--fs-default);
  text-transform: uppercase;
  font-weight: 700;

  transition: all 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;
