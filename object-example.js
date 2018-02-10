database.users['existing_user'] = {
  username: 'existing_user',
  articleIds: [],
  commentIds: []
};

database.articles[1] = {
  id: 1,
  title: 'Title',
  url: 'http://url.com',
  username: 'existing_user',
  commentIds: [],
  upvotedBy: [],
  downvotedBy: []
};

// '/comments/:id PUT'
database.comments[1] = {
  id: 1,
  body: 'Body',
  username: 'existing_user',
  articleId: 1
};


const newComment = {
  body: 'Comment Body',
  username: 'existing_user',
  articleId: 1
};
// from the source code in public/js/bundle.js
Scoop.createComment = function (body, articleId, username) {
  var url = baseUrl + '/comments';
  var fetchOptions = {
    method: 'POST',
    body: JSON.stringify({ comment: { body: body, articleId: articleId, username: username } })
  };
  return fetch(url, fetchOptions).then(function (response) {
    if (!response.ok) {
      return new Promise(function (resolve) {
        return resolve(null);
      });
    }
    return response.json().then(function (jsonResponse) {
      return jsonResponse.comment;
    });
  });
};
