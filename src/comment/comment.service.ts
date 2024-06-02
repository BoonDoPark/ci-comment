import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { readComment } from './dto/readDTO.dto';
import { createComment } from './dto/createDTO.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getCommnetsFromBoardId(boardId: number): Promise<readComment[]> {
    return this.commentRepository.findBy({ boardId: boardId });
  }

  async createComment(req: createComment): Promise<void> {
    await this.commentRepository.save({
      text: req.text,
      boardId: req.boardId,
    });
  }

  async updateComment(id: number, req: any): Promise<void> {
    await this.commentRepository.save({
      text: req.text,
    });
  }

  async deleteComment(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
