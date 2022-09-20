import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, type, handleClick, customStyles }) => {
	const snap = useSnapshot(state);

	const generateStyle = (type) => {
		switch (type) {
			case "filled":
				return {
					backgroundColor: snap.color,
					color: "#fff",
				};
			case "outlined":
				return {
					backgroundColor: "#fff",
					color: "#000",
					border: "1px solid #000",
				};
			default:
		}
	};
	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md  ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}>
			{title}
		</button>
	);
};

export default CustomButton;
