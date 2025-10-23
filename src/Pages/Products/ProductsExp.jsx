import styled from 'styled-components';


function ProductsExp({Title, subText, image, howItWorks}) {
  return (
        <ProductCont>
            <Header>{Title}</Header>
            <HeaderSubText>{subText}</HeaderSubText>
            <Image src={image} />
            <Header>How it Works</Header>
            <HeaderSubText>{howItWorks}</HeaderSubText>
        </ProductCont>
  );
}

export default ProductsExp;

const ProductCont = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    max-width: 400px;
    margin-top: -50px;
    z-index: 0;
    min-height: 300px;
`

const Header = styled.h1`
  color: #234261;
  font-size: 50px;
  padding: 0px 100px;
  margin-top: -40px;
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
const IconContainer = styled.div`
  background: rgba(46, 115, 76, .2);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin: 5px auto;
`