# cdlp-dev-junior-teste

# EN-US

## This project is part of a test for a position for junior dev

## Stacks and Notes

## Front-End:

   I decided to use NextJS for the front because that's what I've been focusing on currently, as the project is very simple, it wasn't used 100% of what next offers. Front has the basic login functions, I didn't like to leave only one user, so I chose to put a password, add, delete and edit a post.
   
## Back-End: 

The stack requested in the selection process was Django, but as I was in the processes just for front, I decided to make a simple api with express and node, which I'm already familiar with, to show interest and knowledge in the backend.
 
 ## Documentation in the postman of the backend routes:
- https://go.postman.co/workspace/My-Workspace~911c1026-49f5-4d25-8d01-70ca4b57ccb4/collection/20287582-2109404f-5fe7-4999-85f2-c05f0ef4c731?action=share&creator=20287582

### Things I would like to change:

- On the front, the performance is kind of strange that it doesn't update automatically, so this transition is kind of strange, I need to find a way to improve it

- It has many functions that can be in a file, as sugested in figma, an action´s paste, instead together with the component, which may be the first thing that changes in the next versions after the selection process

- Although refreshToken function it was on back, this is something I study in the back, but I still don't know very well how to implement on the front.

# How to Test:

## The project is fully configured to deploy with docker, so just run the commands:

- docker-compose build
- docker-compose up

## If you don't have docker:

### The project depends on a mysql database, so it is necessary to have one running on port 3306, user root, pass root

- Clone the repository => git clone https://github.com/Felipe6090/cdlp-dev-junior-teste.git

- open a bash terminal or your choice in the backend/web directorys
- => npm

### Now only in the web terminal:

- => npm run build
- => npm run start

### Only without backend terminal:

- => npx prisma generate
- => npx prisma migrate dev --name initial_migration
- => npx prisma migrate deploy
- => npm run dev
   
   

# PT-BR

## Este projeto é parte de um processo seletivo para uma vaga para dev júnior

## Stacks e Observações

## Front-End:

  Decidi por usar o NextJS para o front pois é o que tenho focado em me aprofundar atualmente, como o projeto é bem simples, não foi usado 100% do que o next oferece. O Front tem as funções de login básica, não gostei de deixar somente um usuário, então optei por colocar uma senha, adicionar, deletar e editar um post.
  
## Back-end:

 A stack pedida no processo seletivo foi Django, mas como não estava concorrendo para a vaga de back, decidi por fazer uma api simples com express e node, que já tenho familiaridade, para mostrar interesse e conhecimentos no back-end.
 
 ## Documentação no postman das rotas do back-end:
- https://go.postman.co/workspace/My-Workspace~911c1026-49f5-4d25-8d01-70ca4b57ccb4/collection/20287582-2109404f-5fe7-4999-85f2-c05f0ef4c731?action=share&creator=20287582

### Coisas que gostaria de mudar:

- No front a performace ta meio estranha por que não atualiza automaticamente, então fica meio estranho essa transição, preciso descrobrir uma maneira de melhorar isso
- 
- Tem muitas funções que poderia estar em um arquivo separado, ao inves de junto com o componente, essa talvez seja a primeira coisa que mude nas próximas versões após o processo seletivo
- 
- Apesar de ter no back-end, não foi implementada a função do refreshToken, isso é uma coisa que estudei no back, mas ainda não sei muito bem como fazer no front.

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
