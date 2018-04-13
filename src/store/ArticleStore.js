// @flow
import { update } from "ramda";

// import type {Article} from "../domain/Article";
// import type {ArticleState} from "./ArticleState";
//
// export type ArticleStore = {
//   addArticle(article: Article): void;
//   removeArticle(article: Article): void;
//   updateArticle(article: Article): void;
//   subscribe(subscriber: Function): Function;
//   unsubscribe(subscriber: Function): void;
// }

// export const addArticle = (articleState: ArticleState, article: Article) =>
//   articleState.concat(article);
export const addArticle = (articleState, article) =>
  articleState.concat(article);

// export const removeArticle = (articleState: ArticleState, article: Article) =>
//   articleState.filter((a: Article) => a.id !== article.id);
export const removeArticle = (articleState, article) =>
  articleState.filter(a => a.id !== article.id);

// export const updateArticle = (articleState: ArticleState, article: Article) => {
//   const index = articleState.findIndex((a: Article) => a.id === article.id);
//   return update(index, article, articleState);
// };
export const updateArticle = (articleState, article) => {
  const index = articleState.findIndex(a => a.id === article.id);
  return update(index, article, articleState);
};

// export const subscribe = (subscribers: Function[], subscriber: Function) =>
//   subscribers.concat(subscriber);
export const subscribe = (subscribers, subscriber) => {
  return subscribers.concat(subscriber);
};

// export const unsubscribe = (subscribers: Function[], subscriber: Function) =>
//   subscribers.filter((s: Function) => s !== subscriber);
export const unsubscribe = (subscribers, subscriber) => {
  return subscribers.filter(s => s !== subscriber);
};

// export const notify = (articleState: ArticleState, subscribers: Function[]) =>
//   subscribers.forEach((s: Function) => s(articleState));
export const notify = (articleState, subscribers) => {
  subscribers.forEach(s => s(articleState));
};

export const ArticleStoreFactory = () => {
  // let articleState: ArticleState = Object.freeze([]);
  let articleState = Object.freeze([]);
  // let subscribers: Function[] = Object.freeze([]);
  let subscribers = Object.freeze([]);

  return {
    // addArticle: (article: Article) => {
    addArticle: article => {
      articleState = addArticle(articleState, article);
      notify(articleState, subscribers);
    },
    // removeArticle: (article: Article) => {
    removeArticle: article => {
      articleState = removeArticle(articleState, article);
      notify(articleState, subscribers);
    },
    // updateArticle: (article: Article) => {
    updateArticle: article => {
      articleState = updateArticle(articleState, article);
      notify(articleState, subscribers);
    },
    // subscribe: (subscriber: Function) => {
    subscribe: subscriber => {
      subscribers = subscribe(subscribers, subscriber);
      return subscriber;
    },
    // unsubscribe: (subscriber: Function) => {
    unsubscribe: subscriber => {
      subscribers = unsubscribe(subscribers, subscriber);
    },
  };
};

export const articleStore = ArticleStoreFactory();
