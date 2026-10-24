# CLAUDE.md — Racetrack Physics

## 1. Contexto do projeto

Racetrack Physics é uma aplicação web educacional que utiliza simulações interativas e gamificação para ensinar conceitos de Mecânica.

O objetivo é promover aprendizagem por experimentação, formulação de hipóteses, previsão de resultados e análise dos fenômenos físicos.

Toda nova funcionalidade deve preservar o caráter educacional do projeto.

## 2. Tecnologias e arquitetura atual

- HTML5, CSS3 e JavaScript vanilla.
- Canvas 2D para renderização das pistas e simulações.
- LocalStorage para persistência de progresso do usuário.
- requestAnimationFrame para animações.
- Não há framework ou dependência externa necessária para a implementação atual.

Estrutura atual:
- index.html: contém a interface HTML, o CSS e a lógica JavaScript.
- README.md: descrição do projeto, funcionalidades e objetivos educacionais.
- LICENSE: licença do projeto.
- CLAUDE.md: estas instruções.

Trabalhe com a estrutura existente. Não presuma que existem diretórios src/, testes automatizados, package.json ou ferramentas de build.

Não divida index.html em múltiplos arquivos nem introduza frameworks sem uma necessidade concreta e justificativa.

## 3. Funcionalidades principais

### Campanha

- Fases progressivas de aprendizagem.
- Movimento Uniforme (MU).
- Movimento Uniformemente Variado (MUV).
- Simulação de movimento em pistas curvas.
- Previsão de resultados, tentativas, pontuação e desbloqueio do Caderno de Descobertas.

### Sandbox

- Experimentação livre com parâmetros físicos.
- Modos de movimento uniforme e acelerado.
- Criação de pistas a partir de expressões matemáticas.
- Ajuste de domínio, resolução, atrito e gravidade.

### Laboratório de Impacto

- Simulação de lançamento oblíquo.
- Desafios com obstáculos e buracos gerados proceduralmente.
- Sistema de pontuação, moedas, combos e estatísticas.
- Loja, inventário e seleção de skins.
- Persistência do progresso.

Ao modificar uma funcionalidade, identifique suas dependências e evite afetar os demais modos.

## 4. Regras para alterações no código

- Leia o trecho relevante e suas chamadas antes de modificá-lo.
- Faça alterações pequenas e focadas na tarefa solicitada.
- Preserve as funcionalidades existentes, salvo quando a alteração exigir explicitamente uma mudança.
- Evite reformatar ou reescrever todo o arquivo para corrigir um problema localizado.
- Use nomes descritivos e mantenha a consistência com o código ao redor.
- Evite duplicação de lógica e efeitos colaterais desnecessários.
- Prefira reutilizar funções existentes quando isso preservar a clareza.
- Não crie abstrações ou sistemas genéricos sem necessidade concreta.
- Comente fórmulas físicas e decisões numéricas não triviais.
- Não adicione dependências sem explicar o benefício e o impacto.

