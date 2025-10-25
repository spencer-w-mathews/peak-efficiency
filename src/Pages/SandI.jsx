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

export default function SecurityIntegrations() {
  const securityFeatures = [
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      title: 'Enterprise-Grade Encryption',
      description:
        'All data in Peak Efficiency is encrypted in transit and at rest using AES-256 and TLS 1.3 standards.',
    },
    {
      icon: <FontAwesomeIcon icon={faLock} />,
      title: 'Zero-Trust Framework',
      description:
        'We authenticate every user and device, ensuring only verified connections are granted access.',
    },
    {
      icon: <FontAwesomeIcon icon={faUserCheck} />,
      title: 'Role-Based Access',
      description:
        'Fine-grained permissions let you control who can view, edit, and manage critical information.',
    },
    {
      icon: <FontAwesomeIcon icon={faKey} />,
      title: 'Multi-Factor Authentication',
      description:
        'Protect accounts with MFA and SSO integrations, including Google Workspace and Microsoft 365.',
    },
  ];

  const integrations = [
    {
      icon: <FontAwesomeIcon icon={faPlug} />,
      title: 'Seamless Integrations',
      description:
        'Connect with the tools you already use — Gmail, Slack, Asana, Notion, and more — without friction.',
    },
    {
      icon: <FontAwesomeIcon icon={faCloud} />,
      title: 'API & Webhooks',
      description:
        'Our open API and webhook support let your team automate workflows and build custom extensions.',
    },
  ];

  return (
    <PageContainer>
      <Image src={image} fetchPriority="high" />
      <Header>
        <Subtitle>
          At <strong>Peak Efficiency</strong>, your privacy, data, and systems are protected by
          design. Every feature we build is backed by enterprise-grade security and seamless
          integrations that fit your workflow.
        </Subtitle>
      </Header>

      <SectionTitle>Security You Can Trust</SectionTitle>
      <CardGrid>
        {securityFeatures.map((item, i) => (
          <Card key={i}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
          </Card>
        ))}
      </CardGrid>

      <SectionTitle1>Powerful Integrations</SectionTitle1>
      <CardGrid>
        {integrations.map((item, i) => (
          <Card key={i}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
          </Card>
        ))}
      </CardGrid>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  color: #234261;
  min-height: 100vh;
  padding: 0rem 2rem 4rem;
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
  color: #234261;
  margin-top: 0rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle1 = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #234261;
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
  background-color: #fff;
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
  color: #2e734c;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #234261;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;
