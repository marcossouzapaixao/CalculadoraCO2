# 🍃 Calculadora de Emissão de CO2

Uma aplicação web interativa para calcular a emissão de carbono de diferentes tipos de transporte e descobrir formas de compensar sua pegada de carbono.

## 🎯 Objetivo

Conscientizar sobre o impacto ambiental dos diferentes meios de transporte e oferecer alternativas sustentáveis para neutralizar as emissões de CO2.

## ✨ Funcionalidades

- **Rotas Pré-Definidas**: Escolha entre 9 rotas populares entre cidades brasileiras com distâncias já calculadas
- **Rotas Personalizadas**: Defina sua própria origem, destino e distância
- **Seleção de Transporte**: Escolha entre 4 tipos de transporte:
  - 🚴 Bicicleta (0 kg CO2)
  - 🚌 Ônibus (0.089 kg CO2/km)
  - 🚗 Carro (0.207 kg CO2/km)
  - 🚚 Caminhão (0.097 kg CO2/km)

- **Cálculo de Emissão**: Calcula automaticamente a emissão de CO2 baseado no transporte escolhido
- **Comparativo de Emissões**: Visualiza como diferentes meios de transporte impactam o ambiente para a mesma distância
- **Compensação de Carbono**: Contribua para projetos sustentáveis:
  - 🌱 Árvores - R$ 50,00 por tonelada de CO2
  - 💧 Energia Renovável - R$ 35,00 por tonelada de CO2
  - 🏞️ Conservação - R$ 45,00 por tonelada de CO2
  - 🌍 Educação Ambiental - R$ 30,00 por tonelada de CO2

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `index.html` em seu navegador**
3. **Escolha uma rota**:
   - Selecione uma rota pré-definida, OU
   - Escolha "Rota Personalizada" e digite origem, destino e distância
4. **Selecione o tipo de transporte** clicando em um dos 4 botões
5. **Clique em "Calcular Emissão"**
6. **Visualize os resultados**:
   - Emissão total do seu trajeto
   - Comparativo com outros transportes
   - Opções de compensação de carbono
7. **(Opcional) Contribua** para um projeto de sustentabilidade

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos e modernos
- **JavaScript**: Lógica interativa e cálculos

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 💻 Desktop
- 📱 Tablets
- 📲 Smartphones

## 📋 Rotas Pré-Definidas

| Origem | Destino | Distância |
|--------|---------|-----------|
| São Paulo | Rio de Janeiro | 430 km |
| São Paulo | Belo Horizonte | 585 km |
| São Paulo | Curitiba | 408 km |
| São Paulo | Brasília | 1000 km |
| Rio de Janeiro | Brasília | 1170 km |
| Belo Horizonte | Brasília | 738 km |
| Curitiba | Porto Alegre | 710 km |
| São Paulo | Salvador | 1930 km |
| São Paulo | Manaus | 2840 km |

## 🧮 Fatores de Emissão

Os cálculos utilizam os seguintes fatores de emissão (em kg CO2 por quilômetro):

| Transporte | Emissão |
|------------|---------|
| Bicicleta | 0 kg CO2/km |
| Ônibus | 0.089 kg CO2/km |
| Carro | 0.207 kg CO2/km |
| Caminhão | 0.097 kg CO2/km |

## 📚 Exemplo de Uso

1. Selecione "São Paulo → Rio de Janeiro" (430 km)
2. Escolha o transporte "Carro"
3. Clique em "Calcular Emissão"
4. Resultado: **89.01 kg de CO2**
5. Na comparação, veja que a bicicleta emitiria **100% menos**
6. Contribua para neutralizar essa emissão

## 🎨 Design

- **Paleta de Cores**: Tons de verde para sustentabilidade
- **Typography**: Interface clara e legível
- **Animações**: Transições suaves e intuitivas
- **Acessibilidade**: Bem estruturado semanticamente

## 📄 Estrutura do Projeto

```
Calculadora/
├── index.html                  # Estrutura semântica HTML
├── css/
│   └── style.css              # Estilos CSS modernos com variáveis
├── js/
│   ├── routes-data.js         # Banco de dados de rotas brasileiras
│   ├── config.js              # Configuração e fatores de emissão
│   ├── calculator.js          # Lógica de cálculos
│   ├── ui.js                  # Gerenciador de UI e renderização
│   └── app.js                 # Inicialização e manipulação de eventos
├── README.md                  # Documentação
└── LICENSE                    # Licença MIT
```

## 🌍 Impacto Ambiental

Cada escolha conta! Ao usar a bicicleta em vez do carro:
- Economia de até **89,81 kg de CO2** em um trajeto de 430 km
- Redução de emissões de gases de efeito estufa
- Contribuição direta para a luta contra as mudanças climáticas

## 📝 Créditos

Desenvolvido por **Marcos Paixão** - Bootcamp DIO

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado livremente.

## 🤝 Contribuições

Sinta-se livre para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Adicionar mais rotas e transportes

## 📞 Contato

Para dúvidas ou sugestões, entre em contato!

---

**Juntos podemos fazer a diferença para o nosso planeta! 🌱**
