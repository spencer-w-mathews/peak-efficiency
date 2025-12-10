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
  position: relative;
  background: linear-gradient(120deg, #0f2744 0%, #123154 30%, #183c66 60%, #f8fafc 100%);
  text-align: center;
  padding: 6rem 2rem 2rem;
  color: ${(p) => p.theme.colors.deepBlue};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.16), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.12), transparent 35%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;

  h1 {
    line-height: 1.1;
  }

  h3 {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.4;
  }
`;

const Image = styled.img`
  max-width: 300px;
  margin: 20px auto 0px auto;
  z-index: 0;
  padding: 0px 10px;
  max-height: 400px;
  min-height: 200px;
`;
