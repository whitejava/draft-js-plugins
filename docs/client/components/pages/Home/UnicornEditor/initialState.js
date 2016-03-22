// jscs:disable
/* eslint-disable quote-props */

// const text = `Once upon a time there was a new Editor. It was all about unicorns and supported features like #hashtags. It's creators like Jyoti, Nik or Julian could mentioned. Of course it also supports unicorn stickers like this one:
//
// Of course it also supports Emojis 🤓 🎉`;

import { fromJS } from 'immutable';

const initialState = {
  'entityMap': {
    '0': {
      'type': 'mention',
      'mutability': 'SEGMENTED',
      'data': {
        'mention': fromJS({
          'name': 'Jyoti Puri',
          'link': 'https://twitter.com/jyopur',
          'avatar': 'https://pbs.twimg.com/profile_images/705714058939359233/IaJoIa78_400x400.jpg'
        })
      }
    },
    '1': {
      'type': 'mention',
      'mutability': 'SEGMENTED',
      'data': {
        'mention': fromJS({
          'name': 'Nik Graf',
          'link': 'https://twitter.com/nikgraf',
          'avatar': 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg'
        })
      }
    },
    '2': {
      'type': 'sticker',
      'mutability': 'IMMUTABLE',
      'data': {
        'id': 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b'
      }
    }
  },
  'blocks': [{
    'key': '5ncb4',
    'text': 'Once upon a time there was a new Editor. It was all about unicorns and supported features like #hashtags. It\'s creators like Jyoti Puri or Nik Graf could mentioned. Of course it also supports unicorn stickers like this one:',
    'type': 'unstyled',
    'depth': 0,
    'inlineStyleRanges': [],
    'entityRanges': [{
      'offset': 125,
      'length': 10,
      'key': 0
    }, {
      'offset': 139,
      'length': 8,
      'key': 1
    }]
  }, {
  //   'key': '8sra4',
  //   'text': '',
  //   'type': 'sticker',
  //   'depth': 0,
  //   'inlineStyleRanges': [],
  //   'entityRanges': [{
  //     'offset': 0,
  //     'length': 0,
  //     'key': 2
  //   }]
  // }, {
    'key': 'mlq',
    'text': 'Of course it also supports Emojis 🤓 🎉',
    'type': 'unstyled',
    'depth': 0,
    'inlineStyleRanges': [],
    'entityRanges': []
  }]
};

export default initialState;
