import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ErrorMessage from './../error-message/error-message';
import favoriteButtonCssValueProp from './favorite-button-css-value.prop';
import { setFavoriteStatus } from '../../store/api-actions';
import { getAuthorizationStatus } from './../../store/user/selectors';
import { AuthorizationStatus, AppRoute, Index } from './../../const';


function FavoriteButton({ favoriteStatus: defaultStatus, offerId, cssValue = {} }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const [redirectStatus, setRedirectStatus] = useState(false);
  const [favoriteViewStatus, setFavoriteViewStatus] = useState(defaultStatus);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    setFavoriteViewStatus(defaultStatus);
  }, [defaultStatus]);

  const {
    BUTTON_CLASS_NAME = 'place-card__bookmark-button',
    BUTTON_CLASS_NAME_ACTIVE = 'place-card__bookmark-button--active',
    SVG_CLASS_NAME = 'place-card__bookmark-icon',
    SVG_WIDTH = '18',
    SVG_HEIGHT = '19',
  } = cssValue;

  const onChangeStatus = () => setFavoriteViewStatus((prevState) => !prevState);

  const handleFavoriteStatus = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      setRedirectStatus(true);
      return;
    }
    const currentStatus = favoriteViewStatus ? 0 : Index.FIRST;
    dispatch(setFavoriteStatus(offerId, currentStatus, onChangeStatus, setErrorStatus));
  };

  return (
    <React.Fragment>
      {errorStatus && <ErrorMessage />}
      <button
        onClick={handleFavoriteStatus}
        className={`${BUTTON_CLASS_NAME} ${favoriteViewStatus ? BUTTON_CLASS_NAME_ACTIVE : ''} button`}
        type="button"
        data-testid="favorite-button"
      >
        <svg className={SVG_CLASS_NAME} width={SVG_WIDTH} height={SVG_HEIGHT}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{favoriteViewStatus ? 'In bookmarks' : 'To bookmarks'}</span>
        {redirectStatus && <Redirect to={AppRoute.LOGIN} />}
      </button>
    </React.Fragment>
  );
}

FavoriteButton.propTypes = {
  favoriteStatus: PropTypes.bool.isRequired,
  offerId: PropTypes.number.isRequired,
  cssValue: favoriteButtonCssValueProp,
};

export default FavoriteButton;
