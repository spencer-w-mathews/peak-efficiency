import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faLock,
  faUserCheck,
  faKey,
  faPlug,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import image from '../images/sAndI.webp';
import { useContent } from '../content/ContentContext';

export default function SecurityIntegrations() {
  const { content } = useContent();
  const securityContent = content.security;

  const iconMap = {
    shield: faShieldAlt,
    lock: faLock,
    'user-check': faUserCheck,
    key: faKey,
    plug: faPlug,
    cloud: faCloud,
  };

  return (
    <PageContainer>
      <Image src={image} />
      <Header>
        <Subtitle>{securityContent.subtitle}</Subtitle>
      </Header>

      <SectionTitle>{securityContent.securityTitle}</SectionTitle>
      <CardGrid>
        {securityContent.securityFeatures.map((item, i) => (
          <Card key={item.title + i}>
            <Icon>
              <FontAwesomeIcon icon={iconMap[item.icon] || faShieldAlt} />
            </Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
          </Card>
        ))}
      </CardGrid>

      <SectionTitle1>{securityContent.integrationTitle}</SectionTitle1>
      <CardGrid>
        {securityContent.integrations.map((item, i) => (
          <Card key={item.title + i}>
            <Icon>
              <FontAwesomeIcon icon={iconMap[item.icon] || faPlug} />
            </Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
          </Card>
        ))}
      </CardGrid>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  padding: 80px 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Image = styled.img`
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: -20px;
  z-index: 0;
  padding: 0px 10px;
  min-height: 300px;
`;

const Header = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #3b4b61;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle1 = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  width: clamp(250px, 30%, 350px);
  padding: 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;
