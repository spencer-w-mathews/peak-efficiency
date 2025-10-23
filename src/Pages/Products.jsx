import styled from 'styled-components';
import './Products.css';
import ScrollToFade from '../Components/ScrollToFade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faObjectGroup } from '@fortawesome/free-regular-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


function Products() {
  const navigate = useNavigate()
  return (
        <section className="services">
            <Header>Simplify how you work. Amplify what matters.</Header>
            <HeaderSubText>Our tools cut through the noise and give you back the time to lead, create, and grow.</HeaderSubText>
            <div className="service-card-homes">
                {/* Microsoft 365 Projects */}
                <div className="service-card-home" style={{cursor: 'pointer'}} onClick={()=> navigate('/products/email-filter-sorter')}>
                <ScrollToFade>
                    <IconContainer>
                      <FontAwesomeIcon icon={faEnvelope} color='#2E734C' size='2x' style={{marginTop: '18px'}}/>
                    </IconContainer>
                    <h3>Email Filter & Sorter</h3>
                    <p>
                    Removes noise, routes what matters, and drafts replies in your tone — your inbox finally works for you.
                    </p>
                </ScrollToFade>
                </div>
                {/* Cyber Insurance Hardening */}
                <div className="service-card-home" style={{cursor: 'pointer'}} onClick={()=> navigate('/products/morning-brief')}>
                  
                <ScrollToFade>
                    <IconContainer>
                      <FontAwesomeIcon icon={faMugHot} color='#2E734C' size='2x' style={{marginTop: '18px'}}/>
                    </IconContainer>
                    <h3>Morning Brief</h3>
                    <p>
                      Start each day with a clear snapshot of what matters most — key emails, meetings, and action items — all summarized by AI.
                    </p>
                </ScrollToFade>
                </div>
                {/* Device Management */}
                <div className="service-card-home" style={{cursor: 'pointer'}} onClick={()=> navigate('/products/command-board')}>
                <ScrollToFade>
                    <IconContainer>
                      <FontAwesomeIcon icon={faObjectGroup} color='#2E734C' size='2x' style={{marginTop: '18px'}}/>
                    </IconContainer>
                    <h3>Command Board</h3>
                    <p>
                    A secure central hub where you can see everything — communications, priorities, and progress — in one place.
                    </p>
                </ScrollToFade>
                </div>
                
            </div>
    
        </section>
     
  );
}

export default Products;

const Header = styled.h1`
  color: #234261;
  font-size: 50px;
  padding: 0px 100px;
  @media (max-width: 768px) {
        padding: 0px 5px;
        font-size: 40px;
        line-height:  1;
        margin-bottom: 5px;
        margin-top: 5px;
      }
`
const HeaderSubText = styled.p`
  color: #6D92B4;
  font-size: 24px;
  padding: 0px 170px 20px;
  @media (max-width: 768px) {
        padding: 0px 5px;
  }
`
const IconContainer = styled.div`
  background: rgba(46, 115, 76, .2);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin: 5px auto;
`