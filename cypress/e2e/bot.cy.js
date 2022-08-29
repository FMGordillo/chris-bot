const newTicketsWebsite = "https://support.gate.io/hc/en-us/requests/new";

const elements = {
  email: "#request_anonymous_requester_email",
  subject: "#request_subject",
  questionType: "#request_custom_fields_114099549754",
  description: "#request_description",
  submitBtn: "[name='commit']",
};

describe("empty spec", () => {
  it("should create new emails", () => {
    cy.visit(newTicketsWebsite);
    cy.get(elements.email).type("facundomgordillo@gmail.com");
    cy.get(elements.subject).type("I can't withdraw my funds");
    cy.get(elements.description).type(
      "I wanted to withdraw my funds but I can't"
    );
    cy.get(elements.submitBtn).click();
  });
});
