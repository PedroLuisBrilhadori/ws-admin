"use client";

import { AscHeader, TextRow } from "@/components/table-rows/rows";
import { Company, User } from "@/models";
import { ColumnDef, Row } from "@tanstack/react-table";

export const AdminActions = ({ row }: { row: Row<Company> }) => {};

export const columns = (authorized: boolean): ColumnDef<Company>[] => {
  const adminColumns: ColumnDef<Company>[] = [];

  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <AscHeader column={column}> Nome Fantasia </AscHeader>
      ),
      cell: ({ row }) => {
        const value = row.getValue("name") as string;

        return <TextRow>{value}</TextRow>;
      },
    },

    {
      accessorKey: "cnpj",
      header: ({ column }) => <AscHeader column={column}> CNPJ </AscHeader>,
      cell: ({ row }) => {
        const value = row.getValue("cnpj") as string;

        return <TextRow>{value}</TextRow>;
      },
    },

    {
      accessorKey: "user",
      header: ({ column }) => <AscHeader column={column}> Usuario </AscHeader>,
      cell: ({ row }) => {
        const user = row.getValue("user") as User;

        return <TextRow className="w-full">{user.name}</TextRow>;
      },
    },

    {
      accessorKey: "user",
      header: ({ column }) => <AscHeader column={column}> Email </AscHeader>,
      cell: ({ row }) => {
        const user = row.getValue("user") as User;

        return <TextRow className="w-full">{user.email}</TextRow>;
      },
    },
  ];

  if (authorized) return columns.concat(adminColumns);

  return columns;
};
