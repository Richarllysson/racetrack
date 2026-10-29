# TODO — Racetrack Physics

## Roteiro de engenharia (prioridade)
- [x] Extrair MU, MUV, passo de pista curva e lançamento oblíquo para `physics/kinematics.js`, sem DOM/Canvas e mantendo carregamento clássico via `file://`.
- [x] Adicionar testes reproduzíveis dos modelos cinemáticos e do catálogo pedagógico com `node:test`, incluindo lançamento vertical, queda de altura e entradas inválidas.
- [x] Executar `git status --short` e preservar as alterações existentes em `README.md`, `TODO.md`, `index.html`, `education/`, `physics/` e `tests/`; não descartar arquivos locais.
- [ ] Executar a suíte Node (`node --test tests/kinematics.test.cjs`); a validação de terminal está indisponível neste ambiente.
- [x] Extrair os roteiros do Modo Professor para dados pedagógicos sem duplicar equações; manter IDs e formatos de histórico existentes.
- [x] Verificar no navegador MU, MUV, passo de curva (atrito/limites), projétil, lançamento vertical, queda e rejeição de entradas inválidas.
- [x] Verificar no navegador os cinco roteiros e presets, a execução MUV e pista matemática curva, Campanha oblíqua, comparação A/B, conclusão após reload e limpeza isolada do histórico.
- [ ] Separar progressivamente o controle de simulação dos desenhos; definir cancelamento explícito e estados de execução para Campanha, Sandbox e Laboratório.
- [ ] Adicionar comparação A/B de execuções preservadas, com parâmetros, grandezas e unidades compatíveis.
- [ ] Inventariar e documentar os esquemas e migrações de persistência; acrescentar exportação/importação sem remover dados não reconhecidos.
- [ ] Medir renderização e cálculo antes de otimizar; avaliar cache de geometria e instrumentação de desempenho somente com evidência de custo.
- [ ] Ampliar testes de regressão para navegador, persistência antiga, navegação/cancelamento e conteúdo pedagógico.

## Auditoria técnica inicial
- `index.html` contém a interface e a maior parte do JavaScript; o projeto segue executável por HTML local, sem manifesto, com testes automatizados puros em `tests/kinematics.test.cjs` e sem suíte de navegador no repositório.
- A física de MU/MUV e lançamento oblíquo agora está isolada em funções puras. A simulação de pista curva ainda depende da geometria calculada e permanece no arquivo principal.
- Campanha, Sandbox, Laboratório, animações e UI mantêm seus próprios caminhos de `requestAnimationFrame`; padronizar o ciclo exige uma etapa separada para evitar regressões.
- As chaves de persistência local encontradas são `racetrackPhysics.labProgress.v4` (com leitura de migrações legadas) e `racetrackPhysics.learningHistory.v1` (limite de 50 registros).
- Há alterações de Modo Professor no estado de trabalho desta tarefa; nenhuma versão remota foi usada como fonte ou copiada sobre os arquivos locais.
- `git status --short` e `git diff --check` foram executados; o diff não contém erros de whitespace.

## Regressões de integração investigadas
- [x] Reproduzir tentativas na mesma fase da Campanha: duas falhas consecutivas mantiveram a fase e incrementaram tentativas; uma terceira tentativa acertou o alvo e habilitou a próxima fase.
- [x] Repetir tentativas no lançamento oblíquo, com o Modo Professor ligado e desligado, sem reinicialização da fase.
- [x] Comparar as funções da Campanha com `HEAD`: não foi encontrada chamada automática de `loadPhase()` na execução, e o callback da simulação mantém tentativa e progressão no mesmo fluxo. A causa relatada de reinicialização não foi reproduzida; não há causa confirmada.
- [x] Verificar persistência da Campanha no código: tentativas, pontuação e fases concluídas existem somente em memória; recarregar a página reinicia a Campanha. Não há persistência de Campanha implementada para preservar ou migrar.
- [x] Restaurar visualmente Vx, Vy e V na cena da Campanha usando o estado retornado pelo modelo compartilhado do projétil; atualizar os componentes durante a animação e ao ajustar os parâmetros.
- [x] Evitar troca silenciosa de fase ao carregar o roteiro de lançamento: reutilizar a fase oblíqua ativa; em outra fase/modo, pedir confirmação e informar que as tentativas serão reiniciadas.
- [x] Conferir que hipótese, alcance calculado, parâmetros registrados e amostras do gráfico refletem a mesma velocidade e ângulo executados.
- [x] Conferir que o Modo Professor não troca desafio procedural do Laboratório ao ativar/desativar; título, distância-alvo e gravidade permaneceram iguais.
- [ ] Executar `node --test tests/kinematics.test.cjs`; não foi possível porque `node` não está disponível nesta sessão. O executor de testes do VS Code também não descobriu testes para o arquivo.
- [ ] Diagnosticar a reinicialização relatada se puder ser reproduzida em outra configuração ou sequência de uso.

## Ajuste visual da mira e do rastro
- [x] Limitar a mira da Campanha a amostras cacheadas dos primeiros 0,6 s ou 18% do voo, mantendo o mesmo modelo e os vetores.
- [x] Durante o voo da Campanha, desenhar somente amostras capturadas pelo ciclo de execução; remover a previsão teórica ao iniciar e limitar o rastro a 360 amostras.
- [x] Manter o rastro do Laboratório a partir dos estados atualizados a cada quadro; não usar as amostras futuras pré-calculadas para desenhar o rastro nem para o gráfico ao vivo.
- [x] Permitir que o professor revele a previsão teórica completa da Campanha somente por controle explícito e após a tentativa; rotular como teórica, nunca como rastro real.
- [ ] Verificar visualmente no navegador as fases curtas e longas, a execução, o rastro no fim, a opção do professor e uma viewport estreita.

## Concluído nesta integração
- [x] Comparar a versão local com `racetrack-professor-beta.html` sem substituir o arquivo principal.
- [x] Integrar o Modo Professor original, preservando IDs, alternância, indicador visual e ocultação de pontuação/abas de loja.
- [x] Integrar o Centro de Aprendizagem: previsões, roteiros guiados, gráficos, explicações, histórico, comparação e limpeza independente.
- [x] Preservar as três áreas de jogo e adicionar as fases de lançamento oblíquo necessárias ao roteiro guiado.
- [x] Manter a persistência educacional em `racetrackPhysics.learningHistory.v1`, limitada a 50 experiências.
- [x] Validar expressões matemáticas com parser restrito, sem `eval` ou `new Function`.
- [x] Corrigir a exibição de previsões inválidas para evitar resultados `NaN`.
- [x] Conferir no navegador os fluxos de professor, Campanha, Sandbox MU/MUV/Matemático, Laboratório, previsão, gráfico, histórico e comparação.
- [x] Detalhar os roteiros com objetivo, pergunta, parâmetros, procedimento, modelo e questões para discussão.
- [x] Capturar modo, parâmetros e hipótese no início da simulação; sinalizar mudanças e não associar previsões desatualizadas.
- [x] Exibir erro relativo quando definido e comparar séries históricas somente com unidades compatíveis.
- [x] Ocultar pontuação, combos, meta de pontos e abas de loja no Modo Professor, mantendo os controles físicos.
- [x] Impedir a troca de roteiro durante uma simulação e validar o feedback sem pontuação/combos após um acerto no Laboratório em Modo Professor.
- [x] Confirmar no navegador que o Modo Professor esconde a pontuação e as abas da loja, sem alterar o progresso salvo durante os testes.

## Pendências de verificação
- [x] Conferir em viewport de 375 px a alternância entre modos e o Modo Professor, sem rolagem horizontal.
- [ ] Fazer uma revisão visual completa em telas pequenas e com interação por toque.
- [ ] Repetir a verificação de persistência em um perfil limpo e em um perfil com progresso previamente existente.
- [ ] Validar migração/abertura com dados reais de um perfil existente sem sobrescrever o armazenamento do usuário.
- [x] Eliminar solicitações 404 das imagens de skins ausentes no repositório, mantendo a renderização pelas cores de fallback já existentes.

## Critérios de manutenção
- Preservar o comportamento e as chaves de armazenamento existentes; não limpar o progresso do Laboratório ao limpar o histórico educacional.
- Ao alterar uma área, verificar os fluxos correspondentes descritos no `CLAUDE.md`.
- Como o projeto não possui suíte automatizada identificada, registrar claramente as verificações manuais executadas e suas limitações.

## Estabilidade do cenário e acesso ao Modo Professor
- [x] Fixar escala e origem horizontal do Canvas de projéteis por dimensões e geometria da fase; velocidade e ângulo recalculam apenas a prévia.
- [x] Ocultar o Centro de Aprendizagem e controles de demonstração fora do Modo Professor, mantendo o botão de ativação visível.
- [x] Usar `eduState.teacherMode` para proteger ações pedagógicas e preservar a escolha da demonstração ao desativar/reativar o modo.
- [x] Comparar visualmente velocidades mínima/máxima e ângulos baixo/intermediário/alto em duas fases oblíquas; confirmar lançador/alvo fixos, rastro observado e progressão para a fase seguinte.
- [x] Alternar o Modo Professor durante a execução sem mudar fase, parâmetros ou tentativa; confirmar ferramentas ao ligar/desligar e após recarga em viewport de 375 px.
- [x] Restaurar exatamente o histórico educacional e o progresso do Laboratório após os testes de lançamento.
