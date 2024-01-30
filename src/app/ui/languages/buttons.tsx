import { deleteLanguage } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateLanguage() {
  return (
    <Link
      href="/dashboard/languages/create"
      className="flex h-10 items-center rounded-lg bg-sky-700 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Crear Lenguaje</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateLanguage({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/languages/${id}/edit`}
      className="rounded-md border p-2 hover:bg-sky-950"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteLanguage({ id }: { id: string }) {
  const deleteLanguageWithId = deleteLanguage.bind(null, id)
  return (
    <>
    <form action={deleteLanguageWithId}>
      <button className="rounded-md border p-2 hover:bg-sky-950">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
    </>
  );
}
