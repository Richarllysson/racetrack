# TODO — Racetrack Physics

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
