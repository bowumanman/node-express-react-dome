
import React from 'react';
import Layout from '../../components/Layout';

export default {
  path: '/about',
  async action() {

    const About = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./AboutBox').default), 'about');
    })

    return {
      title: 'Boxlinker About',
      chunk: 'about',
      component: <Layout><About/></Layout>,
    }
  }
}
