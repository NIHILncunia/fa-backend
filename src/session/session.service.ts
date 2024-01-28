import { Injectable } from '@nestjs/common';
import { Session } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateSessionDto } from '@/session/dto/create-session.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Injectable()
export class SessionService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService
  ) {
  }

  async getAllSession(): Promise<Session[]> {
    return this.prisma.session.findMany();
  }

  async getAllSessionByCampain(campainId: string): Promise<Session[]> {
    return this.prisma.session.findMany({
      where: {
        campain_id: campainId,
      },
    });
  }

  async getSessionById(id: string): Promise<Session | NotFoundEntity> {
    const session = await this.prisma.session.findFirst({
      where: {
        id,
      },
    });

    if (!session) {
      return {
        data: null,
      };
    }

    return session;
  }

  async getSessionByNumber(campainId: string, number: number): Promise<Session | NotFoundEntity> {
    const session = await this.prisma.session.findFirst({
      where: {
        number,
        campain_id: campainId,
      },
    });

    if (!session) {
      return {
        data: null,
      };
    }

    return session;
  }

  async createSession(createSessionDto: CreateSessionDto): Promise<Session> {
    return this.prisma.session.create({
      data: createSessionDto,
    });
  }

  async updateSession(id: string, updateSessionDto: Partial<Session>) {
    return this.prisma.session.update({
      where: {
        id,
      },
      data: updateSessionDto,
    });
  }
}
