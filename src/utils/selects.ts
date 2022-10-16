interface SelectOptions {
  label: string;
  value: string;
}
interface Selects {
  readonly [key: string]: SelectOptions[];
}

const selects: Selects = {
  appBackground: [
    {
      label: "透明",
      value: "transparent",
    },
    {
      label: "背景色",
      value: "background-color",
    },
    {
      label: "白色",
      value: "white",
    },
  ],
};

export function getSelects(key: string) {
  return selects[key] || null;
}
