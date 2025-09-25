import { useEffect } from "react";
import { Table } from "../../components/Table";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";

const TablePage = () => {
  const { setItems } = useBreadcrumbs();

  useEffect(() => {
    setItems([
      { label: "Home", url: "/" },
      { label: "Table", url: "/table" },
    ]);
  }, [setItems]);
  return <Table />;
};

export default TablePage;
