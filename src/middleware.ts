import { NextRequest, NextResponse } from "next/server";

// export const config = {
//   matcher: [
//     /*
//      * Match all paths except for:
//      * 1. /api routes
//      * 2. /_next (Next.js internals)
//      * 3. /examples (inside /public)
//      * 4. all root files inside /public (e.g. /favicon.ico)
//      */
//     "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
//   ],
// };

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
    url.pathname = `/`;
    return NextResponse.rewrite(url);
  } else if (currentHost == "home") {
    url.pathname = `/home`;
    return NextResponse.rewrite(url);
  }

  // rewrite root application to `/home` folder
  if (hostname === "localhost:3000" || hostname === "elektranext.online") {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  if (path === "/") {
    //
    //
    // http://necim.localhost:3000/
    console.log("hotel");
    url.pathname = `/sites/${currentHost}`;
    url.searchParams.set("site", currentHost);
    return NextResponse.rewrite(url); // http://necim.localhost:3000/sites/necim?site=necim
    //
    //
  } else if (path.split("/").length == 2) {
    //
    //
    // http://necim.localhost:3000/departman
    console.log("departman");
    url.pathname = `sites/${currentHost}/departments/${path.slice(1)}`;
    url.searchParams.set("site", currentHost);
    return NextResponse.rewrite(url); // http://necim.localhost:3000/sites/necim/departman?site=necim
    //
    //
  } else if (path.split("/").length == 3) {
    //
    //
    // http://necim.localhost:3000/departman/menu
    console.log("menu");
    var pathArray = path.slice(1).split("/");
    url.pathname = `sites/${currentHost}/departments/${pathArray[0]}/menus/${pathArray[1]}`;
    url.searchParams.set("site", currentHost);
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
}
