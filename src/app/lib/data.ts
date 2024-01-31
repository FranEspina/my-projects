import { LanguagesTable } from "./definitions";
import { sql } from '@vercel/postgres'

const ITEMS_PER_PAGE = 6

export async function fetchFilteredLanguages(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    //Mock para probar los skeletons
    await new Promise(resolve => setTimeout(resolve, 1000));

    const languages = await sql<LanguagesTable>`
      SELECT
        id,
        name,
        experience_level, 
        experience_years, 
        experience_type, 
        image_url
      FROM languages
      WHERE
        name ILIKE ${`%${query}%`} OR
        experience_level ILIKE ${`%${query}%`} OR
        experience_type::text ILIKE ${`%${query}%`} OR
        experience_years::text ILIKE ${`%${query}%`}
      ORDER BY name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return languages.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error recuperando lenguajes de programación.');
  }
}
  
export async function fetchLanguagesPages (query: string) : Promise<number> {  
  try {
    const count = await sql`SELECT COUNT(*)
    FROM languages
    WHERE
    name ILIKE ${`%${query}%`} OR
    experience_level ILIKE ${`%${query}%`} OR
    experience_type::text ILIKE ${`%${query}%`} OR
    experience_years::text ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error recuperando número de lenguajes de programación.');
  }
}



