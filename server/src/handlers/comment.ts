import { db } from "../config/prisma";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthRequest } from "../types";
import { io } from "..";

export const postComment = async (req: any, res: any) => {
  try {
    const userId = "cm3lnk1620000ifc6b0pkxeet";
    const content = req.body.content;
    const comment = await db.comment.create({
      data: {
        text: content,
        authorId: userId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    io.emit("newComment", {
      message: "New comment posted",
      action: "created",
      record: comment,
    });
    res.status(StatusCodes.CREATED).json({
      message: "Comment posted successfully",
      comment,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const listComments = async (req: any, res: any) => {
  try {
    const comments = await db.comment.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(StatusCodes.OK).json({
      message: "Success",
      data: comments,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
