import { LenguajeDeProgramacion, list_lenguages } from "../mocks/languages";

const ITEMS_PER_PAGE = 6

export async function fetchLanguages (currentPage: number) : Promise<LenguajeDeProgramacion[]> {  
  const first = (currentPage - 1) * ITEMS_PER_PAGE;
  const last = first + ITEMS_PER_PAGE;  
  const pagelist = list_lenguages.slice(first, last)
  console.log(pagelist) 
  return pagelist
}

export async function getLanguagesTotalPages () : Promise<number> {  
  return Math.floor(list_lenguages.length / ITEMS_PER_PAGE) + 1 
}

