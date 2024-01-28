import {
  Body, Controller, Get, Param, Patch, Post
} from '@nestjs/common';
import { Campain } from '@prisma/client';
import { CampainService } from '@/campain/campain.service';
import { CreateCampainDto } from '@/campain/dto/create-campain.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Controller('campain')
export class CampainController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly campainService: CampainService
  ) {
  }

  @Get('')
  async getAllCampain(): Promise<Campain[]> {
    return this.campainService.getAllCampain();
  }

  @Get('/id/:id')
  async getCampainById(@Param('id') id: string): Promise<Campain | NotFoundEntity> {
    return this.campainService.getCampainById(id);
  }

  @Get('/name/:name')
  async getCampainByName(@Param('name') name: string): Promise<Campain | NotFoundEntity> {
    return this.campainService.getCampainByName(name);
  }

  @Post('')
  async createCampain(@Body() createCampainDto: CreateCampainDto): Promise<Campain> {
    return this.campainService.createCampain(createCampainDto);
  }

  @Patch('/id/:id')
  async updateCampain(
    @Param('id') id: string,
    @Body() updateCampainDto: Partial<Campain>
  ) {
    return this.campainService.updateCampain(id, updateCampainDto);
  }
}
