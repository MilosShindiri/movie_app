import { Bold, FooterWrapper, Red } from "./HomeFooterStyled";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Made with <Red>sweat</Red> Love by: <Bold> Milos Petrovic</Bold>
      </p>
      <p>© Copyright Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
