import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "app.elektranext.online";

  const path = url.pathname;

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.elektranext.online`, "").replace(`.vercel.app`, "")
      : hostname.replace(`.localhost:3000`, "");

  // rewrites for app pages
  if (currentHost == "app") {
    if (
      url.pathname === "/login" &&
      (req.cookies.get("next-auth.session-token") ||
        req.cookies.get("__Secure-next-auth.session-token"))
    ) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite root application to `/home` folder
  if (hostname === "localhost:3000" || hostname === "elektranext.online") {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }

  // rewrite everything else to `/_sites/[site] dynamic rout;

  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";
  const bgCyan = "\x1b[46m";
  const white = "\x1b[37m";

  console.log("\n");
  console.log(
    bgCyan +
      white +
      "------------------------------------------------------------------------------------------------------------" +
      reset
  );
  console.log("\n");
  console.log(yellow + "path", path + reset);

  if (path === "/") {
    url.pathname = `/sites/${currentHost}`;
    url.searchParams.set("site", currentHost);

    consoleLog("hotel", url);
    return NextResponse.rewrite(url); // http://necim.localhost:3000/sites/necim?site=necim
  } else if (path.split("/").length == 2) {
    //
    //
    // http://necim.localhost:3000/departman

    url.pathname = `sites/${currentHost}/departments/${path.slice(1)}`;
    url.searchParams.set("site", currentHost);
    url.searchParams.set("department", path.slice(1));
    consoleLog("department", url);
    return NextResponse.rewrite(url); // http://necim.localhost:3000/sites/necim/departman?site=necim
  } else if (path.split("/").length == 3) {
    //
    //
    // http://necim.localhost:3000/departman/menu

    var pathArray = path.slice(1).split("/");
    url.pathname = `sites/${currentHost}/departments/${pathArray[0]}/menus/${pathArray[1]}`;
    url.searchParams.set("site", currentHost);
    url.searchParams.set("department", pathArray[0]);
    url.searchParams.set("menu", pathArray[1]);
    consoleLog("menu", url);
    return NextResponse.rewrite(url); // http://necim.localhost:3000/sites/necim/departman/menu?site=necim
    //
    //
  } else {
    //
    //
    url.pathname = `/home`;
    return NextResponse.rewrite(url);
    //
    //
  }
  // else if (path.split("/").length == 3)
}

function consoleLog(string, url) {
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";
  const bgCyan = "\x1b[46m";
  const white = "\x1b[37m";

  console.log("\n");

  console.log(yellow + "MIDDLEWARE " + string + reset);
  console.log("\n");
  console.log(yellow + "rewrite -> " + url + reset);
  console.log("\n");
  console.log(
    bgCyan +
      white +
      "------------------------------------------------------------------------------------------------------------" +
      reset
  );

  console.log("\n");
}
