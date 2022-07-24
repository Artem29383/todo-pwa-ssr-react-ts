import { createBrowserHistory, createMemoryHistory, History } from 'history';

let history: History;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.info('RUNTIME_ENV', RUNTIME_ENV)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (RUNTIME_ENV === 'server') {
  history = createMemoryHistory();
  console.info('HISTORY_SERV', history)
} else {
  history = createBrowserHistory();
  console.info('HISTORY_WEB', history)
}

export default history;
