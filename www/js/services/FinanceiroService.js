angular.module('ucsalApp')
  .service('FinanceiroService', function () {
    var STATUS = {
      PAGA: 'Paga',
      A_PAGAR: 'A Pagar'
    };

    var VALOR_PARCELA = 1389.90;

    var mensalidadesPorSemestre = {
      '2025.2': [
        { mes: 'Julho/2025',    vencimento: '2025-07-10', valor: VALOR_PARCELA, status: STATUS.PAGA },
        { mes: 'Agosto/2025',   vencimento: '2025-08-10', valor: VALOR_PARCELA, status: STATUS.PAGA },
        { mes: 'Setembro/2025', vencimento: '2025-09-10', valor: VALOR_PARCELA, status: STATUS.PAGA },
        { mes: 'Outubro/2025',  vencimento: '2025-10-10', valor: VALOR_PARCELA, status: STATUS.PAGA },
        { mes: 'Novembro/2025', vencimento: '2025-11-10', valor: VALOR_PARCELA, status: STATUS.PAGA },
        { mes: 'Dezembro/2025', vencimento: '2025-12-10', valor: VALOR_PARCELA, status: STATUS.PAGA }
      ],
      '2026.1': [
        { mes: 'Janeiro/2026',   vencimento: '2026-01-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Fevereiro/2026', vencimento: '2026-02-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Março/2026',     vencimento: '2026-03-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Abril/2026',     vencimento: '2026-04-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Maio/2026',      vencimento: '2026-05-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Junho/2026',     vencimento: '2026-06-10', valor: 1459.90, status: STATUS.PAGA }
      ],
      '2026.2': [
        { mes: 'Julho/2026',    vencimento: '2026-07-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Agosto/2026',   vencimento: '2026-08-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Setembro/2026', vencimento: '2026-09-10', valor: 1459.90, status: STATUS.PAGA },
        { mes: 'Outubro/2026',  vencimento: '2026-10-10', valor: 1459.90, status: STATUS.PAGA },
        {
          mes: 'Novembro/2026', vencimento: '2026-11-10', valor: 1459.90, status: STATUS.A_PAGAR,
          linhaDigitavel: '23793.38128 60082.645102 41000.063307 8 98320000145990'
        },
        {
          mes: 'Dezembro/2026', vencimento: '2026-12-10', valor: 1459.90, status: STATUS.A_PAGAR,
          linhaDigitavel: '23793.38128 60082.645102 41000.063315 3 98620000145990'
        }
      ]
    };

    this.STATUS = STATUS;

    this.listarSemestres = function () {
      return Object.keys(mensalidadesPorSemestre).sort().reverse();
    };

    this.listarMensalidades = function (semestre) {
      return mensalidadesPorSemestre[semestre] || [];
    };
  });
