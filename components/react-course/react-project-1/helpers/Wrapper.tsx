interface WrapperTypes {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperTypes) => {
  return <div className="bg-white text-black mt-7 rounded-lg">{children}</div>;
};

export default Wrapper;
