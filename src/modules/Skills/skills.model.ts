import  { model, Schema } from "mongoose";
import { ISkill } from "./skills.interface";

const skillsSchema = new Schema<ISkill>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

export const Skill = model("Skill", skillsSchema);