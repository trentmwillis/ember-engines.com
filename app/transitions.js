import Ember from 'ember';

const DURATION = Ember.testing ? 0 : 300;

export default function transitionMap() {
  this.setDefault({ duration: DURATION });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('application'),
    this.use('smart-fade'),
    this.reverse('smart-fade')
  );
}
