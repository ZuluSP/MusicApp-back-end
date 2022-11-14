import { ValueObject } from "../../../shared/domain/ValueObject";

export interface UserNameProps {
    value: string;
}

export class UserName extends ValueObject<UserNameProps> {
    get value (): string {
        return this.props.value;
      }
    
      private constructor (props: UserNameProps) {
        super(props);
      }

      public static create (props: UserNameProps): UserName {
        return new UserName(props);
      }

}