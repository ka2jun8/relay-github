import { atom } from "recoil";

export const nameState = atom({
  key: "repositoryName",
  default: "relay-github",
});
