import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

export function Ltx({ val }: { val: string }) {
  return <Latex>${val}$</Latex>;
}
