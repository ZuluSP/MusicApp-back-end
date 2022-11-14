import { AggregateRoot } from '@nestjs/cqrs';
import { Result } from "../../../shared/core/Result";
import { Song } from '../../songs/domain/Song';
import { PlaylistId } from './PlaylistId';
import { UserId } from '../../users/domain/userId';


export class Playlist extends AggregateRoot {
    readonly playlistId: PlaylistId;
    readonly userId: UserId;
    readonly songs: Array<Song>;

    constructor(playlistId: PlaylistId, userId: UserId, songs: Array<Song>){
        super();
        this.playlistId = playlistId;
        this.userId = userId;
        this.songs = songs;
    }

    public static create (props: Playlist): Result<Playlist> {
      return Result.ok<Playlist>(props);
    }

    toPrimitives() {
      const primitiveSongs = this.songs.map((song) => song.toPrimitives())
      return {
        id: this.playlistId.props.value,
        name: this.userId.props.value,
        songs: primitiveSongs
      };
    }
}