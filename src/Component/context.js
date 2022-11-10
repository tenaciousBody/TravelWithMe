import React from "react";

const UserContext = React.createContext('Guest User')

const UserConsumer = UserContext.Consumer
const UserProvider = UserContext.Provider

export {UserConsumer, UserProvider}
export { UserContext}