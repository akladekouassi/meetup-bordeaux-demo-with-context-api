import React from 'react';
import { ContextConsumer } from '../ContextLikeRedux/reducer';

function TestPageApp({ context }: any) {
  const { state } = context;
  return (
    <>
      <div>{state.initialData}</div>
    </>
  );
}

export default ContextConsumer(TestPageApp);
