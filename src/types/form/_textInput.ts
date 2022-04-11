export interface TextInputType {
  name: string;
  placeholder?: string;
  size?: InputSizeType;
}

type InputSizeType = 'large' | 'full';
