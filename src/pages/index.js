import React from 'react';
import { Link } from 'gatsby';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
        temporibus iusto distinctio repudiandae veniam ut deserunt eos sint
        molestias, qui, fuga ex perferendis similique magnam est, nulla
        architecto beatae laboriosam?
      </p>
      <Link to="/about">learn about me &rarr;</Link>
    </>
  );
}

export default Home;
