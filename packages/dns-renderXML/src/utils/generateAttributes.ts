const generateAttributes = (node: HTMLElement) => {
  const attributes = node.attributes;
  let attributesString = '';

  if (attributes && attributes.length) {
    Object.keys(attributes).forEach((key: any) =>
      attributesString += `${attributes[key].name}="${attributes[key].nodeValue}" `
    );
  }

  return attributesString.trim();
};

export default generateAttributes;
