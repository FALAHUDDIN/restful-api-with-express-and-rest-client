import {
  addedNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/testController";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)

    //post endpoint
    .post(addedNewContact);

  app
    .route("/contact/:contactID")

    //get a specific contact
    .get(getContactWithID)

    //updating a specific contact
    .put(updateContact)

    //deleting a specific contact
    .delete(deleteContact);
};

export default routes;
