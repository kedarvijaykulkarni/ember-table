import Model, { attr } from '@ember-data/model';

export default class TariffModel extends Model {
  @attr validFrom;
  @attr expires;
  @attr type;
  @attr schedulesCount;
  @attr supplierCode;
  @attr('boolean', { defaultValue: false }) select;

  get canDelete() {
    return this.schedulesCount <= 0;
  }
}
