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
    // case "FormValidation":
    //   if ((state.ProjectType == "Website") && (state.DevOrDeisgnAndDev.length != 0) && (state.Budget.length != 0) && (state.Timeline.length != 0) && (state.Fullname.length != 0) && (state.Email.length != 0)) {
    //     alert("Website filled in")

    //   }

    //   if ((state.ProjectType == "Tutoring") && (state.Budget.length != 0) && (state.Timeline.length != 0) && (state.Fullname.length != 0) && (state.Email.length != 0)) {

    //     alert("Tutoring filled in")
    //   }
    //   if ((state.ProjectType == "Sponsor") && (state.Budget.length != 0) && (state.Fullname.length != 0) && (state.Email.length != 0)) {
    //     alert("sponsor filled in")

    //   }
    //   if ((state.ProjectType == "Article") && (state.Fullname.length != 0) && (state.Email.length != 0)) {
    //     return alert("Article filled in")
    //   }
    //   // 



    //   return {
    //     ...state
    //   };
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
      console.log(state.Budget)
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
