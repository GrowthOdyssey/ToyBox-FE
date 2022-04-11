export interface CommonButtonType {
  label: string;
  color?: ColorValueType;
  onclick?: () => void;
  isDisabled?: boolean;
}

type ColorValueType =
  | 'white'
  | 'black'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'rose'
  | 'clear';
