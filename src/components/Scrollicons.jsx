import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Scrollicons({ scroll }) {
  return (
    <>
      <MdArrowBackIosNew
        className="cursor position-absolute z-3"
        size="35px"
        style={{ top: "40%", left: 0, color: "var(--bg-cyan)"}}
        onClick={() => scroll("left")}
      />
      <MdArrowForwardIos
        className="cursor position-absolute z-3"
        size="35px"
        style={{ top: "40%", right: 0, color: "var(--bg-cyan)"}}
        onClick={() => scroll("right")}
      />
    </>
  );
}
