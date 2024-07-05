interface Faq {
  title: string;
  qa: QuestionsAnswer[];
}

interface QuestionsAnswer {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    title: "Frequently Asked Questions",
    qa: [
      {
        question: "How secure is my insurance information?",
        answer:
          "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
      },
      {
        question: "How can I customize my insurance coverage?",
        answer:
          "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
      },
      {
        question: "Is there a waiting period for insurance claims?",
        answer:
          "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
      },
    ],
  },
  {
    title: "General Questions",
    qa: [
      {
        question: "How do I update my contact information?",
        answer:
          "You can update your contact information through your account settings or by contacting our customer service team.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit/debit cards, bank transfers, and digital wallets.",
      },
    ],
  },
];

export { faqs };
