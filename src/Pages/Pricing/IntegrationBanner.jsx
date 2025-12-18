import styled from 'styled-components';
import { motion } from 'framer-motion';
import FadeIn from '../../Components/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faSlack, faNotion } from '@fortawesome/free-brands-svg-icons';

export default function IntegrationBanner() {
  return (
    <FadeIn y={30}>
      <Banner>
        <Badge>Integrations</Badge>
        <h3>Seamless integration with Gmail and Outlook.</h3>

        <Logos>
          <Icon icon={faGoogle} title="Gmail" />
          <Icon icon={faMicrosoft} title="Outlook" />
        </Logos>

        <Subtext>
          Built to work where you work — connecting effortlessly to your daily communication stack.
        </Subtext>
      </Banner>
    </FadeIn>
  );
}

// === Styles ===

const Banner = styled.section`
  text-align: center;
  padding: 2rem;
  margin: 0 auto 1rem;
  color: ${(p) => p.theme.colors.deepBlue};
  background: linear-gradient(180deg, #f7faff 0%, #ffffff 90%);
  border: 1px solid rgba(35, 66, 97, 0.14);
  border-radius: 18px;
  max-width: 960px;
  box-shadow: 0 16px 40px rgba(15, 39, 68, 0.12);
`;

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 0.65rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
  background: white;
  border: 1px solid rgba(35, 66, 97, 0.12);
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
