export interface ArticleProps {
  url: string;
  img: string;
  title: string;
}

export interface ProjectCardProps extends ArticleProps {
  desc: string;
  stack: string;
}

export interface ShadowCardProps {
  img: string;
  onClick: () => void;
}

export interface SwiperChangeSlideProps {
  func: string;
  children: JSX.Element;
}

export interface NavItemProps {
  name: string;
  path: string;
  currentPath: string;
  style: string;
  onClick?: () => void;
}
