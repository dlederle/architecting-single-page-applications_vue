// @flow
import v1 from "uuid";
import * as R from "ramda";

import type { Article } from "./Article";
import * as validators from "./Validators";

export type ArticleFields = {
  +title: string,
  +author: string,
};

export type ArticleService = {
  createArticle(articleFields: ArticleFields): ?Article,
  updateLikes(article: Article, likes: number): Article,
  isTitleValid(title: string): boolean,
  isAuthorValid(author: string): boolean,
};

export const createArticle = (articleFields: ArticleFields): ?Article => {
  // export const createArticle = articleFields => {
  const { title, author } = articleFields;
  return isTitleValid(title) && isAuthorValid(author)
    ? Object.freeze({
        id: v1(),
        likes: 0,
        title,
        author,
      })
    : null;
};

export const updateLikes = (article: Article, likes: number) =>
  // export const updateLikes = (article, likes) =>
  validators.isObject(article)
    ? Object.freeze({
        ...article,
        likes,
      })
    : article;

export const isTitleValid = (title: string) =>
  // export const isTitleValid = title =>
  R.allPass([validators.isString, validators.isLengthGreaterThen(0)])(title);

export const isAuthorValid = (author: string) =>
  // export const isAuthorValid = author =>
  R.allPass([validators.isString, validators.isLengthGreaterThen(0)])(author);

export const ArticleServiceFactory = () => ({
  createArticle,
  updateLikes,
  isTitleValid,
  isAuthorValid,
});

export const articleService = ArticleServiceFactory();
