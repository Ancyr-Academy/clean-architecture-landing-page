"use client";

import React from "react";
import { styled } from "styled-components";
import { mediaQuery, breakpoints } from "../../lib/global-styles";

export const Header: React.FC<{}> = () => {
  return (
    <View>
      <Content>
        <Text>
          Des Applications Robustes avec la <b>Clean Architecture</b>
        </Text>

        <EarlyBird>
          <h6>Accès Anticipé -70%</h6>
          <p>
            250€ au lieu de <s>830€</s>
          </p>
        </EarlyBird>
      </Content>
    </View>
  );
};

const View = styled.header`
  background-image: url("/images/header.png");
  background-position: center;
  background-size: cover;

  height: 600px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Text = styled.h1`
  margin: 0;
  line-height: 1.3;

  color: var(--header-text-color);
  font-size: var(--header-title-fs);
  text-align: center;
  font-weight: 500;

  b {
    font-weight: 800;
  }
`;

const EarlyBird = styled.div`
  position: absolute;
  right: -200px;
  bottom: -50px;

  background-color: var(--early-bird-bg-color);
  color: var(--early-bird-text-color);

  padding-inline: 28px;
  padding-block: 20px;
  max-width: 280px;

  transform: rotateZ(7deg);

  h6 {
    margin: 0;
    font-size: var(--early-bird-title-fs);
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 8px;

    font-size: var(--early-bird-text-fs);
    text-align: center;
  }

  ${mediaQuery(1500)} {
    right: -100px;
  }
  ${mediaQuery(1285)} {
    right: 50px;
  }

  ${mediaQuery(breakpoints.phone)} {
    padding-inline: 4px;
    padding-block: 12px;
  }
`;
