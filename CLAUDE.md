# CLAUDE.md — Racetrack Physics

## Objetivo do projeto
Racetrack Physics é uma aplicação web educacional de Física baseada em experimentação, previsões, simulações e gamificação. A interface está em português brasileiro (pt-BR). Priorize correção física, clareza didática, estabilidade e acessibilidade.

## Fonte de verdade e arquitetura atual
- Use os arquivos presentes no diretório de trabalho como fonte de verdade; não presuma que o GitHub contém a edição local mais recente.
- A aplicação atual está concentrada em `index.html`, que reúne HTML, CSS e JavaScript.
- A implementação usa JavaScript vanilla, Canvas 2D, `requestAnimationFrame` e `localStorage`.
- Não presuma a existência de `package.json`, framework, processo de build ou testes automatizados. Verifique antes de executar comandos.
- Não divida `index.html`, introduza dependências nem reestruture toda a aplicação sem uma justificativa concreta.

## Modos e funcionalidades
- **Campanha:** fases de Movimento Uniforme (MU), Movimento Uniformemente Variado (MUV), pistas curvas e movimento oblíquo; inclui pontuação e Caderno de Descobertas.
- **Sandbox:** modos MU, MUV e Matemático, com parâmetros ajustáveis e geração de pista a partir de expressão matemática.
- **Laboratório de Impacto:** lançamento oblíquo, desafios procedurais, tacadas, pontuação, combos, skins, loja e estatísticas.
- **Centro de Aprendizagem:** registro de previsões, roteiros guiados, gráficos em Canvas, explicações e comparação/histórico de experiências.
- **Modo professor (beta):** botão `#eduTeacherToggle`, estado em `eduState.teacherMode` e classe CSS `teacher-mode`. O Centro de Aprendizagem e os controles de demonstração ficam ocultos quando o modo está desligado; ao ativá-lo, aparecem o painel pedagógico, o indicador visual e as opções docentes. A Campanha oblíqua mantém o enquadramento do Canvas fixo por geometria da fase, independente da velocidade e do ângulo de mira. Pontuação e abas de loja/skins/estatísticas do Laboratório são ocultadas no modo ativo. O estado do modo professor não é persistido entre recargas.

## Regras de implementação
- Inspecione as funções envolvidas, as referências de IDs e os caminhos de execução antes de editar.
- Prefira correções localizadas e pequenas. Não reescreva todo `index.html` para corrigir um defeito específico.
- Preserve a Campanha, o Sandbox, o Laboratório e o Centro de Aprendizagem ao modificar qualquer um deles.
- Antes de renomear/remover IDs, procure todas as referências no HTML, CSS e JavaScript.
- Evite duplicar listeners, iniciar loops de animação concorrentes ou deixar controles desabilitados após falhas.
- Use `textContent` para texto dinâmico quando HTML não for necessário. Não introduza HTML não confiável via `innerHTML`.
- Mantenha layout responsivo, controles utilizáveis por toque, rótulos compreensíveis e feedback acessível (`aria-live` quando apropriado).
- Não afirme que testes foram executados se isso não aconteceu. Descreva limitações quando não houver ambiente de teste disponível.

## Física, matemática e unidades
- Preserve as hipóteses e as unidades declaradas em cada modo. Não trate automaticamente as unidades didáticas da Campanha/Sandbox como metros e segundos.
- Movimento uniforme: `d = v·t`, sob velocidade constante.
- MUV com velocidade inicial nula e aceleração constante: `d = ½at²`.
- Lançamento oblíquo ideal, sem resistência do ar: `Vx = V₀ cos(θ)`, `Vy = V₀ sen(θ) − gt`, `x = Vx·t` e `y = y₀ + V₀ sen(θ)·t − ½gt²`.
- A interface fornece ângulos em graus; mantenha a conversão para radianos nos cálculos trigonométricos.
- A simulação de pistas curvas é um modelo simplificado. Não a descreva como um modelo completo de dinâmica de veículos reais.
- Verifique consistência entre valores numéricos, unidades, explicações e gráficos; trate `NaN`, `Infinity`, entradas inválidas e divisões por zero.

## Expressões matemáticas do Sandbox
- A versão atual usa `compileTrackExpression()` para analisar expressões com um parser matemático restrito.
- Preserve esse modelo de lista permitida; não substitua por `eval` ou `new Function`.
- Ao alterá-lo, teste operadores, precedência, parênteses, multiplicação implícita (ex.: `2x`), constantes permitidas (`x`, `pi`, `e`), funções autorizadas e expressões inválidas/não finitas.
- Valide domínio, resolução e demais parâmetros numéricos antes de gerar uma pista.

## Persistência: não perder dados existentes
- O progresso do Laboratório usa `racetrackPhysics.labProgress.v4` e contém migração de `racetrackPhysics.labProgress.v3` e `racetrack-physics-lab-v1`.
- O histórico educacional usa `racetrackPhysics.learningHistory.v1` e mantém até 50 experiências.
- Não renomeie chaves, descarte campos ou altere formatos persistidos sem necessidade. Se o esquema mudar, implemente migração retrocompatível.
- Trate falhas do `localStorage` sem impedir o uso básico da aplicação.
- Limpar o histórico educacional não deve apagar o progresso do Laboratório, e vice-versa.

## Fluxo de trabalho recomendado
1. Confirme que está no diretório correto e leia este arquivo e o `README.md`.
2. Inspecione o código atual antes de propor mudanças; identifique dependências e efeitos colaterais.
3. Para tarefas amplas, faça primeiro uma auditoria sem editar e apresente achados priorizados por impacto, evidência no código, forma de reproduzir e correção sugerida.
4. Implemente melhorias em etapas pequenas, mantendo o comportamento existente salvo quando a tarefa exigir mudança.
5. Revise as diferenças e execute verificações disponíveis. Se não houver testes automatizados, forneça passos claros de teste manual.
6. Ao terminar, informe arquivos modificados, melhorias realizadas, verificações realmente executadas e riscos ou pontos que ainda precisam ser conferidos.

## Checklist de regressão
Quando a mudança afetar a área correspondente, verificar:
- Campanha: fases MU/MUV/curvas/projéteis, previsões, execução, progressão e Caderno de Descobertas.
- Sandbox: troca MU/MUV/Matemático, presets, validação de expressões e execução.
- Laboratório: lançamento, erro/acerto, tentar novamente, próximo desafio, loja/skins e persistência do progresso.
- Centro de Aprendizagem: registrar previsão, detectar mudança de parâmetros, executar experimento, alternar séries do gráfico, selecionar/comparar histórico, limpar histórico e recarregar a página.
- Modo professor: ligar/desligar, indicador visual, elementos ocultos e funcionamento dos controles; confirmar que pontuação e dados não são apagados só por ativar o modo.
- Layout em telas grandes e estreitas, incluindo controles por toque.
