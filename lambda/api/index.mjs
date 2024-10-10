import { v4 } from 'uuid'


/**
 * 
 * @param { {
"body-json" : {},
"params" : {
"path" : {
    }
    ,"querystring" : {
    }
    ,"header" : {
    }
    },
"stage-variables" : {
},
"context" : {
    "account-id" : "688567306327",
    "api-id" : "7dc790ywi7",
    "api-key" : "test-invoke-api-key",
    "authorizer-principal-id" : "",
    "caller" : "688567306327",
    "cognito-authentication-provider" : "",
    "cognito-authentication-type" : "",
    "cognito-identity-id" : "",
    "cognito-identity-pool-id" : "",
    "http-method" : "DELETE",
    "stage" : "test-invoke-stage",
    "source-ip" : "test-invoke-source-ip",
    "user" : "688567306327",
    "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
    "user-arn" : "arn:aws:iam::688567306327:root",
    "request-id" : "35c490a3-a1a7-4ab3-8ee9-deed8796df2e",
    "resource-id" : "y6axew",
    "resource-path" : "/khach-hang"
    }
}} event 
 * @returns { { body: [], message: "" } }
 */
async function nhaCungCapRoute(event) {
  return { body: [], message: "nhaCungCap", event }
}

/**
 * 
 * @param { {
"body-json" : {},
"params" : {
"path" : {
    }
    ,"querystring" : {
    }
    ,"header" : {
    }
    },
"stage-variables" : {
},
"context" : {
    "account-id" : "688567306327",
    "api-id" : "7dc790ywi7",
    "api-key" : "test-invoke-api-key",
    "authorizer-principal-id" : "",
    "caller" : "688567306327",
    "cognito-authentication-provider" : "",
    "cognito-authentication-type" : "",
    "cognito-identity-id" : "",
    "cognito-identity-pool-id" : "",
    "http-method" : "DELETE",
    "stage" : "test-invoke-stage",
    "source-ip" : "test-invoke-source-ip",
    "user" : "688567306327",
    "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
    "user-arn" : "arn:aws:iam::688567306327:root",
    "request-id" : "35c490a3-a1a7-4ab3-8ee9-deed8796df2e",
    "resource-id" : "y6axew",
    "resource-path" : "/khach-hang"
    }
}} event 
 * @returns { { body: [], message: "" } }
 */
async function khachHangRoute(event) {
  switch (event.context['http-method']) {
    case "GET":
      return {
        body: [
          { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
          { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
          { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
        ], message: "Success"
      }
    case "PUT":
      return {
        body: [{ "ma": v4(), "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },],
        message: "Success", event
      }
  }
  return { body: [], message: "Success" }
}


/**
 * 
 * @param { {
"body-json" : {},
"params" : {
"path" : {
    }
    ,"querystring" : {
    }
    ,"header" : {
    }
    },
"stage-variables" : {
},
"context" : {
    "account-id" : "688567306327",
    "api-id" : "7dc790ywi7",
    "api-key" : "test-invoke-api-key",
    "authorizer-principal-id" : "",
    "caller" : "688567306327",
    "cognito-authentication-provider" : "",
    "cognito-authentication-type" : "",
    "cognito-identity-id" : "",
    "cognito-identity-pool-id" : "",
    "http-method" : "DELETE",
    "stage" : "test-invoke-stage",
    "source-ip" : "test-invoke-source-ip",
    "user" : "688567306327",
    "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
    "user-arn" : "arn:aws:iam::688567306327:root",
    "request-id" : "35c490a3-a1a7-4ab3-8ee9-deed8796df2e",
    "resource-id" : "y6axew",
    "resource-path" : "/khach-hang"
    }
}} event 
 * @returns { { body: [], message: "" } }
 */
export const handler = async event => {
  // TODO implement
  switch (event.context['resource-path']) {
    case "/khach-hang":
      return await khachHangRoute(event);
    case "/nha-cung-cap":
      return await nhaCungCapRoute(event);
    default:
      return { body: [], message: "route not found" };
  }
};
