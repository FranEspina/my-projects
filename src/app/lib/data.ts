import { LenguajeDeProgramacion, list_lenguages } from "../mocks/languages";

const ITEMS_PER_PAGE = 6

export async function fetchLanguages (currentPage: number, query: string) : Promise<LenguajeDeProgramacion[]> {  
  const filter_list = filterLanguage(query)
  const first = (currentPage - 1) * ITEMS_PER_PAGE;
  const last = first + ITEMS_PER_PAGE;  
  return filter_list.slice(first, last)
}
  
export async function getLanguagesTotalPages (query: string) : Promise<number> {  
  const filter_list = filterLanguage(query)
  return Math.floor(filter_list.length / ITEMS_PER_PAGE) + 1 
}

function filterLanguage (query: string) : LenguajeDeProgramacion[] {
  const queryNumber = Number(query)
  return list_lenguages.filter(p => 
    p.nombre.toLowerCase().includes(query.toLowerCase()) ||
    p.nivel.toLowerCase().includes(query.toLowerCase()) ||
    p.experiencia.toLowerCase().includes(query.toLowerCase()) || 
    (!Number.isNaN(queryNumber) && p.años >= queryNumber)
    )
    
}

