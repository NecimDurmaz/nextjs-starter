"use client";
import Navbar from "@/components/(core)/navbar";
import Head from "next/head";
import React from "react";

export default function LayoutWrapper({
  children,
  title,
  favicon,
  primaryColor,
}) {
  // children.map((element) => {
  //   if (element.type === "button") {
  //     return React.cloneElement(
  //       element,
  //       {
  //         onClick: () => {
  //           // additional props
  //           alert("You are making progress!!!");
  //         },
  //       },
  //       <>Styled button with onClick</>
  //     );
  //   }
  // });
  return (
    <>
      <html>
        <head>
          <link
            rel='shortcut icon'
            href={
              favicon
                ? favicon
                : "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico"
            }
            type='image/x-icon'
          />
          <link
            rel='icon'
            href={
              favicon
                ? favicon
                : "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico"
            }
            type='image/x-icon'
          />
        </head>
        <body>
          <Navbar siteName={title} />
          {/* <div> {children} </div> */}
          <div> {children} </div>
        </body>
      </html>
    </>
  );
}
