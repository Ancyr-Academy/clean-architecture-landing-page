"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { breakpoints, mediaQuery } from "../../lib/global-styles";

export const Reviews: React.FC<{}> = () => {
  return (
    <View>
      <Container>
        <Title>Ce qu'en disent les élèves</Title>
        <Rows>
          <Review>
            <Paragraph>
              J'ai suivie récemment la formation clean archi que propose
              Anthony. Si je devais donner trois mots pour la définir, cela
              serait : <b>Clarté, Pédagogie et Pratique</b>. Anthony a une façon
              unique de rendre les concepts parfois abstraits simples et
              accessibles. Il utilise de nombreux schémas et fournit des
              exemples concrets, ce qui permet de bien visualiser les concepts
              et de comprendre leur application pratique.{" "}
              <b>
                Sa pédagogie est vraiment efficace et il est toujours disponible
                pour répondre à toutes les questions.
              </b>
              La partie théorique de la formation a grandement facilité mon
              apprentissage et m'a permis de progresser de manière
              significative. C'est pourquoi je recommande vivement cette
              formation à toute personne souhaitant approfondir sa compréhension
              de l'architecture logicielle d'autant plus que{" "}
              <b>
                la suite promet d'être un véritable "game changer" pour la suite
                de ma carrière
              </b>{" "}
              et cela pourrait bien être votre cas aussi !
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/melainadonati/"
              target="_blank"
            >
              Melaïna Donati
            </Author>
            <ProfilePicture url={"/images/meldonati.jpeg"} />
          </Review>
          <Review>
            <Paragraph>
              Remettant continuellement en question la solidité et la facilité
              de maintenance de mes programmes,{" "}
              <b>
                j'ai finalement obtenu des réponses grâce à la formation
                dispensée par Anthony.
              </b>
              J'ai ainsi découvert que mon code était bel et bien robuste et
              maintenable, mais qu'il pouvait l'être encore bien plus. Je tiens
              à souligner que{" "}
              <b>cette formation est incroyablement détaillée et complète</b>,
              même pour des étudiants débutant en programmation.
            </Paragraph>
            <Author
              href="https://www.linkedin.com/in/flaviomoreno94/"
              target="_blank"
            >
              Flavio Moreno
            </Author>

            <ProfilePicture url={"/images/flaviomoreno.jpeg"} />
          </Review>
        </Rows>
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
  font-size: var(--fs-very-big);
  color: var(--color-primary);
  text-align: center;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;

  gap: 60px;
`;

const Review = styled.div`
  position: relative;

  background-color: var(--color-primary);
  border-radius: 10px;

  padding-inline: 28px;
  padding-block: 24px;

  ${Paragraph} {
    color: var(--color-secondary);
    font-size: var(--fs-default);

    b {
      font-weight: 900;
    }
  }
`;

const ProfilePicture = styled.div<{ url: string }>`
  position: absolute;
  left: 30px;
  bottom: -40px;

  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-image: url("${(props) => props.url}");
  background-position: center;
  background-size: cover;
`;

const Author = styled.a`
  margin: 0;
  display: block;

  font-size: var(--fs-default);
  color: var(--color-secondary);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  text-align: right;

  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;
