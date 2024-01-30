import Link from "next/link";
import NavLinks from "./nav-links";
import {PowerIcon } from '@heroicons/react/24/outline';


export default function SideNav () {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-10 items-center justify-start rounded-md bg-sky-700 p-4 md:h-40 md:items-end"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          Mi logo
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-slate-950 md:block"></div>
        <form action={async () => {
            'use server';
            //await signOut();
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-slate-900 p-3 text-sm font-medium hover:bg-sky-950  
          md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}