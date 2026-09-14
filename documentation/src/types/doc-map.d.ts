export type DocMapType = {
  [key: string]: {
    path: string;
    name: string;
    component: React.FC;
    childMap?: DocMapType;
  };
};
