import React, { FunctionComponent } from 'react';
import Chrono from '../components';
import { TimelineItemModel } from '../models/TimelineItemModel';
import {
  ComponentContainer,
  ComponentContainerTree,
  Description,
  DescriptionContent,
  DescriptionHeader,
  Horizontal,
  Vertical,
} from './App.styles';
import data from './data';
import dataMixed from './data-mixed';

export const VerticalBasic: FunctionComponent<{
  type: string;
  items: TimelineItemModel[];
}> = ({ type, items }) => (
  <Vertical id="vertical">
    <Description>
      <DescriptionContent className='year'>
        2021
      </DescriptionContent>
    </Description>
    <ComponentContainerTree type={type}>
      <Chrono
        items={items}
        mode="VERTICAL"
        slideShow
        slideItemDuration={2500}
        scrollable={{scrollbar:   false}}
        theme={{cardBgColor:  "#fff",  cardForeColor:  "blue", titleColor: "red"}}
        useReadMore={false}
        onItemSelected={(selected) => console.log(selected.cardTitle)}
      />
    </ComponentContainerTree>
  </Vertical>
  );