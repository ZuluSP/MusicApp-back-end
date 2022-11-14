export type GuardResponse = string;

import { Result } from "./Result";

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export class Guard {

public static againstNullOrUndefined (argument: any, argumentName: string): Result<GuardResponse> {
    if (argument === null || argument === undefined) {
      return Result.fail<GuardResponse>(`${argumentName} is null or undefined`)
    } else {
      return Result.ok<GuardResponse>(null);
    }
  }

}