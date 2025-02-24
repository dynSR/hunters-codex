declare interface String {
  isEmpty(): boolean;
  toCapitalized(): string;
  equals(s: string): boolean;
}

String.prototype.isEmpty = function (this: string): boolean {
  return this.length === 0 || this.trim().length === 0;
};

String.prototype.toCapitalized = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.equals = function (this: string, s: string): boolean {
  return this.toLocaleLowerCase() === s.toLocaleLowerCase();
};
