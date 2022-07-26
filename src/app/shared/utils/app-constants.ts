import { UrlSegment } from '@angular/router';
export const APP_TOKEN = 'results_app_access_token';
export const APP_USER_TOKEN = 'results_app_user';
export const APP_REFRESH_TOKEN = 'results_app_refresh_token';

export interface IPageItems {
  main: string;
  add: string;
  edit: string;
  view: string;
  viewDetails: string;
}

export const Pages: { [key: string]: IPageItems | any } | any = {
  SignUp: 'signup',
  Login: 'login',

  MarketPlace: {
    main: 'market-place',
    add: 'post-ad',
    edit: 'edit-ad/:adId',
    view: 'view-ad/:adId',
    myList: 'my-ads',
    viewDetails: 'view-ad-details/:adId',
  },
};
export const urlMatcherForEditAndView = (
  url: UrlSegment[],
  matcher: string,
  view = true
) => {
  const path: string = url[0]?.path;
  const startsWithViewOrEdit = view
    ? path.startsWith('view-' + matcher)
    : path.startsWith('edit-' + matcher)
    ? true
    : false;

  return startsWithViewOrEdit ? { consumed: url } : null;
};
export const setToken = () => {
  return localStorage.getItem(APP_TOKEN);
};

export const getUserIdFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(APP_USER_TOKEN)!)?.id;
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')!);
};
export const DEFAULT_PAGE_SIZE = 200;

export const capitalizeFirstLetter = (text: string) => {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  } else {
    return text;
  }
};
export const ERROR_MESSAGES_MAPPING = {
  errors: {
    useValue: {
      required: 'This field is required',
      minlength: ({ requiredLength, actualLength }: any) =>
        `Please enter ${requiredLength} or more characters. Current count: ${actualLength}`,
      maxlength: ({ requiredLength, actualLength }: any) =>
        `Please enter  ${requiredLength} or less characters. Current count: ${actualLength}`,
      email: () => `Please enter a valid email`,
      notEquivalent: 'Password does not match',
    },
  },
};
