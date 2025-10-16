import React, { useState } from "react";
import SignInUp from "@/components/SignInUp";
import { Link, useLocation } from "react-router";

export default function Auth() {
 
  return (
    <div className="flex h-screen">

      <div className="w-1/3 h-full bg-gray-500 ">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="w-2/3 overflow-y-scroll relatives">
        <Link className="absolute right-8 top-4" 
        to={{ pathname: '/shop' }}>X</Link>
        <SignInUp />
      </div>
    </div >
  )
}
