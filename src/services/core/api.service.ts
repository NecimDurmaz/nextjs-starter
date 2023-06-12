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
let API_URL: "http://localhost:3004";

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
