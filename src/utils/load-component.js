import { lazy } from 'react';

function LazyComponent(factory) {

  const StubComponent = () => null;

  function isSessionStorageSupported() {
    try {
      window.sessionStorage.setItem('isSessionStorageSupported', true);
      window.sessionStorage.removeItem('isSessionStorageSupported');
      return true;
    } catch (e) {
      return false;
    }
  }

  function getReloadAttempt() {
    if (isSessionStorageSupported()) {
      return Number(window.sessionStorage.getItem('reloadAttempt')) || 0;
    }
  }

  function increaseReloadAttempt() {
    if (isSessionStorageSupported()) {
      const attempt = Number(window.sessionStorage.getItem('reloadAttempt')) || 0;
      window.sessionStorage.setItem('reloadAttempt', attempt + 1);
    }
  }

  const factoryWithChunkErrorHandler = async (retryAttempt = 3) => {
    return new Promise((resolve, reject) => {
      factory()
        .then(resolve)
        .catch(error => {
          if (retryAttempt <= 0) {
            if (getReloadAttempt() < 3) {
              increaseReloadAttempt();
              window.location.reload();
              resolve({ default: StubComponent });
            } else {
              reject(error);
            }
          } else {
            window.setTimeout(() => {
              factoryWithChunkErrorHandler(retryAttempt - 1)
                .then(resolve)
                .catch(reject);
            }, 1000);
          }
        });
    });
  };

  return lazy(factoryWithChunkErrorHandler);
}

async function loadComponent(scope, module, component) {
  try {
    await __webpack_init_sharing__('default');

    const container = window[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();

    if (component) {
      return { default: Module[component] };
    }

    return Module;
  } catch (error) {
    console.error(error, { scope, module, component });
    throw error;
  }
}

export { LazyComponent, loadComponent };
