/* Написать action таким образом, чтобы по типу ActionType 
правильно определялся payload
enum ActionType {
one = "one",
two = "two",
}

const reducer = <T extends ActionType>(
state: State,
action: Action<T>,
):State

action = {type, payload}

type Action = ?
Написать тип Action, чтобы тип payload определялся по action.type. */

interface ActionOne {
  type: ActionType.one;
  payload: Number;
}

interface ActionTwo {
  type: ActionType.two;
  payload: string;
}

action = { type, payload };

type Action = ActionOne | ActionTwo;

/*  */
