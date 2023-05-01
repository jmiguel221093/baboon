import { createContext } from "react";

export interface NavigationContextType {
	anchorComponent?: React.FunctionComponent;
	collapsed?: boolean;
}

const NavigationContext = createContext<NavigationContextType>({});

export default NavigationContext;
