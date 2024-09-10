const sections = [
  {
    id: 1,
    title: "Insira alguns dados básicos",
    inputs: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo"
      },
      {
        id: 2,
        label: "E-mail",
        placeholder: "Digite seu e-mail"
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Digite sua senha",
        secureTextEntry: true
      },
      {
        id: 4,
        label: "Confirme sua senha",
        placeholder: "Digite sua senha novamente",
        secureTextEntry: true
      }
    ],
    checkbox: []
  },
  {
    id: 2,
    title: "Agora, mais alguns dados sobre você:",
    inputs: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Digite seu CEP"
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Digite o seu endereço"
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Número residendial"
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Qd. 16, Ap. 702..."
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 00000-0000"
      }
    ],
    checkbox: []
  },
  {
    id: 3,
    title: "Para finalizar, quais são os seus planos de saúde?",
    inputs: [],
    checkbox: [
      {
        id: 1,
        value: "Sulamérica"
      },
      {
        id: 2,
        value: "Unimed"
      },
      {
        id: 3,
        value: "Bradesco"
      },
      {
        id: 4,
        value: "Amil"
      },
      {
        id: 5,
        value: "Biosaúde"
      },
      {
        id: 6,
        value: "Biovida"
      },
      {
        id: 7,
        value: "Outros"
      },
      {
        id: 8,
        value: "Não tenho plano de saúde"
      }
    ]
  }
];

export { sections }