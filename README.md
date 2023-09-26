# Webpack HTML+Bootstrap

Este projeto visa facilitar o início de novos projetos ao configurar o Webpack com HTML e Bootstrap.


### Instalação de Pacotes

Após baixar o projeto, é necessário instalar os pacotes. No diretório raiz do projeto, execute o seguinte comando:

```javascript
npm install
```


### Ambiente de Desenvolvimento

Após concluir a instalação dos pacotes, execute:

```javascript
npm run dev
```

Seu ambiente de desenvolvimento estará pronto. Abra o seguinte link no seu navegador: http://localhost:9000/ e comece a desenvolver seu projeto. 🚀

### Ambiente de Produção

Para gerar os arquivos de produção, basta executar:

```javascript
npm run build
```
Todos o contéudo do site será gerado na pasta `dist/`, com os arquivos minificados e imagens comprimidas, prontos para serem enviados ao servidor. 😀

Caso algum estilo não esteja sendo aplicado no `build`, pode ser que ele não tenha sido incluído no arquivo final pelo `PurgeCSSPlugin`. Para resolver isso, basta acrescentar as classes que não devem ser removidas do `build` no arquivo `webpack.prod.config`, na função `collectSafelist`.

### Requisitos

Para executar este projeto, você precisará ter instalados:

- Node.js
- npm
