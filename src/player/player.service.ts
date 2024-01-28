import { Injectable } from '@nestjs/common';
import { Player } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreatePcDto } from '@/player/dto/create-pc.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Injectable()
export class PlayerService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService
  ) {
  }

  async getAllPC(): Promise<Player[]> {
    return this.prisma.player.findMany();
  }

  async getAllPCByCampain(campainId: string): Promise<Player[]> {
    return this.prisma.player.findMany({
      where: {
        campain_id: campainId,
      },
    });
  }

  async getPCById(id: string): Promise<Player | NotFoundEntity> {
    const pc = await this.prisma.player.findFirst({
      where: {
        id,
      },
    });

    if (!pc) {
      return {
        data: null,
      };
    }

    return pc;
  }

  async getPCByName(campainId: string, name: string): Promise<Player | NotFoundEntity> {
    const pc = await this.prisma.player.findFirst({
      where: {
        name,
        campain_id: campainId,
      },
    });

    if (!pc) {
      return {
        data: null,
      };
    }

    return pc;
  }

  async createPC(createPcDto: CreatePcDto): Promise<Player> {
    return this.prisma.player.create({
      data: createPcDto,
    });
  }

  async updatePC(id: string, updatePCDto: Partial<Player>): Promise<Player> {
    return this.prisma.player.update({
      where: {
        id,
      },
      data: updatePCDto,
    });
  }
}
