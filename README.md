# Projeto Spotify

Esse projeto é uma interface baseada no design do Spotify. Utilizei os elementos que estavam no proprio site.


## Tecnologias usadas

Utilizei React com Typescript, criando o projeto com o Vite e usando o Tailwind CSS, junto com alguns elementos da biblioteca DaisyUI.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode fazer o download e instalá-lo [aqui](https://nodejs.org/).

2. Instale as dependências do Tailwind CSS, PostCSS e Autoprefixer executando o seguinte comando no terminal:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Inicialize o arquivo de configuração do Tailwind CSS executando o seguinte comando:

   ```bash
   npx tailwindcss init -p
   ```

4. Depois adicione essas linhas no index.css

   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Instale a biblioteca DaisyUI executando o seguinte comando:

   ```bash
   npm i -D daisyui@latest
   ```

6. Instale os ícones do React executando o seguinte comando:

   ```bash
   npm install react-icons --save
   ```

7. Por fim, instale todas as dependências do projeto executando:

   ```bash
   npm install
   ```

8. Certifique que o arquvio `tailwind.config.js` esteja da seguinte forma:

   ```bash
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [require("daisyui")],
   }
   ```

9. Após a instalação, inicie o servidor de desenvolvimento executando:

   ```bash
   npm run dev
   ```

## Atualizações futuras

O site já está responsivo em grande parte, porém pretendo melhorar alguns aspectos.

## Link do projeto na nuvem

https://spotify-black-ten.vercel.app/

