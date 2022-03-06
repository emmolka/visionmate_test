import axios from "axios";
import { UserResponse } from "./types";

export const getUsers = async (): Promise<UserResponse[] | []> => {
  try {
    const {
      data: { results },
    } = await axios.get(`https://randomuser.me/api/?results=200`);
    return results;
  } catch (e) {
    alert(e);
    return [];
  }
};
