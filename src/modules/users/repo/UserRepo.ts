import { User } from "../domain/User";
import { UserName } from "../domain/UserName";


export interface UserRepo {
  getUserById (userId: string): User | any;
  getUserByUserName (userName: UserName | string): User | any;
  save (user: User): void;
}