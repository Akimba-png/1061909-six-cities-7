export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITE: '/favorites',
  PROPERTY: '/offer/:id',
};

// export const CardCssValue = {
//   Place: {
//     ARTICLE_CLASS_NAME: 'cities__place-card place-card',
//     IMAGE_CLASS_NAME: 'cities__image-wrapper place-card__image-wrapper',
//     WIDTH: '260',
//     HEIGHT: '200',
//     INFO_CLASS_NAME: 'place-card__info',
//     BOOKMARK_STATUS: 'To bookmarks',
//   },
//   Favorite: {
//     ARTICLE_CLASS_NAME: 'favorites__card place-card',
//     IMAGE_CLASS_NAME: 'favorites__image-wrapper place-card__image-wrapper',
//     WIDTH: '150',
//     HEIGHT: '110',
//     INFO_CLASS_NAME: 'favorites__card-info place-card__info',
//     BOOKMARK_STATUS: 'In bookmarks',
//   },
// };

// export const CardMode = {
//   [AppRoute.MAIN]: 'Place',
//   [AppRoute.FAVORITE]: 'Favorite',
// };


export const CardCssValue = {
  Main: {
    TYPE: 'main-card',
    ARTICLE_CLASS_NAME: 'cities__place-card',
    IMAGE_WRAPPER_CLASS_NAME: 'cities__image-wrapper',
    IMAGE_WIDTH: '260',
    IMAGE_HEIGHT: '200',
  },
  Favorite: {
    TYPE: 'favorite-card',
    ARTICLE_CLASS_NAME: 'favorites__card',
    IMAGE_WRAPPER_CLASS_NAME: 'favorites__image-wrapper',
    IMAGE_WIDTH: '150',
    IMAGE_HEIGHT: '110',
    INFO_CLASS_NAME: 'favorites__card-info',
  },
};
