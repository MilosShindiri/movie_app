import { useEffect } from "react";
import { Table } from "../../components/Table/Table";
import { useSearchParams } from "react-router-dom";
import { useBreadcrumbs } from "../../context/BreadCrumbs/useBreadcrumbs";

export const TablePage = () => {
  const { setItems } = useBreadcrumbs();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const sortFromUrl = searchParams.get("sort") ?? "";
  const orderFromUrl = searchParams.get("order") ?? "asc";

  useEffect(() => {
    setItems([
      { label: "Home", url: "/" },
      { label: "Table", url: "/table" },
    ]);
  }, [setItems]);

  return (
    <Table
      initialPageIndex={pageFromUrl - 1}
      initialSort={sortFromUrl}
      initialOrder={orderFromUrl === "desc"}
      setSearchParams={setSearchParams}
    />
  );
};
