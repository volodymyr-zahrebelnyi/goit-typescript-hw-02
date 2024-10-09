import { FaAngleUp } from "react-icons/fa";
import css from "./BtnToTop.module.css";

interface BtnToTopProps {
  onClick: () => void;
}

export default function BtnToTop({ onClick }: BtnToTopProps) {
  return (
    <button className={css.btnToTop} onClick={onClick}>
      <FaAngleUp className={css.iconUp} />
    </button>
  );
}
