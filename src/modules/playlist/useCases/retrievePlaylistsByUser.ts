import { PlaylistRepositoryImpl } from "../repo/implementation/Playlist.repositoryImpl";

export class RetrievePlaylistByUserUseCase {
    userId : string;
    constructor(id: string) {
        this.userId = id;
    }
    execute() {
        const playlistRepo = new PlaylistRepositoryImpl();
        const lists = playlistRepo.findListsByUserId(this.userId);
        return lists;
    }
}