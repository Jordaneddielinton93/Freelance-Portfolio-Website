export const inistialState = {
  ProjectType: false,
  DevOrDeisgnAndDev: false,
  Budget: false,
  Timeline: false,
  Fullname: "",
  Email: "",
  Anythingelse: "none",
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "ProjectType":
      return {
        ProjectType: action.payload,
        DevOrDeisgnAndDev: false,
        Budget: false,
        Timeline: false,
        Fullname: "",
        Email: "",
        Anythingelse: "none",
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
    case "Fullname":
      return {
        ...state,
        Fullname: action.payload,
      };
    case "Email":
      return {
        ...state,
        Email: action.payload,
      };
    case "Timeline":
      return {
        ...state,
        Timeline: action.payload,
      };
    case "Anythingelse":
      return {
        ...state,
        Email: action.payload,
      };
    default:
      return state;
  }
};
