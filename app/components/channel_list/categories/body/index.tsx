// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import withObservables from '@nozbe/with-observables';

import CategoryBody from './category_body';

import type CategoryModel from '@typings/database/models/servers/category';

const withCategory = withObservables(['category'], ({category}: {category: CategoryModel}) => ({
    category,
    categoryChannels: category.categoryChannels.observeWithColumns(['sort_order']),
    channels: category.channels.observeWithColumns(['display_name']),
}));

export default withCategory(CategoryBody);
