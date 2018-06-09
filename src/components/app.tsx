import * as React from 'react';

import { GameView } from './game/gameView';

export class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <GameView />
      </div>
    )
  }
};
