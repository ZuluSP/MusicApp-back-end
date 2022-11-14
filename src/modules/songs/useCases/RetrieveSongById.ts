import { SongRepositoryImpl } from "../repo/Implementation/Songs.repositoryImpl";

export class RetrieveSongByIdUseCase {
    songId : string;
    constructor(songId: string) {
        this.songId = songId;
    }
    execute() {
        const songRepo = new SongRepositoryImpl();
        const song = songRepo.getSongById(this.songId);
        return song;
    }
}