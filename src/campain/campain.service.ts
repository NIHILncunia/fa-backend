import {
  HttpException, HttpStatus, Injectable, Logger
} from '@nestjs/common';
import { Campain } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateCampainDto } from '@/campain/dto/create-campain.dto';
import { NotFoundEntity } from '@/common/entity/not-found.entity';

@Injectable()
export class CampainService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly prisma: PrismaService
  ) {}

  async getAllCampain(): Promise<Campain[]> {
    return this.prisma.campain.findMany();
  }

  async getCampainById(id: string): Promise<Campain | NotFoundEntity> {
    const campain = await this.prisma.campain.findFirst({
      where: {
        id,
      },
    });

    if (!campain) {
      return {
        data: null,
      };
    }

    return campain;
  }

  async getCampainByName(name: string): Promise<Campain | NotFoundEntity> {
    const campain = await this.prisma.campain.findFirst({
      where: {
        name,
      },
    });

    if (!campain) {
      return {
        data: null,
      };
    }

    return campain;
  }

  async createCampain(createCampainDto: CreateCampainDto): Promise<Campain> {
    return this.prisma.campain.create({
      data: createCampainDto,
    });
  }

  async updateCampain(id: string, updateCampainDto: Partial<Campain>): Promise<Campain> {
    return this.prisma.campain.update({
      where: {
        id,
      },
      data: updateCampainDto,
    });
  }
}
