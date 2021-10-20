import React from "react";
import { AuthService } from "./services/auth.service";
import { AuthStore } from "./stores/auth.store";

interface IStoreContext {
  authStore: AuthStore;
}

const authService = new AuthService();
const authStore = new AuthStore(authService);

export const StoreContext = React.createContext<IStoreContext>({
  authStore,
});
