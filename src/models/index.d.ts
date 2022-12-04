import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly description?: string | null;
  readonly readTime?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly description?: string | null;
  readonly readTime?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimonial = LazyLoading extends LazyLoadingDisabled ? EagerTestimonial : LazyTestimonial

export declare const Testimonial: (new (init: ModelInit<Testimonial>) => Testimonial) & {
  copyOf(source: Testimonial, mutator: (draft: MutableModel<Testimonial>) => MutableModel<Testimonial> | void): Testimonial;
}