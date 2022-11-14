import * as bcrypt from 'bcrypt-nodejs'
import { ValueObject } from '../../../shared/domain/ValueObject';
import { Guard } from '../../../shared/core/Guard';
import { Result } from '../../../shared/core/Result';

export interface UserPasswordProps {
  value: string;
  hashed: boolean;
}

export class UserPassword extends ValueObject<UserPasswordProps> {

  public static minLength: number = 6;
  
  get value () : string {
    return this.props.value;
  }

  private constructor (props: UserPasswordProps) {
    super(props);
  }

  /**
   * @method create
   * @desc Creates a UserPassword.
   */
  public static create (props: UserPasswordProps):  UserPassword | Result<UserPassword> {
    const propsResult = Guard.againstNullOrUndefined(props.value, 'password');

    if (propsResult.isFailure) {
      return Result.fail<UserPassword>(propsResult.getErrorValue());
    } else {

      if (!props.hashed &&  !this.isAppropriateLength(props.value)) {
          return Result.fail<UserPassword>('Password needs 8 chars min.');
      }

      if(!this.cointainsNumber(props.value)) {
        return Result.fail<UserPassword>('Password must contain at least one number.')
      }

      return new UserPassword({ value: props.value, hashed: !!props.hashed === true });
    }
  }

  private static isAppropriateLength (password: string): boolean {
    return password.length >= this.minLength;
  }

  private static cointainsNumber (password: string): boolean {
    const numbers = password.match(/\d+/g);
    return numbers !== null; 
  }

  /**
   * @method comparePassword
   * @desc Compares as plain-text and hashed password.
   */
  public async comparePassword (plainTextPassword: string): Promise<boolean> {
    if (this.isAlreadyHashed()) {
      return this.bcryptCompare(plainTextPassword, this.props.value);
    } else {
      return this.props.value === plainTextPassword;
    }
  }

  private bcryptCompare (plainText: string, hashed: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainText, hashed, (err, compareResult) => {
        if (err) return resolve(false);
        return resolve(compareResult);
      })
    })
  }

  public isAlreadyHashed (): boolean {
    return this.props.hashed;
  }
  
  private hashPassword (password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, null, null, (err, hash) => {
        if (err) return reject(err);
        resolve(hash)
      })
    })
  }

  public getHashedValue (): Promise<string> {
    return new Promise((resolve) => {
      if (this.isAlreadyHashed()) {
        return resolve(this.props.value);
      } else {
        return resolve(this.hashPassword(this.props.value))
      }
    })
  }


}