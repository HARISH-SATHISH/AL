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


export type QueryGetCurrentUserArgs = {
  token?: InputMaybe<Userdata>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Logdata = {
  dateAndTime: Scalars['String']['input'];
  device: Scalars['String']['input'];
  email: Scalars['String']['input'];
  media: Scalars['String']['input'];
  note: Scalars['String']['input'];
  obj: Scalars['String']['input'];
};

export type Userdata = {
  email?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLogMutationVariables = Exact<{
  createLogPayload2?: InputMaybe<Logdata>;
}>;


export type CreateLogMutation = { __typename?: 'Mutation', createLog?: { __typename?: 'Log', media?: string | null, note?: string | null, obj?: string | null, author?: { __typename?: 'User', id: number } | null } | null };

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', getAllBlogs?: Array<{ __typename?: 'Blog', content?: string | null, title?: string | null, id?: number | null, author?: { __typename?: 'User', id: number } | null } | null> | null };

export type GetAllLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLogsQuery = { __typename?: 'Query', getAllLogs?: Array<{ __typename?: 'Log', id?: number | null, note?: string | null, obj?: string | null, author?: { __typename?: 'User', imgUrl?: string | null } | null } | null> | null };

export type GetCurrentUserQueryVariables = Exact<{
  token: Userdata;
}>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', id: number, email: string, name?: string | null } | null };


export const CreateLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createLogPayload2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"logdata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createLogPayload2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"obj"}}]}}]}}]} as unknown as DocumentNode<CreateLogMutation, CreateLogMutationVariables>;
export const GetAllBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllBlogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllBlogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetAllLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllLogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"obj"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllLogsQuery, GetAllLogsQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"userdata"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;