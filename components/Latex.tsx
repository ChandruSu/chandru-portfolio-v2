import Latex from "react-latex-next";

export function Ltx({ val }: { val: string }) {
  return <Latex>${val}$</Latex>;
}
