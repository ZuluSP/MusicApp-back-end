import { Playlist } from "../../domain/Playlist";
import { PlaylistDTO } from "../../dto/Playlist.dto";
import { PlaylistRepository } from "../Playlist.repository";
import playlists from '../../../../shared/db/playlists/playlist.json';
import { RetrieveSongByIdUseCase } from "../../../songs/useCases/RetrieveSongById";
import { Song } from "../../../songs/domain/Song";

export class PlaylistRepositoryImpl implements PlaylistRepository {
 
    constructor () {
    }
    /**
     * Retrieves a list of playlist that has a user.
     * 
     * @param userId The user identifier that owns the playlist.
     */
    findListsByUserId(userId: string): Array<Playlist> {
        const userPlaylist = playlists.filter((playlist) => playlist.user_id === userId);
        const playlistsFormatted: Array<Playlist> = [];
        const songs : Array<Song> = [];
        userPlaylist.forEach((playlist) => {
            playlist.songs.forEach((song) => {
                songs.push(new RetrieveSongByIdUseCase(song.id).execute()); 
            })
            playlistsFormatted.push(PlaylistDTO.toDomain({...playlist, songs: songs}))
        });
        return playlistsFormatted;
    }
    createList(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
  

}