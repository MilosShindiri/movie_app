import { ClipLoader } from "react-spinners";
import { LoaderWrapper } from "./Table/TableStyled";

export const TableLoader = () => (
  <LoaderWrapper>
    <ClipLoader color="#36d7b7" size={50} />
  </LoaderWrapper>
);
