import { LanguagesTable } from "./definitions";
import { sql } from '@vercel/postgres'
import { v4 as uuidv4 } from 'uuid'


const ITEMS_PER_PAGE = 6

export async function fetchFilteredLanguages(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    //Mock para probar los skeletons
    //await new Promise(resolve => setTimeout(resolve, 3000));

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
        unaccent(name) ILIKE unaccent(${`%${query}%`}) OR
        unaccent(experience_level) ILIKE unaccent(${`%${query}%`}) OR
        unaccent(experience_type::text) ILIKE unaccent(${`%${query}%`}) OR
        unaccent(experience_years::text) ILIKE unaccent(${`%${query}%`})
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
      unaccent(name) ILIKE unaccent(${`%${query}%`}) OR
      unaccent(experience_level) ILIKE unaccent(${`%${query}%`}) OR
      unaccent(experience_type::text) ILIKE unaccent(${`%${query}%`}) OR
      unaccent(experience_years::text) ILIKE unaccent(${`%${query}%`})
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error recuperando número de lenguajes de programación.');
  }
}

export async function createLanguage({name, level, type, years, image_url}
  : {
    name: string, 
    level: string, 
    type: string, 
    years: number, 
    image_url: string
    }
  ){

  
  const id = uuidv4()

  try {
    await sql`
    INSERT INTO languages (id, name, experience_level, experience_type, experience_years, image_url)
    VALUES(${id}, ${name}, ${level}, ${type}, ${years}, ${image_url})
    `
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error creando lenguaje de programación.');
  }
}

export async function updateLanguage({id, name, level, type, years, image_url}
  : {
    id: string, 
    name: string, 
    level: string, 
    type: string, 
    years: number, 
    image_url: string
    }
  ){

  try {
    await sql`
    UPDATE languages 
    SET name = ${name}, 
        experience_level = ${level}, 
        experience_type = ${type}, 
        experience_years = ${years}, 
        image_url = ${image_url}
    WHERE id = ${id}
    `
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error actualizando lenguaje de programación.');
  }
}

export async function deleteLanguage(id: string){

  try {
    await sql`DELETE FROM languages WHERE id = ${id}`
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error borrando lenguaje de programación.');
  }
}

export async function fetchLanguageById(id: string){
  try {
    const languages = await sql<LanguagesTable>`
    SELECT
      id,
      name,
      experience_level, 
      experience_years, 
      experience_type, 
      image_url
    FROM languages 
    WHERE id = ${id}`
    
    return languages.rows[0]

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error recuperando lenguaje por id.');
  }
}
