
import { Uuid } from "../../../shared/domain/Uuid";
import { Song } from "../../songs/domain/Song";
import { SongArtist } from "../../songs/domain/SongArtist";
import { SongTitle } from "../../songs/domain/SongTitle";

export class SongDTO {
    public static toDomain(song: any): Song{
           return new Song(
                new Uuid({ value: song?.id }),
                SongArtist.create({ value: song?.artist }),
                SongTitle.create({ value: song?.title})
            )
    }
    
    toDb(){}
}