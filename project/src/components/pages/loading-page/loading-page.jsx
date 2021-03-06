import React from 'react';
import { useSelector } from 'react-redux';
import { getServerAvailableStatus } from './../../../store/app-data/selectors';
import ErrorMessage from './../../error-message/error-message';

function LoadingPage() {
  const errorStatus = useSelector(getServerAvailableStatus);
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <h1 className="cities__status">Loading...</h1>
                {!errorStatus && <ErrorMessage />}
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoadingPage;
