import { createContext, useState, useContext } from 'react';

// Create the context
export const ButtonContext = createContext();

// Create a context provider that maintains the button state
export const ButtonProvider = ({ children }) => {
	const [isActive, setIsActive] = useState(true);

	return (
		<ButtonContext.Provider value={{ isActive, setIsActive }}>
			{children}
		</ButtonContext.Provider>
	);
};

// Create a custom hook to use the context
export const useButtonContext = () => useContext(ButtonContext);

// Orders context
export const ContextOrders = createContext();
export const OrdersProvider = ({ children }) => {
	const [isOrdersActive, setIsOrdersActive] = useState(false);
	return (
		<ContextOrders.Provider value={{ isOrdersActive, setIsOrdersActive }}>
			{children}
		</ContextOrders.Provider>
	);
};
export const useContextOrders = () => useContext(ContextOrders);
