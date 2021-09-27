import React, { FC } from "react";
import { Click } from "vcc-ui"
import ArrowImg from '../../assets/chevron-circled.svg';
interface Props {
    isLeft: boolean,
    onClick: () => void,
}
const ArrowButton: FC<Props> = ({ isLeft, onClick }) => {
    return (
        <Click
            extend={{
                transform: isLeft ? "rotate(180deg)" : "rotate(0deg)",
                width: "30px",
                height: "30px",
                margin: "5px",
            }}
            onClick={onClick}>
            <img src={ArrowImg} alt="arrow" />
        </Click>
    )
}
export default ArrowButton;