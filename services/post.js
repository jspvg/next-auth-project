export const getAllPosts = (accessToken) => {
  return new Promise((resolve, reject) => {
    fetch('/api/post', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      mode: 'cors',
    })
      .then((res) => {
        res
          .json()
          .then((json) => resolve(json))
          .catch((e) => reject(e));
      })
      .catch((e) => reject(e));
  });
};
