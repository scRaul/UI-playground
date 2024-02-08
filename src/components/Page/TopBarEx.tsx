"use client";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Header from "../layout/Header";
import Logo from "../navigation/Logo";

export function NavLike() {
  const [session, setSession] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSession(event.currentTarget.checked);
  }

  return (
    <>
      <div className="w-fit mx-auto">
        <input
          id="auth"
          type="checkbox"
          onChange={handleChange}
          checked={session}
        />
        <label htmlFor="auth" className="px-2">
          has session
        </label>
      </div>
      {session ? <AuthBar /> : <DefaultBar />}
    </>
  );
}

export function DefaultBar() {
  return (
    <div className=" w-full h-20">
      <Header className="bg-gray-500 px-4 py-2">
        <Logo href="" />
        <div className="flex-grow"></div>
        <div className="flex-grow"></div>
        <Link href={""}>
          <div className="border rounded py-1 px-2 cursor-pointer">Log in</div>
        </Link>
        <Link href={""}>
          <div className="w-0  overflow-hidden md:w-full  md:border md:rounded md:py-1 md:px-2 md:cursor-pointer">
            Sign up
          </div>
        </Link>
      </Header>
    </div>
  );
}
export function AuthBar() {
  return (
    <div className="w-full h-20">
      <Header className=" bg-blue-500 px-4 py-2">
        <Logo href={""} />
        <div className="flex-grow"></div>
        <div className="rounded p-2 mr-1 cursor-pointer">#UserName</div>
      </Header>
    </div>
  );
}
