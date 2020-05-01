import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

const Home = () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>
        Hello{' '}
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
        <Link to="/about">learn about me &rarr;</Link>
      </p>
      <hr />
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
