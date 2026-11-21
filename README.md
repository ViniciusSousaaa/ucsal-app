# Portal do Aluno UCSal

Protótipo do Portal do Aluno da UCSal feito com Ionic 1 e AngularJS. Não tem back-end: os dados de
alunos, notícias, eventos e mensalidades ficam mockados nos services, e o cadastro editado fica salvo
no localStorage.

## Como rodar

A pasta `www` precisa ser servida por HTTP, porque os templates são carregados por requisição.

No GitHub Codespaces ou localmente:

```bash
cd www
python3 -m http.server 8080
```

Depois abra `http://localhost:8080` (no Codespaces, pela aba **Ports**). No Windows pode ser `python`
em vez de `python3`.

## Login de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | 654321 |

## Telas

- **Login**: valida matrícula e senha no `AuthService` e não deixa enviar campos vazios.
- **Mural**: notícias e eventos em cards, com filtro por categoria e tela de detalhe no "Ler mais".
- **Atualização cadastral**: nome, matrícula e curso bloqueados; e-mail, telefone e endereço editáveis.
- **Financeiro**: mensalidades por semestre, com status Paga/A Pagar e cópia do código de barras.

## Estrutura

```
www/
├── css/style.css
├── img/
├── js/
│   ├── app.js
│   ├── controllers/
│   └── services/
├── templates/
└── index.html
```
