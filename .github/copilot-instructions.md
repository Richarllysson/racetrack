# Copilot instructions for Racetrack Physics

## Project
- The application is an educational physics experience in Brazilian Portuguese.
- `index.html` contains the HTML, CSS, and vanilla JavaScript for Campaign, Sandbox, Impact Lab, Teacher Mode, and the Learning Center.
- `racetrack-professor-beta.html` is the preserved reference for the original Teacher Mode and Learning Center integration. Do not replace the active application with it.
- The project has no framework or build system. Check for existing validation options before adding tools or dependencies.

## Implementation
- Read `CLAUDE.md` and inspect the relevant code and DOM/event dependencies before editing.
- Prefer focused changes in `index.html`; preserve all three game modes and the existing Teacher Mode IDs and behavior.
- Keep physics, displayed values, units, explanations, and graphs consistent. Convert interface angles from degrees before trigonometric calculations.
- Validate numeric inputs and handle `NaN`, infinities, zero denominators, and invalid domains explicitly.
- Keep the Sandbox expression parser allowlisted. Never use `eval` or `new Function`.
- Use `textContent` for dynamic text. Do not introduce untrusted content through `innerHTML`.
- Avoid duplicate event listeners, competing animation loops, and controls left disabled after failures.
- Keep the interface responsive and accessible, including touch controls and clear status feedback.
- Guided activities should expose their objective, investigative question, parameters, procedure, model assumptions, and discussion prompts.
- Snapshot prediction parameters at experiment start. Never attach a hypothesis to a run with different mode, question, or parameters; clearly report stale hypotheses.
- Show relative error only when mathematically defined, and compare or overlay historical graph series only when the plotted units are compatible.
- When a simulation is running, prevent changes to its physics controls or ensure recorded parameters and predictions come from the captured run configuration.

## Persistence
- Preserve the Laboratory key `racetrackPhysics.labProgress.v4` and its existing migration behavior.
- Preserve the Learning Center key `racetrackPhysics.learningHistory.v1` and its 50-experiment limit.
- Clearing Learning Center history must not clear Laboratory progress, and vice versa.
- Handle storage failures without preventing basic gameplay; report failures using the project's established feedback or logging.

## Validation
- Run the smallest relevant checks available; the project may require manual browser verification instead of automated tests.
- For changes to the Learning Center, check prediction recording, guided experiments, live and saved graphs, history selection/comparison, clearing, and reload behavior.
- For Teacher Mode changes, check activation/deactivation, its visual indicator, hidden score/shop elements, and preservation of gameplay data.
- Report exactly which checks were performed and note any limitations.
