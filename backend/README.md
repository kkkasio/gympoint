# ADONIS JS

A aplicação é um projeto de app gerenciador de academia, o **Gympoint**.

# 1. Autenticação [x]

- Os Administradores podem se autenticar na aplicação utilizando e-mail e senha.

# 2 Cadastro de alunos [x]

- Alunos são mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.
- O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.
- O aluno não pode se autenticar no sistema, ou seja, não possui senha.

### Funcionalidades do administrador

#### 1. Gestão de planos [x]

O Administrador pode cadastrar planos para matrícula de alunos, o plano deve possuir os seguintes campos:

- title (nome do plano);
- duration (duração em número de meses);
- price (preço mensal do plano);
- created_at;
- updated_at;

[x] #### 2. Gestão de matrículas

Apesar do aluno estar cadastrado na plataforma, isso não significa que o mesmo tem uma matrícula ativa e que pode acessar a academia.
Nessa funcionalidade temos um cadastro de matrículas por aluno, a matrícula possui os campos:

- student_id (referência ao aluno);
- plan_id (referência ao plano);
- start_date (data de início da matrícula);
- end_date (date de término da matrícula);
- price (preço total calculado na data da matrícula);
- created_at;
- updated_at;

A **data de início** da matrícula deve ser escolhida pelo usuário.

Quando um aluno **realiza uma matrícula** ele recebe um e-mail com detalhes da sua inscrição na academia como plano, data de término, valor e uma mensagem de boas-vidas.

> Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

### Funcionalidades do aluno

#### 1. Checkins [x]

Quando o aluno chega na academia o mesmo realiza um check-in apenas informando seu ID de cadastro (ID do banco de dados);

Esse check-in serve para monitorar quantas vezes o usuário frequentou a academia na semana.

A tabela de `checkins` possui os campos:

- student_id (referência ao aluno);
- created_at;
- updated_at;

O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.

#### 2. Pedidos de auxílio []

O aluno pode criar pedidos de auxílio para a academia em relação a algum exercício, alimentação ou instrução qualquer;

A tabela `help_orders` deve conter os seguintes campos:

- student_id (referência ao aluno);
- question (pergunta do aluno em texto);
- answer (resposta da academia em texto);
- answer_at (data da resposta da academia);
- created_at;
- updated_at;

Crie uma rota para a academia listar todos pedidos de auxílio sem resposta;

Crie uma rota para o aluno cadastrar pedidos de auxílio apenas informando seu ID de cadastro (ID do banco de dados);

Exemplo de requisição: `POST https://gympoint.com/students/3/help-orders`

Crie uma rota para listar todos pedidos de auxílio de um usuário com base em seu ID de cadastro;

Exemplo de requisição: `GET https://gympoint.com/students/3/help-orders`

Crie uma rota para a academia responder um pedido de auxílio:

Exemplo de requisição: `POST https://gympoint.com/help-orders/1/answer`

Quando um pedido de auxílio for respondido, o aluno deve receber um e-mail da plataforma com a pergunta e resposta da academia;
