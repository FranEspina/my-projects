import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col h-20 shrink-0 items-start rounded-lg bg-blue-500 p-4 md:h-52" >
        <p>FRANCISCO JOSÉ ESPINA ARAGÓN</p>
        <p><strong className='text-3xl'>Desarrollador</strong> de software</p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a mi gestor de proyectos.</strong> Herramienta para usar con los proyectos de mi {' '}
            <a href="https://fjespina.netlify.app/" className="text-blue-500">
              portfolio profesional
            </a>
            , puedes logarte para editar proyectos o entrar en la zona pública.
          </p>
          <Link
            href="/dashboard/languages"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
