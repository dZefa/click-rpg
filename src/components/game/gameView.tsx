import * as React from 'react';

import './gameView.scss';

export class GameView extends React.Component<{}> {
  render() {
    return (
      <div id="game-view">
        <div id="game"></div>
      </div>
    )
  }
};
