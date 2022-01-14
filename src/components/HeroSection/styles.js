import styled from 'styled-components';

const heroImage = require('../../assets/hero-image.jpg');

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  background: #FFFFFF url(${heroImage}) no-repeat center center;
  background-size: 100% auto;
  
  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.8rem;
  `;

export const HeroDescription = styled.p`
  margin: 10px 0 30px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const HeroCTA = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export default HeroWrapper;
