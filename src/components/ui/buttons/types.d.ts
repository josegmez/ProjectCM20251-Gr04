type ButtonClassNames = {
  /**
   * The button class name.
   */
  button: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
  /**
   * The button start content class name.
   */
  startContent: React.ButtonHTMLAttributes<HTMLDivElement>["className"];
  /**
   * The button loading spinner class name.
   */
  loadingSpinner: React.ButtonHTMLAttributes<HTMLDivElement>["className"];
};

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * The button start content.
   */
  startContent?: ReactNode;
  /**
   * Indicates the button color variant.
   * @default "default"
   */
  color?: "default" | "primary" | "accent" | "danger";
  /**
   * The button radius variant.
   * @default false
   */
  isRounded?: boolean;
  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Indicates whether the button is in an inactive state.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The native button click event handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The button content.
   * @default "Button"
   */
  children?: ReactNode;
  /**
   * The button class name (Applied to the button element).
   */
  className?: ReactButtonHTMLAttributes<HTMLButtonElement>["className"];
  /**
   * The button class names (Used for styling).
   */
  classNames?: Partial<ButtonClassNames>;
};
