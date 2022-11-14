import { AggregateRoot } from '@nestjs/cqrs';
import { Guard } from "../../../shared/core/Guard";
import { Result } from "../../../shared/core/Result";
import { UserId } from "./userId";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";


export class User extends AggregateRoot {
    readonly userId: UserId;
    readonly username: UserName;
    readonly userPassword: UserPassword;

    constructor(id: UserId, name: UserName, password: UserPassword){
        super();
        this.userId = id;
        this.username = name;
        this.userPassword = password;
    }

   public static create(user: User) {
    const guardNameResult = Guard.againstNullOrUndefined(user.username, 'username' );
    if (guardNameResult.isFailure) {
        return Result.fail<User>(guardNameResult.getErrorValue())
      }
      const createdUser = new User(
        user.userId,
        user.username,
        user.userPassword,
   );
   return Result.ok<User>(createdUser);
   }

}