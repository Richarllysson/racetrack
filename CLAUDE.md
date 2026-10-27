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

## 5. Integridade física e matemática

A correção física é prioritária. Não altere fórmulas apenas para produzir um resultado visualmente conveniente.

Movimento Uniforme:
d = v × t

Movimento Uniformemente Variado, com velocidade inicial nula:
d = 1/2 × a × t²

Lançamento oblíquo, desprezando a resistência do ar:
Vx = V0 × cos(θ)
Vy = V0 × sen(θ)
x(t) = Vx × t
y(t) = y0 + Vy × t - 1/2 × g × t²

Regras:
- As fórmulas acima dependem das hipóteses indicadas.
- O código atual utiliza unidades didáticas próprias na Campanha e no Sandbox; não presuma que todos os valores desses modos representam metros ou segundos.
- No Laboratório de Impacto, preserve a coerência entre unidades, gravidade, velocidade, ângulo, tempo, alcance e altura.
- A interface recebe os ângulos em graus. Preserve a conversão para radianos nos cálculos trigonométricos.
- Ao alterar a física das pistas curvas, considere a inclinação, a gravidade, o atrito, a curvatura e o comprimento de arco.
- Mantenha as explicações didáticas, os valores calculados e as animações coerentes entre si.
- Verifique valores inválidos, divisões por zero, NaN, Infinity e limites numéricos.
- Não apresente um modelo simplificado como uma simulação física completa ou exata.

## 6. Interface e experiência do usuário

- O idioma padrão da interface é português brasileiro (pt-BR).
- Preserve a identidade visual escura, a hierarquia de informações e a consistência entre os componentes.
- Mantenha o layout responsivo para computadores e dispositivos móveis.
- Preserve a usabilidade dos controles por toque, especialmente sobre os canvases.
- Forneça feedback claro para ações, erros, sucessos e estados de carregamento.
- Evite alterações desnecessárias nos textos e na organização das telas.

Os IDs HTML são utilizados diretamente pelo JavaScript. Antes de renomear ou remover um ID, procure todas as suas referências e atualize os pontos dependentes.

Ao alterar animações, evite múltiplos loops concorrentes e preserve o controle de estado das simulações.

## 7. Persistência de dados

A persistência atual do Laboratório utiliza a chave:
racetrackPhysics.labProgress.v4

O código também contém migração de versões anteriores:
- racetrackPhysics.labProgress.v3
- racetrack-physics-lab-v1

Não altere ou remova essas chaves, a estrutura dos dados ou a lógica de migração sem necessidade explícita.

Ao ampliar o progresso salvo:
- Preserve os dados existentes.
- Defina valores padrão válidos.
- Valide os dados carregados.
- Trate falhas do LocalStorage sem interromper a aplicação.
- Não apague o progresso do usuário durante uma atualização normal.

Se for necessário mudar o esquema, implemente uma migração compatível com as versões anteriores.

## 8. Expressões matemáticas e segurança

O Sandbox compila expressões matemáticas por meio de new Function.

Não trate a substituição de texto como uma barreira de segurança suficiente. Não amplie inadvertidamente as expressões executáveis nem permita que entradas externas ou não confiáveis sejam executadas.

Ao modificar esse mecanismo:
- Preserve a validação de entradas e dos parâmetros numéricos.
- Trate erros de expressão sem interromper a aplicação.
- Considere um parser matemático seguro com operadores e funções permitidos explicitamente, especialmente antes de expor essa funcionalidade a conteúdo externo.

Evite inserir conteúdo dinâmico não confiável diretamente em innerHTML. Prefira textContent quando o conteúdo for apenas texto.

## 9. Procedimento de trabalho

Antes de implementar:
1. Identifique o comportamento atual e os trechos envolvidos.
2. Verifique os efeitos sobre os outros modos e sobre os dados persistidos.
3. Para alterações grandes, apresente um plano curto antes de modificar o código.

Depois de implementar:
1. Revise as alterações para detectar regressões.
2. Execute os testes disponíveis, se existirem.
3. Faça verificações manuais dos fluxos afetados.
4. Informe os arquivos alterados, o comportamento esperado e os testes realmente executados.
5. Declare explicitamente qualquer limitação ou verificação que não pôde ser realizada.

Não invente comandos de teste ou resultados de execução. Não afirme que algo foi testado se isso não aconteceu.

## 10. Verificação funcional

Quando houver alterações relevantes, verifique os fluxos afetados:

- Campanha: ajustar parâmetros, registrar previsões, executar testes, avançar fases e desbloquear descobertas.
- Sandbox: alternar modos, gerar pistas válidas, rejeitar entradas inválidas e atualizar as simulações.
- Laboratório: ajustar ângulo e velocidade, lançar, repetir, avançar desafios e conferir pontuação.
- Persistência: recarregar a aplicação e verificar a manutenção do progresso.
- Interface: conferir o comportamento em telas grandes e pequenas.

A profundidade dos testes deve ser proporcional ao impacto da mudança.

## 11. Prioridades

Em caso de conflito entre decisões de implementação, priorize nesta ordem:

1. Correção física e matemática.
2. Preservação dos dados e das funcionalidades existentes.
3. Estabilidade e segurança.
4. Clareza e manutenção do código.
5. Experiência educacional e usabilidade.
6. Melhorias visuais e otimizações adicionais.
