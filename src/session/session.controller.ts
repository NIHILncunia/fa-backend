import {
  Body, Controller, Get, Param, Patch, Post
} from '@nestjs/common';
import { Session } from '@prisma/client';
import { SessionService } from '@/session/session.service';
import { CreateSessionDto } from '@/session/dto/create-session.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Controller('session')
export class SessionController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly sessionService: SessionService
  ) {
  }

  @Get('')
  async getAllSession(): Promise<Session[]> {
    return this.sessionService.getAllSession();
  }

  @Get('/campain/:campainId')
  async getAllSessionByCampain(@Param('campainId') campainId: string): Promise<Session[]> {
    return this.sessionService.getAllSessionByCampain(campainId);
  }

  @Get('/id/:id')
  async getSessionById(
    @Param('id') id: string
  ): Promise<Session | NotFoundEntity> {
    return this.sessionService.getSessionById(id);
  }

  @Get('/campain/:campainId/number/:number')
  async getSessionByName(
    @Param('number') number: number,
    @Param('campainId') campainId: string
  ): Promise<Session | NotFoundEntity> {
    return this.sessionService.getSessionByNumber(campainId, number);
  }

  @Post('')
  async createSession(@Body() createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionService.createSession(createSessionDto);
  }

  @Patch('/id/:id')
  async updateSession(
    @Param('id') id: string,
    @Body() updateSessionDto: Partial<Session>
  ): Promise<Session> {
    return this.sessionService.updateSession(id, updateSessionDto);
  }
}
