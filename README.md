# cdlp-dev-junior-teste

## Este projeto é parte de um processo seletivo para uma vaga para dev junior

## Stacks e Observações

- Front-End:

  Decidi por usar o NextJS para o front pois é o que tenho focado em me aprofundar atualmente, como o projeto é bem simples, não foi usado 100% do que o next oferece. O Front tem uma função de login básica, não gostei de deixar somente um usuario então optei por colocar uma senha.
  
- Back-end:

 A stack pedida no processo seletivo foi Django, mas como não estava concorrendo para a vaga de back, decidi por fazer um simples com express e node, que já tenho familiaridade, para mostrar interesse e meus conhecimentos no back-end.
 
 ## Documentação no postman das rotas do back-end:
- https://go.postman.co/workspace/My-Workspace~911c1026-49f5-4d25-8d01-70ca4b57ccb4/collection/20287582-2109404f-5fe7-4999-85f2-c05f0ef4c731?action=share&creator=20287582

# Como Testar:

## O projeto está totalmente configurado para deploy com o docker, então basta rodar os comandos respectivamente:

- docker-compose build
- docker-compose up

## Se você não tiver docker:

### O projeto depende de um banco de dados mysql, então é nescessário ter um rodando na porta 3306, user root, pass root

- Clone o repositorio => git clone https://github.com/Felipe6090/cdlp-dev-junior-teste.git

- abra um terminal bash ou de sua preferencia nas pastas back-end/web
- => npm i

### Agora somente no terminal web:

- => npm run build
- => npm run start

### Somente no terminal back-end:

- => npx prisma generate
- => npx prisma migrate dev --name initial_migration
- => npx prisma migrate deploy
- => npm run dev
