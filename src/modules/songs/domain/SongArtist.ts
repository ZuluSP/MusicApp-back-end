import { ValueObject } from '../../../shared/domain/ValueObject'

export interface SongArtistProps {
    value: string;
}
  
export class SongArtist extends ValueObject<SongArtistProps> {
    get value () : string {
        return this.props.value;
      }
      
      private constructor (props: SongArtistProps) {
        super(props);
      }

      public static create (props: SongArtistProps): SongArtist {
        return new SongArtist(props);
      }
}