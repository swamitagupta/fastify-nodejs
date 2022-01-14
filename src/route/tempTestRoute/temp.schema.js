// Request and response body validation
const postRequestBody = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
      minLength: 5, // otherwise null value also accepted for title
    },
  },
};

const getResponseBody = {
  200: {
    type: 'object',
    required: ['temps'],
    properties: {
      temps: {
        type: 'array',
        items: {
          type: 'object',
          required: ['title', 'id'],
          properties: {
            id: {
              type: 'string',
            },
            title: {
              type: 'string',
              minLength: 5, // otherwise null value also accepted for title
            },
          },
        },
      },
    },
  },
};

const postResponseBody = {
  201: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
};

module.exports = {
  postRequestBody,
  postResponseBody,
  getResponseBody,
};
