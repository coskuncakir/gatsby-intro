import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        suscipit deleniti labore pariatur vero! Doloremque, placeat fugiat alias
        laudantium exercitationem aspernatur mollitia, similique magnam,
        voluptatem odio est possimus libero in!
      </p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
}

export default About;
