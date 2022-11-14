import { Playlist } from "../domain/Playlist";

export interface PlaylistRepository {
  findListsByUserId(userId: string): Array<Playlist>;
  createList(userId: string): any;
}
    