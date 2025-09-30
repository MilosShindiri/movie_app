import { Bold, FooterWrapper, Red } from "./HomeFooterStyled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Made with <Red>sweat</Red> Love by: <Bold> Milos Petrovic</Bold>
      </p>
      <p>© Copyright Reserved</p>
    </FooterWrapper>
  );
};
