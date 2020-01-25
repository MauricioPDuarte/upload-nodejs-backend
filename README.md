<h1 align="center">Upload de imagens - Node.js e ReactJS</h1>
<p align="center">
  Upload de imagens utilizando Node.js e ReactJS, fornecido pela Rocketseat 🚀.
</p>
<br>

![Semana Omnistack](https://github.com/MauricioPDuarte/upload-nodejs-backend/blob/master/Gif.gif)

<br>
<br>

## Construido com 

* [Node.js](https://nodejs.org/en/) - Um interpretador JavaScript runtime construído sobre o Chrome's V8 JavaScript engine.
* [ReactJs](https://pt-br.reactjs.org/) - Uma biblioteca JavaScript para criar interfaces de usuário
* [React Native](https://facebook.github.io/react-native/) - Usada para desenvolver apps para Android e IOS de forma nativa.
* [NPM](https://facebook.github.io/react-native/) - Gerenciador de pacotes do Node.js
* [Yarn](https://facebook.github.io/react-native/) - Gerenciamento de dependência rápido, confiável e seguro.

<br>

**Dependencies**

- Aws-sdk
- Cors
- Dotenv
- Express
- Mongoose
- Morgan
- Multer
- Multer-s3

**Dev dependencies**

- Nodemon

## Configuração

> To get started...

### Step 1

- **Option 1**
    ```shell
        $ git clone https://github.com/MauricioPDuarte/upload-nodejs-backend.git
        $ yarn install
     ```

- **Option 2**
    ```shell
        $ git clone https://github.com/MauricioPDuarte/upload-nodejs-backend.git
        $ npm install
     ```

### Step 2

- Crie um arquivo na pasta raiz do projeto com o nome `.env`.
- Configure com seus dados, optando utilizar o armazenamento das imagens localmente ou na AWS S3.
```shell
APP_URL=http://localhost:3000

STORAGE_TYPE=local //local ou s3

MONGO_URL=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
```
### Step 3
```shell
$ yarn dev
```

