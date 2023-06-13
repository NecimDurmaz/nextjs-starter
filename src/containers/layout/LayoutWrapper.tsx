import Navbar from "@/components/(core)/navbar";

export default function LayoutWrapper({
  children,
  title,
  favicon,
  primaryColor,
}) {
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
          <div> {children} </div>
        </body>
      </html>
    </>
  );
}
