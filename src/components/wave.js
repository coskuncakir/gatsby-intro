import React, { useState } from 'react';
import { css } from '@emotion/core';

const Waves = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background-color: rebeccapurple;
        color: white;
        font-size: 1.25rem;
        border: none;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Waves;
