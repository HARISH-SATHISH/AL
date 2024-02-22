/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation CreateLog($createLogPayload2: logdata) {\n    createLog(payload: $createLogPayload2) {\n      author {\n        id\n      }\n      media\n      note\n      obj\n    }\n  }\n  ": types.CreateLogDocument,
    "\nquery GetAllBlogs {\n    getAllBlogs {\n      author {\n        id\n      }\n      content\n      title\n      id\n    }\n  }": types.GetAllBlogsDocument,
    "\n\nquery GetAllLogs {\n    getAllLogs {\n      id\n      note\n      obj\n      author {\n        imgUrl\n      }\n    }\n  }\n": types.GetAllLogsDocument,
    "#graphql\n\n query GetCurrentUser($token:userdata!){\n    getCurrentUser(token:$token){\n      id\n      email\n      name\n    }\n }\n": types.GetCurrentUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateLog($createLogPayload2: logdata) {\n    createLog(payload: $createLogPayload2) {\n      author {\n        id\n      }\n      media\n      note\n      obj\n    }\n  }\n  "): (typeof documents)["\nmutation CreateLog($createLogPayload2: logdata) {\n    createLog(payload: $createLogPayload2) {\n      author {\n        id\n      }\n      media\n      note\n      obj\n    }\n  }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllBlogs {\n    getAllBlogs {\n      author {\n        id\n      }\n      content\n      title\n      id\n    }\n  }"): (typeof documents)["\nquery GetAllBlogs {\n    getAllBlogs {\n      author {\n        id\n      }\n      content\n      title\n      id\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\nquery GetAllLogs {\n    getAllLogs {\n      id\n      note\n      obj\n      author {\n        imgUrl\n      }\n    }\n  }\n"): (typeof documents)["\n\nquery GetAllLogs {\n    getAllLogs {\n      id\n      note\n      obj\n      author {\n        imgUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n\n query GetCurrentUser($token:userdata!){\n    getCurrentUser(token:$token){\n      id\n      email\n      name\n    }\n }\n"): (typeof documents)["#graphql\n\n query GetCurrentUser($token:userdata!){\n    getCurrentUser(token:$token){\n      id\n      email\n      name\n    }\n }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;