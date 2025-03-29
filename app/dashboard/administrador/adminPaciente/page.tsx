import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Paciente, columns } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Paciente[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}


export default async function page() {
  const data = await getData()
  return (
    <div>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
      <Link href="../administrador">
        <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
      </Button>
      </Link>
    </div>
  )
}

