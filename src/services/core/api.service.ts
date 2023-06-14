export class ApiResponse {
  DataTypes: Array<ApiDataTypeObject>;
  ResultSets: Array<any>;
}
interface SelectResponse {
  DataTypes: null;
  TotalCount: null;
  ResultSets: [
    [
      {
        TRANSACTIONSTATUS: number;
        ID: number;
        COSTPRICE: number;
        COSTCURRENCYCODE: string;
        FIRSTNAME: string;
        LASTNAME: string;
      }
    ]
  ];
  SQL: string;
}

interface BaseRequest<T> {
  Action: string;
  Object: string;
  Parameters: T;
}
export interface ApiDataTypeObject {
  HasDefault: boolean;
  IsNullable: boolean;
  Name: string;
  Type: string;
  IsComputed?: boolean;
  IsIdentity?: boolean;
  IsPrimaryKey?: boolean;
}
export class SaveContactRequest {
  HOTELID: number;
  PORTALID: number;
  EMAIL: string;
  PHONE: string;
  NOTES: string;
  ISPAYMENT: boolean;
  RESERVATIONREQUEST: string;
}

class RequestExchangeRate {
  public Action: string;
  public Object: string;
  public Parameters: {
    DATE: Date;
    TARGETCURRENCYID: number;
    BASECURRENCYID: number;
  };
}
class RequestFinishBasket {
  public Action: string;
  public Object: string;
  public Parameters: {
    DATA: string;
    CLOSECHECK: number;
    PRINTCHECK: number;
  };
}
let API_URL = "http://localhost:3004";
let POSTMAN_API_URL = "http://api.getpostman.com";

export async function postRequest(request: BaseRequest<any>) {
  try {
    let res = await fetch(`${API_URL}/${request.Object}`, {
      method: "POST",
      body: JSON.stringify(request),
    });

    return res.json();
  } catch (error) {
    error = new Error(error);
    throw error;
  }
}
export async function postRequestPostMAN(data: any) {
  var urlencoded = new URLSearchParams();

  var requestOptions = {
    method: "POST",
    body: urlencoded,
    redirect: "follow",
  };
  return await fetch("https://postman-echo.com/post", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((response) => {
      return JSON.parse(response).data;
    })
    .catch((error) => console.log("error", error));
}

export async function getHotelListPostMan() {
  const subdomains = [
    {
      site: "necim",
      hotelId: "1234",
      hotelName: "Necim Hotel",
      FAVICON:
        "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico",
      primaryColor: "#22A699",
    },
    {
      site: "tolga",
      hotelId: "1235",
      hotelName: "Tolga Hotel",
      FAVICON:
        "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
      primaryColor: "#F2BE22",
    },
    {
      site: "mehmet",
      hotelId: "1236",
      hotelName: "Mehmet Hotel",
      FAVICON:
        "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
      primaryColor: "#F29727",
    },
  ];
  const hotelList = await postRequestPostMAN(subdomains);
  return hotelList;
}
export async function getProductList() {
  const productList = [
    {
      site: "necim",
      department: "Konyaalti",
      menu: "Kahvalti",
      name: "Sucuklu Yumurta",
      description: "Sucuklu ve baharatlı lezzetli bir kahvalti seçeneği.",
      price: 25,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Lara",
      menu: "Izgara",
      name: "Tavuk Şiş",
      description: "Taze tavuk etinden hazırlanan nefis bir şiş yemeği.",
      price: 40,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Alanya",
      menu: "Aksam",
      name: "İrmik Helvası",
      description: "Geleneksel Türk mutfağının vazgeçilmez tatlilarından biri.",
      price: 15,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Kas",
      menu: "Ogle",
      name: "Mercimek Corbası",
      description: "Klasik ve besleyici bir Corba seçeneği.",
      price: 10,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Kalkan",
      menu: "Salata",
      name: "Yeşil Salata",
      description:
        "Taze yeşilliklerle hazırlanan hafif ve sağlıklı bir salata.",
      price: 20,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Konyaalti",
      menu: "Ogle",
      name: "Sigara Böreği",
      description: "Kıyır kıyır böreklerle lezzetli bir aperatif seçeneği.",
      price: 18,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Lara",
      menu: "Aksam",
      name: "Izgara Köfte",
      description: "Taze köfte ve sebzelerle hazırlanan nefis bir ana yemek.",
      price: 30,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Alanya",
      menu: "Tatli",
      name: "Sütlaç",
      description: "Geleneksel Türk sütlaç tatlisının enfes lezzeti.",
      price: 12,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Kas",
      menu: "Aksam",
      name: "Domates Corbası",
      description: "Taze domateslerle hazırlanan nefis bir Corba.",
      price: 10,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Kalkan",
      menu: "Ogle",
      name: "Cevizli Roka Salatası",
      description: "Taze roka yaprakları ve cevizle lezzetli bir salata.",
      price: 22,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Konyaalti",
      menu: "Atistirmalik",
      name: "Patates Kızartması",
      description:
        "Kıyır kıyır patates kızartmalarıyla nefis bir atıştırmalık.",
      price: 15,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Lara",
      menu: "Ogle",
      name: "Mantar Sote",
      description: "Taze mantarlarla hazırlanan lezzetli bir sote yemeği.",
      price: 28,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Alanya",
      menu: "Aksam",
      name: "Kadayıf",
      description: "Tatli ve şerbetli kadayıf tatlisının muhteşem tadı.",
      price: 18,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Kas",
      menu: "Corba",
      name: "Düğün Corbası",
      description: "Lezzetli ve doyurucu bir etli Corba seçeneği.",
      price: 12,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Kas",
      menu: "Yoresel",
      name: "Manti",
      description: "Lezzetli ve doyurucu bir etli Corba seçeneği.",
      price: 125,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Kas",
      menu: "Pizza",
      name: "Peynirli Pizza",
      description: "Lezzetli ve doyurucu bir etli Corba seçeneği.",
      price: 850,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Kalkan",
      menu: "Aksam",
      name: "Tabule Salatası",
      description:
        "Naneli ve taze sebzelerle zenginleştirilmiş sağlıklı bir salata.",
      price: 25,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Lara",
      menu: "Ogle",
      name: "Mantı",
      description:
        "Türk mutfağının vazgeçilmez lezzetlerinden biri olan mantı.",
      price: 35,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Alanya",
      menu: "Tatli",
      name: "Profiterol",
      description: "Kremalı ve çikolatalı profiterol tatlisının enfes lezzeti.",
      price: 20,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Kas",
      menu: "Ogle",
      name: "Ezogelin Corbası",
      description: "Nefis ve baharatlı bir Türk Corba klasiği.",
      price: 10,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Kalkan",
      menu: "Aksam",
      name: "Coban Salatası",
      description: "Taze sebzelerle hazırlanan geleneksel Türk salatası.",
      price: 20,
      currency: "TRY",
    },
    {
      site: "tolga",
      department: "Konyaalti",
      menu: "Ogle",
      name: "Peynir Tabak",
      description: "Çeşitli peynirlerle hazırlanan lezzetli bir atıştırmalık.",
      price: 18,
      currency: "TRY",
    },
    {
      site: "mehmet",
      department: "Lara",
      menu: "Aksam",
      name: "Balık Izgara",
      description: "Taze balıkların ızgarada pişirilmiş harika lezzeti.",
      price: 45,
      currency: "TRY",
    },
    {
      site: "necim",
      department: "Alanya",
      menu: "Ogle",
      name: "Süt Helvası",
      description: "Lezzetli ve hafif bir süt helvası tatlisı.",
      price: 14,
      currency: "TRY",
    },
  ];

  const productListResp = await postRequestPostMAN(productList);
  return productListResp;
}
