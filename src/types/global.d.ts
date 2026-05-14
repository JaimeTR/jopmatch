// This file provides the type for next-intl messages
type Messages = typeof import('../../messages/en.json');

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}

export {};
