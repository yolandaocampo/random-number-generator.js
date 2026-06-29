# 🎰 Sorteador de Números Aleatórios / Random Number Generator

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🇧🇷 Português

### 📝 Sobre o Projeto

Este é um projeto de um **Sorteador de Números** desenvolvido durante meus estudos de JavaScript e Front-End. O objetivo principal foi aplicar lógica de programação para sorteios e criar uma experiência de usuário (UX) segura e fluida, blindando a aplicação contra erros de input.

### 🚀 Funcionalidades & Validações Criadas

- **Sorteio Sem Repetição:** Garante que os números sorteados sejam únicos dentro do intervalo.
- **Validação de Intervalo:** O sistema impede o sorteio se o número inicial for maior ou igual ao número final.
- **Proteção de Layout (Overflow):** Os números sorteados ficam contidos em uma área com barra de rolagem estilizada, impedindo que os elementos da tela se movam.
- **Feedback Visual Pró (Shake effect):** Quando ocorre um erro, o input afetado ganha uma borda vermelha e uma animação de "tremida", dispensando alertas invasivos.
- **Controle de Estado dos Botões:** O botão de sortear é travado após o clique, forçando o uso do botão reiniciar para evitar loops ou bugs no jogo.

---

## 🇺🇸 English

### 📝 About the Project

This is a **Random Number Generator** project developed during my JavaScript and Front-End studies. The main goal was to apply programming logic for random selection while creating a secure and fluid user experience (UX) by safeguarding the application against input errors.

### 🚀 Features & Validations Created

- **Unique Numbers:** Ensures that the drawn numbers are unique within the chosen range.
- **Range Validation:** The system blocks the drawing if the starting number is greater than or equal to the ending number.
- **Layout Protection (Overflow):** The drawn numbers are kept inside a custom scrollable container, preventing page elements from shifting.
- **Pro Visual Feedback (Shake Effect):** When an error occurs, the input field turns red and plays a "shake" animation, replacing intrusive alert pop-ups.
- **Button State Control:** The "Draw" button is disabled after execution, forcing the user to click "Restart" to prevent application bugs.

---

## 🛠️ Como rodar o projeto / How to run the project

1. Clone este repositório / Clone this repository:
   ```bash
   git clone [https://github.com/SEU-USUARIO/random-number-generator.js.git](https://github.com/SEU-USUARIO/random-number-generator.js.git)
   ```

---

## 🎓 Créditos / Credits

### 🇧🇷 Português

- **Base do Projeto:** Este projeto foi inicialmente desenvolvido como parte do curso de lógica de programação da **Alura**.
- **Minhas Contribuições (Além do curso):**
  - Criação da lógica de validação matemática avançada para evitar loops infinitos caso os intervalos de números fossem inválidos ou menores que a quantidade pedida.
  - Implementação da interface estática (utilizando CSS externo) para impedir o deslocamento de elementos na tela ao exibir os resultados.
  - Substituição de alertas pop-ups nativos (`alert`) por um efeito visual moderno de vibração (_shake effect_) e bordas vermelhas nos campos com erro.
  - Otimização do fluxo de estados dos botões (trava total do botão de sorteio até o reinício do jogo).

### 🇺🇸 English

- **Project Base:** This project was initially developed as part of the programming logic course by **Alura**.
- **My Contributions (Beyond the course):**
  - Created advanced mathematical validation logic to prevent infinite loops if the number ranges were invalid or smaller than the requested quantity.
  - Implemented a static interface layout (using external CSS) to prevent elements from shifting when displaying results.
  - Replaced native pop-up alerts (`alert`) with a modern visual "shake effect" and red borders on invalid fields.
  - Optimized button state workflow (completely disabling the draw button until the game is restarted).
