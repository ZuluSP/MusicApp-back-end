import { User } from "../../domain/User";
import { UserName } from "../../domain/UserName";
import { UserRepo } from "../UserRepo";


export class UserRepoImpl implements UserRepo {
  private models: any;

  constructor (models: any) {
    this.models = models;
    console.log(this.models);
  }
  /**
   *  Returns the user (any in this case because is not implemented)
   * @param userId A user Identifier.
   * @returns void.
   */
  getUserById(userId: string): User | any {
    /*
    return new User(UserId.random(), UserName.create({ value: "Brais" }), UserPassword.create({
      value: "123",
      hashed: false,
    }));
    */
   return 'void';
  }
  getUserByUserName(userName: string | UserName): User | any {
    return 'void';
  }
  save(user: User): void {
  }
}