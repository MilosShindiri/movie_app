import { Suspense, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Table } from "../../components/Table";
import { LoaderWrapper } from "../../components/TableStyled";
import { SearchFilter } from "../../components/TableFilters";

const TablePage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  return (
    <Suspense
      fallback={
        <LoaderWrapper>
          <ClipLoader color="#36d7b7" size={50} />
        </LoaderWrapper>
      }
    >
      <SearchFilter query={query} onQueryChange={setQuery} />
      <Table page={page} query={query} />
    </Suspense>
  );
};

export default TablePage;
