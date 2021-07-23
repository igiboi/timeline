import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } 
from "react-router-dom";
import { TimelineItemModel } from '../models/TimelineItemModel';
import {
  VerticalBasic
} from './app-samples';
import './App.css';

import {
  ComponentLinks,
  Wrapper
} from './App.styles';
import data from './data';

const NewDemo: React.FunctionComponent = () => {
  const [items, setItems] = useState<TimelineItemModel[]>([]);

  useEffect(() => {
    const newItems = data.map(
      ({ title, cardTitle, cardSubtitle, cardDetailedText, id }) => ({
        title,
        cardTitle,
        cardSubtitle,
        cardDetailedText,
        id,
      }),
    );
    setItems(newItems);
  }, []);

  return (
    <Wrapper className='box'>
      <h3 className='header3'>Activity Organization Timeline</h3>
      <BrowserRouter>
      <section>
        <Switch>
          <Route path="/vertical-basic">
          {/* Vertical with no Media */}
          {items.length > 0 && (
              <VerticalBasic type={"big-screen"} items={items} />
            )}
          </Route>
          <Route path="/">
            {items.length > 0 && (
                <VerticalBasic type={"big-screen"} items={items} />
              )}
          </Route>
        </Switch>
      </section>
      </BrowserRouter>
    </Wrapper>
  );
};

export default NewDemo;
