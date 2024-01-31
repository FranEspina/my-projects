import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import Form from "@/app/ui/languages/create-form";

export default function Page () {
  return (
    <main>
      <Breadcrumbs
       breadcrumbs={[
        { label: 'Lenguaje', href: '/dashboard/languages' },
        {
          label: 'Crear experiencia lenguaje',
          href: '/dashboard/language/create',
          active: true,
        },
      ]} />
      <Form />
    </main>
  );
}