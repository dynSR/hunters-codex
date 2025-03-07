interface CardHeader {
  headline: string | string;
  icon?: string;
}
interface CardBody {
  image: string;
}
interface CardFooter {
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
