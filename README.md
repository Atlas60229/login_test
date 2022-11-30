# find_restaurant
Node.js + express框架下的試作品

## 內容:
* 登入檢驗及cookie試作

## 執行環境
Node.js: v18.12.0 <br>
express: v4.18.2 <br>
express-handlebars: v6.0.6 <br>
body-parser: v1.20.1 <br>
cookie-parser: v1.4.6<br>
dotenv: v16.0.3 <br>
mongoose: v6.7.2<br>
MongoDB<br>
Bootstrap 5.2.2<br>
Font-awesome: v6.2.0<br>
method-override: v3.0.0<br>


## 安裝:
1. 打開terminal並複製此專案 <br>
`git clone https://github.com/Atlas60229/login_test.git`

2. 開啟終端機(Terminal)，進入存放此專案的資料夾 <br>
`cd login_test`

3. 安裝 npm 套件 <br>
`npm install`

4. 安裝 nodemon 套件 <br>
`npm install -g nodemon`

5. 新增.env檔案並設置資料庫連線字串：<br>
`MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/restaurantSet?retryWrites=true&w=majority`

6. 啟用前先用 Terminal 輸入以下指令建立種子資料，看見seed created!代表建立成功。
`npm run seed`

7. 按ctrl + c 關閉後輸入以下指令啟動伺服器，執行 app.js 檔案<br>
`npm run dev` 或 `nodemon app.js`

8. 當 terminal 出現下列訊息表示，表示伺服器與資料庫已啟動並成功連結<br>
`success initiate Server`
`MongoDB connected!`

9. 開啟新網頁並在網址輸入http://localhost:3000/<br>

10. 關閉伺服器： ctrl + c <br>