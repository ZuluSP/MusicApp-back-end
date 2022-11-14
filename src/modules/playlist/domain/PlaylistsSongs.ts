import { ValueObject } from "../../../shared/domain/ValueObject";

export interface PlaylistSongsProps {
    value: string;
}

export class UserName extends ValueObject<PlaylistSongsProps> {
    get value (): string {
        return this.props.value;
      }
    
      private constructor (props: PlaylistSongsProps) {
        super(props);
      }

      public static create (props: PlaylistSongsProps): UserName {
        return new UserName(props);
      }

}