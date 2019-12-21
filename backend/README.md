# ADONIS JS

A aplicação é um projeto de app gerenciador de academia, o **Gympoint**.

# 1. Autenticação
- Os Administradores podem se autenticar na aplicação utilizando e-mail e senha.

# 2 Cadastro de alunos
- Alunos são mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura.
- O cadastro de alunos só pode ser feito por administradores autenticados na aplicação.
- O aluno não pode se autenticar no sistema, ou seja, não possui senha.


### Funcionalidades do administrador

#### 1. Gestão de planos

O Administrador pode cadastrar planos para matrícula de alunos, o plano deve possuir os seguintes campos:

- title (nome do plano);
- duration (duração em número de meses);
- price (preço mensal do plano);
- created_at;
- updated_at;


#### 2. Gestão de matrículas

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

#### 1. Checkins

Quando o aluno chega na academia o mesmo realiza um check-in apenas informando seu ID de cadastro (ID do banco de dados);

Esse check-in serve para monitorar quantas vezes o usuário frequentou a academia na semana.

A tabela de `checkins` possui os campos:

- student_id (referência ao aluno);
- created_at;
- updated_at;

O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.
