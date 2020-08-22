import Component from '@glimmer/component';
import SPINNERS from '../ion-spinner-config';

export default class IonSpinnerComponent extends Component {
  get name() {
    return this.args.name ?? 'lines';
  }

  get spinner() {
    return SPINNERS[this.name];
  }

  get duration() {
    return (typeof this.args.duration === 'number' && this.args.duration > 10 ? this.args.duration : this.spinner.dur);
  }

  get linesData() {
    return Array.apply(null, {length: this.spinner.lines ?? 0})
      .map((_, i) => this.spinner.fn(this.duration, i, this.spinner.lines));
  }

  get circlesData() {
    return Array.apply(null, {length: this.spinner.circles ?? 0})
      .map((_, i) => this.spinner.fn(this.duration, i, this.spinner.circles));
  }
}
