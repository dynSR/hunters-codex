interface CardHeader {
  headline: Uppercase<string> | Capitalize<string>;
  icon?: Lowercase<string>;
}
interface CardBody {
  image: Lowercase<string>;
}
interface CardFooter {
  isDisplayed: boolean;
  link?: Lowercase<string>;
  description?: string;
}

export interface CardItem {
  header: CardHeader;
  body: CardBody;
  footer: CardFooter;

  isClickable: boolean;
  routerLink?: Lowercase<string>;
  onClick?: () => void;
}
