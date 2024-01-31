'use server'

import { z } from 'zod'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { LanguagesTable } from './definitions';
import { createLanguage as createLanguageService } from './data'

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    name?: string[];
    experience_level?: string[];
    experience_type?: string[];
    experience_years?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

const LanguageSchema = z.object({
  id: z.string(), 
  name: z.string({
    invalid_type_error: 'Indica un nombre de lenguaje.', 
  }), 
  experience_years: z.coerce
    .number()
    .gt(0, {message: 'Indica una número de años mayor que cero.' }), 
  experience_level: z.enum(['senior', 'intermedio', 'junior'], {
    invalid_type_error: 'Por favor, indica nivel.'
  }), 
  experience_type: z.enum(['profesional', 'hobby'], {
    invalid_type_error: 'Por favor, indica tipo experiencia.'
  }), 
  image_url: z.string({
    invalid_type_error: 'Indica una url para el logo.', 
  })
})

const createLanguageSchema = LanguageSchema.omit({
  id: true, 
})

export async function deleteLanguage(id: string) {
  return 
}


export async function createLanguage(prevState: State, formData: FormData) {

  console.log(formData)

  const validatedFields = createLanguageSchema.safeParse({
    name: formData.get('name'), 
    experience_level: formData.get('level'),
    experience_type: formData.get('type'),
    experience_years: formData.get('years'),
    image_url: formData.get('image_url'), 
  })

  console.log(formData.get('name'))
  
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Imposible crear lenguaje',
    };
  }

  // Prepare data for insertion into the database
  const { name, 
          experience_level, 
          experience_type, 
          experience_years, 
          image_url 
  } = validatedFields.data;
  
  try{
    await createLanguageService({name, level: experience_level, type: experience_type, years: experience_years, image_url})
  }
  catch (error){
    return {
      message: 'Database Error: Failed to Create Invoice'
    }
  }

  revalidatePath('/dashboard/languages')
  redirect('/dashboard/languages')
}

