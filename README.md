# Bước 1: Tạo DynamoDB
Truy cập [Dynamo DB](https://ap-southeast-1.console.aws.amazon.com/dynamodbv2/home?region=ap-southeast-1#tables), chọn **Create table**.
![alt text](img/image.png)

Đặt các cài đặt sau:
- **Table name**: KhachHang.
- **Partition key**: ma.

Ấn **Create table**.
![alt text](img/image-2.png)

Hoàn thành tạo **Dynamo DB**.

# Bước 2: Tạo Lambda Function
## Tạo Lambda Layer
Bước này giúp ta có thể thêm các dependencies cần thiết của **Lambda Function**.

### Chuẩn bị mã nguồn cho **Layer**
Ta truy cập [trang Lambda Function](https://ap-southeast-1.console.aws.amazon.com/lambda/home?region=ap-southeast-1#/layers). Ta chọn **Create layer**.
 ![alt text](img/image-3.png)

Tùy vào môi trường ta dùng để code mà sẽ có cách thêm **layer** khác nhau. Ta có thể tham khảo thêm ở [trang này](https://docs.aws.amazon.com/lambda/latest/dg/packaging-layers.html). Ở dự án này, ta sẽ xử dùng nodejs để phát triển trên **Lambda Function**. <br>

Truy cập folder chứa mã nguồn của **Lambda Function**
Ta tạo một tệp mới tên là **nodejs** và sao chép tệp **node_modules** và đặt nó vào trong tệp **nodejs** vừa tạo. Sau đó ta nén lại thành file zip. Folder sẽ có dạng <br>
**nodejs.zip**
  * nodejs/
    * node_modules/
      * dependenccies1/
      * dependenccies2/
      * ...
      * dependencciesN/



Thế là hoàn thành bước đầu tiên.

### Tạo **layer**.
Ta quay lại trang trên. Ta chọn **Create layer**.

**Name**: ta đặt tên cho **layer**.<br>
**Upload**: ta chọn **Upload a .zip file** rồi ấn **Upload** và tải file zip trên lên.<br>
**Compatible architectures - optional**: ta chọn **x86_64**.<br>
**Compatible runtimes - optional**: ta chọn **Node.js 20.x**.<br>
Sau đó ta ấn **Create**.
![alt text](img/image-4.png)


## Tạo Lambda Funciton
Ta truy cập [trang Lambda Function](https://ap-southeast-1.console.aws.amazon.com/lambda/home?region=ap-southeast-1#/functions) và chọn **Create function**.
![alt text](img/image-5.png)

### Khởi tạo Function.
Chọn **Author from scratch**. <br>
**Function name**: ta đặt tên cho function.
**Runtime**: ta chọn **Node.js 20.x**.
**Architecture**: ta chọn **x86_64**. <br>
**Change default execution role**: chọn **Use an existing role** và chọn Admin (tự tạo trước).
![alt text](img/image-7.png)

### Chuẩn bị mã nguồn cho Function.
Ta ấn vào **Layers**, trang web sẽ điều hướng ta đến phần **Layers**. Ta chọn **Add a layer**. 
![alt text](img/image-8.png)
![alt text](img/image-9.png)

Ở đây, ta chọn **Custom layers**, chọn **layers** ta vừa tạo ban nãy. Chọn **version** đầu tiên. Sau đó chọn **Add**.
![alt text](img/image-10.png)

Ở phần trên, ta chọn **Upload from** và chọn **.zip file**. Sau đó ta chọn tệp .zip chứa mã nguồn của lambda function. 
![alt text](img/image-11.png)

# Bước 3: Tạo Amazon API Gateway
## Tạo Restful API
### Khởi tạo API
Truy cập [trang API Gateway](https://ap-southeast-1.console.aws.amazon.com/apigateway/main/precreate?region=ap-southeast-1), chọn **Build** ở **REST API**.
![alt text](img/image-12.png)

Chọn **New API**.<br>
**API name**: đặt tên cho API.<br>
**API endpoint type**: chọn **Regional**.<br>
Sau đó ấn **Create API**.
![alt text](img/image-13.png)

Ta sẽ có giao diện sau:
![alt text](img/image-14.png)


### Khởi tạo resource
Ta chọn **Create resource**. Chọn tên cho đường dẫn, ở đây ta đặt tên là *khach-hang*. Sau đó bật **CORS (Cross Origin Resource Sharing)**. Sau đó chọn **Create resource**.
![alt text](img/image-15.png)


### Khởi tạo method
Ở **thuoc-tinh**, ta chọn **Create method**.
![alt text](img/image-12.png)

Ta sử dụng các cài đặt sau:
- **Method type**: **GET** <br>
- **Integration type**: **Lambda function** <br>
- **Lambda function**: **Lambda Function** tạo ở bước trước. <br>
- **Integration timeout**: giữ nguyên. <br>
- **Method request settings**: giữ nguyên. <br>
- **URL query string parameters**: giữ nguyên. <br>
- **HTTP request headers**: giữ nguyên. <br>
- **Request body**: giữ nguyên. <br>

Sau đó chọn **Create method**.
![alt text](img/image-16.png)

Ta chọn **Get** ở phần **/thuoc-tinh**, chọn **Integration request**, chọn Edit.
![alt text](img/image-12.png)

Thay đổi ở:<br>
- **Request body passthrough**: chọn **When there are no templates defined (recommended)**.<br>
- **Mapping templates**:
  1. Chọn **Add mapping template**.
  2. **Content type**: **application/json**.
  3. **Generate template**: **Method request passthrough**.<br>

Sau đó ấn **Save**.
![alt text](img/image-17.png)

Ấn **Test**, kết quả chạy ra như thế này thì thành công:
![alt text](img/image-18.png)

```
{"body":[],"message":"Success"}
```

Làm tương tự với các **Method** **PUT** , **POST**, **DELETE**. Sau khi xong, ta sẽ có giao diện:
![alt text](img/image-19.png)

Sau đó ta chọn **/khach-hang**, chọn **Enable CORS**.
![alt text](img/image-20.png)

Cài đặt:
- **Access-Control-Allow-Methods**: ta chọn hết.
- **Additional settings**
  - **Access-Control-Allow-Credentials**: chọn cái này.

Sau đó, ta ấn **Save**.
![alt text](img/image-21.png)

Về trang chính, ta ấn **Deploy API**. <br>
- Ở **Stage**, chọn **\*New stage\***.
- **Stage name**: đặt tên mình muốn.

![alt text](img/image-22.png)

Hoàn thành ta sẽ có như dưới. Ta copy Invoke URL và đặt nó vào trong dự án code.
![alt text](img/image-23.png)

# Bước 4: Tạo S3 Bucket
## Tạo S3 bucket
Vào [trang S3](https://ap-southeast-1.console.aws.amazon.com/s3/get-started?region=ap-southeast-1) để tạo một S3 bucket mới. Chọn **Create bucket**.
![alt text](img/image-104.png)

Các cài đặt ta sử dụng:
- **Bucket name**: userID-\<tên bucket\> (688567306327-dynamo).
- **Object Ownership**: **ACLs disabled (recommended)**.
- **Block Public Access settings for this bucket**: tắt **Block all public access**.

Các cái không đề cập thì sẽ giữ nguyên.
![alt text](img/image-24.png)
![alt text](img/image-25.png)
![alt text](img/image-26.png)
![alt text](img/image-27.png)

Sau khi tạo xong, ta truy cập vào bucket.
![alt text](img/image-28.png)

Chọn **Upload** và tải code trang web lên trên bucket.
![alt text](img/image-29.png)

Sau khi ấn upload và tải tệp tin lên, ta ấn **Upload**:
![alt text](img/image-30.png)

Sau khi tải xongn, ta vào phần **Properties**, kéo xuống cuối và chọn **Static website hosting**. Chọn **Edit**
![alt text](img/image-31.png)

Sau đó, ta để các cài đặt sau:
- **Static website hosting**: chọn **Enable**.
- **Hosting type**: **Host a static website**.
- **Index document**: **index.html**
- **Error document**: **index.html**

Sau đó ấn **Save changed**.
![alt text](img/image-32.png)


Sang **Permissions**, ta tìm **Bucket policy**, Ấn **Edit**.
![alt text](img/image-33.png)

Ta điền code ở dưới rồi ấn **Save changes**

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Principal": "*",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::userID-dynamo/*"
      ]
    }
  ]
}
```

Sau bước trên, ta có thể truy cập trang web thông qua url cung cấp ở chỗ **Properties**, **Static website hosting**
![alt text](img/image-34.png)

# Bước 5: Tạo CloudFront
Truy cập [CloudFront](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=ap-southeast-1#/welcome) và ấn **Create a CloudFront distribution**.
![alt text](img/image-35.png)

Đặt các cài đặt sau:
- **Origin domain**: `userID-dynamo.s3.ap-southeast-1.amazonaws.com`
- **Origin access**: `Origin access control settings (recommended)`
  - **Create new OAC**
- **Enable Origin Shield**: `Yes` - `ap-southeast-1`

![alt text](img/image-36.png)
![alt text](img/image-37.png)
![alt text](img/image-38.png)

- **Default cache behavior**:
  - **Viewer protocol policy**: `Redirect HTTP to HTTPS`
  - **Allowed HTTP methods**: `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`

![alt text](img/image-39.png)
![alt text](img/image-40.png)

- **Web Application Firewall (WAF)**: phụ thuộc vào tùy chọn bản thân.

![alt text](img/image-41.png)

- **Settings**:
  - **Price class**: `Use all edge locations (best performance)`
  - **Supported HTTP versions**: `HTTP/2` và `HTTP/3`

![alt text](img/image-42.png)

Sau đó, ta chọn **Copy policy** ở **The S3 bucket policy needs to be updated** và cập nhật nó ở **S3**.
![alt text](img/image-43.png)

Chọn **Error pages**, chọn **Create custom error response**
![alt text](img/image-44.png)

Cài đặt:
![alt text](img/image-45.png)

Thế là hoàn thành tất cả các bước thiết lập **cloudfront**