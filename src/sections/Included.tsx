"use client";

import React from "react";
import { styled } from "styled-components";

import { UnorderedList } from "@/components/Typography";
import { getCourseURL } from "../../lib/app";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { useDelay } from "../hooks/use-delay";

export const Included: React.FC<{}> = () => {
  const seconds = useDelay();

  return (
    <View>
      <Container variant="large">
        <Rows>
          <TextColumn>
            <SubTitle>Inclus dans cette formation</SubTitle>
            <Paragraph style={{ color: "white" }}>
              En achetant cette formation, vous obtenez :<br />
            </Paragraph>
            <UnorderedList style={{ color: "white" }}>
              <li>
                Un <b>accès à vie</b> à la formation
              </li>
              <li>
                Des <b>mises à jour gratuites</b> qui viendront étoffer ou
                clarifier certaines parties du cours
              </li>
              <li>
                Un <b> accès privé au canal Discord</b> dans lequel vous pourrez
                échanger avec les autres élèves et moi-même
              </li>
              <li>
                Des invitations à des <b>sessions vocales privées</b> avec les
                autres élèves et moi-même
              </li>
              <li>
                Un <b>accès anticipé</b> à mes futures formations
              </li>
            </UnorderedList>
            <Paragraph style={{ color: "white" }}>
              Vous débloquerez les modules suivant :<br />
            </Paragraph>
            <UnorderedList style={{ color: "white" }}>
              <li>
                <b>Module 1 :</b> Théorie de la Clean Architecture (5h)
              </li>
              <li>
                <b>Module 2 :</b> Développement d'une app React (6h)
              </li>
              <li>
                <b>Module 3 :</b> Développement d'une app NestJS (8h)
              </li>
            </UnorderedList>
          </TextColumn>
          <JoinColumn>
            <JoinTitle>Paiement possible en 2x ou 3x</JoinTitle>
            <JoinParagraph>
              <b>Remboursé sans questions</b> si le contenu ne vous plait pas
              (30 jours après l'achat au plus tard). <br />
              <br />
              {/* <b>
                Fin de la promotion dans
                <br /> {seconds}
              </b>
              <br /> */}
              {/* <br /> */}
              <b>
                {" "}
                <Price>300€ TTC</Price>
              </b>
              <br />
              <i>Valeur réelle de 600€</i>
            </JoinParagraph>
            <JoinButton href={getCourseURL()}>
              J'accède à la formation
            </JoinButton>
          </JoinColumn>
        </Rows>
      </Container>
    </View>
  );
};

const View = styled.div`
  margin-block: 80px;
  padding-block: 80px;
  background-color: var(--color-primary);

  ${mediaQuery(breakpoints.small)} {
    padding-block: 40px;
  }
`;
const Rows = styled.div`
  display: flex;
  align-items: center;

  gap: 40px;

  ${mediaQuery(breakpoints.small)} {
    flex-direction: column;
    gap: 20px;
  }
`;
const TextColumn = styled.div`
  ${Paragraph} {
    color: var(--color-secondary);
  }
`;
const JoinColumn = styled.div`
  width: 800px;

  padding-inline: 40px;
  padding-block: 40px;

  background-color: var(--color-text-1);
  border-radius: 10px;

  ${mediaQuery(breakpoints.small)} {
    width: initial;
  }
`;
const SubTitle = styled.h2`
  color: var(--color-secondary);
  font-size: var(--fs-big);

  margin: 0;
`;

const JoinTitle = styled.h2`
  color: var(--color-secondary);
  font-size: var(--fs-medium);
  text-transform: uppercase;

  margin: 0;
`;
const JoinParagraph = styled(Paragraph)`
  color: var(--color-secondary);
`;

const JoinButton = styled.a`
  display: block;

  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-size: var(--fs-default);
  text-align: center;
  font-weight: 700;

  padding-block: 20px;
  text-transform: uppercase;
  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.25);
  }
`;

const Price = styled.span`
  font-size: var(--fs-very-big);
  line-height: 1;
`;
