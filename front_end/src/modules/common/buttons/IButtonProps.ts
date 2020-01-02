export interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large" | undefined;
  text: string;
  id?: string;
  children?: React.ReactNode;
  onClick?(event: any): void | Promise<void>;
}
