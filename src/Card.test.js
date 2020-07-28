import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card title={"List" }content={"Hello"} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
      .create(<Card title={"List" }content={"Hello"} />)
      .toJSON();
      expect(tree).toMatchSnapshot();  
    });
  });