import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { readComment } from './dto/readDTO.dto';
import { createComment } from './dto/createDTO.dto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:boardId')
  async getCommentsFromBoardId(@Param('boardId') boardId: number): Promise<readComment[]> {
    return this.commentService.getCommnetsFromBoardId(boardId);
  }

  @Post()
  async createComment(@Body() req: createComment): Promise<void> {
    console.log(req);
    await this.commentService.createComment(req);
  }
}
