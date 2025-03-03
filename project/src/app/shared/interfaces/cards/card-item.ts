export interface CardHeader {
  headline: string;
  icon?: string;
}

export interface CardBody {
  image: string;
}

export interface CardFooter {
  isDisplayed: boolean;
  link?: string;
  description?: string;
}

export interface CardItem {
  header: CardHeader;
  body: CardBody;
  footer: CardFooter;

  isClickable: boolean;
  routerLink?: string;
  onClick?: () => void;
}
