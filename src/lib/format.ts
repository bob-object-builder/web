export function format(query: string): string {
  const tokens = [];
  const MODIFIERS = ["unique", "index", "primary", "optional", "required"];

  // Add special keys for highlighting
  const DateKey = "@date";
  const TimeKey = "@time";
  const TimestampKey = "@now";
  const NullKey = "null";

  // Build regex pattern for keys
  const keyPattern = `(${[DateKey, TimeKey, TimestampKey, NullKey].join("|")})`;

  const regex = new RegExp(
    [
      "(#\\s.+)", // 1: comment
      '"([^"]*)"', // 2: string
      "\\b([0-9]+)\\b", // 3: number
      "\\b(table|get|new|delete|set|raw|group|if|or|asc|desc|nulls|first|last|limit|offset)\\b", // 4: keywords
      "\\b(unique|index|primary|optional)\\b", // 5: modifiers
      "\\b([a-z_][a-zA-Z0-9_]*)\\s+(int|int8|int16|int32|int64|float32|float64|string|string8|string16|string32|string64|text|blob|id|boolean|time|date|datetime|current|timestamp)\\b", // 6,7: field+type
      "([A-Z]\\w+)([A-Za-z\\s]+)", // 8,9: ClassName
      keyPattern, // 10: special keys
    ].join("|"),
    "g"
  );

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(query))) {
    const [full] = match;

    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: query.slice(lastIndex, match.index) });
    }

    tokens.push({ type: "match", value: full, groups: match.slice(1) });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < query.length) {
    tokens.push({ type: "text", value: query.slice(lastIndex) });
  }

  return tokens
    .map((t) => {
      if (t.type === "text") return t.value;

      const g = t.groups;
      if (!g) return t.value;

      // comment
      if (g[0]) return `<span class="text-gray-700">${g[0]}</span>`;

      // string
      if (g[1]) return `<span class="text-[#89ca79]">"${g[1]}"</span>`;

      // numbers
      if (g[2]) return `<span class="text-[#ffb45c]">${g[2]}</span>`;

      // keywords
      if (g[3]) return `<span class="text-[#ff6d00]">${g[3]}</span>`;

      // modifiers (unique, primary, etc.)
      if (g[4]) return `<span class="text-[#ff9500] italic">${g[4]}</span>`;

      // field + type
      if (g[5] && g[6])
        return `${g[5]} <span class="text-[#ff6d00] font-semibold">${g[6]}</span>`;

      // ClassName
      if (g[7] && g[8]) {
        const second = g[8].trim().toLowerCase();

        if (MODIFIERS.includes(second)) {
          return `${g[7]} <span class="text-[#ff9500] italic">${second}</span>`;
        }

        return `<span class="text-[#ffc67a] font-bold italic">${g[7]}</span><span class="text-[#ffc67a] italic">${g[8]}</span>`;
      }

      // special keys
      if (g[9]) {
        // Blue color for special keys
        return `<span class="text-[#40a9ff] font-semibold">${g[9]}</span>`;
      }

      return t.value;
    })
    .join("");
}

export default format;
