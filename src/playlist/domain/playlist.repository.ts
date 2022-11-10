import { Song } from "./Song";
import { SongId } from "./SongId";

export interface Playlist {
    add(song: Song): Promise<void>;
    findOneByName(name: String): Promise<Song>;
    getList(): Promise<Array<Song>>
    delete(id: SongId): Promise<void>;
    addFavourite(id: SongId): Promise<void>;
    play(id: SongId): Promise<void>;
}