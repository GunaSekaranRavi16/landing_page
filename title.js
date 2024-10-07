import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Your Website Title</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      {/* Your website content */}
    </div>
  );
}