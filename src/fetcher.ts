import axios from "axios";
import { UserResponse } from "./types";

export const getUsers = async (
  number: number
): Promise<UserResponse[] | []> => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://randomuser.me/api/?results=${number}&inc=name,email,picture,login,location`
    );
    return results;
  } catch (e) {
    alert(e);
    return [];
  }
};
