import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/home_page';
import AboutPage from './components/about/about_page';
import SearchBar from './components/search/search_bar';
import Posts from './components/posts/posts';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="search_bar" component={SearchBar} />
    <Route path="posts" component={Posts} />
  </Route>
);
