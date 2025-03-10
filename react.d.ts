declare namespace React {
  interface ReactNode {
    children?: ReactNode | ReactNode[];
  }
  
  type ReactNode = 
    | React.ReactElement
    | string
    | number
    | boolean
    | null
    | undefined;
    
  interface ReactElement<P = any, T = any> {
    type: T;
    props: P;
    key: string | null;
  }

  type RefObject<T> = {
    readonly current: T | null;
  };

  function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
}

declare module 'react' {
  export = React;
  export as namespace React;
} 