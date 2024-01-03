import type {
  HTMLAnchorAttributes,
  HTMLButtonAttributes,
} from "svelte/elements";

type ButtonVariant = "fill" | "outline";

interface IBaseButtonProps {
  variant: ButtonVariant;
  ariaLabel?: HTMLButtonAttributes["aria-label"];
}

export interface IButtonProps extends IBaseButtonProps {
  type?: HTMLButtonAttributes["type"];
  handleClick: (event: MouseEvent) => void;
}

export interface ILinkButtonProps extends IBaseButtonProps {
  href: HTMLAnchorAttributes["href"];
}
