import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import User from "../Helper/User";

const Nav = async () => {
  const session = await getServerSession(authOptions);


  return (
    <div className="h-[13vh] shadow-md bg-white flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between">
        <div className="w-[80px] h-[80px] md:w-[70px] md:h-[70px]">
          <Link href="/" passHref>
            <Image
              src="/images/jbd-logo.webp"
              alt="JBD Logo"
              width={80}
              height={80}
              className="rounded-full object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {!session && (
            <Link href="/signup">
              <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-green-600 font-semibold text-white rounded-lg hover:bg-green-400 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          )}

          {session && <User session={session} />}

          {session && (
            <Link href="/post-job">
              <button className="px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 font-semibold text-white rounded-lg hover:bg-orange-400 transition-all duration-300">
                Post a Job
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
