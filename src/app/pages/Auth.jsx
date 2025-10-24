import React, { useState } from "react";
import SignInUp from "@/components/SignInUp";
import { Link, useLocation } from "react-router";

export default function Auth() {

  return (
    <div className="flex min-h-screen ">

      <div className="w-1/2  bg-gray-500">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="w-1/2 relatives p-6">
        <Link className="absolute right-8 top-4"
          to={{ pathname: '/shop' }}>X</Link>
        <SignInUp />
      </div>
    </div >
  )
}
