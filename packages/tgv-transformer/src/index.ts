const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
const breakpointRegex = /(\w+):\(([^)]+)\)/g;
const splitRegex = /[ ,]+/g;

function tgv(input: TemplateStringsArray, ...args: any[]) {
  // Get the raw string input
  const rawInput = String.raw(input, ...args);

  return rawInput
    .replace(breakpointRegex, (_, breakpoint, styles) => {
      const stylesArray = styles
        .split(splitRegex)
        .map((style: string) => `${breakpoint}:${style.trim()}`);
      return stylesArray.join(' ');
    })
    .trim();
}

function twTransform(code: any) {
  const variantGroupMatches = [...code.matchAll(variantGroupsRegex)];
  variantGroupMatches.forEach(([matchStr, variants, classes]) => {
    const parsedClasses = classes
      .split(splitRegex)
      .map((cls) => variants + cls)
      .join(' ');

    code = code.replace(matchStr, parsedClasses);
  });
  return code;
}

export { tgv, twTransform };
