import Link from "next/link";
import styled from "styled-components";
import { Container, Flex, FlexItem, Image } from "./";
import { AboutUs, CustomerService, Payments } from "../utils/index";
import Button from "./Button";
import Variables from "../components/Variables";

const FooterContainer = styled.footer`
  background: ${Variables.colors.black};
  color: #fff;
  border-bottom: 2px solid ${Variables.colors.slimeGreen};
  padding-top: 2em;
  @media (min-width: 768px) {
    padding: 2em 2em 0;
  }
  h4 {
    margin-bottom: 23px;
    font-size: 24px;
  }
`;

const TopFooter = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-flow: column nowrap;
`;

const BottomFooter = styled.div`
  padding: 10px 0;
  background-color: white;
`;

const FooterLogo = styled.div`
  img {
    /* width: 235px; */
    margin-bottom: 15px;
  }
`;
const Slogan = styled.p`
  margin-bottom: 50px;
  color: ${Variables.colors.slimeGreen};
  font-size: 19px;
  span {
    color: ${Variables.colors.darkGreen};
  }
`;
const FooterSubNav = styled.nav`
  margin-bottom: 25px;

  ul {
    li {
      font-size: 14px;
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.51);
    }
  }
`;
const LeftColumn = styled.div`
  text-align: center;
  @media (min-width: 1024px) {
    text-align: inherit;
    width: 20%;
  }
`;
const RightColumn = styled.div`
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  & > div,
  & nav  {
    @media (min-width: 1024px) {
      margin-left: 45px;
    }
  }
`;

const Newsletter = styled.div`
  margin: 50px auto 0;
  max-width: 400px;
  border-left: 3px solid ${Variables.colors.slimeGreen};
  padding: 10px 20px;

  @media (min-width: 1024px) {
    max-width: 340px;
    margin-top: inherit;
    border-left: inherit;
    padding: inherit;
  }
  input {
    display: block;
    margin: 10px 0;
    height: 40px;
    width: 100%;
    font-size: 14px;
    padding-left: 10px;
  }
`;

const NewslettreButton = styled(Button)`
  height: 40px;
  width: 100%;

  @media (min-width: 500px) {
    width: 50%;
  }
`;

const FollowUs = styled.div`
  min-width: 150px;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    cursor: pointer;
  }
`;

const Facebook = styled.div`
  img {
    width: 150px;
    margin-right: 20px;
  }
`;

// const Linkedin = styled.div`
//   width: 30px;
//   img {
//     width: 100%;
//   }
// `;
const CallUs = styled.div`
  cursor: pointer;

  span {
    font-size: 24px;
    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const PaymentsGroup = styled.div`
  width: 100%;
  ul {
    text-align: center;
    @media (min-width: 768px) {
      float: right;
    }
    li {
      display: inline-block;
      padding-left: 15px;
    }
  }
  img {
    width: 50px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  small {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 80%;
      text-align: inherit;
      margin-bottom: inherit;
    }
  }
`;

const TopFooterFlex = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Footer = props => (
  <React.Fragment>
    <FooterContainer>
      <Container>
        <TopFooter>
          <TopFooterFlex>
            <LeftColumn>
              <FooterLogo>
                <Image src="../static/logo-blanc.svg" alt="logo Agridepot" />
              </FooterLogo>
              <Slogan>
                The best farming products <span>delivered to your door.</span>
              </Slogan>
            </LeftColumn>
            <RightColumn>
              <FooterSubNav>
                <h4>ABOUT US</h4>
                <ul>
                  {AboutUs &&
                    AboutUs.map(({ title, href }) => (
                      <React.Fragment key={title}>
                        <li>
                          <Link href={href}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      </React.Fragment>
                    ))}
                </ul>
              </FooterSubNav>
              <FlexItem>
                <FooterSubNav>
                  <h4>CUSTOMER SERVICE</h4>
                  <ul>
                    {CustomerService &&
                      CustomerService.map(({ title, href }) => (
                        <React.Fragment key={title}>
                          <li>
                            <Link href={href}>
                              <a>{title}</a>
                            </Link>
                          </li>
                        </React.Fragment>
                      ))}
                  </ul>
                </FooterSubNav>
              </FlexItem>
              <FlexItem>
                <Newsletter>
                  <h4>NEWSLETTER</h4>
                  <p>Subscribe to our newsletter to receive special offers</p>
                  <form>
                    <label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </label>
                    <NewslettreButton>Subscribe</NewslettreButton>
                  </form>
                </Newsletter>
              </FlexItem>
            </RightColumn>
          </TopFooterFlex>

          <Social>
            <FollowUs>
              <Facebook>
                <Link href="https://www.facebook.com/agridepot.ca" prefetch>
                  <Image src="../static/facebook.svg" alt="Facebook logo" />
                </Link>
              </Facebook>

              {/* <Linkedin>
                <Link href="/" prefetch>
                  <Image src="../static/linkedin.svg" alt="Linked logo" />
                </Link>
              </Linkedin> */}
            </FollowUs>
            <CallUs>
              <span>
                <a href="tel:18667857245">Call us 1 866 785-7245</a>
              </span>
            </CallUs>
          </Social>
        </TopFooter>
      </Container>
    </FooterContainer>
    <BottomFooter>
      <Container>
        <Copyright>
          <small>
            © 2019 Agridepot.ca All Rights Reserved. Privacy Policy | Terms &
            Conditions
          </small>
          <PaymentsGroup>
            <ul>
              {Payments &&
                Payments.map(({ img, title }) => (
                  <React.Fragment key={title}>
                    <li>
                      <Image src={img} title={title} alt={title} />
                    </li>
                  </React.Fragment>
                ))}
            </ul>
          </PaymentsGroup>
        </Copyright>
      </Container>
    </BottomFooter>
  </React.Fragment>
);

export default Footer;
