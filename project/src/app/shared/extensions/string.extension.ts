import { CaseFlags } from '../enums/case-flags';

declare global {
  interface String {
    isEmpty(): boolean;
    equals(s: string): boolean;
    toCapitalized(): string;
    toAndAssociation(): string;
    toCase(caseFlag: CaseFlags): string;
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

String.prototype.toAndAssociation = function (this: string): string {
  return this.split('').reduce((_, curr) => {
    return `${curr.toLocaleUpperCase()}n${curr.toLocaleUpperCase()}`;
  }, '');
};

String.prototype.toCase = function (this: string, caseFlag: CaseFlags): string {
  let result = this;
  const regex = /[\s\-_]+/; // Use to split on either space, hyphen or underscore.

  switch (caseFlag) {
    case CaseFlags.Titlecase:
      const parts = this.split(regex);
      result =
        parts.length >= 1
          ? parts.map((word) => word.toCapitalized()).join(' ')
          : this.toCapitalized();
      break;
    case CaseFlags.Titlecase | CaseFlags.Uppercase:
      return this.split(regex).reduce((acc, curr) => {
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
    case CaseFlags.Kebabcase | CaseFlags.Uppercase:
      break;
    case CaseFlags.Kebabcase | CaseFlags.Lowercase:
      break;
    case CaseFlags.Lowercase:
      return result.toLocaleLowerCase();
    case CaseFlags.Uppercase:
      return result.toLocaleUpperCase();
  }

  return result;
};
