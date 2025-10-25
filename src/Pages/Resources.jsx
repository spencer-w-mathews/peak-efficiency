import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFileAlt,
  faChartBar,
  faVideo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import image from '../images/resources.webp'

export default function Resources() {
  const guides = [
    {
      icon: <FontAwesomeIcon icon={faBookOpen} />,
      title: "Getting Started with Peak Efficiency",
      description: "A step-by-step guide to setting up your workspace and automating daily workflows.",
      link: "#",
    },
    {
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      title: "AI Inbox Optimization",
      description: "Learn how to train your AI assistant to prioritize, summarize, and reply on your behalf.",
      link: "#",
    },
  ];

  const blogs = [
    {
      icon: <FontAwesomeIcon icon={faChartBar} />,
      title: "The Future of Productive Work",
      description: "How AI is changing the way teams communicate and make decisions.",
      link: "#",
    },
    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      title: "Inside Peak Efficiency",
      description: "A behind-the-scenes look at how we build reliable AI for high-performance teams.",
      link: "#",
    },
  ];

  const caseStudies = [
    {
      icon: <FontAwesomeIcon icon={faLink} />,
      title: "Case Study: Atlas Group",
      description: "Discover how a remote marketing team reduced email time by 70% using Peak Efficiency.",
      link: "#",
    },
    {
      icon: <FontAwesomeIcon icon={faLink} />,
      title: "Case Study: Ember Analytics",
      description: "See how a data-driven company automated reporting and improved collaboration with AI workflows.",
      link: "#",
    },
  ];

  return (
    <PageContainer>
        <Image src={image} fetchPriority="high"/>
      <Header>
        <Subtitle>
          Learn, explore, and get inspired. Dive into practical guides, insights, and real-world examples
          to help your team reach <strong>Peak Efficiency</strong>.
        </Subtitle>
      </Header>

      <SectionTitle>Guides</SectionTitle>
      <CardGrid>
        {guides.map((item, i) => (
          <Card key={i} href={item.link}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
            <LearnMore>Read Guide →</LearnMore>
          </Card>
        ))}
      </CardGrid>

      <SectionTitle1>Blog Posts</SectionTitle1>
      <CardGrid>
        {blogs.map((item, i) => (
          <Card key={i} href={item.link}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
            <LearnMore>Read Post →</LearnMore>
          </Card>
        ))}
      </CardGrid>

      <SectionTitle1>Case Studies</SectionTitle1>
      <CardGrid>
        {caseStudies.map((item, i) => (
          <Card key={i} href={item.link}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
            <LearnMore>View Case Study →</LearnMore>
          </Card>
        ))}
      </CardGrid>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  background-color: #ffffff;
  color: #234261;
  min-height: 100vh;
  padding: 0rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Header = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 3rem;
`;


const Image = styled.img`
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: -20px;
    z-index: 0;
    padding: 0px 10px;
    min-height: 300px;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #3b4b61;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #234261;
  margin-top: 0.5rem;
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

const Card = styled.a`
  background-color: #f9fafb;
  border-radius: 1rem;
  width: clamp(250px, 30%, 350px);
  padding: 1.75rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  text-align: left;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    border-color: #2e734c44;
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
  margin-bottom: 1rem;
`;

const LearnMore = styled.span`
  font-size: 0.9rem;
  color: #2e734c;
  font-weight: 600;
`;

