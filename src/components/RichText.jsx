/**
 * RichText.jsx
 *
 * SECURITY: Safe replacement for dangerouslySetInnerHTML.
 *
 * The original RankDetail.jsx used dangerouslySetInnerHTML with a regex
 * that constructed HTML strings from data values. While the data is
 * currently static and developer-controlled, the pattern is inherently
 * unsafe: if the data source ever becomes dynamic (CMS, API, database)
 * it becomes a direct XSS injection vector.
 *
 * This component parses Minecraft command syntax (/command) and renders
 * them as styled <code> elements via JSX — never via innerHTML — so
 * no user-controlled or external content can inject executable HTML.
 *
 * Usage:  <RichText text="Access /wb and /condense commands." />
 */

import React from 'react';

/** Matches /word patterns (Minecraft slash commands). */
const COMMAND_REGEX = /(\/([\w]+))/g;

/**
 * Renders text with /commands highlighted as <code> elements.
 * The regex splits the string into safe text segments and command tokens.
 * No HTML string construction — pure JSX.
 *
 * @param {{ text: string }} props
 */
export default function RichText({ text }) {
  if (!text) return null;

  const parts = [];
  let lastIndex = 0;
  let match;

  COMMAND_REGEX.lastIndex = 0; // Reset stateful regex before use
  while ((match = COMMAND_REGEX.exec(text)) !== null) {
    // Push plain text segment before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Push the command as a safe JSX <code> element
    parts.push(
      <code key={match.index} className="inline-cmd">
        {match[1]}
      </code>
    );
    lastIndex = COMMAND_REGEX.lastIndex;
  }

  // Push any trailing plain text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
