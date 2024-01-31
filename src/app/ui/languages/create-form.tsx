'use client'

import Link from "next/link";
import { Button } from "../button";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { createLanguage } from "@/app/lib/actions";
import { useFormState } from "react-dom";


export default function Form () {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createLanguage, initialState)
 
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-900 p-4 md:p-6 flex flex-col gap-4">

        {/* Language Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre del lenguaje 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="nombre del lenguaje"
                aria-describedby="name-error"
                className="peer block w-full rounded-md border bg-gray-900 border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-100" />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-sky-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Language Experience Level */}
        <fieldset>
          <legend className="mb-4 block text-sm font-medium">
            Experiencia en el lenguaje
          </legend>
          <div className="rounded-md border  border-gray-700  bg-gray-900 px-[14px] py-3">
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center">
                <input
                  id="junior"
                  name="level"
                  type="radio"
                  value="junior"
                  aria-describedby="level-error"
                  className="h-4 w-4 cursor-pointer border-gray-300  bg-gray-800 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="junior"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-100"
                >
                  Junior 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="intermedio"
                  name="level"
                  type="radio"
                  value="intermedio"
                  aria-describedby="level-error"
                  className="h-4 w-4 cursor-pointer border-gray-700 bg-gray-800 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="intermedio"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-100"
                >
                  Intermedio 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="senior"
                  name="level"
                  type="radio"
                  value="senior"
                  aria-describedby="level-error"
                  className="h-4 w-4 cursor-pointer border-gray-700 bg-gray-800 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="senior"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-100"
                >
                  Senior 
                </label>
              </div>
            </div>
          </div>
          <div id="level-error" aria-live="polite" aria-atomic="true">
            {state.errors?.experience_level &&
              state.errors.experience_level.map((error: string) => (
                <p className="mt-2 text-sm text-sky-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>

        {/* Language Experience Type */}
        <fieldset>
          <legend className="mb-4 block text-sm font-medium">
            Tipo de Experiencia
          </legend>
          <div className="rounded-md border border-gray-700 bg-gray-900 px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="profesional"
                  name="type"
                  type="radio"
                  value="profesional"
                  aria-describedby="type-error"
                  className="h-4 w-4 cursor-pointer border-gray-700 bg-gray-700 text-gray-100 focus:ring-2"
                />
                <label
                  htmlFor="profesional"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-100"
                >
                  Profesional 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="hobby"
                  name="type"
                  type="radio"
                  value="hobby"
                  aria-describedby="type-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="hobby"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-100"
                >
                  Hobby 
                </label>
              </div>
            </div>
          </div>
          <div id="level-error" aria-live="polite" aria-atomic="true">
            {state.errors?.experience_type &&
              state.errors.experience_type.map((error: string) => (
                <p className="mt-2 text-sm text-sky-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>

        {/* Language Experience Years */}
        <div className="mb-4" >
          <label htmlFor="years" className="mb-2 block text-sm font-medium">
            Años de experiencia
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="years"
                name="years"
                type="number"
                step="1"
                placeholder="años"
                aria-describedby="years-error"
                className="peer block w-full rounded-md border bg-gray-900 border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-100" />
            </div>
          </div>
          <div id="years-error" aria-live="polite" aria-atomic="true">
            {state.errors?.experience_years &&
              state.errors.experience_years.map((error: string) => (
                <p className="mt-2 text-sm text-sky-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Logo url */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre del lenguaje 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                type="text"
                placeholder="http://..."
                aria-describedby="url-error"
                className="peer block w-full rounded-md border bg-gray-900 border-gray-700 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-100" />
            </div>
          </div>
          <div id="url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image_url &&
              state.errors.image_url.map((error: string) => (
                <p className="mt-2 text-sm text-sky-200" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true">
            {state.message && 
              <p className="mt-2 text-sm text-sky-200" key={state.message}>
                {state.message}
              </p>
            }
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/languages"
          className="flex h-10 items-center rounded-lg bg-sky-950 px-4 text-sm font-medium text-gray-50 transition-colors hover:bg-sky-600"
        >
          Cancelar
        </Link>
        <Button type="submit">Crear experiencia</Button>
      </div>
    </form>
  );
}