const Button = ({ name }: { name: string }) => {
  return (
    <button className="bg-[#4D0A56] text-white py-1 px-3 mt-2" type="submit">
      {name}
    </button>
  );
};

export default Button;
