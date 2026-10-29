# racetrack
# Racetrack Physics

**Racetrack Physics** is an educational physics platform that combines simulation, experimentation, and gamification to support the teaching and learning of introductory mechanics.

The project was designed as a teaching tool rather than a traditional game. It provides interactive environments where students can explore physical concepts through observation, prediction, testing, and problem-solving, either independently or with guidance from a teacher.

## Main Features

### Campaign Mode

A structured learning path that introduces physics concepts progressively through guided challenges and interactive activities.

### Sandbox Mode

A virtual laboratory where users can create custom tracks, experiment with mathematical functions, and observe how different physical parameters affect motion.

### Trajectory Laboratory

An infinite challenge mode focused on projectile motion. Players complete procedurally generated objectives, earn points, unlock cosmetic skins, and develop intuition about velocity, angle, gravity, and trajectory optimization.

### Teacher Mode and Learning Center

Teacher Mode turns the Learning Center into a classroom board for the full predict → experiment → discuss lesson cycle. The classroom tools stay hidden until the teacher explicitly activates the mode; the header control remains available to activate or deactivate it without resetting a phase or simulation. Teachers can load guided presets and scripts, use Campaign, Sandbox, or the Trajectory Laboratory as the active simulator, record a class prediction, inspect live time-series or projectile-trajectory graphs, compare predictions with calculated results, and save a conclusion with the selected experiment. Projectile aiming shows a cached short trajectory before launch; the Campaign and Laboratory draw the path from states observed during flight. The Campaign projectile canvas keeps its coordinate transform fixed for each phase geometry, independent of aim speed and angle, so only the preview and velocity vectors move while aiming. In Teacher Mode, an explicit control can reveal the full theoretical Campaign trajectory after a run, labeled separately from the real trail. Projectile lessons reuse the active Campaign projectile phase when possible; switching from another phase or mode requires confirmation. The Campaign canvas shows velocity components from the same projectile state used by the simulation. Competitive score and Laboratory store tabs are hidden while the simulations remain available. Educational history is stored separately from Laboratory progress in the browser.

Predictions are tied to the mode and parameter values captured for a run; changed settings are flagged rather than silently compared. Results include absolute error and relative error when defined. Guided activities provide an objective, investigative question, parameter setup, procedure, model assumptions, and discussion prompts. Historical graphs overlay two experiments only when the selected quantity has compatible units.

## Educational Objectives

Racetrack Physics aims to help students understand concepts such as:

* Uniform Motion (MU)
* Uniformly Accelerated Motion (MUV)
* Forces and Newton's Laws
* Friction
* Energy Conservation
* Projectile Motion
* Kinematics
* Mathematical Modeling of Motion

The platform encourages experimentation, hypothesis testing, and learning through trial and error instead of simple memorization.

## Teaching Applications

Racetrack Physics can be used:

* As a classroom support tool;
* During laboratory activities;
* In physics outreach projects;
* In teacher-training programs;
* In gamification-based learning experiences;
* As a virtual environment for guided exploration of mechanics concepts.

## Technologies

* HTML5
* CSS3
* JavaScript
* Canvas 2D
* LocalStorage

No external frameworks or libraries are required.

### Running and testing locally

Open `index.html` directly in a modern browser; the application continues to use classic scripts so local `file://` use does not require a development server. The shared, DOM-independent MU, MUV, curve-step, and projectile calculations live in `physics/kinematics.js`; the guided-lesson catalog is in `education/guides.js`. Both load before the application script.

With Node.js 18 or newer, run the dependency-free model tests from the repository root:

```sh
node --test tests/kinematics.test.cjs
```

To add a guided activity, add a fully described entry to `education/guides.js` (subject, objective, question, initial parameters, procedure, model assumptions/limitations, discussion prompts, simulator, and default prediction quantity), add its option to the lesson selector in `index.html`, and connect its preset in `eduLoadGuidedExperiment()`. Use the shared physics functions rather than copying equations into lesson data. Add a catalog assertion to `tests/kinematics.test.cjs`.

## Project Philosophy

**Campaign = Learn**

**Sandbox = Experiment**

**Laboratory = Master and Replay**

The goal is to transform physics learning into an interactive process where students actively investigate phenomena instead of only solving equations on paper.

## Português 🇧🇷

Racetrack Physics é uma plataforma educacional de Física que combina simulação, experimentação e gamificação para auxiliar o ensino e a aprendizagem de conceitos de Mecânica.

O projeto foi desenvolvido como uma ferramenta de apoio ao ensino, permitindo que estudantes explorem fenômenos físicos por meio de desafios interativos, ambientes de experimentação e atividades guiadas.

### Principais modos

🚗 **Campanha**
- Sequência progressiva de desafios educacionais.
- Introdução gradual aos conceitos de Física.

🧪 **Sandbox**
- Laboratório virtual para experimentação livre.
- Criação de pistas matemáticas a partir de funções.
- Exploração de parâmetros físicos.

🎯 **Laboratório de Trajetórias**
- Modo infinito baseado em movimento oblíquo.
- Desafios gerados proceduralmente.
- Sistema de pontuação, combos e skins.
- Aprendizagem por tentativa e erro.

🎓 **Modo Professor e Centro de Aprendizagem**
- O Modo Professor organiza a aula em três etapas: prever, experimentar e discutir; suas ferramentas ficam ocultas até a ativação explícita pelo botão do cabeçalho.
- Roteiros e presets ajudam a planejar perguntas, parâmetros, procedimentos, hipóteses do modelo e questões para a turma.
- Campanha, Sandbox e Laboratório de Trajetórias permanecem disponíveis como simuladores integrados à aula.
- Gráficos ao vivo incluem séries temporais e a trajetória y(x) para lançamentos oblíquos; o painel resume previsão, resultado, diferença e métricas principais.
- Nas fases oblíquas da Campanha, o enquadramento do Canvas permanece fixo para cada geometria da fase ao ajustar velocidade ou ângulo.
- Conclusões podem ser registradas junto à experiência selecionada no histórico.
- Pontuação competitiva e abas da loja do Laboratório ficam ocultas sem desativar as simulações.
- Registre previsões numéricas associadas ao modo e aos parâmetros, e compare-as com os resultados da Campanha, do Sandbox e do Laboratório.
- Veja erro absoluto e erro relativo quando definido; alterações de parâmetros são sinalizadas para evitar comparações indevidas.
- Use roteiros com objetivo, pergunta investigativa, procedimento, hipóteses do modelo e questões para discussão.
- Consulte gráficos em Canvas e compare séries históricas quando as grandezas tiverem unidades compatíveis.
- Consulte explicações e histórico de até 50 experiências.
- O histórico educacional e o progresso do Laboratório são armazenados separadamente.

### Conceitos abordados

- Movimento Uniforme (MU)
- Movimento Uniformemente Variado (MUV)
- Leis de Newton
- Atrito
- Energia Mecânica
- Movimento Oblíquo
- Cinemática
- Modelagem Matemática

### Filosofia do projeto

**Campanha = Aprender**

**Sandbox = Experimentar**

**Laboratório = Dominar e Rejogar**

O objetivo é transformar o aprendizado de Física em um processo ativo de investigação, permitindo que o estudante observe, formule hipóteses, teste ideias e compreenda os fenômenos físicos de forma interativa.
