import {Controller, Get, Query} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserSearchResultDto} from "./dto/user-search-result-dto";
import {ClientUserDto} from "../client-user/dto/client-user-dto";

@ApiTags('search')
@Controller('search')
export class SearchController {

    @Get()
    @ApiResponse({ status: 200, description: 'Search for a user', type: [UserSearchResultDto] })
    searchUser(@Query('name') last_name: string): UserSearchResultDto[] {
        const results: UserSearchResultDto[] = [];

        results.push(new UserSearchResultDto(
            new ClientUserDto("new_first_name",
                "new_first_name",
                "new_first_name",
                "new_first_name",
                "new_first_name",
                "new_first_name",
                "new_profile_id"),
            45,
            3
        ));

        results.push(new UserSearchResultDto(
            new ClientUserDto("old_first_name",
                "old_first_name",
                "old_first_name",
                "old_first_name",
                "old_first_name",
                "old_first_name",
                "old_profile_id"),
            100,
            99
        ));

        return results;
    }
}
