import { ValueObject } from '../../../shared/domain/ValueObject'

export interface SongTitleProps {
    value: string;
}
  
export class SongTitle extends ValueObject<SongTitleProps> {
    get value () : string {
        return this.props.value;
      }
      
      private constructor (props: SongTitleProps) {
        super(props);
      }

      public static create (props: SongTitleProps): SongTitle {
        return new SongTitle(props);
      }
}