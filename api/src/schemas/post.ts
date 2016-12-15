import { Document, Schema, Model } from "mongoose";
import { mongoose } from "../db";
import { IPost } from "../interfaces/post";

export var PostSchema: Schema = new Schema({
  username: {type: String, required: true},
  body: {type: String, required: true},
  date: {type: Date, required: true, default: Date.now}
});

export interface IPostModel extends IPost, Document {};

export var Post = mongoose.model("Post", PostSchema);
/* apparently there is an issue in the current mongoose types that breaks 
 * the code below. attempting to use mongoose.model<...> causes :
 *    error TS2347: Untyped function calls may not accept type arguments.
 * TODO: play with the types/report a problem.
 */
//export var Post = mongoose.model<IPostModel>("Post", PostSchema);
//export const Post: Model<IPostModel> = mongoose.model<IPostModel>("Post", PostSchema);

