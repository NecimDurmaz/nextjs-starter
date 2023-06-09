//publıc klasoru altındakı bookıngparam dan json formatındakı verıyı cekıyoruz
// "use client";
// import { cookies } from "next/headers";

// addEventListener("fetch", (event) => {
//   // event.respondWith(handleRequest(event["request"]));
// });
const apiUrl = "http://localhost:3005/";

export async function getLink() {
  let resp = await fetch("https://postman-echo.com/post", {
    method: "POST",
    body: JSON.stringify({
      color: "blue",
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  let final = await resp.json();
  console.log(final);
  // final = JSON.parse(final);

  return final;
}
export async function getData(hotelId: number) {
  debugger;
  let resp = await fetch(apiUrl + "param?HOTELID=" + hotelId);

  let final = await resp.json();
  // final = JSON.parse(final);
  debugger;

  return final;
}
export async function getDataBooking() {
  debugger;
  let resp = await fetch("https://dummyjson.com/products");
  let final = await resp.json();
  debugger;

  return final;
}

// export const runtime = "edge";

// export async function GET(request: Request) {
//   const cookieStore = cookies();
//   const token = cookieStore.get("token");

//   return new Response("Hello, Next.js!", {
//     status: 200,
//     headers: { "Set-Cookie": `token=${token}` },
//   });
// }

// async function handleRequest(request: any) {
//   // API isteğini burada gerçekleştirin
//   const response = await fetch("https://your-api.com/your-endpoint", request);

//   // Yanıtı önbelleğe alın
//   // const cache = caches.default;
//   // cache.put(request, response.clone());

//   return response;
// }
