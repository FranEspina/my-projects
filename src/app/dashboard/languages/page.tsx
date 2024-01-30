import { getLanguagesTotalPages } from "@/app/lib/data";
import { secondaryFont } from "@/app/ui/fonts"
import { CreateLanguage } from "@/app/ui/languages/buttons";
import TableLanguage from "@/app/ui/languages/table-language";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { clsx } from 'clsx';
export default async function Page (
  { searchParams } :
  { searchParams : {
      page?: string, 
      query?: string, 
    }
  }
  ) {

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getLanguagesTotalPages(query)

  return (
    <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={clsx(secondaryFont.className, 'text-2xl')}>Mis lenguajes de programación</h1>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Search placeholder="filtrar datos ..." />
      <CreateLanguage /> 
    </div>
     {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <TableLanguage query={query} currentPage={currentPage}/>
    {/* </Suspense> */}
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  </div>
  )
}