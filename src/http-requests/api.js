const axios = require("axios");

import urls from '@/config/urls.json'
import formatUnicorn from 'format-unicorn/safe'

/**
 * set of methods to make http requests
 */
const self = {
  getLanguagePack(language) {
    return self.get(formatUnicorn(urls["language-pack"], {language: language}));
  },

  /**
   * generic method to perform a post request to a given url with a given body
   * @param url the url to post to
   * @param data the body of the request
   * @returns {Promise<*>}
   */
  post(url, data) {
    console.debug(`posting to ${url}`, data);
    return axios.post(url, data).then(response => {
      return response;
    }, error => {
      return error.response;
    });
  },

  /**
   * generic method for getting the status of a task that was created in the back end for an async request
   * @param url the callback url to get the status from
   * @returns {Promise<*>}
   */
  get(url) {
    console.debug(`getting ${url}`);
    return axios.get(url).then(response => {
      return response;
    }, error => {
      return error.response;
    });
  },
}

export default self