module.exports = {
  errorMessage: "There seems to be a problem! please try again later",
  regWelcome: function (firstName) {
    return `Welcome Aboard, ${firstName}!!`;
  },
  loginWelcome: function (firstName) {
    return `Welcome ${firstName}!`;
  },
  profileUpdated: "User data successfully updated",
  profileDeleted: "User data successfully deleted",
  alreadyInUse: "Email already in use",
  invalid: "Oops! Invalid Credentials",
  missingFields: "You are missing some required fields!",
  noBodyData: "Please provide data in the request body!",
  tokenInvalid: "Token validation failed!",
  supplyToken: "Please supply token!",
  invalidEmail: "Not a valid email address format",
  noAccess: "You are not authorized to access or modify this information",
  newEntry: "New entry successfully created!",
  updatedEntry: "Entry successfully updated!",
  entryRemoved: function (value) {
    return `${value} has been successfully removed from your list`;
  },
  limitReached: "Maximum class size reached",
  mailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
