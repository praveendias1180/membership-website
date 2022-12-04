// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Testimonial } = initSchema(schema);

export {
  Post,
  Testimonial
};