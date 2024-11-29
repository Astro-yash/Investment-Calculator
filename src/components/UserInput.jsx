import InputFields from "./InputFields";

export default function UserInput({ onChange, userInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <InputFields
            title="Initial Investment"
            inputValue={
              userInput.initialInvestment === 0
                ? ""
                : userInput.initialInvestment
            }
            onEnter={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
          <InputFields
            title="Annual Investment"
            inputValue={
              userInput.annualInvestment === 0
                ? " "
                : userInput.annualInvestment
            }
            onEnter={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
        <div className="input-group">
          <InputFields
            title="Expected Return"
            inputValue={
              userInput.expectedReturn === 0 ? "" : userInput.expectedReturn
            }
            onEnter={(event) => onChange("expectedReturn", event.target.value)}
          />
          <InputFields
            title="Duration"
            inputValue={userInput.duration === 0 ? "" : userInput.duration}
            onEnter={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </section>
    </>
  );
}
