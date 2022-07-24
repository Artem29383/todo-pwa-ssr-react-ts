import React from "react";
import App from './App';
import {createRoot, hydrateRoot} from "react-dom/client";
import { loadableReady } from '@loadable/component'
import {serviceWorkerPath} from "../config/routes";
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import { Provider } from 'react-redux';


import { rootSaga } from './models/sagas';
import { store, sagaMiddleware } from './store/client';

sagaMiddleware.run(rootSaga);

loadableReady(() => {
    const container = document.getElementById('root') as HTMLElement
    const AppContainer = (
        <Provider store={store}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
        </Provider>
    )
    console.info('IS_SPA', IS_SPA)
    if (IS_SPA) createRoot(container).render(AppContainer)
    else hydrateRoot(container, AppContainer)
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register(IS_SPA ? 'sw.js' : serviceWorkerPath)
            .then(
                () => {
                    console.info('Offline service worker successfully installed');
                },
                error => {
                    console.error('ServiceWorker registration failed: ', error);
                }
            );
    });
}