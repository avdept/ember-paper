import PowerSelectOptions from 'ember-power-select/components/power-select/options';

import template from 'ember-paper/components/paper-autocomplete/options/template';

import { tagName, layout } from '@ember-decorators/component';

@tagName('test')
@layout(template)
export default class PaperAutocompleteOptions extends PowerSelectOptions {}
