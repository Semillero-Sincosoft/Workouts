import { Opcion } from "./Opcion";

export const ContentOpcion = () => {
  return (
    <section className="content-2">
      <h1 className="title">FAQ</h1>
      <Opcion
        title={"How many team members can I invite?"}
        text={
          "you can invite up to 2 additional users on the free plan.there is no limit on team members for the premium plan."
        }
      />
      <Opcion
        title={"What is the maximum file upload size?"}
        text={
          "no more than 2GB.all files in your account must fit your allotted  storage space "
        }
      />
      <Opcion
        title={"How do I reset my password?"}
        text={`Click "forgot password?" from the login page or "change password"from your profile page. a reset link will be emailed to you.`}
      />
      <Opcion
        title={"Can I cancel my subscription?"}
        text={
          "Chat and email support is avalable 24/7. Phone lines are open during normal business hours."
        }
      />

      <Opcion
        title={"Do you provide additional support?"}
        text={
          "Chat and email support is avalable 24/7. Phone lines are open during normal business hours."
        }
      />
    </section>
  );
};
