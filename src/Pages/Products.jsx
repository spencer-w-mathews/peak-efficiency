import styled, { useTheme } from 'styled-components';
import './Products.css';
import ScrollToFade from '../Components/ScrollToFade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faObjectGroup } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faMugHot, faServer } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <section className="services">
      <Header>Simplify how you work. Amplify what matters.</Header>
      <HeaderSubText>
        Our tools cut through the noise and give you back the time to lead, create, and grow.
      </HeaderSubText>
      <div className="service-card-homes">
        {/* Microsoft 365 Projects */}
        <div
          className="service-card-home"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/products/email-filter-sorter')}
        >
          <ScrollToFade>
            <IconContainer>
              <FontAwesomeIcon
                icon={faEnvelope}
                color={theme.colors.secondary}
                size="2x"
                style={{ marginTop: '18px' }}
              />
            </IconContainer>
            <h3>Email Filter & Sorter</h3>
            <p>
              Removes noise, routes what matters, and drafts replies in your tone — your inbox
              finally works for you.
            </p>
          </ScrollToFade>
        </div>
        {/* Cyber Insurance Hardening */}
        <div
          className="service-card-home"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/products/morning-brief')}
        >
          <ScrollToFade>
            <IconContainer>
              <FontAwesomeIcon
                icon={faMugHot}
                color={theme.colors.secondary}
                size="2x"
                style={{ marginTop: '18px' }}
              />
            </IconContainer>
            <h3>Morning Brief</h3>
            <p>
              Start each day with a clear snapshot of what matters most — key emails, meetings, and
              action items — all summarized by AI.
            </p>
          </ScrollToFade>
        </div>
        {/* Device Management */}
        <div
          className="service-card-home"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/products/command-board')}
        >
          <ScrollToFade>
            <IconContainer>
              <FontAwesomeIcon
                icon={faObjectGroup}
                color={theme.colors.secondary}
                size="2x"
                style={{ marginTop: '18px' }}
              />
            </IconContainer>
            <h3>Command Board</h3>
            <p>
              A secure central hub where you can see everything — communications, priorities, and
              progress — in one place.
            </p>
          </ScrollToFade>
        </div>
        {/* Device Management */}
        <div
          className="service-card-home"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/products/custom-gpt')}
        >
          <ScrollToFade>
            <IconContainer>
              <FontAwesomeIcon
                icon={faServer}
                color={theme.colors.secondary}
                size="2x"
                style={{ marginTop: '18px' }}
              />
            </IconContainer>
            <h3>Custom GPT Solutions</h3>
            <p>
              Fully customized GPTs built for individuals, teams, and enterprises — tailored to your
              goals, workflows, and communication style.
            </p>
          </ScrollToFade>
        </div>
        {/* Device Management */}
        <div
          className="service-card-home"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/products/strategic-intelligence')}
        >
          <ScrollToFade>
            <IconContainer>
              <FontAwesomeIcon
                icon={faChartLine}
                color={theme.colors.secondary}
                size="2x"
                style={{ marginTop: '18px' }}
              />
            </IconContainer>
            <h3>Strategic Intelligence</h3>
            <p>
              AI-powered strategy, backed by real data — built to help leaders decide faster and
              scale smarter.
            </p>
          </ScrollToFade>
        </div>
      </div>
    </section>
  );
}

export default Products;

const Header = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  padding: 0px 100px;
  @media (max-width: 768px) {
    padding: 0px 5px;
    font-size: 40px;
    line-height: 1;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;
const HeaderSubText = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 24px;
  padding: 0px 170px 20px;
  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;
const IconContainer = styled.div`
  background: rgba(46, 115, 76, 0.2);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin: 5px auto;
`;
