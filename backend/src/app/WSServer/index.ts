import { Config, Connection, UserModel, WebSocketServer } from "@rtcts/node";
import { User } from "../../../../shared";
import { userModel } from "../../components/user/userModel";
import { config } from "../config";
import { concreteChannels } from "./concreteChannels";

export const webSocketServer = new WebSocketServer<UserModel<User, Config>, User, Config>(
  Connection,
  concreteChannels,
  config,
  userModel,
);
