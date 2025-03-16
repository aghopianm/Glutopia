import styled from "styled-components";

export const SocialLogo = styled.img`
  height: 22px;
  width: auto;
  margin-top: 2px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
  padding-top: 2px;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
