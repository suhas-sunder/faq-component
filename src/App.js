import "./App.css";

function App() {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div className="app">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <label className="label">
          <input type="checkbox" />
          <span className="arrow"></span>
          <span>{faq.question}</span>
          <span className="inner-text">{faq.answer}</span>
        </label>
      ))}
    </div>
  );
}

export default App;
