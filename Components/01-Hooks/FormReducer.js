export const inistialState = {
  ProjectType: "",
  DevOrDeisgnAndDev: "",
  Budget: "",
  Timeline: "",
  Fullname: "",
  Email: "",
  Anythingelse: "none",
};

export const FormReducer = (state, action) => {
  switch (action.type) {

    case "Reset":
      return {
        ProjectType: "",
        DevOrDeisgnAndDev: "",
        Budget: "",
        Timeline: "",
        Fullname: "",
        Email: "",
        Anythingelse: "none",
      };



    case "ProjectType":
      return {
        ProjectType: action.payload,
        DevOrDeisgnAndDev: "",
        Budget: "",
        Timeline: "",
        Fullname: "",
        Email: "",
        Anythingelse: "none",
        sendRequest: false
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
