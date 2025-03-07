export enum CaseFlags {
  None = 0,
  /** e.g. hello world | helloworld */
  Lowercase = 1 << 0,
  /** e.g. HELLO WORLD |HELLOWORLD */
  Uppercase = 1 << 1,
  /** e.g. Hello World */
  Titlecase = 1 << 2,
  /** e.g. HelloWorld */
  Pascalcase = 1 << 3,
  /** e.g. helloWorld */
  Camelcase = 1 << 4,
  /** e.g. Hello_World */
  Snakecase = 1 << 5,
  /** e.g. Hello-World | hello-world */
  Kebabcase = 1 << 6,
}
