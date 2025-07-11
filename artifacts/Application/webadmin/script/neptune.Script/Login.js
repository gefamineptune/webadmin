function submitLogn() {
    if (InputUsername.getValue() === "") {
        InputUsername.setValueState("Error");
        sap.m.MessageToast.show("Username is required");
        return;
    }
    if (InputPassword.getValue() === "") {
        InputPassword.setValueState("Error");
        sap.m.MessageToast.show("Password is required");
        return;
    }

    clearLoginValue();
    sap.m.MessageToast.show("Success")
    App.to(PageDashboard)
}

function clearLoginValue() {
    InputUsername.setValue("");
    InputPassword.setValue("");
}