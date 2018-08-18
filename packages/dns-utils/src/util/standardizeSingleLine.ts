const WHITE_SPACE_REGEX = /\s+/g;

export default (str: string) => str.trim().replace(WHITE_SPACE_REGEX, ' ');
