import styled, { useTheme } from 'styled-components';
import { useContent } from '../content/ContentContext';

function About() {
  const theme = useTheme();
  const { content } = useContent();
  const { about } = content;
  return (
    <ServiceSection>
      <Header>{about.heading}</Header>
      <HeaderSubText>{about.subheading}</HeaderSubText>
      <ParaTitle>{about.missionTitle}</ParaTitle>
      <ParaSubText>{about.mission}</ParaSubText>
      <ParaTitle>{about.visionTitle}</ParaTitle>
      <ParaSubText>{about.vision}</ParaSubText>
      <ParaTitle>{about.valuesTitle}</ParaTitle>
      <ParaSubText1>
        {about.clarityLine.split('CLEAR')[0]}
        <span style={{ color: theme.colors.secondary, fontWeight: 800 }}>CLEAR</span>
        {about.clarityLine.split('CLEAR')[1]}
      </ParaSubText1>
      <div style={{ borderTop: '1px solid #5454543d' }}></div>
      {about.values.map((value) => (
        <ClearCont key={value.key}>
          <LetterContainer>
            <Letter>{value.key}</Letter>
          </LetterContainer>
          <div>
            <ClearTitle>{value.title}</ClearTitle>
            <ClearText>{value.description}</ClearText>
          </div>
        </ClearCont>
      ))}
      <ParaTitle>{about.differenceTitle}</ParaTitle>
      <ParaSubText>{about.differenceSubheading}</ParaSubText>
      {about.differenceParagraphs.map((paragraph, index) => (
        <ParaSubText key={index}>{paragraph}</ParaSubText>
      ))}
    </ServiceSection>
  );
}

export default About;

const ServiceSection = styled.section`
  background-color: #fff;
  padding: 90px 90px 10px;
  @media (max-width: 768px) {
    padding: 90px 25px 10px;
  }
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  padding: 0px 100px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;
const HeaderSubText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
  font-weight: 700;
  margin-top: -30px;
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`;

const ParaTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: -10px;
`;

const ParaSubText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 100px;
  border-top: 1px solid #5454543d;
  @media (max-width: 768px) {
    padding: 10px 5px 0px;
  }
`;

const ParaSubText1 = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 20px;
  font-weight: 300;
  padding: 10px 100px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;

const ClearTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-weight: 700;
  margin-bottom: -10px;
  text-align: left;
`;

const ClearText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 18px;
  font-weight: 300;
  padding: 0px 0px;
  text-align: left;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LetterContainer = styled.div`
  background: rgba(46, 115, 76, 0.2);
  border-radius: 50%;
  height: 45px;
  width: 45px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
  margin-top: 27px;
  margin-right: 10px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Letter = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  font-size: 30px;
`;

const ClearCont = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
