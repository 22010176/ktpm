
import { v4 } from 'uuid'
import { PutItemCommand, DynamoDBClient, ScanCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb'
// import { QueryCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'


const client = new DynamoDBClient({ region: "ap-southeast-1" })
// const docClient = DynamoDBDocumentClient.from(client)

function formatDate(date) {
  const month = date.getUTCMonth() + 1; // months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const pMonth = month.toString().padStart(2, "0");
  const pDay = day.toString().padStart(2, "0");
  return `${year}-${pMonth}-${pDay}`;
}
const khachHangDB = "KhachHang"
/**
 
{
  "sdt":{"S":"12323"},
  "ngayThamGia":{"S":"2024/10/10"},
  "ma":{"S":"cd46e9d9-9778-4499-a2af-9d653b891b51"},
  "diaChi":{"S":"fd"},
  "ngaySinh":{"S":"2023-12-01"},
  "email":{"S":"d"},
  "ten":{"S":"123"}
}
 */
function extractType(data) {
  const type = Object.keys(data)[0]
  switch (type) {
    case "N":
      return +data[type]
    default:
      return data[type]
  }
}
function processData(data) {
  return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, extractType(value)]))
}

async function nhaCungCapRoute(event) {
  return { body: [], message: "nhaCungCap", event }
}

async function khachHangRoute(event) {
  const body = event["body-json"];
  let result;
  switch (event.context['http-method']) {
    case "GET":
      result = await client.send(new ScanCommand({
        TableName: khachHangDB,
        ProjectionExpression: "ma, ten, ngaySinh, diaChi, email, sdt, ngayThamGia",
        FilterExpression: "trangThai = :tt",
        ExpressionAttributeValues: { ":tt": { "N": "1" } },
      }));
      return { body: result.Items.map(processData), message: "Success" }

    case "PUT":
      const id = v4();
      result = await client.send(new PutItemCommand({
        TableName: khachHangDB,
        Item: {
          ma: { S: id },
          ten: { S: body.ten },
          ngaySinh: { S: body.ngaySinh },
          diaChi: { S: body.diaChi },
          email: { S: body.email },
          sdt: { S: body.sdt },
          ngayThamGia: { S: formatDate(new Date()) },
          trangThai: { N: "1" }
        }
      }))
      return {
        body: [Object.assign(event['body-json'], { ma: id })],
        message: result.$metadata.httpStatusCode == 200 ? "Success" : "Fail",
        // event, result
      }

    case "POST":
      result = await client.send(new UpdateItemCommand({
        "ExpressionAttributeValues": {
          ":dc": { "S": body.diaChi },
          ":m": { "S": body.email },
          ":ns": { "S": body.ngaySinh },
          ":s": { "S": body.sdt },
          ":t": { "S": body.ten }
        },
        "Key": {
          "ma": { "S": body.ma },
        },
        "ReturnValues": "ALL_NEW",
        "TableName": khachHangDB,

        "UpdateExpression": "SET diaChi = :dc, email = :m, ngaySinh = :ns, sdt = :s, ten = :t"
      }));
      return {
        body: [processData(result.Attributes)],
        message: result.$metadata.httpStatusCode == 200 ? "Success" : "Fail",
        // result
      }

    case "DELETE":
      result = await client.send(new UpdateItemCommand({
        "ExpressionAttributeValues": {
          ":tt": { "N": "0" },
        },
        "Key": {
          "ma": { "S": body.ma },
        },
        "ReturnValues": "ALL_NEW",
        "TableName": khachHangDB,
        "UpdateExpression": "SET trangThai = :tt"
      }));
      return {
        body: [processData(result.Attributes)],
        message: result.$metadata.httpStatusCode == 200 ? "Success" : "Fail",
        // result
      }

  }
  return { body: [], message: "Fail. Path not round" }
}

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

handler({
  "body-json": {
    "ma": "816eea50-0d32-4369-8018-f15119e9da3e",
    "ten": "123333",
    "ngaySinh": "2023-01-01",
    "diaChi": "fdddd",
    "email": "33ddd3d",
    "sdt": "1233323",
    "ngayThamGia": "2025-1-01"
  },
  "params": {
    "path": {
    }
    , "querystring": {
    }
    , "header": {
    }
  },
  "stage-variables": {
  },
  "context": {
    "account-id": "688567306327",
    "api-id": "7dc790ywi7",
    "api-key": "test-invoke-api-key",
    "authorizer-principal-id": "",
    "caller": "688567306327",
    "cognito-authentication-provider": "",
    "cognito-authentication-type": "",
    "cognito-identity-id": "",
    "cognito-identity-pool-id": "",
    "http-method": "DELETE",
    "stage": "test-invoke-stage",
    "source-ip": "test-invoke-source-ip",
    "user": "688567306327",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
    "user-arn": "arn:aws:iam::688567306327:root",
    "request-id": "c452340f-79b5-4007-b5e7-6ec6fc7bf3e4",
    "resource-id": "y6axew",
    "resource-path": "/khach-hang"
  }
}).then(console.log)