import React from 'react';
import {shallow} from 'enzyme';

import LandingPageHeader from './landing-page-header';

describe('<LandingPageHeader />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPageHeader />);
    });
});