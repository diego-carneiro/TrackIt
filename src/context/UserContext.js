import { createContext  } from "react";

const StoredContext = createContext({
    token: null,
    setToken: () => {},
});

export default StoredContext;