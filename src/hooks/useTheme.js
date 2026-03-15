import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const  useTheme = () => useContext(themeContext);

export default useTheme;