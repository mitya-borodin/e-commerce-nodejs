import mobx from "mobx";
import { onDestroy } from "svelte";

type AutorunFn = (view: () => void) => void;

export function connect(): { autorun: AutorunFn } {
  let disposer: mobx.IReactionDisposer;

  onDestroy(() => disposer && disposer());

  return {
    autorun: (view: () => void) => {
      // eslint-disable-next-line no-unused-expressions
      disposer && disposer();
      disposer = mobx.autorun(view);
    },
  };
}