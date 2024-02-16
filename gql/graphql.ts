/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Log = {
  __typename?: 'Log';
  author?: Maybe<User>;
  dateAndTime?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  obj?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog?: Maybe<Blog>;
  createLog?: Maybe<Log>;
};


export type MutationCreateBlogArgs = {
  payload: BlogData;
};


export type MutationCreateLogArgs = {
  payload?: InputMaybe<Logdata>;
};

export type Query = {
  __typename?: 'Query';
  getAllBlogs?: Maybe<Array<Maybe<Blog>>>;
  getAllLogs?: Maybe<Array<Maybe<Log>>>;
  getCurrentUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  blogs?: Maybe<Array<Maybe<Blog>>>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imgUrl?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Array<Maybe<Log>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BlogData = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Logdata = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  dateAndTime?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  obj?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLogsQuery = { __typename?: 'Query', getAllLogs?: Array<{ __typename?: 'Log', note?: string | null, obj?: string | null, author?: { __typename?: 'User', imgUrl?: string | null } | null } | null> | null };


export const GetAllLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"obj"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllLogsQuery, GetAllLogsQueryVariables>;