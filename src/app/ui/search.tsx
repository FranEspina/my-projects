'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term)
    const params = new URLSearchParams(searchParams)
    if (term){
      params.set('query', term)
    } else {
      params.delete('query')
    }

    params.set('page', '1')
    
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(event) => handleSearch(event.target.value)}
        className="peer block w-full rounded-md border bg-slate-900 border-slate-100 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-400"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 peer-focus:text-slate-100" />
    </div>
  );
}
