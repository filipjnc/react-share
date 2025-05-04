import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function facebookLink(url: string, { hashtag }: { hashtag?: string }) {
  assert(url, 'facebook.url');

  return 'https://www.facebook.com/dialog/share' + objectToGetParams({ href: url, hashtag, display: "popup" });
}

const FacebookShareButton = createShareButton<{ hashtag?: string }>(
  'facebook',
  facebookLink,
  props => ({ hashtag: props.hashtag }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default FacebookShareButton;
