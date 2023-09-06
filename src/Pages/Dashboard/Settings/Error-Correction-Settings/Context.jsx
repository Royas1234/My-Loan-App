import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
	const [showScore, setShowScore] = useState(false);

	function toggleScore() {
		setShowScore(!showScore);
	}

	return (
		<Context.Provider value={{ showScore, toggleScore }}>
			{props.children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
