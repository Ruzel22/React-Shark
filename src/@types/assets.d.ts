declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare module 'lodash.debounce' {
  const content: any;
  export default content;
}

