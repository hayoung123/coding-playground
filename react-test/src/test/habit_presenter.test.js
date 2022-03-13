import HabitPresenter from '../habit_presenter';

describe('HabitPresenter', () => {
  let presenter;
  const mockUpdateFn = jest.fn(() => {});
  const habits = [
    { id: 1, name: 'Reading', count: 1 },
    { id: 2, name: 'Running', count: 0 },
  ];

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    jest.clearAllMocks();
  });

  it('increment test and call update callback', () => {
    presenter.increment(habits[0], mockUpdateFn);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('decrement test and call update callback', () => {
    presenter.decrement(habits[0], mockUpdateFn);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('0아래로 decrement가 되는지', () => {
    presenter.decrement(habits[0], mockUpdateFn);
    presenter.decrement(habits[0], mockUpdateFn);

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it('delete test', () => {
    presenter.delete(habits[0], mockUpdateFn);

    expect(presenter.getHabits()).toHaveLength(1);
    expect(presenter.getHabits()[0].name).toBe('Running');
    checkUpdateIsCalled();
  });

  it('add test', () => {
    presenter.add('Coding', mockUpdateFn);

    expect(presenter.getHabits()[2].name).toBe('Coding');
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('habits 최대 개수 초과 시 에러 발생', () => {
    presenter.add('Coding', mockUpdateFn);

    expect(() => {
      presenter.add('Coding', mockUpdateFn);
    }).toThrowError(`습관의 개수는 3이상이 될 수 없습니다.`);
  });

  describe('reset', () => {
    it('reset은 모든 Habits의 count를 0으로 만든다.', () => {
      presenter.reset(mockUpdateFn);

      expect(presenter.getHabits()[0].count).toBe(0);
      checkUpdateIsCalled();
    });

    it('count가 0인 habit은 새로운 객체를 만들어서 초기화 하지 않는다.', () => {
      const habits = presenter.getHabits();
      presenter.reset(mockUpdateFn);

      const updatedHabits = presenter.getHabits();

      expect(updatedHabits[1]).toBe(habits[1]);
    });
  });

  function checkUpdateIsCalled() {
    expect(mockUpdateFn).toHaveBeenCalledTimes(1);
    expect(mockUpdateFn).toHaveBeenCalledWith(presenter.getHabits());
  }
});
