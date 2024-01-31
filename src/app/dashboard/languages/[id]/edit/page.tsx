import { fetchLanguageById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import Form from "@/app/ui/languages/edit-form";

export default async function Page ({params}: {params: {id: string }}) {

  const id = params.id
  const language = await fetchLanguageById(id)

  return (
    <main>
      <Breadcrumbs
      breadcrumbs={[
        { label: 'Lenguaje', href: '/dashboard/languages' },
        {
          label: 'Editar experiencia lenguaje',
          href: `/dashboard/language/${id}/edit`,
          active: true,
        },
      ]} />
      <Form language={language} ></Form>
    </main>
  )
} 