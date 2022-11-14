import { Song } from "../domain/Song";



export interface SongRepository {
  getSongById (id: string): Song;
}