import { Response } from "express";
import * as NewsService from "./service";
import { log } from "../../log";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../utils/responseHandler";

export const getNewsArticle = async (req, res: Response): Promise<any> => {
  try {
    const response = await NewsService.getNewsArticle(
      req.params.section,
      req.query
    );
    sendSuccessResponse({ response, res });
  } catch (err) {
    console.log(err, "one");
    log.error(err);
    sendErrorResponse({ err, code: err?.code, res });
  }
};
