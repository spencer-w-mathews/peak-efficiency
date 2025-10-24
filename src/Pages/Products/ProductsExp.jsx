import styled from 'styled-components';
import FlexContainer from '../../Components/FlexContainer';
import PriceCard from './PriceCard';
import { useEffect, useState } from 'react';


const emailPriceCards = [
                          {title: 'Basic', description: 'The essential tool for solo users',price: '$30.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Business', description: 'Our most effective tool for top-tier managers', price: '$50.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Executive', description: 'Our most effective tool, designed for business', price: "Let's talk", billingText: '', trial: '', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ],  buttonText: "Let's talk"}
                        ]
const moringPriceCards = [
                          {title: 'Basic', description: 'The essential tool for solo users',price: '$30.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Business', description: 'Our most effective tool for top-tier managers', price: '$50.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Executive', description: 'Our most effective tool, designed for business', price: "Let's talk", billingText: '', trial: '', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ],  buttonText: "Let's talk"}
                      ]
                      
const boardPriceCards = [
                          {title: 'Basic', description: 'The essential tool for solo users',price: '$30.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Business', description: 'Our most effective tool for top-tier managers', price: '$50.00', billingText: '/user /month billed monthly', trial: '7 day free trial', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ], buttonText: 'Sign me up'}
                          ,{title: 'Executive', description: 'Our most effective tool, designed for business', price: "Let's talk", billingText: '', trial: '', includes: ['lorem ipsum', 'lorem sjf thwl','lorem ipsum', 'lorem sjf thwl', 'test sft test' ],  buttonText: "Let's talk"}
                      ]

function ProductsExp({Title, subText, image}) {
    const [priceCards, setPriceCards] = useState(emailPriceCards)

    useEffect(()=>{
        if(Title === 'Email Filter & Sorter'){
            setPriceCards(emailPriceCards)
        } else if (Title === 'Morning Brief'){
            setPriceCards(moringPriceCards)
        }else{
            setPriceCards(boardPriceCards)
        }
    },[Title])


  return (
        <ProductCont>
            <Header>{Title}</Header>
            <HeaderSubText>{subText}</HeaderSubText>
            <Image src={image} />
            <PricingHeader>Tailored solutions that evolve with your needs</PricingHeader>
            <FlexContainer>
                {priceCards.map((cardData, i)=>
                    <PriceCard key={i} cardData={cardData}/>
                )}
            </FlexContainer>
        </ProductCont>
  );
}

export default ProductsExp;

const ProductCont = styled.div`
    padding: 80px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`
const Image = styled.img`
    max-width: 400px;
    margin-top: -80px;
    z-index: 0;
    padding: 0px 10px;
    min-height: 300px;
`

const Header = styled.h1`
  color: #234261;
  font-size: 50px;
  padding: 0px 100px;
  margin-top: -40px;
  margin-bottom: -10px;
  z-index: 1000;
  @media (max-width: 768px) {
        padding: 0px 5px;
        font-size: 40px;
        line-height:  1;
        margin-bottom: 5px;
    }
`
const HeaderSubText = styled.p`
  color: #6D92B4;
  font-size: 24px;
  padding: 0px 170px 20px;
  z-index: 1000;
  @media (max-width: 768px) {
        padding: 0px 5px;
  }
`

const PricingHeader = styled.h1`
  color: #234261;
  font-size: 30px;
  padding: 0px 100px;
  margin-top: -40px;
  z-index: 1000;
  @media (max-width: 768px) {
        padding: 0px 5px;
        font-size: 20px;
        line-height:  1;
        margin-bottom: 5px;
    }
`