import { Result } from "../../../shared/core/Result";
import { SongArtist } from "./SongArtist";
import { SongId } from "./SongId";
import { SongTitle } from "./SongTitle";

export class Song  {
    readonly id: SongId;
    readonly artist: SongArtist;
    readonly title: SongTitle;
    constructor(id: SongId, artist: SongArtist, title: SongTitle){
        this.id = id;
        this.artist = artist;
        this.title = title;
    }
    public static create (props: Song): Result<Song> {
        return Result.ok<Song>(props);
      }

    toPrimitives() {
        return {
          id: this.id.props.value,
          artist: this.artist.props.value,
          title: this.title.props.value
        };
      }
}