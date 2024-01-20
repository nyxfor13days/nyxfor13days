"use client";

import { experience, ExperienceT } from "@/lib/constants";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export default function WorkExperience() {
  const rows: ExperienceT[] = experience;
  const columns = [
    { key: "companyName", label: "Company" },
    { key: "type", label: "Type" },
    { key: "position", label: "Position" },
    { key: "timeline", label: "Timeline" },
  ];

  return (
    <Table aria-label="work-experience">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows}>
        {(row: ExperienceT) => (
          <TableRow key={row.companyName}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
