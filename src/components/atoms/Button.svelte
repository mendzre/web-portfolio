<script lang="ts">
  import type { IButtonProps } from "./types";
  export let props: IButtonProps;
</script>

<button
  class={`button button--${props.variant}`}
  type={props.type || "button"}
  on:click={props.handleClick}
  aria-label={props.ariaLabel}
>
  <slot />
</button>
