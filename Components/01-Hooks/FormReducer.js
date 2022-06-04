export const inistialState = {
  ProjectType: false,
  DevOrDeisgnAndDev: false,
  Budget: false,
  Timeline: false,
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "ProjectType":
      return {
        ProjectType: action.payload,
        DevOrDeisgnAndDev: false,
        Budget: false,
        Timeline: false,
      };
    case "DevOrDeisgnAndDev":
      return {
        ...state,
        DevOrDeisgnAndDev: action.payload,
      };

    case "Budget":
      return {
        ...state,
        Budget: action.payload,
      };
    default:
      return state;
  }
};
