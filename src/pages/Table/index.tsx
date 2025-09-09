import { Suspense } from "react";
import { Table } from "../../components/Table";
import { ClipLoader } from "react-spinners";

const TablePage = () => {
  return (
    <>
      <Suspense fallback={<ClipLoader />}>
        <Table />
      </Suspense>
    </>
  );
};

export default TablePage;
