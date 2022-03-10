import Wrapper from "../helpers/Wrapper";

interface ModalTypes {
  heading: string;
  content: string;
  fnc: React.MouseEventHandler<HTMLButtonElement>;
  state: boolean;
}

const ErrorModal = ({ heading, content, fnc, state }: ModalTypes) => {
  return (
    <div className={state ? "block" : "hidden"}>
      <Wrapper>
        <div className="text-white bg-[#4D0A56] rounded-t-lg p-3">
          <h1>{heading}</h1>
        </div>
        <div className="p-3 flex flex-col">
          <h3>{content}</h3>
          <button
            className="bg-[#4D0A56] text-white py-1 px-3 mt-2 self-end"
            onClick={fnc}
          >
            Okay
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default ErrorModal;
