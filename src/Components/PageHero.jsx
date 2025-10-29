import styled from 'styled-components';
import emailFilter from '../images/emailFilter_transparent.webp';
//import { Button } from './Button';

export default function PageHero({ headline, subheadline, tagline, supporting, ctaText, to }) {
  return (
    <Hero>
      <Content>
        <h1>{headline}</h1>
        {subheadline && <h3>{subheadline}</h3>}
        <Image src={emailFilter} />
        {supporting && <p>{supporting}</p>}
        {/* {ctaText && (
          <Button to={to || '/get-hour-back'} accent>
            {ctaText}
          </Button>
        )} */}
      </Content>
    </Hero>
  );
}

const Hero = styled.section`
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  text-align: center;
  padding: 6rem 2rem 2rem;
  color: ${(p) => p.theme.colors.deepBlue};
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Image = styled.img`
  max-width: 300px;
  margin: 20px auto 0px auto;
  z-index: 0;
  padding: 0px 10px;
  max-height: 400px;
  min-height: 200px;
`;
