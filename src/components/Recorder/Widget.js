import React, { useState } from 'react';

import './styles.scss';

const Widget = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="widget">
      <div className={`dot-container ${!loading && 'd-none'}`}>
        <div className="dot-spin--blue" />
      </div>
      <iframe
        className={`${loading && 'd-none'}`}
        title="speakpipe-widget"
        src="https://www.speakpipe.com/widget/inline/sr5s25po2rhpq4si94r48pctkny0uc6x"
        allow="microphone"
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setLoading(false)}
      />
      <script async src="https://www.speakpipe.com/widget/loader.js" charSet="utf-8" />
    </div>
  );
};

export default Widget;
