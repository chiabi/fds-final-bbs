import React from 'react';

import PostListContainer from '../containers/PostListContainer';
import {PostListProvider} from '../contexts/PostListContext';

export default function PostListPage() {
  return (
    <PostListProvider>
      <PostListContainer />
    </PostListProvider>
  );
}