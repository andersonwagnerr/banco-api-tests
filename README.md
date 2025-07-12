# banco-api-tests

Testes automatizados para a API REST do projeto [banco-api](https://github.com/juliodelimas/banco-api).

## 🎯 Objetivo

O propósito deste projeto é validar automaticamente os endpoints da API REST do `banco-api`, contribuindo que as operações de criação, leitura, atualização e exclusão de dados funcionem conforme o esperado.

## 🛠️ Stack / Tecnologias

- Node.js  
- Mocha – framework de testes  
- Supertest – testes HTTP  
- Chai – assertions  
- dotenv – carregamento de variáveis de ambiente  
- mochawesome – relatório em HTML dos testes  

## 📁 Estrutura de diretórios

```
.
├── .env                  # configurações de ambiente (não versionado)
├── package.json         # dependências e scripts
├── package-lock.json
├── src/
│   └── tests/           # arquivos de testes (Mocha + Supertest + Chai)
├── mochawesome/         # saída de relatórios HTML (gerado após testes)
└── README.md            # este arquivo
```

## ⚙️ Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

- **BASE_URL**: URL base da API a ser testada (ajuste conforme o ambiente).

## 🚀 Como rodar os testes

### Instalar dependências  
```bash
npm install
```

### Executar todos os testes  
```bash
npm test
```
ou  
```bash
mocha --reporter mochawesome
```

Isso executará os testes e gerará relatórios no diretório `mochawesome/`.

## 📊 Relatórios gerados

Após a execução, será criado um relatório visual em HTML dentro do diretório `mochawesome/`.  
Abra o arquivo `mochawesome/mochawesome.html` no seu navegador para conferir.

## 📚 Documentação das dependências

- [Mocha](https://mochajs.org/) – framework de testes  
- [Supertest](https://www.npmjs.com/package/supertest) – testes de API HTTP  
- [Chai](https://www.chaijs.com/) – biblioteca de assertions  
- [dotenv](https://www.npmjs.com/package/dotenv) – variáveis de ambiente  
- [mochawesome](https://www.npmjs.com/package/mochawesome) – relatório em HTML

---

## 🔧 Scripts disponíveis (em `package.json`)

```json
"scripts": {
  "test": "mocha --reporter mochawesome",
  "mochawesome-report": "npx mochawesome-reporter ./mochawesome/mochawesome.json"
}
```

- **npm test** – executa os testes e gera relatório  
- **npm run mochawesome-report** – (opcional) gera relatório legível a partir do JSON, se configurado

---

## ✅ Fluxo de uso

1. Clone o repositório:  
   ```bash
   git clone https://github.com/andersonwagnerr/banco-api-tests.git
   cd banco-api-tests
   ```

2. Instale dependências:  
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` conforme explicado.

4. Execute os testes e abra o relatório.

---

Qualquer dúvida ou sugestão, fique à vontade para abrir uma issue ou contribuir com melhorias!

---

*Desenvolvido por Anderson Wagner*
