import { Song } from "../../domain/Song";

import songs from '../../../../shared/db/songs/songs.json';
import { SongDTO } from "../../dto/song.dto";
import { SongRepository } from "../Songs.repository";
export class SongRepositoryImpl implements SongRepository {
    constructor(){}
    getSongById(id: string): Song {
        const song = songs.find((song) => song.id === id);
        const songDto = SongDTO.toDomain(song);
        return songDto;
    }
}