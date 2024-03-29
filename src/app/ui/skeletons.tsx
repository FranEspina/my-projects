export function LanguageMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-slate-900 p-4">
      <div className="flex items-center justify-between border-b border-slate-600 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-md bg-slate-800"></div>
          <div className="h-6 w-16 rounded bg-slate-800"></div>
        </div>
        <div className="h-6 w-16 rounded bg-slate-800"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-24 rounded bg-slate-800"></div>
          <div className="mt-2 h-6 w-24 rounded bg-slate-800"></div>
          <div className="mt-4 h-6 w-4 rounded bg-slate-800"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-slate-800"></div>
          <div className="h-10 w-10 rounded bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
}

export function LanguageTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-slate-800 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Language Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3 h-12">
          <div className="h-8 w-8 rounded-full bg-slate-800"></div>
          <div className="h-6 w-24 rounded bg-slate-800"></div>
        </div>
      </td>
      {/* Nivel */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-slate-800"></div>
      </td>
      {/* Años */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-slate-800"></div>
      </td>
      {/* Experiencia */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-slate-800"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-slate-800"></div>
          <div className="h-[38px] w-[38px] rounded bg-slate-800"></div>
        </div>
      </td>
    </tr>
  );
}

export function LanguagesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-slate-900 p-2 md:pt-0">
          <div className="md:hidden">
            <LanguageMobileSkeleton />
            <LanguageMobileSkeleton />
            <LanguageMobileSkeleton />
            <LanguageMobileSkeleton />
            <LanguageMobileSkeleton />
            <LanguageMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-900">
              <LanguageTableRowSkeleton />
              <LanguageTableRowSkeleton />
              <LanguageTableRowSkeleton />
              <LanguageTableRowSkeleton />
              <LanguageTableRowSkeleton />
              <LanguageTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}