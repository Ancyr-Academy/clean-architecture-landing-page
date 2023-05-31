"use client";

import React from "react";
import { styled } from "styled-components";
import { Container } from "../components/Container";
import { Paragraph } from "../components/Typography";
import { getCourseURL } from "../../lib/app";
import { breakpoints, mediaQuery } from "../../lib/global-styles";
import { UnorderedList } from "@/components/Typography";

export const Included: React.FC<{}> = () => {
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
              <li>Un accès à vie à la formation</li>
              <li>
                Des mises à jour gratuites qui viendront étoffer ou clarifier
                certaines parties du cours
              </li>
              <li>
                Un accès privé au canal Discord dans lequel vous pourrez
                échanger avec les autres élèves et moi-même
              </li>
              <li>
                Des invitations à des sessions vocales privées avec les autres
                élèves et moi-même
              </li>
              <li>Un accès anticipé à mes futures formations</li>
            </UnorderedList>
          </TextColumn>
          <JoinColumn>
            <JoinTitle>Paiement possible en 3x & 6x sans frais</JoinTitle>
            <JoinParagraph>
              <b>Remboursé sans questions</b> si le contenu ne vous plait pas
              (30 jours après l'achat au plus tard). <br />
              <br />
              <b>Accès Anticipé</b>
              <br />
              <s>690€ TTC</s>
              <br />
              <br />
              <b>
                {" "}
                <Price>345€ TTC</Price>
                {/* <br />
                Jusqu'au 28/05 */}
              </b>
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
  width: 700px;

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
