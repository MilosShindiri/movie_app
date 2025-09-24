import { Link, useLocation } from "react-router-dom";
import {
  BreadcrumbWrapper,
  Crumb,
  CrumbWrapper,
  SlashLine,
  TitleStyled,
} from "./BreadcrumbsStyled";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbWrapper>
      <CrumbWrapper>
        <Crumb>
          <Link to="/">Home</Link>
        </Crumb>
      </CrumbWrapper>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const title = value;

        return (
          <Crumb key={to}>
            <SlashLine>/</SlashLine>
            {last ? (
              <TitleStyled>{title}</TitleStyled>
            ) : (
              <Link to={to}>{title}</Link>
            )}
          </Crumb>
        );
      })}
    </BreadcrumbWrapper>
  );
};
