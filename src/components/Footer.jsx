import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className="mt-5  text-orange-500 h-[100px] flex flex-col gap-3 p-5 border border-transparent border-t-orange-500">
      <p className="text-center text-5xl font-Comfortaa ">M-Shop </p>
      <p className="text-center">
        All Right Reserved {date.getFullYear()} &copy;
      </p>
    </div>
  );
}
