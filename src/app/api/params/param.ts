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
  // console.log(final);
  // final = JSON.parse(final);

  return final;
}
