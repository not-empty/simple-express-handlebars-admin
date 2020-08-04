function registerHelpers(hbs) {
  hbs.registerHelper('link', (text, options) => {
    const attrs = [];

    for (let prop in options.hash) {
      attrs.push(`${prop}="${options.hash[prop]}"`);
    }

    return new hbs.SafeString(
      `<a ${attrs.join(' ')}>${text}</a>`
    );
  });
}

module.exports = registerHelpers;