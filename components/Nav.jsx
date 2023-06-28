"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";
import logo from "../public/assets/images/logo.svg";
const Nav = () => {
  const isUserLoggedIn = true;
  const [provider, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div>
        <Link href="/" className="flex gap-2 flex-center">
          <Image src={logo} className="object-contain" width={30} height={30} />

          <p className="invisible md:visible">Promptopia</p>
        </Link>
      </div>
      {/* desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div>
            <div className="flex gap-3 md:gap-5">
              <Link href="create-prompt" className="black_btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                SignOut
              </button>
              <Link href="/profile">
                <Image
                  src={logo}
                  width={37}
                  height={37}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

       



    </nav>
  );
};

export default Nav;
