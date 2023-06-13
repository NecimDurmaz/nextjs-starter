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
export async function postRequestFake(request: string) {
  try {
    let res = await fetch(`http://localhost:3004/${request}`, {
      method: "GET",
    });

    return res.json();
  } catch (error) {
    error = new Error(error);
    throw error;
  }
}

export async function getHotelList() {
  debugger;
  const hotelList = [
    {
      site: "necim",
      hotelId: "1234",
      hotelName: "Necim Hotel",
      primaryColor: "#22A699",
    },
    {
      site: "tolga",
      hotelId: "1235",
      hotelName: "Tolga Hotel",
      primaryColor: "#F2BE22",
    },
    {
      site: "mehmet",
      hotelId: "1236",
      hotelName: "Mehmet Hotel",
      primaryColor: "#F29727",
    },
  ];

  var raw = "This is expected to be sent back as part of response body.";

  const a = await fetch("https://postman-echo.com/post", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Content-Type": "application/json",
      "Postman-Token": "8b3553d8-b87b-47cc-8838-1c1849ff327f",
      mode: "no-cors",
    },
    body: JSON.stringify({
      hotelList,
    }),
  });
  debugger;

  console.log(a);
}
