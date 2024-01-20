"use client";

import { education, EducationT } from "@/lib/constants";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export default function WorkExperience() {
  const rows: EducationT[] = education;
  const columns = [
    { key: "institute", label: "Institute" },
    { key: "degree", label: "Degree" },
    { key: "timeline", label: "Timeline" },
  ];

  return (
    <Table aria-label="work-experience">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows}>
        {(row: EducationT) => (
          <TableRow key={row.institute}>{(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}</TableRow>
        )}
      </TableBody>
    </Table>
  );
}
