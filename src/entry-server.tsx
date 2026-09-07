import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Build-time entry. scripts/prerender.mjs imports this, renders the app to a
 * static HTML string, and injects it into dist/index.html.
 *
 * This is what makes the site readable to crawlers that do not execute
 * JavaScript — which includes GPTBot, ClaudeBot and PerplexityBot. Nothing
 * here runs at request time; the output is a static file.
 */
export function render(): string {
  return renderToString(<App />);
}
