import { types } from 'mobs-state-tree';

const Todo = types.model({
  name: '',
  done: false,
});

const User = types.model({
  name: '',
});
