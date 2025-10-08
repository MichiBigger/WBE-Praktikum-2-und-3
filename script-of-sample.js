function scriptOfSample(ch, scripts) {
  if (typeof ch !== 'string' || ch.length === 0) return 'unknown';
  const cp = ch.codePointAt(0);
  for (const s of scripts) {
    for (const [from, to] of s.ranges) {
      if (cp >= from && cp < to) return s.name;
    }
  }
  return 'unknown';
}

module.exports = { scriptOfSample };
