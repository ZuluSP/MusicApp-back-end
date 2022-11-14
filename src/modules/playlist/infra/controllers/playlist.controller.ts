import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RetrievePlaylistByUserUseCase } from "../../useCases/retrievePlaylistsByUser";


@ApiTags('Playlist')
@Controller('playlist')
export class PlayListController {
    
    @Get('/users/:userId/lists')
    getListByUserId(@Param('userId') userId: string) {
       const list = new RetrievePlaylistByUserUseCase(userId).execute();
       const outputList = list.map((playlist) => playlist.toPrimitives())
       return outputList
    }

    @Get(':id')
    getUsersByID(@Param('id') id: string): string {
        return 'List of users';
    } 
}