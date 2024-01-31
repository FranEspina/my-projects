'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createLanguage as createLanguageService, 
         deleteLanguage as deleteLanguageService, 
         updateLanguage as updateLanguageService  
       } from './data'

// This is temporary until @types/react-dom is updated
export type LanguageState = {
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
  image_url: z.string().url(({
    message: 'Indica una url para el logo.', 
  }))
})

const createLanguageSchema = LanguageSchema.omit({
  id: true, 
})

export async function deleteLanguage(id: string) {
  try{
    await deleteLanguageService(id)
  }
  catch (error){
    return {
      message: 'Error de datos: Error eliminando registro'
    }
  }

  revalidatePath('/dashboard/languages')
}


export async function createLanguage(prevState: LanguageState, formData: FormData) {

  const validatedFields = createLanguageSchema.safeParse({
    name: formData.get('name'), 
    experience_level: formData.get('level'),
    experience_type: formData.get('type'),
    experience_years: formData.get('years'),
    image_url: formData.get('image_url'), 
  })
  
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
      message: 'Error de datos: Fallo al insertar registro'
    }
  }

  revalidatePath('/dashboard/languages')
  redirect('/dashboard/languages')
}

export async function updateLanguage(id: string, prevState: LanguageState, formData: FormData) {

  const validatedFields = createLanguageSchema.safeParse({
    name: formData.get('name'), 
    experience_level: formData.get('level'),
    experience_type: formData.get('type'),
    experience_years: formData.get('years'),
    image_url: formData.get('image_url'), 
  })
  
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Imposible actualizar lenguaje',
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
    await updateLanguageService({id, name, level: experience_level, type: experience_type, years: experience_years, image_url})
  }
  catch (error){
    return {
      message: 'Error de datos: Fallo al actualizar registro'
    }
  }

  revalidatePath('/dashboard/languages')
  revalidatePath(`/dashboard/languages/${id}/edit`)
  redirect('/dashboard/languages')
}
