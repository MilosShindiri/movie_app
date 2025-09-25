import { useEffect } from "react";
import { useBreadcrumbs } from "../../context/useBreadcrumbs";
import { Table } from "../../components/Table/Table";

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
