import { CaseFlags } from '../enums/case-flags';

declare global {
  interface String {
    isEmpty(): boolean;
    equals(s: string): boolean;
    toCapitalized(): string;
    toCase(caseFlag: CaseFlags): string;
    toAbbreviation(): string;
  }
}

String.prototype.isEmpty = function (this: string): boolean {
  return this.length === 0 || this.trim().length === 0;
};

String.prototype.equals = function (this: string, s: string): boolean {
  return this.toLocaleLowerCase() === s.toLocaleLowerCase();
};

String.prototype.toCapitalized = function (this: string): string {
  return `${this.charAt(0).toLocaleUpperCase()}${this.slice(
    1
  ).toLocaleLowerCase()}`;
};

String.prototype.toCase = function (this: string, caseFlag: CaseFlags): string {
  const base = this.replace(/([a-z](?=[A-Z]))/g, '$1 '); // in case the word is in camelCase
  const regex = /[\s\-_]+/; // Use to split on either space, hyphen or underscore.
  let result = base;

  switch (caseFlag) {
    case CaseFlags.Titlecase:
      const parts = this.split(regex);
      result =
        parts.length >= 1
          ? parts.map((word) => word.toCapitalized()).join(' ')
          : base.toCapitalized();
      return result;
    case CaseFlags.Titlecase | CaseFlags.Uppercase:
      return base.split(regex).reduce((acc, curr) => {
        return `${acc.toLocaleUpperCase()} ${curr.toLocaleUpperCase()}`;
      });
    case CaseFlags.Pascalcase:
      break;
    case CaseFlags.Camelcase | CaseFlags.Uppercase:
      break;
    case CaseFlags.Camelcase | CaseFlags.Lowercase:
      break;
    case CaseFlags.Snakecase | CaseFlags.Uppercase:
      break;
    case CaseFlags.Snakecase | CaseFlags.Lowercase:
      break;
    case CaseFlags.Kebabcase:
      return base.split(regex).join('-');
    case CaseFlags.Kebabcase | CaseFlags.Uppercase:
      return base.split(regex).join('-').toLocaleUpperCase();
    case CaseFlags.Kebabcase | CaseFlags.Lowercase:
      return base.split(regex).join('-').toLocaleLowerCase();
    case CaseFlags.Lowercase:
      return this.toLocaleLowerCase();
    case CaseFlags.Uppercase:
      return this.toLocaleUpperCase();
  }

  return base;
};

String.prototype.toAbbreviation = function (this: string): string {
  const result = this.replace('and', 'n')
    .split('-')
    .map((s) => s.charAt(0));

  return result.length <= 1
    ? this.toCase(CaseFlags.Uppercase)
    : result.join('').toCase(CaseFlags.Uppercase);
};
