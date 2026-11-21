angular.module('ucsalApp')
  .service('NoticiasService', function () {
    var CATEGORIAS = ['Notícia', 'Evento'];

    var publicacoes = [
      {
        id: 1,
        titulo: 'Prazo de rematrícula para 2027.1',
        data: '2026-11-18',
        categoria: 'Notícia',
        imagem: 'img/rematricula.svg',
        resumo: 'A rematrícula on-line para o semestre 2027.1 acontece de 01 a 15 de dezembro.',
        conteudo: 'A Secretaria Geral de Cursos informa que a rematrícula on-line para o semestre 2027.1 ' +
          'estará disponível de 01 a 15 de dezembro de 2026 no Portal do Aluno. Para efetivar a rematrícula, ' +
          'o estudante deve estar com as mensalidades em dia e aceitar o contrato de prestação de serviços. ' +
          'Após o prazo, a solicitação poderá ser feita presencialmente nos campi de Pituaçu e Federação, ' +
          'sujeita à disponibilidade de vagas nas turmas.'
      },
      {
        id: 2,
        titulo: 'Edital de Iniciação Científica 2027',
        data: '2026-11-10',
        categoria: 'Notícia',
        imagem: 'img/iniciacao-cientifica.svg',
        resumo: 'Inscrições abertas para bolsas de iniciação científica e tecnológica.',
        conteudo: 'A Pró-Reitoria de Pesquisa e Pós-Graduação publicou o edital do Programa de Iniciação ' +
          'Científica e Tecnológica 2027. Podem participar estudantes regularmente matriculados a partir do ' +
          'segundo semestre, com projeto vinculado a um professor orientador. As inscrições seguem até ' +
          '12 de dezembro e o resultado será divulgado em fevereiro.'
      },
      {
        id: 3,
        titulo: 'Biblioteca com horário estendido nas provas',
        data: '2026-11-05',
        categoria: 'Notícia',
        imagem: 'img/biblioteca.svg',
        resumo: 'Durante o período de avaliações finais a biblioteca funcionará até as 22h.',
        conteudo: 'Para apoiar os estudantes no período de avaliações finais, as bibliotecas dos campi de ' +
          'Pituaçu e Federação funcionarão em horário estendido, de segunda a sexta, das 7h às 22h, e aos ' +
          'sábados das 8h às 14h, até o encerramento do semestre letivo.'
      },
      {
        id: 4,
        titulo: 'SEMOC 2026 - Semana de Mobilização Científica',
        data: '2026-10-20',
        categoria: 'Evento',
        imagem: 'img/semoc.svg',
        resumo: 'A UCSal realiza mais uma edição da SEMOC com palestras, oficinas e apresentações de trabalhos.',
        conteudo: 'A Semana de Mobilização Científica (SEMOC) reúne estudantes, professores e pesquisadores ' +
          'em palestras, mesas-redondas, oficinas e apresentações de trabalhos acadêmicos. Os alunos de ' +
          'Engenharia de Software podem submeter projetos desenvolvidos nas disciplinas e contabilizar ' +
          'horas complementares com a participação.'
      },
      {
        id: 5,
        titulo: 'UCSal na Maratona de Programação',
        data: '2026-09-12',
        categoria: 'Evento',
        imagem: 'img/maratona.svg',
        resumo: 'Times da Escola de Tecnologias representam a UCSal na fase regional da maratona.',
        conteudo: 'Três times formados por estudantes da Escola de Tecnologias representaram a UCSal na ' +
          'fase regional da Maratona de Programação. Os treinos acontecem semanalmente no laboratório do ' +
          'campus de Pituaçu e estão abertos a todos os estudantes interessados em programação competitiva.'
      },
      {
        id: 6,
        titulo: 'Projeto de extensão leva tecnologia às escolas',
        data: '2026-08-28',
        categoria: 'Evento',
        imagem: 'img/extensao.svg',
        resumo: 'Estudantes ministram oficinas de lógica de programação para alunos da rede pública.',
        conteudo: 'O projeto de extensão da Escola de Tecnologias promove oficinas de lógica de programação ' +
          'e introdução à computação para estudantes de escolas públicas de Salvador. Os alunos voluntários ' +
          'recebem certificado de horas de extensão e acompanhamento de professores do curso.'
      }
    ];

    this.listarCategorias = function () {
      return CATEGORIAS;
    };

    this.listarTodas = function () {
      return publicacoes;
    };

    this.buscarPorId = function (id) {
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === Number(id)) {
          return publicacoes[i];
        }
      }
      return null;
    };
  });
