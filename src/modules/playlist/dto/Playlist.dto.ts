import { Playlist } from "../domain/Playlist";
import { Uuid } from "../../../shared/domain/Uuid";

export class PlaylistDTO {
    public static toDomain(playlist: any){
        const id = new Uuid( { value: playlist?.id });
        const userId = new Uuid( { value: playlist?.user_id });
        return new Playlist(id, userId, playlist.songs);
    }
    
    toDb(){}
}