import styled from 'styled-components';
import { motion } from 'framer-motion';
import FadeIn from '../../Components/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export default function IntegrationBanner({ content }) {
  return (
    <FadeIn y={30}>
      <Banner>
        <h3>{content.heading}</h3>

        <Logos>
          <Icon icon={faGoogle} title="Gmail" />
          <Icon icon={faMicrosoft} title="Outlook" />
        </Logos>

        <Subtext>{content.subtext}</Subtext>
      </Banner>
    </FadeIn>
  );
}

// === Styles ===

const Banner = styled.section`
  text-align: center;
  padding: 0rem 2rem 4rem;
  color: ${(p) => p.theme.colors.deepBlue};
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin: 1.75rem 0;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  opacity: 0.7;
  transition: 0.25s ease;
  color: ${(p) => p.theme.colors.deepBlue};
  filter: grayscale(100%);

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    color: ${(p) => p.theme.colors.lightBlue};
    transform: translateY(-2px);
  }
`;

const Separator = styled.span`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.lightBlue};
  opacity: 0.6;
`;

const Etc = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.colors.lightBlue};
  opacity: 0.8;
`;

const Subtext = styled.p`
  font-size: 0.95rem;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
`;
