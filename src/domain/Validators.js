// @flow
// export const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');
export const isObject = (toValidate) => !!(toValidate && typeof toValidate === 'object');

// export const isString = (toValidate: any) => typeof toValidate === 'string';
export const isString = (toValidate) => typeof toValidate === 'string';

// export const isLengthGreaterThen = (length: number) => (toValidate: string) => toValidate.length > length;
export const isLengthGreaterThen = (length) => (toValidate) => toValidate.length > length;
