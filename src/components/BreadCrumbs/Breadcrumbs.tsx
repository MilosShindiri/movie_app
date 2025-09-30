import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";
import {
  CrumbCurrent,
  CrumbLink,
  List,
  ListItem,
  Nav,
} from "./BreadcrumbsStyled";

export const Breadcrumbs = () => {
  const { items } = useBreadcrumbs();

  if (!items || items.length === 0) return null;

  return (
    <Nav aria-label="breadcrumb">
      <List>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <ListItem key={index}>
              {isLast || !item.url ? (
                <CrumbCurrent>{item.label}</CrumbCurrent>
              ) : (
                <CrumbLink to={item.url}>{item.label}</CrumbLink>
              )}
            </ListItem>
          );
        })}
      </List>
    </Nav>
  );
};
