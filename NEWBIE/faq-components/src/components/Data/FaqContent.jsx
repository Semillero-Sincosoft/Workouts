import CardQuestion from "../CardQuestion";
export const FaqContent = () => {
  const FaqsData = [
    {
      id: 1,
      textSummary: "How many team members can I invite?",
      textDetails:
        "you can invite up to 2 additional users on the free plan.there is no limit on team members for the premium plan.",
    },
    {
      id: 2,
      textSummary: "What is the maximum file upload size?",
      textDetails:
        "no more than 2GB.all files in your account must fit your allotted storage space",
    },
    {
      id: 3,
      textSummary: "How do I reset my password?",
      textDetails:
        'Click "forgot password?" from the login page or "change password"from your profile page. a reset link will be emailed to you.',
    },
    {
      id: 4,
      textSummary: "Can I cancel my subscription?",
      textDetails:
        "Yes! Send us a messages and we´ll process your request no questions asked.",
    },
    {
      id: 5,
      textSummary: "Do you provide additional support?",
      textDetails:
        "Chat and email support is avalable 24/7. Phone lines are open during normal business hours.",
    },
  ];
  return (
    <div>
      {FaqsData.map((FaqData) => (
        <CardQuestion key={FaqData.id} {...FaqData} />
      ))}
    </div>
  );
};
