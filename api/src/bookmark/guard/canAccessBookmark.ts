import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CanAccessBookmark implements CanActivate {
  constructor(private prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const user = request.user as User;
    const bookmarkId = parseInt(request.params['id']);
    const bookmark = await this.prismaService.bookmark.findFirst({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark || bookmark.userId !== user.id) {
      return false;
    }

    return true;
  }
}
