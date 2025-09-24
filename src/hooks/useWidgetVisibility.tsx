import { useLocation } from "react-router-dom";
import { PagePaths } from "../routes/routes_utils";

const HIDE_WIDGET_PATHS = [PagePaths.LOGIN];

export const useWidgetVisibility = () => {
  const location = useLocation();
  return !HIDE_WIDGET_PATHS.includes(location.pathname);
};
