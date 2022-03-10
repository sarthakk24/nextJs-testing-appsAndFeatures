interface WrapperTypes {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperTypes) => {
  return (
    <div className="bg-white text-black p-5 mt-7 rounded-lg">{children}</div>
  );
};

export default Wrapper;
