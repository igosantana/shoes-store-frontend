# Loja de Tênis

É um projeto e-commerce de uma loja de tênis, inspirada na loja da [nike](https://www.nike.com/), onde o usuário pode ver os produtos na página principal. Ainda no menu o usuário poderá escolher a categoria específica na qual desejar. Ao clicar no produto o usuário será redirecionado para página detalhada do produto, podendo escolher o seu tamanho e também podendo visualizar mais detalhes do mesmo, como imagens no lado esquerdo e uma breve descrição do tênis escolhido.

Assim, se o usuário gostar do modelo ele pode enviar o produto para o carrinho. No carrinho o usuário pode escolher a quantidade, tamanho ou se preferir pode remover o produto do carrinho.

Logo após clicar em chekout o usuário será redirecionado para uma página onde poderá realizar o pagamento do produto. Finalizando a compra o usuário será redirecionado para uma página de sucesso ou falha se houver algum impedimento.

## Ferramentas

- Nextjs com typescript
  - React-icons para os ícones
  - React-carousel para o carrosel
- Tailwind para a estilização
- Axios para http request
- Redux com Redux Toolkit para a funcionalidade do carrinho
- Stripe para a página de pagamento dos produtos
- Cypress para testes de integração End-to-End

## Para rodar localmente

Após instalar as dependências:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Deploy no Vercel

[Loja](https://shoes-store-frontend.vercel.app/)
