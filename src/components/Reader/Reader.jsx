import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

// #############################################

const LS_KEY = 'reader_item_index';

// #############################################

export class Reader extends Component {
  state = {
    index: 0,
  };

  // ###### LIfecycle

  componentDidMount() {
    const savedIndex = localStorage.getItem(LS_KEY);

    if (savedIndex) {
      this.setState({ index: Number(savedIndex) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  // ###### Methods

  setValue = targetName => {
    if (targetName === 'forward') {
      return 1;
    }

    if (targetName === 'back') {
      return -1;
    }
  };

  handleClick = event => {
    const targetName = event.target.name;
    const value = this.setValue(targetName);

    const {
      state: { index },
      props: { items },
    } = this;

    if (index + value < 0) {
      this.setState({ index: items.length - 1 });
      return;
    } else if (index + value === items.length) {
      this.setState({ index: 0 });
      return;
    } else {
      this.setState(prevState => ({ index: prevState.index + value }));
    }
  };

  // ###### Rendering

  render() {
    const { handleClick, state, props } = this;
    const { index } = state;
    const { items } = props;
    const { title, text } = items[index];

    const currentItem = index + 1;
    const totalItems = items.length;

    return (
      <div>
        <Controls onClick={handleClick} />
        <Progress currentItem={currentItem} totalItems={totalItems} />
        <Publication title={title} text={text} />
      </div>
    );
  }
}
