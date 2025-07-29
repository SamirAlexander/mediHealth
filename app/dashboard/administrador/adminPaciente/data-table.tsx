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
import { PencilIcon, TrashIcon, FolderIcon } from "lucide-react"
import EditarPaciente from "./adminEditPaciente/page" 
import { useState } from "react"
import axios from "axios"
import Link from "next/link"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
 data : TData[]
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

  

  const [visible,setVisible] = useState<boolean>(true);
  const [dataInfo,setDataInfo] = useState<TData>();

   


  function handleEdit(row:TData){
    console.log("ESTOY OPRIMIENDO EL EDIT");
    setVisible(!visible)
    setDataInfo(row)        
  }

  function handleAddMedicarHistory(row:TData){
    console.log("ESTOY OPRIMIENDO EL AGREGAR HISTORIAL");   
    console.log(row) 
    // Aquí podrías agregar lógica para manejar el historial médico
    // Por ejemplo, redirigir a una página de historial médico o abrir un modal
  }

  function handleDelete(row: any){
    axios.delete(`http://localhost:8080/administrador/pacientes/${row.idUsuario}`);
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
              <Button variant="outline" size="sm" onClick={() => handleEdit(row.original)}>
                <PencilIcon className="w-4 h-4" />
              </Button>
              <Link href="/dashboard/administrador/adminPaciente/adminAddMedicalHistory">
              <Button variant="outline" size="sm" onClick={() => handleAddMedicarHistory(row.original)}>
                <FolderIcon className="w-4 h-4" />
              </Button>
              </Link>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(row.original)}> 
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
      </Table> :
      <EditarPaciente dataInfo={dataInfo} />
        }
    </div>
  )
}
