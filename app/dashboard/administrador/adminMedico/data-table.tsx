"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import EditMedico from './adminEditMedico/page';
import { useState } from "react"
import axios from "axios"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const [visible, setVisible] = useState<boolean>(true)
  const [dataInfo, setdataInfo] = useState<TData>()

  function handleEdit(row: TData) {
    // Implement your edit logic here
    setVisible(!visible)
    setdataInfo(row)

  }

  function handleDelete(row: any) {
    axios.delete(`http://localhost:8080/administrador/medicos/${row.idUsuario}`)
    window.location.reload()


  }

  return (
    <div className="rounded-md border">
      {visible ?
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                  {/* Celda de acciones */}
                  <TableCell className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(row.original)}
                      className="bg-[#0f766e] hover:bg-[#115e56] text-white text-sm px-2 py-2 rounded-md"
                    >
                      <PencilIcon className="w-5 h-5 mr-1" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(row.original)}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        : <EditMedico dataInfo={dataInfo} />}
    </div>
  )
}
