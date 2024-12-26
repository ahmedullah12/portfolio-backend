import { model, Schema } from 'mongoose';
import { IExperience } from './experience.interface';

const experienceSchema = new Schema<IExperience>({
  company: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
});

export const Experience = model('Experience', experienceSchema);
