import { fetchLanguages } from "@/app/lib/data";
import Image from 'next/image';
import { UpdateLanguage, DeleteLanguage } from "./buttons";


export default async function TableLanguage ({currentPage, query} : {
  currentPage: number, 
  query: string, 
}) {


  const languages = await fetchLanguages(currentPage, query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-slate-900 p-2 md:pt-0">
          <div className="md:hidden">
            {languages?.map((language) => (
              <div
                key={language.id}
                className="mb-2 w-full rounded-md bg-slate-800 p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={language.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${language.nombre}'s profile picture`}
                      />
                      <p>{language.nombre}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {language.nivel}
                    </p>
                    <p>{language.años}</p>
                    <p>{language.experiencia}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateLanguage id={language.id} />
                    <DeleteLanguage id={language.id} /> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Lenguaje
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nivel
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Años 
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Experiencia 
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edición</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-900">
              {languages?.map((language) => (
                <tr
                  key={language.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3 h-12" >
                      <Image
                        src={language.image_url}
                        className="rounded-md p-1 "
                        width={50}
                        height={50}
                        alt={`${language.nombre}'s profile picture`}
                      />
                      <p>{language.nombre}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {language.nivel}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {language.años}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {language.experiencia}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateLanguage id={language.id} />
                      <DeleteLanguage id={language.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}