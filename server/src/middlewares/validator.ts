import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

export function validator(schema: z.ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((issue) => ({
          message: `${issue.path.length ? issue.path.join(".") : "Field"} ${
            issue.message
          }`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessage });
      } else {
        console.error("Unexpected validation error:", error); // Optional logging
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "An unexpected error occurred" });
      }
    }
  };
}
