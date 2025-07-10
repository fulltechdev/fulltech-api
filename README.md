# Fulltech API

API da Fulltech com integração ao Google Gemini para processamento de mensagens de chat.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- Zod
- Google Gemini API

## Configuração

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

4. Obtenha uma chave de API do Google Gemini em [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

5. Adicione sua chave de API no arquivo `.env`:

```
API_KEY=sua_chave_api_do_gemini_aqui
```

## Executando o projeto

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

## Endpoints

### POST /chat

Envia uma mensagem para processamento pelo modelo Gemini.

**Corpo da requisição:**

```json
{
  "message": "Sua mensagem aqui"
}
```

**Resposta:**

```json
{
  "message": "Sua mensagem aqui",
  "response": "Resposta gerada pelo modelo Gemini"
}
```
