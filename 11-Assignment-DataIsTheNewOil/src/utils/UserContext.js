import { createContext } from "react";

const UserContext = createContext({ name: "" });

UserContext.displayName = "User Context";
export default UserContext;
