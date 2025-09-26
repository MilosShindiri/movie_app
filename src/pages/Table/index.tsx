import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";
import { Table } from "../../components/Table/Table";
import { useSearchParams } from "react-router-dom";

const TablePage = () => {
  const { setItems } = useBreadcrumbs();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setItems([
      { label: "Home", url: "/" },
      { label: "Table", url: "/table" },
    ]);
  }, [setItems]);

  return (
    <Table
      initialPageIndex={pageFromUrl - 1}
      setSearchParams={setSearchParams}
    />
  );
};

export default TablePage;
