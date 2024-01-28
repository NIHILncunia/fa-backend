import {
  Body, Controller, Get, Param, Patch, Post
} from '@nestjs/common';
import { Player } from '@prisma/client';
import { PlayerService } from '@/player/player.service';
import { CreatePcDto } from '@/player/dto/create-pc.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Controller('player')
export class PlayerController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly playerService: PlayerService
  ) {
  }

  @Get('')
  async getAllPC(): Promise<Player[]> {
    return this.playerService.getAllPC();
  }

  @Get('/campain/:campainId')
  async getAllPCByCampain(@Param('campainId') campainId: string): Promise<Player[]> {
    return this.playerService.getAllPCByCampain(campainId);
  }

  @Get('/id/:id')
  async getPCById(
    @Param('id') id: string
  ): Promise<Player | NotFoundEntity> {
    return this.playerService.getPCById(id);
  }

  @Get('/campain/:campainId/name/:name')
  async getPCByName(
    @Param('name') name: string,
    @Param('campainId') campainId: string
  ): Promise<Player | NotFoundEntity> {
    return this.playerService.getPCByName(campainId, name);
  }

  @Post('')
  async createPC(@Body() createPcDto: CreatePcDto): Promise<Player> {
    return this.playerService.createPC(createPcDto);
  }

  @Patch('/id/:id')
  async updatePC(
    @Param('id') id: string,
    @Body() updatePCDto: Partial<Player>
  ) {
    return this.playerService.updatePC(id, updatePCDto);
  }
}
