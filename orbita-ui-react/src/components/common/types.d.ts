export interface IComponent {
  className?: string;
  style?: React.CSSProperties;
}

export interface IWithChildrenComponent extends IComponent {
  children: React.ReactNode;
}
